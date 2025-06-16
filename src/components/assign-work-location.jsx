import Header from './assign-task';
import Sidebar from '../components/sidebar';

import './assign-work-location.css';

const AssignLocation = () => {
  return (
    <div>
      <div className="dashboard-layout d-flex">
        <Sidebar />
        <div className="main-content flex-grow-1">
          <Header />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
        <div className="assign-box p-4 rounded-4 shadow bg-primary text-white" style={{ width: '380px' }}>
          <form>
            {/* Name or ID */}
            <div className="mb-3">
              <label className="form-label">Name or ID</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-person-fill text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="Enter Name"
                />
              </div>
            </div>

            {/* Designation */}
            <div className="mb-3">
              <label className="form-label">Designation</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-briefcase-fill text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="Enter role"
                />
              </div>
            </div>

            {/* Work location */}
            <div className="mb-3">
              <label className="form-label">Work location</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-geo-alt-fill text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="Enter address"
                />
              </div>
            </div>

            {/* Date */}
            <div className="mb-4">
              <label className="form-label">Date</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-calendar-event-fill text-primary"></i>
                </span>
                <input
                  type="date"
                  className="form-control input-custom"
                  defaultValue="2025-05-20"
                />
              </div>
            </div>

            {/* Assign button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-light fw-bold rounded-pill">
                Assign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignLocation;
