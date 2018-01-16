import React from 'react';
import styles from '../style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

//filetype, roomnumber, id, filename, mimetype, size
//id: Header에서 this.props.username넘겨줌!
//roomnumber: Header에서 this.props.rnumber넘겨줌!
class Uploadfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ftype: "",
            file: ""
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
//       Materialize.toast( e.target.name , 2000);
    handleChange(e) {
       let nextState = {};
       nextState[this.state.ftype] = e.target.name;
       this.setState({
          ftype: e.target.name,
          file: e.target.files[0]
       });

       Materialize.toast(e.target.name);
    }

    handleUpload(){
      let filetype = this.state.ftype;
      let file = this.state.file;
      let roomnumber = this.props.rnumber;
      let id = this.props.username;

      let formData = new FormData();
      formData.append('filename', file.name);
      formData.append('mimetype', file.type);
      formData.append('size', file.size);

      this.props.onUpload( filetype, roomnumber, id, file, formData);
    }

    render(){

      // const musicBox = (
      //   <div className={styles.uploadfile_box} name="music" encType="multipart/form-data" noValidate>
      //     <input className={styles.uploadfile_box_upload} readOnly="Music" type="file" name="music" onChange={this.handleChange}/>
      //     <button className={styles.uploadfile_box_music} >Music</button>
      //     <div className = {styles.uploadfile_submit}><button onClick={this.handleUpload}> MUSIC </button></div>
      //   </div>
      // );
      //
      // const documentBox = (
      //   <div className={styles.uploadfile_box} name="document" encType="multipart/form-data" noValidate>
      //     <input className={styles.uploadfile_box_upload} readOnly="Document" type="file" name="document" onChange={this.handleChange}/>
      //     <button className={styles.uploadfile_box_document} >Document</button>
      //     <div className = {styles.uploadfile_submit}><button onClick={this.handleUpload}> DOCU </button></div>
      //   </div>
      // );
      //
      // const pictureBox = (
      //   <div className={styles.uploadfile_box} name="picture" encType="multipart/form-data" noValidate>
      //     <input className={styles.uploadfile_box_upload} readOnly="Picture" type="file" name="picture" onChange={this.handleChange}/>
      //     <button className={styles.uploadfile_box_picture} >Picture</button>
      //     <div className = {styles.uploadfile_submit}><button onClick={this.handleUpload}> PICTU </button></div>
      //   </div>
      // );

      return(
          <div>
            <form className={styles.uploadfile_box} method="post" action="/api/file/music" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Music" type="file" name="music"/>
              <button className={styles.uploadfile_box_music}>Music</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> MUSIC </button></div>
            </form>

            <form className={styles.uploadfile_box} method="post" action="/api/file/document" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Documents" type="file" name="document"/>
              <button className={styles.uploadfile_box_document}>Documents</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> DOCU </button></div>
            </form>

            <form className={styles.uploadfile_box} method="post" action="/api/file/picture" encType="multipart/form-data" noValidate>
              <input className={styles.uploadfile_box_upload} readOnly="Picture" type="file" name="picture" />
              <button className={styles.uploadfile_box_picture}>Picture</button>
              <div className = {styles.uploadfile_submit}><button type="submit"> PICTU </button></div>
            </form>
          </div>
      );
    }
}
// <form className={styles.uploadfile_box} method="post" action="/api/file/music" encType="multipart/form-data" noValidate>
//   <input className={styles.uploadfile_box_upload} readOnly="Music" type="file" name="music"/>
//   <button className={styles.uploadfile_box_music}>Music</button>
//   <div className = {styles.uploadfile_submit}><button type="submit"> MUSIC </button></div>
// </form>
//
// <form className={styles.uploadfile_box} method="post" action="/api/file/document" encType="multipart/form-data" noValidate>
//   <input className={styles.uploadfile_box_upload} readOnly="Documents" type="file" name="document"/>
//   <button className={styles.uploadfile_box_document}>Documents</button>
//   <div className = {styles.uploadfile_submit}><button type="submit"> DOCU </button></div>
// </form>
//
// <form className={styles.uploadfile_box} method="post" action="/api/file/picture" encType="multipart/form-data" noValidate>
//   <input className={styles.uploadfile_box_upload} readOnly="Picture" type="file" name="picture" />
//   <button className={styles.uploadfile_box_picture}>Picture</button>
//   <div className = {styles.uploadfile_submit}><button type="submit"> PICTU </button></div>
// </form>

Uploadfile.propTypes = {
    rnumber: React.PropTypes.number,
    username: React.PropTypes.string
};

export default Uploadfile;
