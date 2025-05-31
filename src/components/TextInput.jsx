export default function TextInput({ id, label, value, required, onType }) {
    
    return (
        <div className="text-input-container" key={id}>
            <label htmlFor={id} style={{ display: "block" }}>{label} {required && "*"}</label>
            <input id={id} type="text" value={value} onChange={onType} required={required}/>
        </div>
    )
}