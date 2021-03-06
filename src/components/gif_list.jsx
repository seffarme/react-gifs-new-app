import React, { Component } from 'react';
import Gif from "./gif.jsx";

// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map(gif =>  <Gif id= {gif.id} key={gif.id} />);
//   }


//   render () {
//     return (
//       <div className="gif-list" selectGif = {props.selectGif} >
//        {this.renderList()}
//       </div>
//     );
//   }
// }


const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
