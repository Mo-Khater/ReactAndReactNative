import React, { useRef,useContext} from "react";
import ReactToPrint from 'react-to-print';
import Header from '../PageStructure/Header';
import Footer from "../PageStructure/Footer"
import { StateContext } from '../../components/App';

const Letter = () => {
    const componentRef = useRef();
    const { fullName,targetJobTitle,email,Phone,country,company,sendTo,skills,qualities,industry,years,city} = useContext(StateContext);

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
                            <p class="centered">{fullName}</p>
                            <p class="job-title">{targetJobTitle}</p>
                            <ul class="contact-info">
                                <li>{email}</li>
                                <li>{Phone}</li>
                                <li>{country}</li>
                            </ul>
                            <hr />
                            <hr class="line" />
                        </div>
                        <p>{company}</p>
                        <p>{city}</p>
                        <p class="indent">Dear {sendTo},</p>
                        <p class="indent">I am writing today to apply for the {targetJobTitle} position at
                        {company}. I believe that my expertise in {skills[0]} and {skills[1]},
                            combined with my experience in {industry}, make me a strong candidate for this role.</p>
                        <p class="indent">As evidenced by my attached resume, I have {years} years of experience in the {industry}
                            field. Throughout my career, I have consistently achieved notable milestones and delivered positive
                            outcomes. I am confident that I can bring similar success to {company}.</p>
                        <p class="indent">I am recognized for my {qualities[0]} and {qualities[1]}, which are qualities
                            that align well with the values of your organization. I am eager to contribute my
                            skills and expertise to the team at {company}.</p>
                        <p class="indent">Thank you for considering my application.
                            I appreciate your time and am excited to discuss how I
                            can contribute to the ongoing success of {company}
                            Please feel free to contact me at {Phone} or {email}.</p>
                        <p class="indent">Regards,</p>
                        <p class="indent">{fullName}</p>
                        <p class="indent">{Phone}</p>
                        <p class="indent">{email}</p>
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