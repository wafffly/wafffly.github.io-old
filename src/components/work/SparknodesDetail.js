import React from 'react';
import sparknodesFeatureImg from '../../assets/sparknodes-feature-img.png';

class SparknodesDetail extends React.Component {
  render() {
    return (
      <div id="landing">
        <div className="page container">
          <div className="subtitle center mgn-bottom-2rem">
            a visual introduction to theory of computation,
            data structures, and algorithms.
            <img
              className="feature-img"
              src={sparknodesFeatureImg}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SparknodesDetail;