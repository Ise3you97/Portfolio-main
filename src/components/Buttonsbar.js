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
      <div className="button"  onClick={() => window.open('https://www.dropbox.com/scl/fi/f1gjb06m3f2ex1xcodmy9/CV.pdf?rlkey=v031c3lxowxwonl57gnw0ayoh&st=cavs6kji&dl=0','_blank','noopener,noreferrer')}>
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
