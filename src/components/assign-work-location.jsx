import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './assign-work-location.css';

const AssignLocation = () => {
 
    return (
    <div className="dashboard-layout d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Header />
      </div>
    </div>
    );
};



export default AssignLocation;
