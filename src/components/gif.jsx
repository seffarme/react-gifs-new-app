import React, { Component } from 'react';

class Gif extends Component {
  handleChange = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleChange} />
    );
  }
}

export default Gif;
