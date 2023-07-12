import React, { useEffect, useState } from 'react';
import './OTPRequestPage.css';
import NavHome from '../../../components/NavBar/NavHome';
import { useParams } from 'react-router';
import baseUrl from '../../../apis/baseUrl';

function OTPRequestPage() {
  const [otp, setOTP] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {email} = useParams()

  const submitOTP = () => {
    // if (otp === '12345') {
    //   setErrorMessage('');
    //   alert('OTP submitted successfully!');
    // } else {
    //   setErrorMessage('Incorrect OTP. Please try again.');
    // }
    baseUrl.post("/user/verify_email",{
      email:email,
      otp:otp
    }).then((res)=>{
      alert(res.data)
      if(res.data==="success"||res.data==="error email"){
        window.location = '/login_form' 
      }
    }).catch((err)=>{
      alert(err)
    })
  };

  useEffect(()=>{
    alert(email)
  },[])

  const handleSendAgain = () => {
    // Logic for sending the OTP again
    baseUrl.post("/user/resend_otp",{
      email:email,
    }).then((res)=>{
      alert(res.data)
    }).catch((err)=>{
      alert(err)
    })
  };

  return (
    <div>
       <NavHome/>
    <div className="view-container-1">
     
      <div className="form-titlebox">OTP Request</div>
      <div className="otp-box">
        <label htmlFor="otp">OTP:</label>
        <input
          type="text"
          id="otp"
          name="otp"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        <button className="submit-button-1" onClick={submitOTP}>
          Submit
        </button>
        <br/>
        <a href="#" onClick={handleSendAgain}>
          Send Again
        </a>
      </div>
      </div>
    </div>
  );
}

export default OTPRequestPage;
