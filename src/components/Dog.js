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
        const {dog} = this.props
        // Image sizing for stock photo not found
        const imgStyle = {
            width: '300px',
            height: '200px'
        }
        return(
                <div className="card hoverable">
                        <div className="card-image">
                            {(dog.dog_photos.length > 0)
                                ? <LazyLoad
                                debounce={false}
                                offsetVertical={500}>
                                    <ImageLoader
                                    src={dog.dog_photos[0]["img_link"]}/>
                                </LazyLoad>
                                    
                                : <img
                                style={imgStyle}
                                src={noImage}
                                alt={"Not available"}/>
                                }
                        </div>
                    
    
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                        {dog.name}
                            <i className="material-icons right">more_vert</i>
                        </span>
                    </div>
    
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            {dog.name}
                            <i className="material-icons right">close</i>
                        </span>
                        <div>
                            <h6>Breed: {dog.breed}</h6>
                            <h6>Area Code: {dog.zip_code}</h6>
                            <h6>Temperament: {dog.temperament}</h6>
                            <h6>Bio: {dog.bio}</h6>
                            <button className="btn btn-flat btn-small">Connect!</button>
                        </div>  
                    </div>
                </div>
        )
    }
}

export default Dog