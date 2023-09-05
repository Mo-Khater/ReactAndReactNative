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



export default function ResumePage() {
    const { fullName, address, Phone, email, LinkedIn, Protfolio, Degree, Institution, Graduation, Projects, Hobbies, Programming, languages, Experince } = useContext(StateContext);
    const navigate = useNavigate();
    const back = () => {
        navigate('/Experience');
    }
    const pageRef = useRef();
    console.log(fullName, address, Phone, email, LinkedIn, Protfolio, Degree, Institution, Graduation, Projects, Hobbies, Programming, languages, Experince);
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
                    <section style={screen} ref={pageRef}>
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
                </div>
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