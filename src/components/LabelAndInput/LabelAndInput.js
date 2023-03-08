import React from 'react';

// Libraries
import PropTypes from 'prop-types';

// Styles
import './LabelAndInput.css';

function LabelAndInput({
  placeHolder, txt, selectorInput, inputRef
}) {
  const selectorInputValues = ['ETHEREUM', 'Bsc', 'Pologyn', 'Avalanche'];
  return (
    <div className="container">
      <div className="hero-container">
        <div className="environment" />
        <span className="hero glitch layers" data-text={txt}>{txt}</span>
      </div>
      {selectorInput
        ? (
          <select ref={inputRef} className="txtInput">
            {selectorInputValues.map(va => <option key={va} value={va}>{va}</option>)}
          </select>
        )
        : <input ref={inputRef} className="txtInput" placeholder={placeHolder} />}
    </div>
  );
}

LabelAndInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  selectorInput: PropTypes.bool,
  inputRef: PropTypes.shape({}).isRequired
};

LabelAndInput.defaultProps = {
  selectorInput: false
};

export default LabelAndInput;
