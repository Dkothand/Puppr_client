import React from 'react'

class Dog extends React.Component {
    render() {
        const imgStyle = {
            width: '300px',
            height: '200px'
        }
        return(
            <div>
                <h3>{this.props.dog.name}</h3>

                {(this.props.dog.dog_photos.length > 0)
                ? <img style={imgStyle} src={this.props.dog.dog_photos[0]["img_link"]} alt={this.props.dog.name}/>
                : <h3>No photos</h3> /* Replace with stock photo */}
                
                <img/>
            </div>
        )
    }
}

export default Dog