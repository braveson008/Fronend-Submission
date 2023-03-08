import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import './NftCard.css';

function NftCard(nftInfo) {
  const { nftInfo: data } = nftInfo;
  const {
    name, image
  } = data;

  return (
    <div className="CardContainer">
      <img className="NftImg" alt="nft-image" src={`${image}`} />
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
}

NftCard.propTypes = {
  nftInfo: PropTypes.shape({
    description: PropTypes.string,
    external_url: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default NftCard;
