import React from 'react';
import styles from '../style.css';
import { Draggable, Savebtn } from 'components';
import room7 from '../images/room7.jpg';

class MyRoom1 extends React.Component{
    render(){
        return(
          <div className={styles.myroom_box}>
              <img className={styles.myroom_background} src = {'/'+room7}/>
              <Draggable filetype='music' />
              <Draggable filetype='document' />
              <Draggable filetype='picture' />
              <Savebtn />
          </div>
        );
    }
}

export default MyRoom1;
