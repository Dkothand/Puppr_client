// This component and matching .css is from Ross Bulat's guide on lazy image loading
// https://medium.com/@rossbulat/lazy-image-loading-in-react-the-full-breakdown-4026619de2df

import React from "react";
import '../css/ImageLoader.css'

const _loaded = {};

class ImageLoader extends React.Component {
  
  //initial state: image loaded stage 
  state = {
    loaded: _loaded[this.props.src]
  };

  //define our loading and loaded image classes
  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded"
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };


  render() {
  
    let { className, loadedClassName, loadingClassName, ...props } = this.props;

    className = `${className} ${this.state.loaded
      ? loadedClassName
      : loadingClassName}`;

    return <img 
             src={this.props.src} 
            //  onClick={this.props.onClick} 
             className={className} 
             onLoad={this.onLoad} />;
  }
}

export default ImageLoader;