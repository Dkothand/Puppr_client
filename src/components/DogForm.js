import React from 'react'
import Input from './Input'

class DogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            breed: '',
            bio: '',
            zip_code: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render() {
        return(
            // <label htmlFor={this.props.name}>
            //         {this.props.name}
            //     </label>
                
            //     <input
            //     id={this.props.id}
            //     name={this.props.name}
            //     type={this.props.type}
            //     placeholder={this.props.placeholder}
            //     value={this.props.value}
            //     onChange={this.props.handleChange}/>
            <form>

                <Input 
                id={"name"}
                name={"name"}
                type={"text"}
                placeholder={"Dog Name"}
                value={this.state.name}
                handleChange={this.handleChange}/>

                <Input 
                id={"breed"}
                name={"breed"}
                type={"text"}
                placeholder={"Dog Breed"}
                value={this.state.breed}
                handleChange={this.handleChange}/>

                {/* Temperament dropdown here */}

                <Input 
                id={"bio"}
                name={"bio"}
                type={"text"}
                placeholder={"Bio"}
                value={this.state.bio}
                handleChange={this.handleChange}/>

                <Input 
                id={"zip_code"}
                name={"zip_code"}
                type={"text"}
                placeholder={"Enter zip code"}
                value={this.state.zip_code}
                handleChange={this.handleChange}/>

                <input type="submit" value="Add Your Dog!"/>

            </form>
        )
    }
}

export default DogForm