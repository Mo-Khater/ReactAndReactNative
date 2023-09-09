import React from 'react';
import Header from '../../components/PageStructure/Header';
import Footer from '../../components/PageStructure/Footer';
import ReactToPrint from 'react-to-print'
import { ResumeTemplate } from '../resume.page/resume';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

function useFetch() {
    const [arr, setArr] = useState([]);
    const allRef = useRef([]);
    console.log(allRef);
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('http://localhost:3001/resume/history', {
                    responseType: 'json',
                });
                setArr(await res.data.data);
                allRef.current = Array(await res.data.data.length).fill().map(
                    (ref, index) => allRef.current[index] = React.createRef()
                )

            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])
    return { arr, allRef };
}


function History() {
    const { arr, allRef } = useFetch();
    
    return (
        <>
            <Header />
            <div style={styles.history}>
                {arr?.map((ele, index) => {
                    return (
                        <ReactToPrint
                            trigger={() => <div style={styles.history_item} >
                                <div ref={allRef.current[index]}>
                                    <ResumeTemplate data={ele} />
                                </div>
                            </div>}
                            content={() => allRef.current[index].current}
                        />
                    );
                })}
                
            </div>
            <Footer />
        </>
    );
}


const styles = {
    history: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    history_item: {
        backgroundColor: 'darkgray',
        margin: '15px',
        borderRadius: 5,
        padding: 10,
        cursor: 'pointer'

    },
}
export default History;


