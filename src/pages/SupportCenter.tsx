import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SupportCenter: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row">
        <Sidebar isOpen={sidebarOpen} />
        <div className='upper d-md-none  d-flex items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
          <h1 className='m-0 text-light'>Support Center</h1>
          <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon className='text-light' icon={faBars} />
          </button>
        </div>
        <div className="bottomerss col-md-10 d-flex justify-content-center align-items-center vh-100 ms-auto">
          <div className="card shadow-sm p-4 bg-white w-100" style={{ maxWidth: 600 }}>
            <h1 className="mb-3 text-center fw-bold">Support Center</h1>
            <p className="lead text-center mb-4">
              Welcome to the GPAlytics Support Center. We're here to assist you with any questions or feedback.
            </p>
            <hr />
            <p className="mb-2 text-center">
              <strong>Email us at: </strong>
              <a href="mailto:reddyaman77.ar@gmail.com">reddyaman77.ar@gmail.com</a>
            </p>
            <p className="text-center text-muted mb-0" style={{ fontSize: '0.95rem' }}>
              Our support team will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;