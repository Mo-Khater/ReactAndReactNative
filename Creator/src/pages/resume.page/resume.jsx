import './resume.css';
import { Contact, Education, Skills } from './sub/info';
import { Summary, Language, Hobbies } from './sub/summary';
import { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import jsPdf from 'jspdf';
import ReactToPrint from 'react-to-print'
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";



export default function ResumePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const back = () => {
        navigate('/Skills');
    }
    const pageRef = useRef();
    function action() {
        const doc = new jsPdf({
            format: 'a3',
            unit: 'px'
        });
        doc.html(pageRef.current, {
            async callback(doc) {
                doc.save('resume');
            },
        });

    }
    console.log(location.state);
    return (
        <>
            <Header />
            <div style={{}}>
                <Navbar props={4} />
                <div style={{
                    position: "relative",
                    marginLeft: '30%',
                    top: 50,
                }}>
                    <section style={screen} ref={pageRef}>
                        <aside style={{ backgroundColor: "#323B4C", minHeight: 700, color: "white" }} >
                            <div style={{ marginLeft: 15, paddingTop: 40 }} >
                                <Contact contactInfo={{
                                    address: location.state.address,
                                    email: location.state.email,
                                    phone: location.state.Phone,
                                    linkedin: location.state.LinkedIn,
                                    portfolio: location.state.Protfolio
                                }} />
                                <Education educationInfo={{
                                    institution: location.state.institution,
                                    degree: location.state.degree,
                                    graduate: location.state.graduate
                                }} />
                                <Skills skillsInfo={location.state.skills} />
                            </div>
                        </aside>
                        <section style={{ marginLeft: 15 }} >
                            <Summary summaryInfo={{
                                name: location.state.name,
                                projects: location.state.projectsArr
                            }} />
                            <Language langsInfo={location.state.languages} />
                            <Hobbies hobbsInfo={location.state.hobbies} />
                        </section>
                    </section>
                </div>
                {/* <button style={download} onClick={action}>download pdf</button> */}
                <ReactToPrint
                trigger={() => <button style={download}>Convert to PDF</button>}
                content={() => pageRef.current}
            />
                <button style={goBack} onClick={back}>Back</button>
            </div>
            <Footer />
        </>
    );
}


const screen = {
    backgroundColor: '#EBECF0',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    width: 650,
    minHeight: 700,
};

const download = {
    position: 'fixed',
    bottom: 25,
    right: 40,
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 10,
    border: '0px solid white'
};

const goBack = {
    position: 'fixed',
    bottom: 25,
    left: 40,
    backgroundColor: "white",
    color: "black",
    borderStyle: "solid",
    borderColor: "#8f8e8e",
    width: '100px',
    height: '40px',
    fontSize: '20px',
    borderRadius: '2px',
    borderWidth: '2px'
};