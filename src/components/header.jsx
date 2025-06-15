import React from "react";
import './header.css';
import Bell from '../assets/bell.png';
import User from '../assets/user.png';
import { useState } from "react";
const Header = () => {

    const [currentDate] = useState(new Date()); //getting current date

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
   
  <div className="main-content-wrapper flex-grow-1 p-4">
    
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="fw-bold">Good morning Liz 👋</h2>
        <p className="text-muted">Maintain, configure, and supervise seamlessly.</p>
      </div>

      <div className="d-flex align-items-center border rounded px-3 py-2">
         <div className="me-3 border-end pe-3">
        <img src={Bell} alt="bell" className="me-2" style={{ width: '40px' }} />
        </div>

       
        <div className="me-3 border-end pe-3">
          <div className="text-muted small">📅</div>
          <div>{currentDate.toLocaleDateString()}</div>
        </div>

       
        <div className="d-flex align-items-center">
          <img src={ User } alt="avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
          <div>
            <div className="fw-semibold">Danial</div>
            <div className="text-muted small">HR manager</div>
          </div>
        </div>
      </div>

    </div>

    {/* Other main content can go here */}
  </div>
</div>

    );
};

export default Header;