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
                    <article className="landing-text">
                        <h1 className="landing-header">Puppr</h1>
                        <h4>A way to meet and play with other dogs.</h4>
                        <Link to="/login">
                            <button className="btn btn-landing">Register</button>
                        </Link>
                        <Link to="/home">
                            <button className="btn btn-landing">Browse</button>
                        </Link>
                    </article>
                </header>
            </div>
        )
    }
}

export default LandingPage