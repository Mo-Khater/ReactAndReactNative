import React from 'react'
import './css/portofolio.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {AiFillGithub,AiFillTwitterCircle,AiOutlineArrowRight,AiOutlineClose,AiOutlineArrowUp} from 'react-icons/ai'
import {BsFacebook,BsLinkedin,BsFillArrowRightCircleFill} from 'react-icons/bs'
function homesection({data}) {
  return (
    <section id="Home" className="home">
    <div className="me">
     <h3>Hello visitors, it's me</h3>
     <h1>{data[0].fullname}</h1>
     <h3><span>{data[0].title}</span></h3>
    
     <ul class="mylinks">
         <Link to={data[1].github} target="_blank"><AiFillGithub/></Link>
         <Link to={data[1].facebook} target='_blank' ><BsFacebook/></Link>
         <Link to={data[1].twitter}><AiFillTwitterCircle/></Link>
         <Link to={data[1].linkedin} target="_blank"><BsLinkedin/></Link>
     </ul>
     <a href={data[1].cv} download="" className="CV">Download Cv</a>
    </div>
    <div className="myimage">
     <img src={data[0].photo} alt={data[0].fullname} className="khater"/>
    </div>
 </section>
  )
}

export default homesection
