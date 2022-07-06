import React from "react";
import styles from "./Program.css"


class Program extends React.Component{
    render(){
        return(
            <div id="services">
            <h1>Community Services</h1>
            <div class="service">
             <div class="service-list">
               <h2>Tax in FIA<br></br>Online Edition</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.</p>
                 <button class="service-button">Register</button>
      
     
             </div>
             <div class="service-list">
               <h2>UMKM Tax <br></br>Community</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.</p>
                 <button class="service-button">Register</button>
      
             </div>
             <div class="service-list">
               <h2>Tax Goes <br></br>To School</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.</p>
                 <button class="service-button">Register</button>
             </div>
            </div>
          </div>
        )
    }
}
export default Program;