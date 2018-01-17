import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../style.css';
import { Draggable, Savebtn, Uploadfile, Getbtn } from 'components';
import room7 from '../images/room7.jpg';
// <Uploadfile rnumber = {1}/>
//Uploadfile: inputValue -> name & path -> p
//if click=1 -> means we click button to show icon! -> <Draggable /> call
class MyRoom1 extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          inputValue: "",
          path: "",
          filetype: "",
          objectlist: []
      };
      this.handlechangeValue = this.handlechangeValue.bind(this);
      this.handleGetobject = this.handleGetobject.bind(this);
    }

    handlechangeValue( name, p, ftype){
      this.setState({
          inputValue: name,
          path: p,
          filetype: ftype
      });
    }

    handleGetobject(objectList){
        this.setState({
            objectlist : objectList
        });
    }


    render(){

        return(
          <div className={styles.myroom_box}>
              <img className={styles.myroom_background} src = {'/'+room7}/>
              <Draggable filetype='music' url={this.state.path} leftpos={"15%"} toppos={"0%"}/>
              <Draggable filetype='document' url={this.state.path} leftpos={"25%"} toppos={"0%"}/>
              <Draggable filetype='picture' url={this.state.path} leftpos={"35%"} toppos={"0%"}/>
              <Uploadfile rnumber = {1} onchangeValue={this.handlechangeValue}/>
              <Getbtn onGetobject={this.handleGetobject}/>
              <Savebtn />
              {this.state.objectlist.map((x) => {
                console.log(x.filetype + "12314215435");
                console.log(this.state.path + "===pathpath");
                return <Draggable filetype={x.filetype} url={this.state.path} leftpos={x.leftpos} toppos={x.toppos}/>
              })}
          </div>
        );
    }
}
// inputValue: "",
// path: ""
export default MyRoom1;
