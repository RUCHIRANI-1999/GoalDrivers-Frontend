import React, { useEffect, useState } from 'react';
import { FaRegBell, FaRegEnvelope, FaUserCircle, FaRegComment, FaRegMoneyBillAlt, FaDatabase } from 'react-icons/fa';
import "./about.css"
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const About = () => {

    const [users , setUsers] = useState([])
    const [key , setKey] = useState("")
    useEffect(()=>{
        axios.get("http://localhost:3002/api/admin/get_users",{

        }).then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        }).catch((err)=>{
            alert(err)
        })
    },[])

    function search_user(){
        if(key===""){
            alert("Enter Search Key First")
            return
        }
        axios.get("http://localhost:3002/api/admin/search_users/"+key,{

        }).then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
    <div style={{display:'flex'}}>
        <div style={{width:'10%'}}><Sidebar/></div>
        <div style={{width:'90%'}}>
        <div class="about-body">
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
                    <div class="my-2 my-lg-0"><a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegEnvelope /></span></a>
                        <a href=""><span class="navbar-brand mb-4 nav-icons "><FaRegBell /></span></a></div>
                </div>
            </nav>
            <div>
                <form class="d-flex mt-5">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={key} onChange={e=>setKey(e.target.value)}/>
                </form>
                <button class="btn btn-outline-success" onClick={search_user}>Search</button>

            </div>

            <div class="card w-100 mt-5">
                <div class="card-body">
                    <h5 class="card-title">Users</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="co1">Role</th>
                                <th scope="co1"></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.length!=0&&users.map((user)=>(
                                <>
                                <tr>
                                <th scope="row">1</th>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                            </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;