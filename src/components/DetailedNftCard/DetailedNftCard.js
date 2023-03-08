import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import './DetailedNftCard.css';

function DetailedNftCard({ selectedNft, chain, setOpenModal }) {
  const {
    metadata, token_address: tokenAddress, minter_address: minterAddress, token_id: tokenID
  } = selectedNft;
  const parsedMetaData = JSON.parse(metadata);

  const { image, name, description } = parsedMetaData;

  return (
    <div className="DetailedContainer">
      <img alt="nft-image" src={`${image}`} className="NftPic" />
      <div className="TxtCont">
        <div className="ttlAndClose">
          <span className="ttl">{name}</span>
        </div>
        <span className="desc">{description}</span>
        <span className="desc">
          Token Address:
          {tokenAddress}
        </span>
        <span className="desc">
          Minter Address:
          {minterAddress}
        </span>
        <div className="BtnsHolder">
          <div className="BtnContainer">
            <a className="BuyBtn" target="_blank" href={`https://opensea.io/assets/${chain}/${tokenAddress}/${tokenID}`} rel="noreferrer">Purchase NFT</a>
          </div>
          <button onClick={() => setOpenModal(null)} className="CloseBtn">Close</button>
        </div>

      </div>
    </div>
  );
}

DetailedNftCard.propTypes = {
  selectedNft: PropTypes.shape({
    metadata: PropTypes.string,
    token_address: PropTypes.string,
    minter_address: PropTypes.string,
    token_id: PropTypes.string,
  }).isRequired,
  chain: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired
};

export default DetailedNftCard;
