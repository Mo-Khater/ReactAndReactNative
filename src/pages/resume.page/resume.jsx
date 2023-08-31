import './resume.css';
import { Contact, Education, Skills } from './sub/info';
import { Summary, Language } from './sub/summary';
import { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import jsPdf from 'jspdf';
import { useLocation, useNavigate } from 'react-router-dom';


export default function ResumePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const back = () => {
        navigate('/Skills');
    }
    const pageRef = useRef();
    function action() {
        const doc = new jsPdf({
            format: 'a4',
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
        <div style={{}}>
            <Navbar props={3} />
            <div style={{
                position: "relative",
                marginLeft: '30%',
                top: window.innerHeight * .05,
            }}>
                <section style={screen} ref={pageRef}>
                    <aside style={info} >
                        <div style={{ marginLeft: info.width * .15, paddingTop: 40 }} >
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
                    <section style={summary} >
                        <Summary summaryInfo={{
                            name: location.state.name,
                            projects: location.state.projectsArr
                        }} />
                        <Language langsInfo={location.state.languages} />
                    </section>
                </section>
            </div>
            <button style={download} onClick={action}>download pdf</button>
            <button style={goBack} onClick={back}>Back</button>
        </div>
    );
}


const screen = {
    backgroundColor: '#EBECF0',
    display: 'flex',
    flexDirection: 'row',
    width: window.innerWidth * .4,
    minHeight: window.innerHeight * .85,
};
const info = {
    backgroundColor: "#323B4C",
    width: screen.width * .35,
    color: "white",
};

const summary = {
    width: screen.width - info.width,
    marginLeft: info.width * .15
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