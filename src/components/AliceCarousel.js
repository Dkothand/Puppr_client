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
      <ul>{this.state.items.map((item, i) =>
        <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
      </ul>;

    renderGallery() {
      const { currentIndex, items } = this.state;
      const { photos } = this.props;
      const imgStyle = {
        width: '100%',
        height: 'auto'
    }

      return (<AliceCarousel
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}
      >
        { photos.map((photo, i) => 
        <div key={i} className="carousel-item">
            {/* <h2>{ item }</h2> */}
            <img 
            style={imgStyle}
            src={photo.img_link} 
            alt={photo.details}/>
        </div>) }
      </AliceCarousel>);
    }

    render() {
      return (
        <div>
          <h3>Photos</h3>
          {/* { this.renderThumbs() } */}
          <button onClick={() => this.slidePrev()}>Prev button</button>
          <button onClick={() => this.slideNext()}>Next button</button>
          {/* <h3>React Alice Carousel</h3> */}
          { this.renderGallery() }
        </div>
      );
    }
}

export default Gallery