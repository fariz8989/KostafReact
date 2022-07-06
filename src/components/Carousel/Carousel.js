import React from "react";
import styles from "./Carousel.css"

class Carousel extends React.Component{
    render(){
        return(
       <div id="carouselExampleIndicators" className="carousel slide carousel-background" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="d-block w-100"  alt="First slide">
              <div className="title-text-container">
                <h2 className="title-text">Welcome <br></br>On-Board Managers</h2>
                <p className="title-p">The journey of becoming part of KOSTAF has come to an end.<br></br> We are proudly announce the newest family members, <span style={{fontWeight: 700}}>Managers of KOSTAF FIA UI 2022!</span> <br></br>There are tons of exciting journeys and joys waiting ahead.</p>
                <button className="title-button">View Now!</button>
            </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="d-block w-100"  alt="Second slide">
              <div className="title-text-container">
                <h2 className="title-text">Associate Recruitment!</h2>
                <p className="title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <button className="title-button">Register Now!</button>
            </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100"  alt="Third slide">
            <div className="title-text-container">
                <h2 className="title-text">Today Tax Update!</h2>
                <p className="title-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <button className="title-button">View Now!</button>
            </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        )
    }
}
export default Carousel;