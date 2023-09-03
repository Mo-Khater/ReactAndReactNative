import './summary.css';
import React from 'react';





function Summary({ summaryInfo }) {
    return (
        <>
            <h2>{summaryInfo.name}</h2>
            <div className='box'>
                <h3>Projects: </h3>
                <ul className='list'>
                    {summaryInfo.projects?.map(ele => {
                        if (ele !== '') {
                            return (
                                <li><h5>{ele}</h5></li>
                            );
                        } else {
                            return null;
                        }

                    })}
                </ul>
            </div>
        </>
    );
}

function Language({ langsInfo }) {
    return (
        <div>
            <h3>Languages:</h3>
            <ul className='list'>
                {langsInfo.map((val) => {
                    if (val !== '') {
                        return <li className='list-item'>{val}</li>;
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    );
}

function Hobbies({ hobbsInfo }) {
    return (
        <div>
            <h3>Hobbies:</h3>
            <ul className='list'>
                {hobbsInfo.map((val) => {
                    if (val !== '') {
                        return <li className='list-item'>{val}</li>;
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    );
}

export { Summary, Language, Hobbies };