import React from 'react';
import Logo from '../assets/logo.png'; 
import Bg from '../assets/bg.png';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  const navigate = useNavigate(); 

  const navigationhandle = (e) => {
    e.preventDefault();

    navigate('/login');
  }


  return (

    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-white text-center px-3"
    style={ { backgroundImage: `url(${Bg})`,
     backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', }}>
      <img src={Logo} alt="Logo" className="mb-3" style={{  height: '80px' }} />

      <form onSubmit={navigationhandle}>
      <h1 className="fw-bold mb-3" >
        Welcome to the Admin <br /> Dashboard
      </h1>

      <p className="fw-bold text-muted text-gray mb-4">
        Efficiently manage attendance, leaves, claims, and payroll in one place.
      </p>

      <button className="btn btn-primary px-4 py-2 fw-semibold">
        Get Started&nbsp;<span aria-hidden="true">↗</span>
      </button>
      </form>
    </div>
  );
};

export default Welcome;
