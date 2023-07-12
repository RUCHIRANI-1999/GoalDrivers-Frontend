import React from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa'
import "./dashboard.css"
import Sidebar from '../components/Sidebar';
const Dashboard = () => {
    return (<div style={{display:'flex'}}>
    <div style={{width:'10%'}}><Sidebar/></div>
    <div style={{width:'90%'}}>
        <div class="dashboard-body">
            <nav class="navbar navbar-light bg-info mb-4">
                <div class="container-fluid">
                    <span class="navbar-brand mb-4 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons"><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title"><span><FaUserCircle /></span> User</h3>
                            <p class="card-text">1025</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title"><span><FaRegComment /></span> Comments</h3>
                            <p class="card-text">15</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title"><span><FaDatabase /></span> Bid products</h3>
                            <p class="card-text">85</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title"><span><FaRegMoneyBillAlt /></span> Collection</h3>
                            <p class="card-text">Rs.525,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div class="card w-5">
                        <div class="card-body">
                            <h5 class="card-title">Contact</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Perera ACD </td>
                                        <td>CEO</td>
                                        <td>perera61@gmail.com</td>
                                        <td>0712345789</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dulanjith KDW</td>
                                        <td>Manager</td>
                                        <td>dulanjithmkn@gmail.com</td>
                                        <td>0712345789</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>0712345789</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-8"></div>
            </div>

        </div>
        </div>
</div>
    );
};

export default Dashboard;