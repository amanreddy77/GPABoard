import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Dashboard.css'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import tesImg from '../assets/logo.png'

const GPALyticsDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <style>
                {`
                    a, a:visited, a:hover, a:active {
                        text-decoration: none !important;
                    }
                `}
            </style>
            <div className="container-fluid min-vh-100 bg-light">
                <div className="row">
                    <Sidebar isOpen={sidebarOpen} />
                    <div className='upper d-md-none d-flex fixed-top items-align-center justify-content-between p-2 ps-3 bg-primary mb-1' style={{zIndex: 1030}}>
                        <h1 className='m-0 text-light'>MyStudentPortal</h1>
                        <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <FontAwesomeIcon className='text-light' icon={faBars} />
                        </button>
                    </div>
                    <div className="bottomer col-md-10 p-2 ms-auto">
                        <div className="detailProfile bg-white d-flex flex-column flex-md-row gap-3 rounded shadow-sm p-3 w-100 mb-1">
                        <div className="columnLeft d-grid align-items-center">
                            <img src={tesImg} alt="Student Photo" className="rounded-circle me-4" />
                            <div>
                                <h4 className="mb-1">Aman Reddy</h4>
                                <p className="mb-2 text-muted">abc@gmail.com</p>
                                <button className="btn btn-outline-primary btn-sm">Edit Profile</button>
                            </div>
                        </div>
                        <div className="vr mx-3"></div>
                        <div className="ColumnRight row mt-3">
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Gender</span>
                                <strong className="d-block">Male</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Age</span>
                                <strong className="d-block">20</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">EID</span>
                                <strong className="d-block">210304124236</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Fee Details</span>
                                <strong className="d-block">Paid - ₹75,000</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Pending Fee Status</span>
                                <strong className="d-block">None</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Upload Certificate</span>
                                <button className="btn btn-sm btn-outline-secondary">Upload</button>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Status</span>
                                <strong className="badge bg-success text-white px-2 py-1 fs-6">Active</strong>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <span className="d-block mb-1">Enrollment Date</span>
                                <strong className="d-block">20 Jan, 2023</strong>
                            </div>
                        </div>
                        </div>

                        {/* Data Analisis */}
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>CGPA</h6>
                                    <h2 className="text-success">3.80 ↑</h2>
                                    <p className="text-muted">Increase compared to last week</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Semester GPA</h6>
                                    <h2>3.82</h2>
                                    <p className="text-muted">You got 3.82 out of 4</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Predicted CGPA</h6>
                                    <h2 className="text-primary">3.83</h2>
                                    <a href="javascript:void(0);" className="text-decoration-none">View more →</a>
                                </div>
                            </div>

                            {/* Registered Courses */}
                            <div className="col-12">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <div className="d-flex justify-content-between">
                                    <h6>Registered Courses</h6>
                                    <span>Semester ▼</span>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Web Development </li>
                                    <li className="list-group-item bg-light">Software Engineer <small className="text-muted">Oasis Organic Inc.</small></li>
                                    <li className="list-group-item">Data Structures </li>
                                    <li className="list-group-item">Database Management</li>
                                    </ul>
                                    <a href="javascript:void(0);" className="text-decoration-none">View more →</a>
                                </div>
                            </div>

                                  {/* Messages */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Messages</h6>
                                    <p className="text-muted">2 unread messages</p>
                                    <div className="d-flex">
                                    <img src="https://placehold.co/40x40?text=U1" className="rounded-circle me-2" />
                                    <img src="https://placehold.co/40x40?text=U2" className="rounded-circle me-2" />
                                    <img src="https://placehold.co/40x40?text=U3" className="rounded-circle me-2" />
                                    <img src="https://placehold.co/40x40?text=U4" className="rounded-circle me-2" />
                                    </div>
                                    <a href="javascript:void(0);" className="text-decoration-none">View more →</a>
                                </div>
                            </div>

                            {/* Top Scoring Courses */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Top Scoring Courses</h6>
                                    <ul className="list-group">
                                    <li className="list-group-item"> WEB DEVELOPMENT - 4</li>
                                    <li className="list-group-item">SOFTWARE ENGINEERING - 3.7</li>
                                    <li className="list-group-item">DATA STRUCTURES - 3.5</li>
                                    <li className="list-group-item">DATABASE MANAGEMENT - 3.3</li>
                                    </ul>
                                    <a href="javascript:void(0);" className="text-decoration-none">View more →</a>
                                </div>
                            </div>

                            {/* Recommended Courses */}
                            <div className="col-md-4">
                                <div className="bg-white h-100 p-3 rounded shadow-sm">
                                    <h6>Recommended Courses</h6>
                                    <span className="badge bg-primary me-2">System Designing</span>
                                    <span className="badge bg-secondary">Machine Learning</span>
                                    <br />
                                    <a href="javascript:void(0);" className="text-decoration-none">View more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GPALyticsDashboard;
