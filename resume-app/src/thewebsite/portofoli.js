import React from 'react'
import { Link } from "react-router-dom";
import {GrBusinessService} from "react-icons/gr"
import './css/portofolio.css'
import './main.js'
import im from './imgs/smile.png'
import { useState } from 'react';
import {AiFillGithub,AiFillTwitterCircle,AiOutlineArrowRight,AiOutlineClose,AiOutlineArrowUp} from 'react-icons/ai'
import {BsFacebook,BsLinkedin,BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BiLinkExternal} from "react-icons/bi";
//image , pdf
function Portofoli({data}) {
    const [activeButton, setActiveButton] = useState('all');
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 86;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            if (top >= offset && top < offset + height) {
                links.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            }
        });
    };
    
    const handleClick = (property) => {
      setActiveButton(property);
    };
   console.log(data[5]);
   console.log(data[5][0].type);
   console.log(activeButton);
    const filteredElements = data[5].filter((element) => {
      return activeButton === 'all' || element.type === activeButton;
    });
    console.log(filteredElements);
  return (
    <body>
       <header className="header">
    <a href="#" className="Brand">{data[0].nickname}</a>
    {/* <i class='bx bx-menu' id="menuicon"></i> */}
    <nav className="navbar">
        <ul>
            <li><a href="#Home" className="active" >Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#protfoilo">Portfoilo</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </header>  
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
    <section id="services">
        <h5><span className="ser">SERVICES</span></h5>
        <h1 className="head1">High qulity services, let's check it out</h1>
        <p className="par">{data[3].icon}</p>
        <div className="SERVES">
            {
                data[3].map((element1,index1)=>{
                 return(
                    <div key={index1}>
                    <a href={element1.link} className='front'>
                    <GrBusinessService className='iconnn'/>
                    <p>{element1.Title}</p>
                    <p className="two">{element1.description}
                   </p>
                   </a>
                    </div>
                 )
                })
            }
        </div>
    </section>
    <section id="protfoilo">
        <h4><span>protfoilo</span></h4>
        <h1>My Projects</h1>
        <div className="project">
        {Object.values(data[4]).map((value, index) => (
  <button
    key={index}
    className={`p ${activeButton === value ? 'active' : ''}`}
    onClick={() => handleClick(value)}
  >
    {value}
  </button>
))}
</div>

<div className="projectscontainer">
        {filteredElements.map((element, index) => {
         
            return (
              <div className={`oopproject ${element.type}`} key={index}>
                <img src={element.photo} alt={element.Name1} className="imgproject" />
                <div className="layer">
                  <h4>{element.Name1}</h4>
                  <p>{element.Description1}</p>
                  <Link to={element.link1}>
                    <BiLinkExternal />
                  </Link>
                </div>
              </div>
            );
        })}
      </div>
    </section>
    <section className="th h">
        <div className="thankyou h">
            <i className='bx bx-happy-heart-eyes'></i>
            <p>Thank you so much</p>
        </div>
    </section>
    <section className="formsection hide">
        <button className="close"><AiOutlineClose/></button>
        <div className="wrapper">
        <form action="/submit-form.php" method="post" className="form">
            <h1>Send me a message</h1>
            <div className="input">
            <input type="text" id="name" name="name" placeholder="username"></input>
            <i className='bx bxs-user'></i>
            </div>
    <div className="input">
            <input type="email" id="email" name="email" placeholder="yourEmail"></input>
            <i className='bx bx-envelope' ></i>
        </div>
        <div>
          <textarea name="message" id="message" cols="40" rows="10" placeholder="Type you message" className="textarea"></textarea>
        </div>
        <p id="msg"></p>
            <button type="submit" className="btn">send your message</button>
        </form>
    </div>
    </section>
    <section id="contact">
        <div className="content">
            <h1>Got a Project! Let's </h1>
            <h1>Talk</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, debitis excepturi fuga voluptatum necessitatibus adipisci.</p>
            <button className="contactbutton">Contact Me</button>
        </div>
        <img src={im} alt="smile face"/>
    </section>
    <footer>
        <div class="content"><p class="foot">Copyright &copy; 2023 by MohamedKhater | All rights reserved</p></div>
        <div class="icon">
            <a href="#"><AiOutlineArrowUp/></a>
        </div>
    </footer>
    </body>
  )
}
export default Portofoli
