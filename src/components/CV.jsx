export default function CV({ headerFields }) {
    const firstName = headerFields[0].value;
    const lastName = headerFields[1].value;
    const email = headerFields[2].value;
    const number = headerFields[3].value;
    const location = headerFields[4].value;
    
    return (
        <div className="CV">
            <h1>{firstName} {lastName}</h1>
            <p>{email} | {number} | {location} </p>
        </div>
    )
}