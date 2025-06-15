// src/components/Sidebar.jsx
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-5 ">
      <h5 className="fw-bold mb-3">Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-grid me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-clock me-2"></i> Attendace Data
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-file-earmark-text me-2"></i> Claims Data
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-receipt me-2"></i> Payslip
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-geo-alt me-2"></i> Leave claim
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-beaker me-2"></i> Loan
          </a>
        </li>
      </ul>


      <div style={{marginTop: '50px'}} >
      <h5 className="fw-bold mb-3">Manual</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-calendar-check me-2"></i> Entry Attendance
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-person-x me-2"></i> Disable (Employee)
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white bg-primary rounded px-3 py-2 shadow-sm my-2 d-flex align-items-center">
            <i className="bi bi-diagram-3 me-2"></i> Assign work location
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <i className="bi bi-person-lines-fill me-2"></i> Employees Data
          </a>
        </li>
      </ul>
    </div>
    </div>



  );
};

export default Sidebar;
