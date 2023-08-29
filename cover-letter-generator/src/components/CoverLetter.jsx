import React, { useState,useRef } from "react";
import ReactToPrint from 'react-to-print';
import Header from './Header';
import Footer from "./Footer"
let initialContent = `
<style>
  #content {
    font-family: 'Oswald', sans-serif;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  hr{
    background: Fuchsia;
    height:1px;
  }
  .head{
    color: Fuchsia;
  }
  .line{
    height: 3px;
  }
  .centered {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  .job-title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

  .contact-info {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #letter {
    line-height: 1.5;
  }

  .indent {
    text-indent: 1.5em;
  }
</style>

<div id="content">
 <div class="head">
  <hr/>
    <p class="centered">First Name</p>
    <p class="job-title">JobTitle</p>
    <ul class="contact-info">
        <li>Email</li>
        <li>Phone number</li>
        <li>Country</li>
    </ul>
    <hr/>
    <hr class="line"/>
  </div>
  <p>sendTo</p>
  <p>company</p>
  <p>city</p>
  <p class="indent">Dear [Ms.] [Miss] [Mr.] [Dr.] [Last Name],</p>
  <p class="indent">I am writing today in application to the [Target Job Title] position with [Target Company Name]. I am confident that my [Skill 1] and [Skill 2], as well as my experience in [Industry] make me an excellent fit for this position.</p>
  <p class="indent">As my attached resume outlines, I have [Number] years of experience working in the [Industry] field. I have achieved [accomplishment], with [describe results], and I am confident I can achieve similar results for [Target Company Name]. I am [Quality 1] and [Quality 2], attributes I know are important to your organization. I am looking for an opportunity to [outline goal], and develop [Skill 3] and [Skill 4], while offering expertise in [Skill 5].</p>
  <p class="indent">I greatly appreciate you taking the time to consider my application. I look forward to the opportunity to speak with you further regarding how I can contribute to the continued success of [Target Company Name]. Thank you again.</p>
  <p class="indent">Regards,</p>
  <p class="indent">[First Name] [Last Name]</p>
  <p class="indent">[Phone Number]</p>
  <p class="indent">[Email Address]</p>
</div>
`;

const CoverLetter = () => {
    const [content, setContent] = useState(initialContent);
    const componentRef = useRef();
    const handleChange = (event) => {
        setContent(event.target.value);
        initialContent = content;
    };

    return (
        <div>
            <Header/>
            <div
                id="target"
                className="editable"
                ref={componentRef}
                contentEditable={true}
                onInput={handleChange}
                dangerouslySetInnerHTML={{ __html: initialContent }}
                style={{
                    padding: "50px", width: "612px",
                    height: "792px", position: 'relative',
                    left: '50%', transform: 'translateX(-50%)',}}
            ></div>
            <div className="parent-container">
            <ReactToPrint
                trigger={() => <button class="fancy-button">Convert to PDF</button>}
                content={() => componentRef.current}
            />
            </div>
            <Footer/>
        </div>
  );
};

export default CoverLetter;