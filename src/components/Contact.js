import React, { useState, useEffect } from "react";
import "./Styles/Contact.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Componente Contact que muestra una tarjeta de contacto con un efecto de flip.
 * Permite al usuario ver la información de contacto en la parte posterior de la tarjeta.
 */
function Contact() {
  return (
    <div id="contact" className="contact-container">
      {/* Tarjeta de contacto con efecto de flip */}
      <div className="contact-flip-card">
        <div className="contact-flip-card-inner">
          {/* Cara frontal de la tarjeta */}
          <div className="contact-flip-card-front">
            <i className="bi bi-suit-club-fill card-icon-top-left"></i>
            <i className="bi bi-suit-club-fill card-icon-bottom-right"></i>
            <img
              className="contact-img"
              src="https://dl.dropboxusercontent.com/s/odp5feiz10znnnn4uuxr5/Perfil.jpg?rlkey=9eai2zm4cj3dn89udxaotxhj4&st=mj5r9zoc"
              alt="Avatar"
            />
          </div>
          {/* Cara posterior de la tarjeta */}
          <div className="contact-flip-card-back">
            <i className="bi bi-suit-club-fill card-icon-top-left"></i>
            <i className="bi bi-suit-club-fill card-icon-bottom-right"></i>
            <h1 className="contact-title">
              If you want to contact me, you can do so.
            </h1>
            <img
            src="https://dl.dropboxusercontent.com/s/4ph5jn2m5w55bd99m22n7/Sin-t-tulo.png?rlkey=qoc74w4mxc8s8vgtlfa82x6b3&st=4e7sjw3f&dl=0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
