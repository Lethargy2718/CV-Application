export default function TextInput({ id, label, value, required, onType }) {
    
    return (
        <div className="text-input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <input id={id} type="text" value={value} onChange={onType} required={required}/>
        </div>
    )
}