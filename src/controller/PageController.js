import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import Carousel from "../components/Carousel/Carousel"
import Program from "../components/Program/Program"
import Footer from "../components/Footer/Footer"
import AboutUs from "../components/AboutUs/AboutUs"
import Career from "../components/Career/Career"
class HomePage extends React.Component{
        render(){
            return(
                <>
                <NavBar/>
                 <Carousel/>
                <Program/>
                 <Footer/>
                 </>
            )
        }
}
class About extends React.Component{
    render(){
        return(<>
       <NavBar/>
       <AboutUs/>
       <Footer/>
       </>
       )
    }
}
class CareerTemplate extends React.Component{
    render(){
        return(<>
        <NavBar/>
        <Career/>
       </>
       )
    }
}
export {HomePage,About,CareerTemplate};