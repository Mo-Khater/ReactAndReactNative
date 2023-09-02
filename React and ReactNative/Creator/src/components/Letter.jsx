import React, { useRef} from "react";
import { useLocation} from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import Header from './Header';
import Footer from "./Footer"

const Letter = () => {
    const location = useLocation();
    const componentRef = useRef();
    console.log(location.state);
    return (
        <>
            <Header />
            <div id="unit">
                <div
                    id="target"
                    ref={componentRef}
                    style={style}
                >
                    <div id="content">
                        <div class="head">
                            <hr/>
                            <p class="centered">{location.state.name}</p>
                            <p class="job-title">{location.state.targetJobTitle}</p>
                            <ul class="contact-info">
                                <li>{location.state.email}</li>
                                <li>{location.state.phone}</li>
                                <li>{location.state.country}</li>
                            </ul>
                            <hr />
                            <hr class="line" />
                        </div>
                        <p>{location.state.company}</p>
                        <p>{location.state.city}</p>
                        <p class="indent">Dear {location.state.sendTo},</p>
                        <p class="indent">I am writing today to apply for the {location.state.targetJobTitle} position at
                        {location.state.company}. I believe that my expertise in {location.state.skills[0]} and {location.state.skills[1]},
                            combined with my experience in {location.state.industry}, make me a strong candidate for this role.</p>
                        <p class="indent">As evidenced by my attached resume, I have {location.state.years} years of experience in the {location.state.industry}
                            field. Throughout my career, I have consistently achieved notable milestones and delivered positive
                            outcomes. I am confident that I can bring similar success to {location.state.company}.</p>
                        <p class="indent">I am recognized for my {location.state.qualities[0]} and {location.state.qualities[1]}, which are qualities
                            that align well with the values of your organization. I am eager to contribute my
                            skills and expertise to the team at {location.state.company}.</p>
                        <p class="indent">Thank you for considering my application.
                            I appreciate your time and am excited to discuss how I
                            can contribute to the ongoing success of {location.state.company}
                            Please feel free to contact me at {location.state.phone} or {location.state.email}.</p>
                        <p class="indent">Regards,</p>
                        <p class="indent">{location.state.name}</p>
                        <p class="indent">{location.state.phone}</p>
                        <p class="indent">{location.state.email}</p>
                    </div>
                </div>
                <div className="parent-container">
                    <ReactToPrint
                        trigger={() => <button class="fancy-button">Convert to PDF</button>}
                        content={() => componentRef.current}
                    />
                    </div>
                </div>
            <Footer />
        </>
    );
};

const style = {
    padding: "50px",
    width: "612px",
    height: "792px",
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
};

export default Letter;