export default function CV({ headerData, experienceData, projectData }) {
    const firstName = headerData[0].value;
    const lastName = headerData[1].value;
    const email = headerData[2].value;
    const number = headerData[3].value;
    const location = headerData[4].value;
    
    return (
        <div className="cv">
            <section className="cv__header cv__section">
                <h1>{firstName} {lastName}</h1>
                <p>{email} | {number} | {location} </p>
            </section>
            
            <section className="cv__experience cv__section">
                <h2>EXPERIENCE</h2>
                <hr />
            </section>
            <ul className="outer-list">
                <li>
                    Outer item
                    <ul className="inner-list">
                        <li>hi</li>
                        <li>dude</li>
                    </ul>
                </li>
                <li>
                    Outer item 2
                    <ul className="inner-list">
                        <li>asdas</li>
                        <li>asdas</li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}