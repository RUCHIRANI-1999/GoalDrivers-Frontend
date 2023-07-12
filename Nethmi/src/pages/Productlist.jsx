import React from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa'
import Sidebar from '../components/Sidebar';

const productlist = () => {
    return (<div style={{display:'flex'}}>
    <div style={{width:'10%'}}><Sidebar/></div>
    <div style={{width:'90%'}}>
        <div>

            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <button type="button" class="btn btn-primary btn-lg">Add New Product</button>
        </div>
        </div>
        </div>
    );
};

export default productlist;