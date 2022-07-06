import React from 'react';
import styles from './Career.css'
import Logo from './images/Logo'
class Career extends React.Component{
    state={
        src:"",


    }
    render(){
        return(
    <section id='career'>
        <div class="title">
          <h1>Job & Internship List</h1>
        </div>
            <div className='job-container'>
                <div className='logo-container'>
                 <img className='job-logo' src={Logo.logoShopee} alt=''></img>
                </div>
                <div className='job-title'>
                    <h2>Tax Associate at Shopee</h2>
                </div>
                <div className='job-req'>
                    <div>
                        <p className='job-req-title'>Min.Experience</p>
                        <p className='job-req-text'>4 Years</p>
                    </div>
                    <div>
                        <p className='job-req-title'>Sertifications</p>
                        <p className='job-req-text'>Brevet A/B/C</p>
                    </div>
                    <div>
                        <p className='job-req-title'>Degree</p>
                        <p className='job-req-text'>Accounting <br></br>Fiscal Administrations</p>
                    </div>
                </div>
                <div className='job-button-container'>
                    <button className='job-button'>Apply</button>
                </div>
                
            </div>
            </section>
        )
    }
}
export default Career;