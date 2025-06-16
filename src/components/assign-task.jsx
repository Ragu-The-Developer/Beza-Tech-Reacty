import './assign-task.css';
import Bell from '../assets/bell.png';
import User from '../assets/user.png';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';

const Header = () => {
  const [currentDate] = useState(new Date()); //getting current date
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.address.zipcode.includes(searchTerm)
);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="d-flex">
      <div className="bg-white">
        <Sidebar />
      </div>

      <div className="main-content-wrapper flex-grow-1 p-4" >
        <div className="d-flex justify-content-between align-items-center "   style={{ marginLeft: '20%' }}>
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
              <img src={User} alt="avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
              <div>
                <div className="fw-semibold">Danial</div>
                <div className="text-muted small">HR manager</div>
              </div>
            </div>
          </div>
        </div>


      
        
        <div className="d-flex align-items-center bg-white"  style={{ marginLeft: '20%', marginTop: '5%' }}>
          <div className="assign-box p-4 rounded shadow bg-primary" style={{ width: '100%', maxWidth: '650px' }}>
            <h5 className="fw-bold text-white">Assign Work Location</h5>
            <p className="text-white" style={{ fontSize: "14px" }}>
              Designate official work sites for each employee to enable accurate location-based attendance tracking.
            </p>
            <form>
              <div className="row align-items- justify-content-between mb-3">
                <div className="col-2 text-white fw-semibold">Name/ID:</div>
                <div className="col-6">
                  <input type="text" className="form-control bg-primary text-white rounded" id="text" placeholder="Enter Name" />
                </div>
              </div>

              <div className="row align-items-center justify-content-between mb-3">
                <div className="col-2 text-white fw-semibold">Designation:</div>
                <div className="col-6">
                  <input type="text" className="form-control bg-primary text-white rounded"  id="text" placeholder="Enter Role" />
                </div>
              </div>

              <div className="row align-items-center justify-content-between mb-3">
                <div className="col-2 text-white  fw-semibold">Address:</div>
                <div className="col-6">
                  <input type="text" className="form-control bg-primary text-white rounded"  id="text" placeholder="Enter Address" />
                </div>
              </div>

              <div className="row align-items-center justify-content-between mb-4">
                <div className="col-2 text-white fw-semibold">Date:</div>
                <div className="col-6">
                  <input type="date" className="form-control bg-primary text-white rounded"  id="text" defaultValue="2025-05-20" />
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-light fw-bold w-50 rounded-pill text-primary">Assign</button>
              </div>
            </form>
          </div>
        </div>

        <div className="container" style={{ marginLeft: '20%', marginTop: '5%' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-start">Assigned-Location</h5>
            <input
              type="text"
              className="form-control w-25"
              placeholder=" 🔍 Search by Name, Email, City..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> 
          </div>

        <div className="table-responsive">
            <table className="table table-bordered w-100">
              <thead className="">
                <tr>
                  <th className='text-muted'>S.No</th>
                  <th className='text-muted'>Name</th>
                  <th className='text-muted'>Email</th>
                  <th className='text-muted'>Location</th>
                  <th className='text-muted'>Pincode</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className='text-muted'>{user.id}</td>
                      <td className='text-muted'>{user.name}</td>
                      <td className='text-muted'>{user.email}</td>
                      <td className='text-muted'>{user.address.city}</td>
                      <td className='text-muted'>{user.address.zipcode}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
