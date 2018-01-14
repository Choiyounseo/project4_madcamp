import React from 'react';
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

        const headerlists = (
            <li><Link to = {`/${this.props.username}`+ "/roomimage"} >Choose Room</Link></li>
        )

        const mypagepath = this.props.isLoggedIn? `/${this.props.username}` : "/";

        return (
          <box className = "z-depth-5">
                  <Link to={mypagepath} className={styles.box_logo}>ROOM_DRIVER <br/> <div className={styles.box_semilogo}>Make your own Room!</div>
                  </Link>

                  <ul className = {styles.box_layout_whenlogin}>
                      {this.props.isLoggedIn ? headerlists : undefined}
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
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
