import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default class SignUp extends Component {

 constructor() {
    super();
    this.state = {
      token: null,
      header:'Join Us',
      isSignUpVendorDisabled: true
    }

  }

handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/UserDashboard')
  };

openVendorSignUp(){
    this.setState({
      header : 'Sign up as a Vendor',
      isSignUpVendorDisabled: false
    })
  }

render(){
  return (
    <div className="App">
      <body>
        <div className='modal' style={{ position: 'fixed', 
                                        top: '0px', 
                                        bottom: '0px', 
                                        left: '0px', 
                                        width: '100vw', 
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                        padding: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'}}>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <p className="title">{this.state.header}</p>
              <div className="SignInModal textInputContainer">
                  <input id="nameId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="Name" 
                         placeholder="Full Name" />
                  <input id="emailId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="Email" 
                         placeholder="Email" />
                  <input id="passwordId" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="password" 
                         className="textInputContainer" 
                         name="Password" 
                         placeholder="Password" />
                   <input id="phoneNb" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="phone" 
                         className="textInputContainer" 
                         name="phone" 
                         placeholder="Phone Number" />
                  <select className="textInputContainer">
                        <option value="beirut">Beirut</option>
                        <option value="mountLebanon">Mount Lebanon</option>
                        <option value="north">North</option>
                        <option value="nabatieh">Nabatieh</option>
                        <option value="south">South</option>
                  </select>
              </div>
            <button type="submit" id="signUp" className="signInUp">Sign Up</button>
            <p className="signInUpModal smallText">Already have an account?
              <Link to='/' className='signInUpLink'>Signin </Link>
            </p>
           { this.state.isSignUpVendorDisabled?
            <p className="signUpVendorModal smallText" onClick={() => this.openVendorSignUp()}>Get Started as a Vendor</p>:null
           } 
          </div>
      </form>
      </div>
      </body>
    </div>
  );
 }
}
