import React, { useState,useRef } from "react";
import ReactToPrint from 'react-to-print';
import Header from '../PageStructure/Header';
import Footer from "../PageStructure/Footer"
import CoverLetterContent from "./CoverLetterContent"
let initialContent = CoverLetterContent;

const CompleteLetter = () => {
    const [content, setContent] = useState(initialContent);
    const componentRef = useRef();
    const handleChange = (event) => {
        setContent(event.target.value);
        initialContent = content;
    };

    return (
        <>
            <Header />
            <div id="unit">
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
                        left: '50%', transform: 'translateX(-50%)',
                    }}
                ></div>
                <div className="parent-container">
                    <ReactToPrint
                        trigger={() => <button class="fancy-button">Convert to PDF</button>}
                        content={() => componentRef.current}
                        
                />
                </div>
            </div>
            <Footer/>
        </>
  );
};

export default CompleteLetter;