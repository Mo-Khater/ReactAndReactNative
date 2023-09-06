import React, { useEffect, useState } from 'react';
import data from './data';
import "./css/about.css"
import { Link } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
function About() {
    const [makers,setmakers]=useState(data);
    const [index,setindex]=useState(0);
    const increaseindex=()=>{
        if(index==makers.length-1)
        setindex(0);
    else
        setindex(index+1)
    }
    const decreaseindex=()=>{
        if(index==0)
        setindex(makers.length-1);
    else
        setindex(index-1)
    }
    useEffect(()=>{
        const time=setInterval(()=>{
            if(index==0)
        setindex(makers.length-1);
    else
        setindex(index-1)
        },5000)
        return ()=>clearInterval(time);
    },[index])
  return (
    <>
     <header className="hh">
    <a href="/" className="Brand">CREATOR</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
        <li><Link className="a" to='/'>HOME</Link></li>
                    <li><Link className="a" to='/about'>ABOUT</Link></li>
        </ul>
    </nav>
    </header>  
    <div className='about'>
        <div className='head'>
        <h2>Who we are</h2>
        </div>
        <div className='content'>
           { makers.map((person,personindex)=>{
                const {id,name,image,title,quote}=person;
                let change='right';
                if(personindex==index)
                change='active';
                if(personindex==index-1||(index==0&&personindex==makers.length-1))
                change='left';
                return (
                    <section className={`ssss ${change}`} key={id}>
                    <img src={image} className='img-person'/>
                    <h1 className='text'>{name}</h1>
                    <p className='title'>{title}</p>
                    <p className='paragraph'>{quote}</p>
                    <FaQuoteRight className='icon'/>
                    </section>
                )
            })}
            <button className="prev" onClick={increaseindex}>
            <FiChevronLeft />
            </button>
          <button className="next" onClick={decreaseindex}>
            <FiChevronRight />
          </button>
        </div>
    </div>
    </>
  )
}

export default About;
