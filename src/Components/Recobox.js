import React, { useState } from 'react';
import styles from './Recobox.module.css'; // Import the CSS file for styling

const Recobox = () => {
    const [showBody, setShowBody] = useState(false);
  
    const handleClick = () => {
      setShowBody(!showBody);
    };
  
    return (
      <div className="recobox">
        <div className="recobox-header" onClick={handleClick}>
          <h2>Tour Recommendations HERE</h2>
        </div>
        {showBody && (
          <div className="recobox-body">
            <div className="recobox-body-container">
              <p>Body of text goes here</p>
            </div>
          </div>
        )}
      </div>
    );
};

export default Recobox;
