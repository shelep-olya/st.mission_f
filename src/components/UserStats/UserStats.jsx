import React from "react";
import arrowIcon from "../../assets/Arrow.svg";
import "./UserStats.css";

const UserStats = () => {
  return (
    <div className="user-info-container">
      <h2 className="statistic-title">Statistic</h2>

      <div className="achievement-circle">
        <span className="achievement-number">1</span>
      </div>

      <h3 className="user-greeting">Hello, User</h3>
      <p className="achievement-text">Continue gaining achievements!</p>

      <div className="divider"></div>

      <div className="achievements-section">
        <h4 className="section-title">Current Achievements</h4>
        <div className="achievements">
          <button className="achievement active">Newbie</button>
          <button className="achievement">First Submission</button>
          <button className="achievement">Getting Started</button>
          <button className="achievement">Experienced</button>
          <button className="achievement">Contributor</button>
          <button className="achievement">Bug Hunter</button>
        </div>
      </div>

      <div className="info-section">
        <p>
          <strong>Your Points</strong> <span className="points">0, 00</span>
        </p>
        <p>
          <strong>Role</strong> <span className="role">STUDENT</span>
        </p>
      </div>

      <div className="buttons-section">
        <button className="info-button">
          Log out
          <img src={arrowIcon} alt="Arrow" className="button-icon" />
        </button>
        <button className="info-button">
          Know more
          <img src={arrowIcon} alt="Arrow" className="button-icon" />
        </button>
        <button className="info-button">
          Help
          <img src={arrowIcon} alt="Arrow" className="button-icon" />
        </button>
        <button className="info-button">
          Change role
          <img src={arrowIcon} alt="Arrow" className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default UserStats;
