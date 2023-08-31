import React from 'react';

function Footer() {
  return (
    <footer>
      <h2>CREATOR</h2>
      <div className="flex-container-footer">
        <section className="info">
          <div className="text">
            <p>A COMPLETE ASSISTANCE
            <br />
            FOR JOB APPLICANTS</p>
          </div>
          <div>
            <p>TERMS OF SERVICE
            <br />
            PRIVACY POLICY</p>
          </div>
        </section>
        <section className="contact">
          <h4>GET IN TOUCH</h4>
          <p>
            SAT-THURSDAY
            <br />
            10AM-4PM EET
          </p>
          <ul>
            <li>CONTACT</li>
            <li><a href="">FACEBOOK</a></li>
            <li><a href="">LINKEDIN</a></li>
          </ul>
        </section>
        <section className="services">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#letter">LETTER</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">ABOUT</a></li>
          </ul>
        </section>
        <section className="services">
          <h4>OUR TEAM</h4>
          <ul>
            <li><a href="">MOHAMED KHATER</a></li>
            <li><a href="">MAZEN ADEL</a></li>
            <li><a href="">OMAR MOHAMMED</a></li>
            <li><a href="">MOHAMMED ASHRAF</a></li>
            <li><a href="">OMAR HASHEM</a></li>
          </ul>
        </section>
      </div>
      <p>Copyright © 2023 Creator</p>
    </footer>
  );
}

export default Footer;