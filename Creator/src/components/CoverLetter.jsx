import React, { useState,useRef } from "react";
import ReactToPrint from 'react-to-print';
import Header from './Header';
import Footer from "./Footer"
import CoverLetterContent from "./CoverLetterContent"
let initialContent = CoverLetterContent;

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