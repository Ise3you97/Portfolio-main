import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import './Styles/Buttonsbar.css';

function Buttonsbar() {
  return (
    <div className="wrapper">
      
      <div className="button" onClick={() => window.open('https://github.com/Ise3you97','_blank','noopener,noreferrer')}>
        <div className="icon">
          <i className="bi bi-github"></i>
          <span>Github</span>
        </div>
      </div>
      <div className="button"  onClick={() => window.open('https://www.dropbox.com/scl/fi/azv306hc6whbg71qj452s/CV-editado.pdf?rlkey=29l601yh40myata3ywzlj3isb&st=1kmrvrfb&dl=0','_blank','noopener,noreferrer')}>
        <div className="icon">
          <i className="bi bi-download"></i>
          <span>Curriculum</span>
        </div>
      </div>
      <div className="button"  onClick={() => window.open('https://play.google.com/store/apps/dev?id=8495791852526867317','_blank','noopener,noreferrer')}>
        <div className="icon">
          <i className="bi bi-google-play"></i>
          <span>Google Play</span>
        </div>
      </div>
      <div className="button"  onClick={() => window.open('https://www.linkedin.com/in/kelvin-solano-/','_blank','noopener,noreferrer')}>
        <div className="icon">
          <i className="bi bi-linkedin"></i>
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  );
}

export default Buttonsbar;
