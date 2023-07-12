// Write your JS code here
import {Component} from 'react'
import './index.css'
import symbol from './rights_symbol.jpg';
import company from './company.jpeg';
import Big from './photo.png';
import baseUrl from '../../../apis/baseUrl';
import { useNavigate, useNavigation } from 'react-router-dom';
import NavHome from '../../../components/NavBar/NavHome';

class RegistrationFrom extends Component {n
  state = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailError: false,
    showPasswordError: false,
    showConfirmPasswordError: false,
    isFormSubmitted: false,
  }
  
  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }
  

  
        
  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }



  onChangePassword = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      passwordInput: value,
    })
  }
  
  onBlurPassword = () => {
    const isValidPassword = this.validatePassword()
  
    this.setState({showPasswordError: !isValidPassword})
  }
  
  onChangeConfirmPassword = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      confirmPasswordInput: value,
    })
  }
  
  onBlurConfirmPassword = () => {
    const isValidConfirmPassword = this.validateConfirmPassword()
  
    this.setState({showConfirmPasswordError: !isValidConfirmPassword})
  }

  onChangeEmail = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      emailInput: value,
    })
  }
  
  onBlurEmail = () => {
    const isValidEmail = this.validateEmail()
  
    this.setState({showEmailError: !isValidEmail})
  }


  




  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError, showPasswordError, showConfirmPasswordError,showEmailError} = this.state
  
    return (
      <form className="form-container1" onSubmit={this.onSubmitForm} style={{width:'450px'}}>

  <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className={showFirstNameError ? 'name-input-field error-field' : 'name-input-field'}
          value={this.state.firstNameInput}
         
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          pattern="[A-Za-z][A-Za-z]*"
          title="Please enter only characters with the first letter capitalized"
          required
        />

        {showFirstNameError && <span className="error-message">Please enter first name</span>}
      </div>


      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          Last Name :
        </label>
        <input
          type="text"
          id="lastName"
          className={showLastNameError ? 'name-input-field error-field' : 'name-input-field'}
          value={this.state.lastNameInput}
          pattern="[A-Za-z][A-Za-z]*"
          title="Please enter only characters with the first letter capitalized"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          required
        />
       {showLastNameError && <span className="error-message">Please enter last name</span>} 
      </div>
        
        <div className="input-container" >
        <label className="input-label"  htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          className={showConfirmPasswordError ? 'name-input-field error-field' : 'name-input-field'}
          name="emailInput"
          
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
          required
        />
        {showEmailError && <span className="error-message">Please enter a valid email address</span>}
      </div>


        <div className="input-container">
          <label className="input-label" htmlFor="password">
            Password:
          </label>
          <input
              type="password"
              id="password"
              className={showPasswordError ? 'name-input-field error-field' : 'name-input-field'}
             
              value={this.state.passwordInput}
              onChange={this.onChangePassword}
              onBlur={this.onBlurPassword}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$"
              title="Password must contain at least one uppercase letter, one lowercase letter, one symbol, one number, and be at least 8 characters long"
              required
            />

          {showPasswordError && <p className="error-message">Enter  at least lower and upper characters includes symbol and numbers </p>}
        </div>


        
        <div className="input-container">
          <label className="input-label" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={showConfirmPasswordError ? 'name-input-field error-field' : 'name-input-field'}
           
            value={this.state.confirmPasswordInput}
            onChange={this.onChangeConfirmPassword}
            onBlur={this.onBlurConfirmPassword}
            required
          />
          {showConfirmPasswordError && <p className="error-message">Passwords do not match</p>}
        </div>


        <br></br>
        <button type="submit" className="submit-button">
          Sign up
        </button>
      </form>
    )
  }

  


  

  validatePassword = () => {
    const {passwordInput} = this.state;
    const symbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    const numberRegex = /\d/;
    
  
    // Check if passwordInput is not blank and has at least 5 characters
    if (passwordInput.trim() === '' || passwordInput.length < 4) {
      return false;
    }
  
    // Check if passwordInput contains at least one symbol or number
    if (!symbolRegex.test(passwordInput) || !numberRegex.test(passwordInput)) {
      return false;
    }
  
    return true;
  }
  
  
  
  validateConfirmPassword = () => {
    const {passwordInput, confirmPasswordInput} = this.state
    return passwordInput === confirmPasswordInput && confirmPasswordInput !== ''
  }
  
  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validateEmail = () => {
    const {emailInput} = this.state
  
    // Email regex pattern
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    return emailPattern.test(emailInput)
  }
  

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidPassword = this.validatePassword()
    const isValidConfirmPassword = this.validateConfirmPassword()
    const isValidEmail = this.validateEmail()

    if (isValidFirstName ) {
      const {emailInput , passwordInput , firstNameInput , lastNameInput , } = this.state
      alert("valid")
      baseUrl.post('/user/register',{
        email:emailInput,
        password:passwordInput,
        lastname:lastNameInput,
        firstname:firstNameInput,
        role:"user"
         })
      .then((res) => { 
        console.log("result : ", res.data)
        if (res.data==="success") {
          this.setState({ isFormSubmitted: true });
          alert('You successfully Registerd in to the system.');
          window.location = '/login_form'
        } else {
          alert('Please enter correct email and password.');
          if (res.data==="already registered") {
            alert(res.data);
          } else {
            alert('Please enter correct email and password.');
          }
        }
       })
  // Catch errors if any
      .catch((err) => { 
    alert(err)
      })
    } else {
      alert("invalid")
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showPasswordError:!isValidPassword,
        showConfirmPasswordError: !isValidConfirmPassword,
        showEmailError: !isValidEmail,
        isFormSubmitted: false,
      })
    }
  }



  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
    
     <img src={symbol} alt="symbol" width="100px"/>
      <p>Submitted Successfully</p>

      
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )


  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="login-form-container">
        <NavHome/>
       
        <div className="view-container" style={{maxWidth:'780px'}}>
        <img class="bigImage" src={Big} alt="form" />
         <img className ="comanylogor" src={company} alt="form" /> 
         
        <h1 className="form-titler">REGISTRATION</h1>
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationFrom


/* 


 validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }
it checks if firstNameInput is not an empty string.

Finally, it returns a boolean value: true if firstNameInput 
*/











