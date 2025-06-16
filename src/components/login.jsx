import React from 'react';
import './login.css';
import loginlogo from '../assets/login-logo.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate('/assign-task');
    }

    return (
        <div className="container-full min-vh-100 d-flex align-items-center justify-content-center bg-white">
            <div className="row w-100  shadow-lg rounded overflow-hidden login-box">

             {/* Left Section congtainer */}
                <div className="col-md-6 d-none d-md-block p-0 position-relative text-start">
                    <div className="login-left h-100 w-100">
                        <div className="login-left-content text-white p-4 position-absolute">
                            <img src={loginlogo} alt="Logo" height={70} className="mb-4" />
                            <h4>Efficient Oversight</h4>
                            <p className="mt-2">Monitor attendance, manage leaves, and oversee payroll seamlessly.</p>
                            <div className="d-flex align-items-center bg-white text-dark p-2" style={{ marginTop: '57%', borderRadius: '25px' }}>
                                <i className="bi bi-shield-lock-fill me-4"></i>
                                <div className='text-start'>
                                    <strong>Secure Access</strong>
                                    <p className="mb-0 small">All administrative activities are protected with multi-factor authentication and encrypted connections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Right Section Container */}
                <div className="col-md-6 bg-white p-5">
                    <h4 className="text-center fw-bold mb-1" style={{ color: '#3AB6FF' }}>Login</h4>
                    <p className="text-center text-muted mb-4" >Admin Dashboard Entry Point.</p>
                    <form className='text-start'>
                        <div className="mb-3 d-flex justify-content-center">
                            <div className="w-75">
                                <label className="form-label text-start w-100">Company Name</label>
                                <input type="text" className="form-control shadow-sm" placeholder="Enter name"  maxLength={50} required />
                            </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                        <div className='w-75'>
                            <label className="form-label">Designation</label>
                            <select className="form-select">
                                <option>Admin</option>
                                <option>Manager</option>
                                <option>Employee</option>
                            </select>
                        </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <div className='w-75'>
                            <label className="form-label">User Name</label>
                            <input type="text" className="form-control shadow-sm" placeholder="Enter name" maxLength={15} required />
                            </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-center">
                            <div className='w-75'>
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control shadow-sm" placeholder="Enter password" maxLength={15} required />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <div className='w-50'>
                                <input type="checkbox" className="form-check-input me-1" />
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <a href="#" className="text-decoration-none">Forgot password?</a>
                        </div>

     
                        <div className='d-flex justify-content-center'>
                        <button className="btn btn-primary w-75 p-2 mt-3 shadow-lg" style={{ borderRadius: '25px' }} onClick={goto}>Login</button>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;