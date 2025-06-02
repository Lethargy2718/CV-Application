export default function CV({ headerData, experienceData, projectData, skillData }) {
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
                <Items data={experienceData}/>
            </section>
            <section className="cv__projects cv__section">
                <h2>PROJECTS</h2>
                <hr />
                <Items data={projectData}/>
            </section>
            <section className="cv__skills cv__section">
                <h2>SKILLS</h2>
                <hr />
                <Skills data={skillData}/>
            </section>


        </div>
    )
}

function Items({ data }) {
    return data[0].childIds?.map(itemId => {
        const item = data[itemId];
        return (
            <div className="cv__inner-section" key={itemId}>
                <div className="cv__inner-header row">
                    <p className="cv__inner-title"><strong>{item.title}</strong></p>
                    <p className="cv__inner-date"><strong>{item.startDate + (((item.present && item.startDate) || item.endDate) && " – " + (item.present ? "Present" : item.endDate))}</strong></p>
                </div>
                <div className="cv__inner-desc row">
                    <p className="cv__inner-title">{item.role}</p>
                    <p className="cv__inner-date">{item.location}</p>
                </div>
                <ul className="cv__outer-list">
                    {item.childIds.map(subItemId => {
                        const subItem = data[subItemId];
                        return (
                            <li key={subItemId}>
                                {subItem.content}
                                <ul className="cv__inner-list">
                                    {subItem.childIds.map(descId => {
                                        const desc = data[descId];
                                        return (
                                            <li key={descId}>
                                                {desc.content}
                                            </li>
                                        )
                                    
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )});
}

function Skills({ data }) {
    const rootChildren = data[0]?.childIds || [];

    return (
        <ul className="cv__outer-list">
            {rootChildren.map((categoryId) => {
                const category = data[categoryId];
                const items = category.childIds.map(id => data[id].content).filter(Boolean);

                if (!category.category?.trim() && items.length === 0) return null;

                return (
                    <li key={categoryId}>
                        <strong>{category.category}</strong>: {items.join(', ')}
                    </li>
                );
            })}
        </ul>
    );
}