import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../style.css';
import { Draggable, Savebtn, Uploadfile } from 'components';
import room7 from '../images/room7.jpg';
// <Uploadfile rnumber = {1}/>
//Uploadfile: inputValue -> name & path -> p
class MyRoom1 extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          inputValue: "",
          path: "",
          ftype: ""
      };
      this.handlechangeValue = this.handlechangeValue.bind(this);
    }

    handlechangeValue( name, p, ftype ){
      this.setState({
          inputValue: name,
          path: p,
          filetype: ftype
      });
    }

    render(){
        return(
          <div className={styles.myroom_box}>
              <img className={styles.myroom_background} src = {'/'+room7}/>
              <Uploadfile rnumber = {1} onchangeValue={this.handlechangeValue}/>
              <Draggable filetype={this.state.filetype} url={this.state.path} />
              <Savebtn />
          </div>
        );
    }
}
// inputValue: "",
// path: ""
export default MyRoom1;
