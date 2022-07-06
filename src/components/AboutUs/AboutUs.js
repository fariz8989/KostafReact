import React from "react";
import styles from "./AboutUs.css"

class AboutUs extends React.Component{
    render(){
        return(
          <section id="about-us">             
          <div className="value">
              <h1>Our Values</h1>
              <hr></hr>
             <div className="value-left">
                 <h2>Sinergis</h2>
                 <p>Menyinergikan setiap gagasan dan potensi seluruh elemen <br></br>ilmu adminitrasi fiskal  untuk mengoptimalisasi Program Kerja</p>
             </div>
             <div className="value-right">
                 <h2>Katalis</h2>
                 <p><span style={{fontWeight: 700}}>KOSTAF</span> berperan sebagai katalisator yang dapat mengakselerasi <br></br>pengembangan dan pemberdayaan potensi mahasiswa fiskal</p>
             </div>
             <div className="value-left">
                 <h2>Dinamis</h2>
                 <p> <span style={{fontWeight: 700}}>KOSTAF</span> mampu beradaptsi dan berinovasi dalam perubahan kondisi lingkungan <br></br>untuk menjaga eksistensi dan keoptimalan kinerja organisasi</p>
             </div>
       </div>
  </section>
        )
    }
}
export default AboutUs;