import React from 'react'
import Input from './Input'

class AddPhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img_link: '',
            details: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.handleSubmit({
            img_link: this.state.img_link,
            details: this.state.details
        })
        this.setState({
            img_link: '',
            details: ''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>

                <Input 
                id={"img_link"}
                name={"img_link"}
                type={"text"}
                placeholder={"Photo link or URL"}
                value={this.state.img_link}
                handleChange={this.handleChange}/>

                <Input 
                id={"details"}
                name={"details"}
                type={"text"}
                placeholder={"Enter a message for the photo!"}
                value={this.state.details}
                handleChange={this.handleChange}/>

                <input type="submit" value="Add Photo"/>

            </form>
        )
    }
}

export default AddPhoto