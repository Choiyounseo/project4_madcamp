import React from 'react';
import styles from '../style.css';
// <h1 className = "z-depth-3">Save</h1>

class Savebtn extends React.Component{
    render(){
        return(
            <form className={styles.savebtn} method="post" action="/api/file" encType="multipart/form-data" noValidate>
              <button type="submit">Save</button>
            </form>
        );
    }
}

export default Savebtn;
//get때 보내는 정보 -> 모든 draggable 위치,-> filename?

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
