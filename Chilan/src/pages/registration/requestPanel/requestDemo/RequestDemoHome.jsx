import React, { useState } from 'react';
import './RequestDemo.css';
import './RequestDemo.css';
import FormImage from './hardware_pucture.jpg';
import NavHome from '../../../../components/NavBar/NavHome';
import { Link } from 'react-router-dom';
import baseUrl from '../../../../apis/baseUrl';



function RequestDemoHome() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [request, setRequest] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => { //The handleSubmit function is used to handle the form submission event.
    event.preventDefault();         //prevents the default form submission behavior      
    console.log({                  //This is useful for debugging and verifying that the form data is being captured correctly.
      fullName,
      email,
      contactNumber,
      businessLocation,
      request,
      agree
    });
  
    // Check if all fields are filled
    if (fullName && email && contactNumber && businessLocation && request && agree) {
                
      alert("Form submitted successfully!");
    }
  };
  
  const handleFullNameChange = (event) => { // the handleFullNameChange function is called with the event object passed as an argument.
    setFullName(event.target.value);        //
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => { //used to handle changes to the contactNumber state variable in a React functional component.
    setContactNumber(event.target.value);
  };

  const handleBusinessLocationChange = (event) => {
    setBusinessLocation(event.target.value);
  };

  const handleRequestChange = (event) => {
    setRequest(event.target.value); // refers to the current value of a form element
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked); //"target" refers to the DOM element that triggered the event (in this case, the checkbox element). The ".checked" property is a Boolean value that indicates whether the checkbox is currently checked or not.
  };

  function addRequestDemo(){
    if(!agree){
      return
    }
    else{
      let  buyer = {
        id:parseInt(localStorage.getItem('user_id')),
        fullname:"lakshan",
        email:localStorage.getItem('user_email')
      }
      baseUrl.post('/buyer/request_demo',{
        email:email,
        contact:contactNumber,
        fullName:fullName,
        buyer_id:buyer.id,
        request:request
         })
      .then((res) => { 
        console.log("result : ", res.data)
        if (res.data==="success") {
          alert('You successfully added the request');
          window.location = '/chat'
        } else {
          alert('Please enter Correct data');
        }
       })
  // Catch errors if any
      .catch((err) => { 
    alert(err)
      })
    }
  }

  return (
    <div>
      <NavHome/>

      <div class="req-demo-content">
       <Link to='/req_meeting_home'> <button style={{float:'right', padding:'0.6rem', margin:'2rem', width:'14rem'}}>Request Meeting</button></Link>
        <br />
        
   <div className="req-demo-container">
    
  
        
        
   
        <div className="req-demo-form-container">

        <div className="form-title1">Request Demo</div>
              <form onSubmit={handleSubmit}>
              
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  style={{ width: '9cm' }}
                  pattern="[A-Za-z ]*" // Only allows alphabetic characters and spaces
                  title="Please enter only characters"
                  required
                />



                <label htmlFor="email">E-mail:</label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />


                <label htmlFor="contactNumber">Contact Number:</label> {/*id attribute of the form control element that the label is associated with  */}
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  pattern="[0-9]{1,10}"
                  required
                />


                <label htmlFor="businessLocation">Business Location:</label>
                <input
                  type="text"
                  id="businessLocation"
                  name="businessLocation"
                  value={businessLocation}
                  style={{ width: '9cm' }}
                  onChange={handleBusinessLocationChange}
                  maxLength="40"
                  required
                />


                <label htmlFor="request">Request:</label>
                <textarea
                  id="request"
                  name="request"
                  value={request}
                  onChange={handleRequestChange}
                  required
                ></textarea>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={agree}
                    onChange={handleAgreeChange}
                    required
                    style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }}
                  />
                  <label htmlFor="agree" style={{ display: 'inline-block', verticalAlign: 'middle' }}>Agree to terms and conditions</label>
                </div>

                <button type="submit" onClick={addRequestDemo}>Submit</button>
                </form>
          </div>

          <div className="req-demo-image-container">
            <img src={FormImage} alt="form" />
          </div>
      </div>

    </div>
    </div>
  );
}

export default RequestDemoHome;
