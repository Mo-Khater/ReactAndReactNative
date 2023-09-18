import './info.css';
import React from 'react';


function Contact({ contactInfo }) {

    return (
        <div className='info'>
            <h3>Contact</h3>
            <hr />
            <ul>
                <li>
                    <h4>Phone</h4><span>{contactInfo?.Phone}</span>
                </li>
                <li>
                    <h4>Email</h4><span>{contactInfo?.email}</span>
                </li>
                <li>
                    <h4>Address</h4><span>{contactInfo?.address}</span>
                </li>
                <li>
                    <h4>LinkedIn</h4><span>{contactInfo?.LinkedIn}</span>
                </li>
                <li>
                    <h4>Portfolio</h4><span>{contactInfo?.Protfolio}</span>
                </li>
            </ul>
        </div>
    );
}

function Education({ educationInfo }) {
    return (
        <div className='info'>
            <h3>Education</h3>
            <hr />
            <ul>
                <li>
                    <h4>Degree</h4><span>{educationInfo.Degree}</span>
                </li>
                <li>
                    <h4>Institution</h4><span>{educationInfo.Institution}</span>
                </li>
                <li>
                    <h4>Graduated</h4><span>{educationInfo.Graduation}</span>
                </li>

            </ul>
        </div>
    );

}

function Skills({ skillsInfo }) {
    return (
        <div className='info'>
            <h3>Skills</h3>
            <hr />
            <ul className='normal'>
                {skillsInfo?.map((val) => {
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