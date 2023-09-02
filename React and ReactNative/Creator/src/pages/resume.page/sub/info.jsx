import './info.css';
import React from 'react';


function Contact({ contactInfo }) {

    return (
        <div>
            <h3>Contact</h3>
            <hr />
            <ul>
                <li>
                    <h5>Phone</h5><span>{contactInfo?.phone}</span>
                </li>
                <li>
                    <h5>Email</h5><span>{contactInfo?.email}</span>
                </li>
                <li>
                    <h5>Address</h5><span>{contactInfo?.address}</span>
                </li>
                <li>
                    <h5>LinkedIn</h5><span>{contactInfo?.linkedin}</span>
                </li>
                <li>
                    <h5>Portfolio</h5><span>{contactInfo?.portfolio}</span>
                </li>
            </ul>
        </div>
    );
}

function Education({ educationInfo }) {
    return (
        <div>
            <h3>Education</h3>
            <hr />
            <ul>
                <li>
                    <h5>Degree</h5><span>{educationInfo.degree}</span>
                </li>
                <li>
                    <h5>Institution</h5><span>{educationInfo.institution}</span>
                </li>
                <li>
                    <h5>Graduate</h5><span>{educationInfo.graduate}</span>
                </li>

            </ul>
        </div>
    );

}

function Skills({ skillsInfo }) {
    return (
        <div>
            <h3>Skills</h3>
            <hr />
            <ul className='normal'>
                {skillsInfo.map((val) => {
                    if (val !== '') {
                        return (<li>{val}</li>);
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>

    );
}



export { Contact, Education, Skills };