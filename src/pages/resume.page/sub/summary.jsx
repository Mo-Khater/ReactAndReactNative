import './summary.css';




function Summary({ summaryInfo }) {
    return (
        <>
            <h2>{summaryInfo.name}</h2>
            <div className='box'>
                <h3>Projects: </h3>
                <ul className='list'>
                    {summaryInfo.projects.map(ele => {
                        return (
                            <li><h5>{ele}</h5></li>
                        );
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
            <ul>
                {langsInfo.map((val) => {
                    return <li>{val}</li>;
                })}
            </ul>
        </div>
    );
}

export { Summary, Language };