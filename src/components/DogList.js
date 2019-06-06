import React from 'react'
import Dog from './Dog'

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
            console.log("this is the state in render",this.state.dogs)
            // const that = this.state.dogs
            // Temporary styling, replace when connecting component to stylesheet
            // const imgStyle = {
            //     width: '300px',
            //     height: '200px'
            // }

            return(
                <>
                    {/* <h1>{that.state.dogs[0].name}</h1> */}
                    <h2>List of Dogs</h2>
                    <div>
                        {this.state.dogs.map(dog => {
                                // console.log(dog.dog_photos[0]["id"])
                                return(
                                    // <div key={dog.id}>

                                    //     <h3>{dog.name}</h3>

                                    //     {(dog.dog_photos.length > 0)
                                    //     ? <img style={imgStyle} src={dog.dog_photos[0]["img_link"]} alt={dog.name}/>
                                    //     : <p>no photo</p>}
                                        

                                    // </div>

                                    <Dog dog={dog}/>
                                )
                            })
                        }
                    </div>
                </>
            )
    }
}

export default DogList