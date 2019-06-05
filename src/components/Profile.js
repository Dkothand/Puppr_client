import React from 'react'
import {Link} from 'react-router-dom'

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
            photos: []
        }
        this.logout = this.logout.bind(this)
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
            this.setState({
                userId: savedId,
                user: savedUser,
                dog: resJSON,
                photos: resJSON.dog_photos
            })
        })
        .catch(err => console.error(err))        
    }
    logout() {
        localStorage.clear()
        // Change authenticated state in App to false
        this.props.isAuthenticated(false)
    }
    render() {
        // Temporary styling, replace when connecting component to stylesheet
        const imgStyle = {
            width: '300px',
            height: '200px'
        }
        return (
            <div>
                <h1>{this.state.user}'s Profile</h1>
                <aside>
                    <Link to="/home">
                        <button>Browse</button>
                    </Link>
                    <button onClick={this.logout}>Logout</button>
                    <button>Add Dog</button>
                </aside>
                <main>
                    <div>
                        {this.state.dog.name}
                    </div>
                    <div>
                        {this.state.dog.bio}
                    </div>

                    {this.state.photos.map(photo => {
                        return(
                            <div key={photo.id}>
                                <img style={imgStyle}
                                src={photo.img_link}
                                alt={photo.details}/>
                                <div>{photo.details}</div> 
                            </div>   
                        )
                        })
                    }
                    
                </main>

            </div>
        )
    }
}

export default Profile