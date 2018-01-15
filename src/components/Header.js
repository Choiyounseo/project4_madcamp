import React from 'react';
import {Uploadfile} from 'components';
import { Link } from 'react-router';
import styles from '../style.css';

class Header extends React.Component {
    render() {

        const loginButton = (
            <li>
                <Link to="/login">
                    LOGIN
                </Link>
            </li>
        );

        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}>LOGOUT</a>
                <br/>
                <a>Hello, {this.props.username}!</a>
            </li>
        );

        const upload = (<li><Uploadfile pathname = {this.props.pathname} /></li>);

        let path1 = (this.props.pathname === (`/${this.props.username}`+ "/1")) ? upload : undefined;
        let path2 = (this.props.pathname === (`/${this.props.username}`+ "/2")) ? upload : undefined;
        let path3 = (this.props.pathname === (`/${this.props.username}`+ "/3")) ? upload : undefined;
        let path4 = (this.props.pathname === (`/${this.props.username}`+ "/4")) ? upload : undefined;

        const headerlists = (
          <div>
            <li><Link to = {`/${this.props.username}`+ "/roomimage"} >Choose Room</Link></li>
          </div>
        );

        const uploadlists = (
            <div>
                {path1}
                {path2}
                {path3}
                {path4}
            </div>
        );

        const mypagepath = this.props.isLoggedIn? `/${this.props.username}` : "/";

        // <h1>{this.props.pathname}</h1>
        return (
          <box className = "z-depth-5">
                  <Link to={mypagepath} className={styles.box_logo}>ROOM_DRIVER <br/> <div className={styles.box_semilogo}>Make your own Room!</div>
                  </Link>

                  <ul className = {styles.box_layout_whenlogin}>
                      {this.props.isLoggedIn ? headerlists : undefined}
                  </ul>

                  <ul className ={styles.box_layout_whenroomchosen}>
                      {uploadlists}
                  </ul>

                  <ul className={styles.box_layout}>
                    {this.props.isLoggedIn ? logoutButton : loginButton }
                 </ul>
        </box>
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func,
    pathname: React.PropTypes.string,
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
