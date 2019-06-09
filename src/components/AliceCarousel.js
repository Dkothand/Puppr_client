// Using npm package react-alice-carousel
// https://github.com/maxmarinich/react-alice-carousel

import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {
    constructor() {
      super();
      this.state = {
        currentIndex: 0,
        items: [1,2,3]
      };
    }

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    renderThumbs = () =>
      <ul className="center">{this.props.photos.map((photo, i) =>
        // <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
        <img key={i}
            onClick={() => this.slideTo(i)}
            className={"carousel-img"}
            style={
              {
                width: '75px',
                height: '50px'
              }
            }
            src={photo.img_link} 
            alt={photo.details}/>)}
      </ul>;

    renderGallery() {
      const { currentIndex } = this.state;
      const { photos } = this.props;
      const imgStyle = {
        width: '100%',
        height: '300px'
      }

      return (
      <AliceCarousel
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}>

        { photos.map((photo, i) => 
        <div key={i} className="carousel-item">
            {/* <h2>{ item }</h2> */}
            <img 
            className={"carousel-img"}
            style={imgStyle}
            src={photo.img_link} 
            alt={photo.details}/>
            <h6 className="center">{photo.details}</h6>
        </div>) }
      </AliceCarousel>);
    }

    render() {
      return (
        <div className="photo-gallery">
          <h3>Photos</h3>
          {/* <h3>React Alice Carousel</h3> */}
          <button className="btn btn-carousel" onClick={() => this.slidePrev()}>
            <i class="material-icons">arrow_back</i>
          </button>
          <button className="btn btn-carousel" onClick={() => this.slideNext()}>
            <i class="material-icons">arrow_forward</i>
          </button>
          { this.renderGallery() }
          { this.renderThumbs() }
        </div>
      );
    }
}

export default Gallery