import React from 'react';
import styles from '../style.css';
import { Draggable, Savebtn } from 'components';
import room6 from '../images/room6.jpg';

class MyRoom3 extends React.Component{
    render(){
        return(
          <div className={styles.myroom_box}>
              <img className={styles.myroom_background} src = {'/'+room6}/>
              <Draggable filetype='picture' />
              <Savebtn />
          </div>
        );
    }
}

export default MyRoom3;
