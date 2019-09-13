import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import fire from '../../Config/Fire'
import './styles.css'

export default class SignIn extends Component {

 constructor(props) {
    super(props)
    this.state = {
      token: null,
      waterData: 0,
      email: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

login(event){
  event.preventDefault();
  console.log("email:", this.state.email)
  console.log("password:", this.state.password)
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { 
  }).catch((error) => {
    console.log(error)
  })
}

handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log("event target name", event.target.name)
    console.log("event target value", event.target.value)
    // this.props.history.push('/UserDashboard')
  };

render(){
  return (
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
              <p className="title">Sign In To Your Account</p>
              <div className="SignInModal textInputContainer">
                  <input id="emailId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="email" 
                         placeholder="Email" 
                         defaultValue={this.state.email}
                         onChange={this.handleChange} />
                  <input id="passwordId" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="password" 
                         className="textInputContainer" 
                         name="password" 
                         placeholder="Password"
                         defaultValue={this.state.password}
                         onChange={this.handleChange} />
              </div>
            <button type="submit" id="login" className="signInUp" onClick={this.login} >Sign In</button>
            <p className="signInUpModal smallText">New? 
              <Router>
               <Link to='/SignUp' className='signInUpLink'>Signup </Link>
              </Router>
            </p>
          </div>
      </form>
      </div>
  );
 }
}
