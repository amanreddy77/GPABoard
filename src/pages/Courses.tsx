import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Mahasiswa.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' 

const Mahasiswa = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container-fluid min-vh-100 bg-light">
            <div className="row">
                <Sidebar isOpen={sidebarOpen} />
                <div className='upper d-md-none d-flex fixed-top items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                    <h1 className='m-0 text-light'>Student Profile</h1>
                    <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon className='text-light' icon={faBars} />
                    </button>
                </div>
                <div className="bottomer col-md-10 p-2 ms-auto">
                    
                    {/* Heading above the GPA/analysis cards */}
                    <h4 className="mb-3 fw-bold">Courses Enrolled - 2025</h4>

                    {/* Data Analisis */}
                    <div className="row g-2 mb-2">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-primary border-3">
                                <h6 className='my-1'>Current Semester GPA</h6>
                                <h2 className="text-success my-1">3.80</h2>
                                <p className="text-muted small my-1">Based on average score of semester 4</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-warning border-3">
                                <h6 className='my-1'>Best Performing Course</h6>
                                <h3 className="my-1">Sistem Digital (90)</h3>
                                <p className="text-muted my-1 small">Credits: 3</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-success border-3">
                                <h6 className='m-1'>Total Current Credits</h6>
                                <h2 className='m-1'>12 SKS</h2>
                                <p className="text-muted m-1 small">Total credits from 4 courses in semester 4</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center justify-content-center bg-white h-100 rounded shadow-sm p-3 text-center border-bottom border-danger border-3">
                                <h6 className='m-1'>Expected Graduation</h6>
                                <h2 className='m-1'>2026</h2>
                                <p className="text-muted m-1 small">Based on current GPA and credit progress</p>
                            </div>
                        </div>
                    </div>

                    {/* Data Nilai */}
                    <div className="bg-white rounded shadow-sm p-4">
                        <h6>Grade Data</h6>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mt-3">
                                <thead className="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Course</th>
                                    <th>SKS</th>
                                    <th>Semester</th>
                                    <th>Assignment Score</th>
                                    <th>Midterm Score</th>
                                    <th>Final Score</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Web-Based Computing</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>80</td>
                                    <td>80</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Software Engineering</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>90</td>
                                    <td>85</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Basic Statistics</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>85</td>
                                    <td>90</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Digital Systems</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>85</td>
                                    <td>90</td>
                                    <td>90</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mahasiswa;
