import React, { Component } from 'react';
import './index.css';
import company from './company.jpeg';
import baseUrl from '../../../apis/baseUrl';
import loginbg from '../../../assets/loginbg.png'
import NavHome from '../../../components/NavBar/NavHome';
import Big from './photo.png';


class LoginForm extends Component {
  constructor(props) {// The constructor is used to initialize the component's state and to bind this to any methods that need it.
    super(props); //constructor of the parent class (i.e., Component) and pass in the props object as an argument
    this.state = {
      email: '',
      password: '',
      isFormSubmitted: false,
      emailError: '',
      passwordError: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur = (event) => {
    const { name, value } = event.target;
    this.validateField(name, value);
  }

  validateField(fieldName, value) {
    let emailError = '';
    let passwordError = '';

    switch(fieldName) {
      case 'email':
        if (!value.includes('@')) {
          emailError = 'Invalid email';
        }
        break;
      case 'password':
        if (value.length < 5) {
          passwordError = 'Password must be at least 5 characters long';
        }
        break;
      default:
        break;
    }

    this.setState({ emailError, passwordError });
  }

   forget_password=()=>{
    const { email, rememberMe } = this.state;
    baseUrl.post('/user/forget_password',{
      email:email,
       })
    .then((res) => { 
      console.log("result : ", res.data)
      if(res.data==="success"){
        alert("Your New Password Has Sent To the Email")
      }
      else{
        alert(res.data)
      }
     })
// Catch errors if any
    .catch((err) => { 
  alert(err)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;
    baseUrl.post('/user/user_login',{
      email:email,
      password:password
       })
    .then((res) => { 
      console.log("result : ", res.data)
      if (res.data.token) {
        this.setState({ isFormSubmitted: true });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        localStorage.setItem('user_email', res.data.user_email);
        localStorage.setItem('role', res.data.role);
        if (rememberMe) {
          localStorage.setItem('password', res.data.password);
        }
        alert('You successfully logged in to the system.');
        window.location = "/req_meeting_home"
      } else {
        alert(res.data)
        // alert('Please enter correct email and password.');
        window.location = "/Re_otp/"+email
      }
     })
// Catch errors if any
    .catch((err) => { 
  alert(err)
    })
  }
  
  

  renderEmailField() {
    return (
      <div className="input-container">
        
        <label className="input-label" htmlFor="email">Email:</label>
        <input
          className={`name-input-field ${this.state.emailError ? 'error-field' : ''}`}
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
          style={{ width: '9cm' }}
        />
        <div className="error-message">{this.state.emailError}</div>
      </div>
    );
  }

  renderPasswordField() {
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">Password:</label>
        <input
          className={`name-input-field ${this.state.passwordError ? 'error-field' : ''}`}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <div className="error-message">{this.state.passwordError}</div>
      </div>
    );
  }


  renderLoginForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderEmailField()}
        {this.renderPasswordField()}
  
  <br/>
        <div className="form-footer">
        <div className="remember-me-container">
          <input
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            onChange={this.handleInputChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <a onClick={this.forget_password}>
        Forgot password?
      </a>

      </div>
      <br></br>
        <button
          className="submit-button"
          type="submit"
          disabled={this.state.emailError || this.state.passwordError}
        >
          Log In
        </button>
      </form>
    );
  }
  
  render() {
    return (
      <div className="login-form-container">
        <NavHome/>
        <div className="view-containerlog">
          <div className ="loginbg-img" />
          <div className='form-contet'>
              <h1 className="form-titlel">LOG IN</h1>
              <img class="bigImage" src={Big} alt="form" />
              <img className ="comanylogolog" src={company} alt="form" /> 
                {this.state.isFormSubmitted ? (
                  <div>You have successfully logged in to the system.</div>
                ) : (
                  this.renderLoginForm()
                )}
            </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
