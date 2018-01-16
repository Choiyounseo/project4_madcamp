import React from 'react';
// import styles from '../style.css';

var artwork = "https://i.pinimg.com/736x/94/53/69/9453696cabe07708d4f0707effaca63d--coldplay-ghost-stories-ghost-stories-album.jpg";
var cd_cover = "https://i.imgur.com/AIEVkNT.png";
var picture_frame = "https://i.imgur.com/MWa1EPQ.jpg";
var books_stack = "https://i.imgur.com/3REnuNI.png";

class Draggable extends React.Component{

  constructor(props){
    super(props);

    if(props.filetype === "music"){
      this.state = {
        dragflag: 0,
        background:{
          height: "100px",
          width: "150px",
          position: 'absolute',
          backgroundImage: 'url(' +cd_cover + ')',
          backgroundSize: "100% 100%",
          left: "15%",
          zIndex: "5"
        },
        foreground:{
          height: "90px",
          width: "90px",
          margin: "5px",
          position: 'absolute',
          backgroundImage: 'url(' +artwork + ')',
          backgroundSize: "100% 100%",
        }
      };
    }
    else if (props.filetype ==="document"){
      this.state = {
        dragflag: 0,
        background: {
          height: "100px",
          width: "150px",
          position: 'absolute',
          backgroundImage: 'url(' +books_stack + ')',
          backgroundSize: "100% 100%",
          left: "15%",
          zIndex: "5"
        },
        foreground: {
          height: "83px",
          width: "130px",
          position: 'absolute',
          backgroundImage: 'url(' +artwork + ')',
          backgroundSize: "100% 100%",
          margin: "10px"
        }
      };
    }
    else if(props.filetype ==="picture"){
      this.state = {
        dragflag:0,
        background: {
          height: "100px",
          width: "150px",
          position: 'absolute',
          backgroundImage: 'url(' +picture_frame + ')',
          backgroundSize: "100% 100%",
          left: "15%",
          zIndex: "5"
        },
        foreground: {
          height: "83px",
          width: "130px",
          position: 'absolute',
          backgroundImage: 'url(' +artwork + ')',
          backgroundSize: "100% 100%",
          margin: "10px"
        }
      };
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseDown(e){
    this.setState({dragflag: 0});
    window.addEventListener('mousemove', this.handleMouseMove, true);
  }

  handleMouseUp(e){
    window.removeEventListener('mousemove', this.handleMouseMove, true);
    if(this.state.dragflag === 1){
      console.log("drag");
    } else{
      console.log("click");
    }
  }

  handleMouseMove(e){
    const top = e.clientY-50 + 'px';
    const left = e.clientX-50 + 'px';
    const temp = this.state.background;
    temp['top'] = top;
    temp['left'] = left;
    temp['position'] = 'absolute';

    this.setState({
      dragflag : 1,
      background: temp
    });
  }

  render(){
      return(
        <div
          style = {this.state.background}
          onMouseDown = {this.handleMouseDown}
          onMouseUp = {this.handleMouseUp}>
          <div style = {this.state.foreground}></div>
        </div>
      );
  }
}


export default Draggable;
