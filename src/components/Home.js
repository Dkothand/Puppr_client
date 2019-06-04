import React from 'react'
import {Link} from 'react-router-dom'
import DogList from './DogList.js'

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://afternoon-shore-81372.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://afternoon-shore-81372.herokuapp.com'
}

console.log('current baseURL:', baseURL)

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            user: ''
        }
        this.logout = this.logout.bind(this)
    }
    componentDidMount() {
        // get user authentication from localStorage
        const id = localStorage.getItem('id')
        // console.log(id)
        if (!id) {
            return
        } else {
            fetch(`${baseURL}/users/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
                }
            }).then(res => res.json())
            .then(resJSON => this.setState({
                isAuthenticated: true,
                user: resJSON.username
            }))
            .catch(err => console.error(err))
        }
    }
    logout() {
        // Clear token and user info from localStorage
        localStorage.clear()
        // Redirect to login page
        this.props.history.push("/login")
    }
    render() {
        return(
            <div>
                {this.state.isAuthenticated
                ? <div>
                    <h1>Hello {this.state.user}!</h1>
                    <button onClick={this.logout}>Logout</button>
                    <button>My Profile</button>
                  </div>
                : <div>
                    <h1>Browse Dogs</h1>
                    <Link to="/login">
                        <button>Signup</button>
                    </Link>
                  </div>
                }
                
                <DogList />
            </div>
            
        )
    }
}

export default Home