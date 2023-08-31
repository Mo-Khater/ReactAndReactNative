import { Value } from 'sass';
import './info.css';

function Contact({ contactInfo }) {

    return (
        <div>
            <h4>Contact</h4>
            <hr />
            <ul>
                <li>
                    <h6>Phone</h6><span>{contactInfo.phone}</span>
                </li>
                <li>
                    <h6>Email</h6><span>{contactInfo.email}</span>
                </li>
                <li>
                    <h6>Address</h6><span>{contactInfo.address}</span>
                </li>
                <li>
                    <h6>LinkedIn</h6><span>{contactInfo.linkedin}</span>
                </li>
                <li>
                    <h6>Portfolio</h6><span>{contactInfo.portfolio}</span>
                </li>
            </ul>
        </div>
    );
}

function Education({ educationInfo }) {
    return (
        <div>
            <h4>Education</h4>
            <hr />
            <span>{educationInfo.degree}</span>
            <br />
            <span>{educationInfo.institution}</span>
            <br />
            <span>{educationInfo.graduate}</span>
        </div>
    );

}

function Skills({ skillsInfo }) {
    return (
        <div>
            <h4>Skills</h4>
            <hr />
            <ul className='normal'>
                {skillsInfo.map((val) => {
                    return <li>{val}</li>;
                })}
            </ul>
        </div>

    );
}



export { Contact, Education, Skills };