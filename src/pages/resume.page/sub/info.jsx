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
            {/* <ul>
                <li>
                    <h6>Your degree</h6><span>College</span>
                </li>
                <li>
                    <h6>Your degree</h6><span>College</span>
                </li>
            </ul> */}
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
                {/* <li>CS50</li>
                <li>JS</li> */}
            </ul>
        </div>

    );
}



export { Contact, Education, Skills };