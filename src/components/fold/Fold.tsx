import React from "react";

interface FoldProps {
  isOpen: boolean;
  isDaytime: boolean;
}

const Fold: React.FC<FoldProps> = ({ isOpen, isDaytime }) => {
  return (
    <div
      className={`fold-container ${isOpen ? "open" : ""} ${
        isDaytime ? "daytime" : "nighttime"
      }`}
    >
      <div className="fold-content">
        <div className="detail-row">
          <div className="detail-item">
            <p>CURRENT TIMEZONE</p>
            <h2>Europe/London</h2>
          </div>
          <div className="detail-item">
            <p>DAY OF THE YEAR</p>
            <h2>295</h2>
          </div>
        </div>
        <div className="detail-row">
          <div className="detail-item">
            <p>DAY OF THE WEEK</p>
            <h2>5</h2>
          </div>
          <div className="detail-item">
            <p>WEEK NUMBER</p>
            <h2>42</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fold;
