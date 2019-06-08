import React from 'react'
import {Link} from 'react-router-dom'
import DogInfo from './DogInfo'
import DogForm from './DogForm'
import AddPhoto from './AddPhoto'
import Gallery from './AliceCarousel'

import '../css/Profile.css'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            user: '',
            dog: [],
            photos: [],
            addPhoto: false
        }
        this.logout = this.logout.bind(this)
        this.handleAddDog = this.handleAddDog.bind(this)
        this.handleAddPhoto = this.handleAddPhoto.bind(this)
        this.toggleAddPhoto = this.toggleAddPhoto.bind(this)
    }
    componentDidMount() {
        const savedId = localStorage.getItem('id')
        const savedUser = localStorage.getItem('user').replace(/"/g, '')
        // get user dog, if any
        fetch(baseURL + `/users/${savedId}/dog`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
            }
        }).then(res => res.json())
        .then(resJSON => {
            // console.log("the resJSON", resJSON)
            this.setState({
                userId: savedId,
                user: savedUser,
                dog: resJSON,
                photos: resJSON.dog_photos
            })
        })
        .catch(err => console.error(err))        
    }
    handleAddDog(formInputs) {
        // console.log(formInputs)
        //send fetch post to /users/:id/dogs
        fetch(baseURL + `/users/${this.state.userId}/dogs`, {
            method: 'POST',
            body: JSON.stringify(formInputs),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
        //update state on server response
        .then(json => {
            console.log(json)
            this.setState({
                dog: json.dog
            })
        }).catch(err => console.error(err))
    }
    handleAddPhoto(formInputs) {
        // console.log(formInputs)
        fetch(baseURL + `/dogs/${this.state.dog.id}/dogphotos`, {
            method: 'POST',
            body: JSON.stringify(formInputs),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
        .then(json => {
            const copyPhotos = [json, ...this.state.photos]
            this.setState({
                photos: copyPhotos,
                addPhoto: false
            })
        }).catch(err => console.error(err))
    }
    logout() {
        localStorage.clear()
        // Change authenticated state in App to false
        this.props.isAuthenticated(false)
    }
    toggleAddPhoto() {
        this.setState(prevState => ({
            addPhoto: !prevState.addPhoto
        }))
    }
    render() {
        // Temporary styling, replace when connecting component to stylesheet
        // const imgStyle = {
        //     width: '300px',
        //     height: '200px'
        // }
        return (
            <div className="container-profile">
                <h1>{this.state.user}'s Profile</h1>
                <aside>
                    <Link to="/home">
                        <button className="btn" >Browse</button>
                    </Link>
                    <button className="btn" onClick={this.logout}>Logout</button>
                    <button className="btn" onClick={this.toggleAddPhoto}>Add Photo</button>
                </aside>


                {(Object.keys(this.state.dog).length)
                ? <main>
                    {/* <div>
                        {this.state.dog.name}
                    </div>
                    <div>
                        Breed: {this.state.dog.breed}
                    </div>
                    <div>
                        Temperament: {this.state.dog.temperament}
                    </div>
                    <div>
                        Bio: {this.state.dog.bio}
                    </div>
                    <div>Area Code: {this.state.dog.zip_code}</div> */}

                    {this.state.addPhoto
                    ? <AddPhoto handleSubmit={this.handleAddPhoto}/>
                    : null}

                    {(this.state.photos &&this.state.photos.length) 
                    ? <div className="photo-container">
                        {/* {this.state.photos.map(photo => {
                            return(
                                <div key={photo.id}>
                                    <img style={imgStyle}
                                    src={photo.img_link}
                                    alt={photo.details}/>
                                    <div>{photo.details}</div> 
                                </div>   
                            )
                            })
                        } */}
                        <Gallery photos={this.state.photos} />
                      </div>
                    : <h3>No photos! Be sure to add some!</h3>
                    }

                    <DogInfo dog={this.state.dog}/>
                  </main>
                : <div>
                    <h1 className="center">You need a dog!</h1>
                    <DogForm handleSubmit={this.handleAddDog}/>
                  </div>
                }

                

            </div>
        )
    }
}

export default Profile