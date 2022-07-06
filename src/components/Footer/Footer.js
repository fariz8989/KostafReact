import React from "react";
import styles from "./Footer.css"


class Footer extends React.Component{
    render(){
        return(<>
    <div id="tagline">
        <h1>#UnifyProgressive</h1>
     </div>
     <div id="footer">
       <h2 class="footer-title">Connect With Us</h2>
        <a href="http://instagram.com/kostaffiaui"><i class="fa-brands fa-instagram fa-2xl footer-icon"></i></a>
        <a href="https://www.youtube.com/channel/UCl17wux0ejSXhGWX2xYqWBQ"><i class="fa-brands fa-youtube fa-2xl footer-icon"></i></a>
        <a href="http://twitter.com/kostaffiaui"><i class="fa-brands fa-twitter fa-2xl footer-icon"></i></a>
        <a href="https://open.spotify.com/show/3XKzOKdojJWRZS1mLpmzf6?si=YWCj7-8pQluQAP73T6W8vw"><i class="fa-brands fa-spotify fa-2xl footer-icon"></i></a>
        <p class="footer-text">©FarizS 2022</p>
     </div>
     </>
        )
    }
}
export default Footer;