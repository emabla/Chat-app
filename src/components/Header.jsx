import { Component } from "react";
import "../styles/Header.css"

class Header extends Component {
    render() {
        const {currentUser} = this.props
    return (
        <div className="header-container">
            <span
              className="avatar"
              style={{backgroundColor: currentUser.color}}
            /> 
            <h4>Welcome {currentUser.username}</h4>
        </div>
    )
    }
}

export default Header