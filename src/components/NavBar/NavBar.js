import React from "react";
import styles from "./navBar.css"
import logo from "./images/kostaf.png"

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img className="logo"src={logo} alt=""></img>KOSTAF FIA UI</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="/aboutus">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Student</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/career">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/program">Programs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">Tax Update</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Article</a>
                  </li>
              </ul>
            </div>
          </nav>            
        )
    }
}
export default NavBar;