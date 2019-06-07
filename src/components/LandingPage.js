import React from 'react'
import {Link} from 'react-router-dom'

import '../css/LandingPage.css'
import webm from '../assets/Border-Collies.webm'
import mp4 from '../assets/Border-Collies.mp4'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <video autoPlay={true} muted={true} loop id="bgvid">
                    <source src={webm} type="video/webm"/>
                    <source src={mp4} type={"video/mp4"}/>
                </video>
                
                {/* Needs to be below video to be visible */}
                <header className="landing-content">
                    <h1>Puppr</h1>
                    <Link to="/login">
                        <button>Register</button>
                    </Link>
                    <Link to="/home">
                        <button>Browse</button>
                    </Link>
                </header>
            </div>
        )
    }
}

export default LandingPage