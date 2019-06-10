import React from 'react'
import Dog from './Dog'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

// console.log('current base URL:', baseURL)

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
        .then(res => res.json())
        .then(resJSON => {
            // console.log(resJSON)
            this.setState({
                dogs: resJSON
            })
        })
        .catch(err => console.error(err))
    }
    render() {
            return(
                <>
                    <h2 className="list-header">Browse Dogs</h2>
                    <div className="dog-container">
                        <div className="row">
                            <div className="col s12 cards-container">
                                {this.state.dogs.map(dog => {
                                        return(
                                            <Dog 
                                            key={dog.id} 
                                            dog={dog}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
            )
    }
}

export default DogList