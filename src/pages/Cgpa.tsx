import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/UpdateMahasiswa.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Cgpa = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="container-fluid min-vh-100 bg-light">
            <div className="row">
                <Sidebar isOpen={sidebarOpen} />
                <div className='upper d-md-none fixed-top d-flex items-align-center justify-content-between p-2 ps-3 bg-primary mb-1'>
                    <h1 className='m-0 text-light'>Updated Grades</h1>
                    <button className="btn py-2 px-3 border border-primary" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon className='text-light' icon={faBars} />
                    </button>
                </div>
                <div className="bottomer col-md-10 p-2 ms-auto">
                    <h6 className="fw-bold border-bottom border-2 p-3 border-primary bg-white rounded rounded-bottom-0 p-2">Update Grades</h6>

                    {/* Student Information */}
                    <div className="border rounded p-3 my-2 bg-white shadow-sm">
                        <h6 className="fw-bold border-bottom border-1 border-secondary pb-3">Student Information</h6>
                        <div className="container mt-3">
                            <div className="row mb-2">
                                <div className="col-2 text-start fw-bold">Name</div>
                                <div className="col-1">:</div>
                                <div className="col-9">Aman Reddy</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2 text-start fw-bold">Student ID</div>
                                <div className="col-1">:</div>
                                <div className="col-9">210304124236</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-2 text-start fw-bold">Email</div>
                                <div className="col-1">:</div>
                                <div className="col-9">reddyaman77.ar@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Select Course */}
                    <div className="border rounded p-3 mb-2 bg-white shadow-sm">
                        <label htmlFor="matkul" className="form-label fw-semibold">Select Course:</label>
                        <select id="matkul" className="form-select">
                            <option>Web-Based Computing</option>
                            <option>Algorithms & Data Structures</option>
                            <option>Basic AI</option>
                            <option>Advanced Programming</option>
                        </select>
                    </div>

                    {/* Form Nilai */}
                    <div className="border rounded p-3 bg-white shadow-sm">
                        <h6 className="fw-bold mb-3">Update Grades</h6>

                        <div className="mb-3 row align-items-center">
                            <label className="col-sm-4 col-form-label">Assignment Score (30%)</label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control" defaultValue={80} />
                            </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                            <label className="col-sm-4 col-form-label">Midterm Score (50%)</label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control" defaultValue={85} />
                            </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                            <label className="col-sm-4 col-form-label">Final Exam Score (50%)</label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control" defaultValue={90} />
                            </div>
                        </div>

                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-4 col-form-label">Participation Score (20%)</label>
                            <div className="col-sm-4">
                                <input type="number" className="form-control" defaultValue={90} />
                            </div>
                        </div>

                        {/* Tombol */}
                        <div className="d-flex gap-2 justify-content-end">
                            <button type="reset" className="btn btn-danger px-4">Refresh</button>
                            <button type="submit" className="btn btn-success px-4">Download</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Cgpa;
