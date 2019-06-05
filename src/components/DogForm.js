import React from 'react'
import Select from 'react-select'
import Input from './Input'

const temperaments = [
    {label: "Confident", value: "Confident"},
    {label: "Independent", value: "Independent"},
    {label: "Laid Back", value: "Laid Back"},
    {label: "Shy", value: "Shy"},
    {label: "Adaptable", value: "Adaptable"}
]

class DogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            breed: '',
            temperament: [],
            bio: '',
            zip_code: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setTemperament = this.setTemperament.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event) {
        // prevent page reload
        event.preventDefault()
        // pass state up to Profile handleAddDog
        this.props.handleSubmit({
            name: this.state.name,
            breed: this.state.breed,
            temperament: this.state.temperament,
            bio: this.state.bio,
            zip_code: this.state.zip_code
        })
    }
    setTemperament(temperament) {
        this.setState({
            temperament: temperament.value
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>

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

                {/* Temperament dropdown here */}
                <Select 
                placeholder={"Select Temperament"}
                options={temperaments}
                value={temperaments.filter(({value}) => value === this.state.temperament)}
                onChange={this.setTemperament}
                clearable={true}/>
                
                <input type="submit" value="Add Your Dog!"/>

            </form>
        )
    }
}

export default DogForm