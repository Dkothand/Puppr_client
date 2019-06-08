import React from 'react'

class DogInfo extends React.Component {
    render() {
        const {dog} = this.props
        return (
            <div>
                <h4>
                    {dog.name}
                </h4>
                <h4>
                    Breed: {dog.breed}
                </h4>
                <h4>
                    Temperament: {dog.temperament}
                </h4>
                <h4>Area Code: {dog.zip_code}</h4>
                <h4>
                    Bio: {dog.bio}
                </h4>
            </div>
        )
    }
}

export default DogInfo