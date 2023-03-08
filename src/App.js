import React, {
  useRef, useState, lazy, Suspense
} from 'react';

// Libraries
import axios from 'axios';
// Components
import NftCard from './components/NftCard/NftCard';
import Header from './components/Header/Header';
import LabelAndInput from './components/LabelAndInput/LabelAndInput';
import AnimatedModal from './components/AnimatedModal/AnimatedModal';
// Other
import { notifyError, notifySuccess } from './helpers/toasts';
// Styles
import './App.css';
// Lazy Components
const DetailedNftCard = lazy(() => import('./components/DetailedNftCard/DetailedNftCard'));

function App() {
  // Hooks
  const addressRef = useRef(null);
  const chainRef = useRef(null);

  // States
  const [nftCollection, setNftCollection] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const getNFTsByContract = () => {
    axios.get('http://localhost:8080/all_nfts_contract', {
      params: {
        address: addressRef.current?.value,
        chain: chainRef.current?.value,
        limit: 100,
      }
    }).then(res => {
      setNftCollection(res.data.response.result);
      notifySuccess('Successfully loaded NFTs');
    }).catch(error => {
      notifyError('Could load NFTs');
      console.log('error', error);
      setNftCollection([]);
    });
  };

  return (
    <div className="AppContainer">
      <Header />
      <div className="ContentContainer">
        <div className="InputContainer">
          <LabelAndInput inputRef={addressRef} txt="Contract Address" placeHolder="Adress" />
          <LabelAndInput inputRef={chainRef} txt="Chain" placeHolder="Chain" selectorInput />

          <button onClick={getNFTsByContract} className="SubmitBtn">Search NFTs</button>
        </div>
        <div className="NftCardsContainer">
          {nftCollection.map(va => {
            const { metadata } = va;
            const parsedData = JSON.parse(metadata);
            return (
              <div
                key={va.token_id}
                onClick={() => {
                  setSelectedNft(va);
                  setOpenModal(true);
                }}
                role="button"
              >
                <NftCard key={parsedData.name} nftInfo={{ ...parsedData }} />
              </div>
            );
          })}
        </div>
      </div>

      <AnimatedModal isOpen={openModal}>
        <Suspense>
          <div className="DetailedNftCardCont">
            <DetailedNftCard
              selectedNft={selectedNft}
              setOpenModal={setOpenModal}
              chain={chainRef?.current?.value.toLowerCase()}
            />
          </div>
        </Suspense>
      </AnimatedModal>

    </div>
  );
}

export default App;
