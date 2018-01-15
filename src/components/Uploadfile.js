import React from 'react';
import styles from '../style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class Uploadfile extends React.Component{
//id, className 등 css다시 지정해주기...
// <label className={styles.uploadfile_box_label}>Upload file: </label>

    render(){
      return(
          <div>
            <form className={styles.uploadfile_box} method="post" action="/music" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Music" type="file" name="music"/>
              <button className={styles.uploadfile_box_music}>Music</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> MUSIC </button></div>
            </form>

            <form className={styles.uploadfile_box} method="post" action="/document" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Document" type="file" name="document"/>
              <button className={styles.uploadfile_box_document}>Document</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> DOCU </button></div>
            </form>

            <form className={styles.uploadfile_box} method="post" action="/music" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Picture" type="file" name="picture" />
              <button className={styles.uploadfile_box_picture}>Picture</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> PICTU </button></div>
            </form>
          </div>
      );
    }
}

//pathname : /{username}/'number' 형태....
Uploadfile.propTypes = {
    pathname: React.PropTypes.string,
};

export default Uploadfile;
