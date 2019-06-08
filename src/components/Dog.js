import React from 'react'

import noImage from '../assets/No-Image-Available.jpg'

class Dog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openInfo = this.openInfo.bind(this)
    }
    openInfo() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        // Temporary image sizing until we link css
        const imgStyle = {
            width: '300px',
            height: '200px'
        }
        return(
            <div>
                <h3>{this.props.dog.name}</h3>

                {
                (this.props.dog.dog_photos.length > 0)
                ? <img 
                    onClick={this.openInfo}
                    style={imgStyle}
                    src={this.props.dog.dog_photos[0]["img_link"]} 
                    alt={this.props.dog.name}/>
                : <img
                    style={imgStyle}
                    src={noImage}
                    alt={"Not available"}/> /* Replace with stock photo link*/
                }
                
                {
                (this.state.isOpen)
                ? <div>
                    <h5>Breed: {this.props.dog.breed}</h5>
                    <h5>Area Code: {this.props.dog.zip_code}</h5>
                    <h5>Temperament: {this.props.dog.temperament}</h5>
                    <h5>Bio: {this.props.dog.bio}</h5>
                </div>
                : null
                }


            </div>
        )
    }
}

export default Dog