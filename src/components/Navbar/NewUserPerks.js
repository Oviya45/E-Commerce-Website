import React from 'react';
import './NewUserPerks.css'; // Import your CSS file here

const NewUserPerks = () => {
  return (
    <div className="new-user-perks">
      <h2>Grab offers on your 1st purchase</h2>
      <div className="perks-container">
        <div className="perk">
          <h4>FLAT ₹300 OFF</h4>
          <p>ON ORDERS ABOVE ₹990</p>
          <button>USE CODE NEW300</button>
        </div>
        <div className="perk">
          <h4>FLAT ₹500 OFF</h4>
          <p>ON ORDERS ABOVE ₹2599</p>
          <button>USE CODE NEW500</button>
        </div>
        <div className="perk">
          <h4>FLAT ₹1000 OFF</h4>
          <p>ON ORDERS ABOVE ₹4999</p>
          <button>USE CODE NEW1000</button>
        </div>
      </div>
      <div className="delivery-fee">
        + ZERO DELIVERY FEE
      </div>
    </div>
  );
};

export default NewUserPerks;
