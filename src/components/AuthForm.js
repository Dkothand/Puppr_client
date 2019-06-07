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
        this.setState({
            username: '',
            password: ''
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
                <button className="btn waves-effect waves-light" type="submit">
                    Submit 
                    <i className="material-icons right">send</i>
                </button>

            </form>
        )
    }
}

export default AuthForm