import React from 'react'
import './css/portofolio.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AiFillGithub,AiFillTwitterCircle,AiOutlineArrowRight,AiOutlineClose,AiOutlineArrowUp} from 'react-icons/ai'
import {BsFacebook,BsLinkedin,BsFillArrowRightCircleFill} from 'react-icons/bs'
function Headersection({data}) {
  const navigate = useNavigate();
  const BackHandler = () => navigate("/");
  return (
    <header className="hh">
    <a onClick={BackHandler} className="Brand">{data[0].nickname}</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
            <li><a href="#Home" className="active" >Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#protfoilo">Portfoilo</a></li>
            <li><a href="#cosec">Contact</a></li>
        </ul>
    </nav>
    </header>  
  )
}

export default Headersection
