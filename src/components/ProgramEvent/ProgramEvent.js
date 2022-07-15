import React from 'react';
import styles from './ProgramEvent.css'
import Logo from './images/Logo'
class ProgramEvent extends React.Component{
    render(){
        return(
            <section className='program'>
                <div className='program-card taxplore'></div>
                <div className='program-card fcw'></div>
                <div className='program-card jelajah'></div>
                <div className='program-card mangkal'></div>
            </section>
        )
    }
}
export default ProgramEvent;