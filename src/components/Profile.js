import React from 'react'

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
            dog: []
        }
    }
    componentDidMount() {
        const savedId = localStorage.getItem('id')
        const savedUser = localStorage.getItem('user').replace(/"/g, '')
        // get user dog, if any
        fetch(baseURL + `/users/${savedId}/dog`)
        // add callbacks here



        this.setState({
            userId: savedId,
            user: savedUser
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.user}'s Profile</h1>

            </div>
        )
    }
}

export default Profile