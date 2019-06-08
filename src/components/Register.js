import React from 'react'
import {Link} from 'react-router-dom'
import AuthForm from './AuthForm.js'

import '../css/Register.css'


let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

console.log('current baseURL:', baseURL)

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.authenticateUser = this.authenticateUser.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }
    // function for user login
    authenticateUser(formInputs) {
        // console.log(formInputs)
        fetch(baseURL + '/users/login', {
        // Need to call JSON.stringify on body data
        // user is the param rails login() is looking for
        body: JSON.stringify({
            user: formInputs
        }),
        method: 'POST',
        // Need this header so server can see params
        headers: {
            "Content-type": "application/json"
        }
        }).then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            // Save token and user info to localStorage
            localStorage.setItem('token', JSON.stringify(resJSON.token))
            localStorage.setItem('user', JSON.stringify(resJSON.user.username))
            localStorage.setItem('id', JSON.stringify(resJSON.user.id))
        })
        .then(() => {
            // Save user session in state
            this.props.isAuthenticated(true)
            // Redirect to home page
            this.props.history.push("/home")
        })
        .catch(err => console.error(err))
        // Redirects to home page on successful login
    }
    // function for user signup
    registerUser(formInputs) {
        fetch(baseURL + '/users', {
            body: JSON.stringify({
                user: formInputs
            }),
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            // Save token and user info to localStorage
            localStorage.setItem('token', JSON.stringify(resJSON.token))
            localStorage.setItem('user', JSON.stringify(resJSON.user.username))
            localStorage.setItem('id', JSON.stringify(resJSON.user.id))
        })
        .then(() => {
            // Save user session in state
            this.props.isAuthenticated(true)
            // Redirect to home page
            this.props.history.push("/home")
        })
        .catch(err => console.error(err))
    }
    render() {
        return(
            <div className="container-auth">
                <section>
                    <h2>Welcome Back!</h2>
                    <AuthForm handleSubmit={this.authenticateUser} />
                </section>
    
                <section>
                    <h2>Create Account</h2>
                    <AuthForm handleSubmit={this.registerUser} />
                </section>
                <Link to="/home">That's ok, I just want to look at dogs >>></Link>
            </div>
        )
    }
}

export default Register