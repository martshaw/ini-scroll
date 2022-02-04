import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Hit = ({ hit }) => (
  <div>
    <div className="hit-name">
      <div>{hit.productName} </div>
    </div>
    <div className="hit-description">
      <div>{hit.shortDescriptions} </div>
    </div>
    <div>${hit.salesPrice}</div>
  </div>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  hasMore: PropTypes.bool.isRequired,
  test: PropTypes.any,
};

export default Hit;
