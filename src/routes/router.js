import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage,About,CareerTemplate, ProgramPage} from '../controller/PageController';

class Router extends React.Component{
    render(){
        return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<About/>}/>          
        <Route path="/career" element={<CareerTemplate/>}/>
        <Route path="/Program" element={<ProgramPage/>}/>
      </Routes>
    </BrowserRouter>
        )
    }
}
export default Router;