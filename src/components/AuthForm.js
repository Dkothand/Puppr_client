import React from 'react'
import Input from './Input.js'

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    handleSubmit(event) {
        // Stop page reload
        event.preventDefault()
        // Pass state up to authenticateUser()
        this.props.handleSubmit({
            username: this.state.username,
            password: this.state.password
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>

                <Input 
                id={"username"}
                name={"username"}
                type={"text"}
                placeholder={"Username"}
                value={this.state.username}
                handleChange={this.handleChange}/>

                <Input 
                id={"password"}
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                value={this.state.password}
                handleChange={this.handleChange}/>
                <input type="submit"/>

            </form>
        )
    }
}

export default AuthForm