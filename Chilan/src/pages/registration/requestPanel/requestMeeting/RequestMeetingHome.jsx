import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ZoomImage from './zoom.jpeg';
import GmeetImage from './googleMeet.png';
import teams from './teams.png';
import physicalMeeting from './physicalMeeting.jpg';
import './RequestMeeting.css';
import baseUrl from '../../../../apis/baseUrl';

import NavHome from '../../../../components/NavBar/NavHome';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/Footer/Footer';


function RequestMeetingHome() {
  //const sellers = ['Amila', 'Nimila', 'Kamila', 'Pamila', 'Sumila']; 
  //const [selectedSeller, setSelectedSeller] = useState(sellers[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showReasonField, setShowReasonField] = useState(false);
  const [reason, setReason] = useState('');
  const [sellers, setSellers] = useState([]);
  const [isArrange , setIsArrange] = useState(false)
  const [sellerId , setSellerId] = useState(1)


 

// below part 
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

//  const handleConfirm = () => {
 //   if (selectedDate) {
 //    // alert(`Send email to ${selectedSeller}: Date is ${selectedDate.toLocaleDateString()}, Time is ${selectedDate.toLocaleTimeString()}`);
 //   }
//  };



  
    function handleMethodSelection(method) {
      setSelectedMethod(method);
    }
  
    function handleArrangeMeeting() {
      if (selectedMethod && selectedDate) {
        setShowReasonField(true);
        alert('Arrange the meeting on ' + selectedDate.toLocaleString() + ' using ' + selectedMethod);
      } else {
        alert('Please select date/time and platform to arrange a meeting.');
      }
    }
    
    function submitMeeting(){
    let  buyer = {
        id:parseInt(localStorage.getItem('user_id')),
        fullname:"lakshan",
        email:localStorage.getItem('user_email')
      }
      baseUrl.post('/buyer/request_meeting',{
        email:buyer.email,
        contact:"0779432376",
        fullName:buyer.fullname,
        buyer_id:buyer.id,
        seller_id:sellerId,
        request:selectedMethod
         })
      .then((res) => { 
        console.log("result : ", res.data)
        if (res.data==="success") {
          alert('You successfully added the meeting');
          window.location = '/req_demo'
        } else {
          alert('Please enter Correct data');
        }
       })
  // Catch errors if any
      .catch((err) => { 
    alert(err)
      })
    }

 useEffect(()=>{
  baseUrl.get('/buyer/get_sellers',{
     })
  .then((res) => { 
    console.log("result : ", res.data)
    setSellers(res.data)
   })
// Catch errors if any
  .catch((err) => { 
alert(err)
  })
 },[])


  return (<>
   <div className="req-demo-content">
    <NavHome/>
{/*select date*/ }
    
    <div className="up" >
    <div className='form-title'>Request Meeting</div>
      <div style={{position:'absolute', top:'40%', left:'10%'}}>
     
        </div>
    <br></br>
    <div className='cale'>
    <h2>Select a seller:</h2>
        <select id="seller-dropdown" name="seller" onChange={(e)=>{setSellerId(e.target.value)}}>
          {sellers.map((seller)=>(
            <option value={seller.user_id}>{seller.firstname}</option>
          ))}
        </select>
      <DatePicker
        inline
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy HH:mm"
        minDate={new Date()}
        showTimeSelect
        timeIntervals={15}
        timeFormat="HH:mm"
        timeCaption="Time"
        disabledKeyboardNavigation
        className="calendar"
      /></div>
      {selectedDate && (
        <div className="DTshow">
          <p className="DTshowp">Date is {selectedDate.toLocaleDateString()}</p>
          <p className="DTshowp" >Time is {selectedDate.toLocaleTimeString()}</p>
         {/*<button onClick={handleConfirm} className="button">
            Submit
          </button>*/ } 
        </div>
      )}
    </div>

{/*method select*/}
    <div className="down">
      <div className='form-title'>Select Platform</div>
      <br></br>
      <div className='para'>After you select the Platform, the meeting will be created.</div>
      <div className="method-container">
        <div className={`method ${selectedMethod === 'zoom' ? 'selected' : ''}`} onClick={() => handleMethodSelection('zoom')}>                       {/*used to interpolate variables, expressions, or functions within the template literal, allowing you to create dynamic content */}
          <div className="option-image-container">
            <img src={ZoomImage} alt="zoom" />
          </div>
          <span>Zoom</span>
        </div>
        <div className={`method ${selectedMethod === 'ms-team' ? 'selected' : ''}`} onClick={() => handleMethodSelection('ms-team')}>
        <div className="option-image-container">
            <img src={teams} alt="Gmeet" />
          </div>
          <span>MS Team</span>
        </div>
        <div className={`method ${selectedMethod === 'meeting' ? 'selected' : ''}`} onClick={() => handleMethodSelection('meeting')}>
          <div className="option-image-container">
            <img src={GmeetImage} alt="Gmeet" />
          </div>
          <span>Meeting</span>
        </div>
        <div className={`method ${selectedMethod === 'physical-meeting' ? 'selected' : ''}`} onClick={() => handleMethodSelection('physical-meeting')}>
        <div className="option-image-container">
            <img src={physicalMeeting} alt="phy mee" />
          </div>
          <span>Physical Meeting</span>
        </div>
      </div>
      <br /> <br />
      {selectedDate && selectedMethod && (
  <div>
    <button className="button" onClick={handleArrangeMeeting}>
      Arrange Meeting
    </button>
    <br/><br/>
    {showReasonField && (
      
      <div className="reason"style={{position:'absolute', height:'300px', width:'500px', top:'99%', left:'30%',zIndex:'1000',  boxShadow:'0.2px 2px 2px grey', borderRadius:'8px'}}>
        <div className='form-title'>Do you want to confirm the meeting?</div>
        <input
          type="text"
        
          className="reason-field"
          style={{marginLeft:'60px', width:'350px'}}
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
        <br/><br/><br/>
        <div style={{display:'flex'}}>
        <button className="button" onClick={() => submitMeeting()} style={{width:'150px'}}>
          Confirm
        </button>
        <button className="button" onClick={() => window.location.reload()} style={{width:'150px', border:'2px solid black'}}>
          Cancel
        </button>
        </div>
      </div>
    )}
  </div>
)}


    </div>

    <Footer/>
     </div></>
  );
}

export default RequestMeetingHome;

/*
 <label htmlFor="seller-select">Select seller:</label>

<select id="seller-select" value={selectedSeller} onChange={handleSellerChange}>
{sellers.map((seller) => (
  <option key={seller} value={seller}>
    {seller}
  </option>
))}
</select>







  const handleSellerChange = (event) => {
    setSelectedSeller(event.target.value);
    setSelectedDate(null);
  };

  */