import React from 'react'

class DogList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: []
        }
    }
    componentDidMount() {
        // Gets dogs from index route on component mount
        this.getDogs()
    }
    getDogs() {
        // Returns array of dogs from API /dogs index route and sets this.state.dogs to returned json
        fetch('/dogs')
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON.dogs)
            this.setState({
                dogs: resJSON.dogs
            })
        })
        .catch(err => console.error(err))
    }
    render() {
        return(
            <>
                <h2>List of Dogs</h2>
                <ul>
                    {this.state.dogs.map(dog => {
                        return(
                            <li key={dog.id}>{dog.name}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default DogList