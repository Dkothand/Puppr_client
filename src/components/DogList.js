import React from 'react'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

console.log('current base URL:', baseURL)

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
        fetch(baseURL + '/dogs')
        // .then(res => res.json())
        .then(res => res.text())
        .then(text => console.log(text))
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