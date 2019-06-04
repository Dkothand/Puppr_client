import React from 'react'
import AuthForm from './AuthForm.js'


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
        this.state = {
          //pass
        }
        this.authenticateUser = this.authenticateUser.bind(this)
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
        .then(resJSON => console.log(resJSON))
        .catch(err => console.error(err))
    }
    render() {
        return(
            <div>
                <h2>Login</h2>
                <AuthForm handleSubmit={this.authenticateUser} />
    
                <h2>Signup</h2>
                <AuthForm handleSubmit={this.registerUser} />
            </div>
        )
    }
}

export default Register