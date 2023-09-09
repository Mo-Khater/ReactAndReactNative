import './resume.css';
import { Contact, Education, Skills } from './sub/info';
import { Summary, Language, Hobbs } from './sub/summary';
import { useRef, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReactToPrint from 'react-to-print'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { StateContext } from '../../components/App';
import Header from '../../components/PageStructure/Header';
import Footer from '../../components/PageStructure/Footer';
import axios from 'axios';


export default function ResumePage() {
    const navigate = useNavigate();
    const back = () => {
        navigate('/Experience');
    }
    const pageRef = useRef();
    const { fullName, address, Phone, email, LinkedIn, Protfolio,
        Degree, Institution, Graduation, Projects, Hobbies,
        Programming, languages, Experince } = useContext(StateContext);
    const save = async () => {
        const dataToSave = {
            fullName, address, Phone, email, LinkedIn, Protfolio,
            Degree, Institution, Graduation, Projects, Hobbies,
            Programming, languages, Experince
        };
        console.log("save");
        await axios.post('http://localhost:3001/resume/save', dataToSave)
            .then(response => {
                console.log('Data saved successfully!');
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };
    return (
        <>
            <Header />
            <div style={{}}>
                <Navbar props={4} />
                <div style={{
                    position: "relative",
                    marginLeft: '25%',
                    top: 50,
                }}>
                    <div ref={pageRef}>
                        <ResumeTemplate data={{
                            fullName, address, Phone, email, LinkedIn, Protfolio,
                            Degree, Institution, Graduation, Projects, Hobbies,
                            Programming, languages, Experince
                        }} />
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => <button style={download}>Convert to PDF</button>}
                    content={() => pageRef.current}
                />
                <button style={goBack} onClick={back}>Back</button>
                <button style={{ ...download, left: '80%', top: '50px' }} onClick={save}>Save</button>
            </div>
            <Footer />
        </>
    );
}



export function ResumeTemplate({ data: { fullName, address, Phone, email, LinkedIn, Protfolio,
    Degree, Institution, Graduation, Projects, Hobbies,
    Programming, languages, Experince } }) {

    return (
        <section style={screen}>
            <aside style={{ backgroundColor: "#323B4C", minHeight: 700, color: "white" }} >
                <div style={{ marginLeft: 15, paddingTop: 40 }} >
                    <Contact contactInfo={{ address, email, Phone, LinkedIn, Protfolio }} />
                    <Education educationInfo={{ Institution, Degree, Graduation }} />
                    <Skills skillsInfo={Programming} />
                </div>
            </aside>
            <section style={{ marginLeft: 15 }} >
                <Summary summaryInfo={{ fullName, Experince, Projects }} />
                <Language langsInfo={languages} />
                <Hobbs hobbsInfo={Hobbies} />
            </section>
        </section>
    );
}

const screen = {
    backgroundColor: '#EBECF0',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    width: '210mm',
    minHeight: '297mm',
};

const download = {
    position: 'relative',
    left: "90%",
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 10,
    border: '0px solid white',
};

const goBack = {
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

