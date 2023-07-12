import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./components/Home/Home"

//Chilan - log n reg + Chat
import RequestMeetingHome from "./pages/registration/requestPanel/requestMeeting/RequestMeetingHome";
import RegForm from "./pages/registration/RegistrationForm/RegForm";
import LoginForm from "./pages/registration/LoginForm/LoginForm";
import RequestDemo from "./pages/registration/requestPanel/requestDemo/RequestDemoHome";
import ChatHome from "./pages/chat/ChatHome";
import Chat from "./pages/chat/Chat";

import Form from "./components/Form/Form"
import OTPRequestPage from "./pages/registration/RegistrationForm/OTPRequestPage";
import RequestMeetingSellerView from "./pages/registration/requestPanel/requestMeeting/RequestMeetingSellerView";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="form" element={<Form/>}/>


                <Route path="" element={<RegForm/>}/>
                <Route path="req_meeting_home" element={<RequestMeetingHome/>}/>
                <Route path="req_demo" element={<RequestDemo/>}/>
                <Route path="reg_form" element={<RegForm/>}/>
                <Route path="login_form" element={<LoginForm/>}/>
                <Route path="chat_home" element={<ChatHome/>}/>
                <Route path="chat" element={<Chat/>}/>
                <Route path="req_meeting_seller" element={<RequestMeetingSellerView/>}/>
                <Route path="Re_otp/:email" element={<OTPRequestPage/>}/>
             
            </Routes>
        </BrowserRouter>
    );
};

export default App;
