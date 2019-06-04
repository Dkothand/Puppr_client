import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Puppr</h1>
                <Link to="/login">
                    <button>Register</button>
                </Link>
                <Link to="/home">
                    <button>Browse</button>
                </Link>
            </div>
        )
    }
}

export default LandingPage