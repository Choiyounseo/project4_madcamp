import React from 'react';
import styles from '../style.css';
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';
import room4 from '../images/room4.jpg';
import { Link } from 'react-router';
//<img src = {room1}/>하고싶다... 나주에 예준이 물어보기....

class Chooseroom extends React.Component{
    render(){
        return(
          <div className ={styles.chooseroom_box}>
            <p>Choose your room</p>
              <div className={styles.chooseroom_img}>
                  <Link to ={`/${this.props.username}`+ "/myroom1"}><img className = "z-depth-5" src = "http://4.bp.blogspot.com/-GLGhtQ-CJlg/Urh-1l-LuuI/AAAAAAAAL9I/YUCDq-MOvI0/s1600/IMG_1013.JPG"/></Link>
                  <img className = "z-depth-5" src = "https://i.ytimg.com/vi/KFKy7E1hXkI/maxresdefault.jpg"/>
                  <img className = "z-depth-5" src = "https://png.pngtree.com/thumb_back/fh260/back_pic/04/10/31/23581736435b9d9.jpg"/>
                  <img className = "z-depth-5" src = "http://www.download3dhouse.com/wp-content/uploads/2013/02/Yellow-background-wall-wo