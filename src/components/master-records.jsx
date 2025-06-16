import './assign-task.css';
import './master-records.css';
import Bell from '../assets/bell.png';
import User from '../assets/user.png';
import DB from '../assets/db.png';
import ID from '../assets/id.png';
import Sidebar from './sidebar';
import { useState } from 'react';

const Master = () => {

    const [currentDate] = useState(new Date()); //getting current date

    const cards = [
    {
      title: 'Sign-Up Records',
      desc: 'View registered employee profiles with login and contact information.',
    },
    {
      title: 'Leave Records',
      desc: 'View this employee’s leave records, approval status, and available leave balance.',
    },
    {
      title: 'Pay Slip Details',
      desc: 'Check this employee’s monthly pay slips and salary records.',
    },
    {
      title: 'Attendance Records',
      desc: 'Daily check-ins, work hours, and history, and overall attendance history.',
    },
    {
      title: 'Expense Claims',
      desc: 'Review employee-submitted bills and reimbursement statuses.',
    },
  ];

    return (
        <div>
     <div className="d-flex">
      <div className="bg-white">
        <Sidebar />
      </div>

      <div className="main-content-wrapper flex-grow-1 p-4" >
        <div className="d-flex justify-content-between align-items-center" style={{ marginLeft: '20%' }}>
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
</div>
</div>


<div className="container py-4" style={{marginLeft: '20%'}}>
      <div className="mb-3">
        <h5 className="text-muted"><img className='me-2' src={DB} width={'25'}/>Employees Data <img src={ID} className='me-2' style={{marginLeft:'25px'}} width={'25'}/>Danial Data</h5>
      </div>

      <div className="employee-header d-flex align-items-center mb-4 mt-5">
        <img
          src= { User }
          alt="Danial"
          className="rounded-circle me-3"
        />
        <div>
          <h4 className="fw-semibold mb-1">Danial Master Records</h4>
          <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
            Access complete employee data including attendance, pay slips, claims, leave history,
            and account details — all in one place.
          </p>
        </div>
      </div>

      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className={`info-card card-${index}`}>
              <div className="arrow-icon">&#10148;</div>
              <h6>{card.title}</h6>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
    );
}

export default Master;