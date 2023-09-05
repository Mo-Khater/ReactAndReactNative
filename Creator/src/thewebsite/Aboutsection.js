import React from 'react'
import './css/portofolio.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {AiFillGithub,AiFillTwitterCircle,AiOutlineArrowRight,AiOutlineClose,AiOutlineArrowUp} from 'react-icons/ai'
import {BsFacebook,BsLinkedin,BsFillArrowRightCircleFill} from 'react-icons/bs'
function Aboutsection({data}) {
  return (
    <section id="about">
    <img src={data[0].photo} alt={data[0].fullname} className="khater"/>
    <div className="aboutme">
        <h5><span className="AboutMe">About me</span></h5>
        <h1>Designing Solutions, Not</h1>
        <h1>Just Visuals</h1>
        <p>{data[2].des}</p>
        <div className="projects">
            <Link to={data[2].projects}>
            <AiOutlineArrowRight className="bx bx-right-arrow-alt"/>
            <div>
                Click to see my projects
            </div>
        </Link>
        </div>
        <div className="experience">
            <Link to={data[2].experience}><AiOutlineArrowRight className="bx bx-right-arrow-alt"/>
            <div>
                Click to see my experience
            </div>
        </Link>
        </div>
        <Link to={data[1].cv} download className="CV">
            Download Cv
        </Link>
    </div>
</section>
  )
}

export default Aboutsection
