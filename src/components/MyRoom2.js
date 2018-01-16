import React from 'react';
import styles from '../style.css';
import { Draggable, Savebtn } from 'components';
import room2 from '../images/room2.jpg';

class MyRoom2 extends React.Component{
    render(){
        return(
          <div className={styles.myroom_box}>
              <img className={styles.myroom_background} src = {'/'+room2} />
              <Draggable filetype='document' />
              <Savebtn />
          </div>
        );
    }
}

export default MyRoom2;
