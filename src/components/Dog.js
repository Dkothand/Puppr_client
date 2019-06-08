import React from 'react'
import ImageLoader from './ImageLoader'
import LazyLoad from 'react-lazy-load'

import noImage from '../assets/No-Image-Available.jpg'

class Dog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openInfo = this.openInfo.bind(this)
    }
    openInfo() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        // Temporary image sizing until we link css
        const imgStyle = {
            width: '300px',
            height: '200px'
        }
        return(
            // <div className="col s12 m6 l4">
                <div className="card hoverable">
    
                    {/* 
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="images/office.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                    */}
                    
                        <div className="card-image">
                            {
                                (this.props.dog.dog_photos.length > 0)
                                ? <LazyLoad
                                debounce={false}
                                offsetVertical={500}>
                                    {/* <img 
                                    onClick={this.openInfo}
                                    // style={imgStyle}
                                    src={this.props.dog.dog_photos[0]["img_link"]} 
                                    alt={this.props.dog.name}/> */}
                                    <ImageLoader
                                    src={this.props.dog.dog_photos[0]["img_link"]}/>
                                </LazyLoad>
                                    
                                    : <img
                                    style={imgStyle}
                                    src={noImage}
                                    alt={"Not available"}/>
                                }
                        </div>
                    
    
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                        {this.props.dog.name}
                            <i className="material-icons right">more_vert</i>
                        </span>
                    </div>
    
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            {this.props.dog.name}
                            <i className="material-icons right">close</i>
                        </span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                    
                    
                    {/* {
                    (this.state.isOpen)
                    ? <div>
                        <h5>Breed: {this.props.dog.breed}</h5>
                        <h5>Area Code: {this.props.dog.zip_code}</h5>
                        <h5>Temperament: {this.props.dog.temperament}</h5>
                        <h5>Bio: {this.props.dog.bio}</h5>
                    </div>
                    : null
                    } */}
    
    
                </div>
            // </div>
        )
    }
}

export default Dog