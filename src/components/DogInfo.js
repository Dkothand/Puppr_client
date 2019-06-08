import React from 'react'

class DogInfo extends React.Component {
    render() {
        const {dog} = this.props
        return (
            <div className="dog-info">
                <h4 className="center">
                    {dog.name}
                </h4>
                <h4 className="bio-content">
                    Breed: {dog.breed}
                </h4>
                <h4 className="bio-content">
                    Temperament: {dog.temperament}
                </h4>
                <h4 className="bio-content">Area Code: {dog.zip_code}</h4>
                <h4 className="bio-content">
                    Bio: {dog.bio}
                </h4>
            </div>
        )
    }
}

export default DogInfo