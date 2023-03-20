const BaseInput = ({ objValue, onChange, index }) => {
    const { label, type, value } = objValue;
    return (
        <div className="input">
            <label htmlFor={label}>{label}</label>
            <input type={type || "text"} id={label} value={value || ""} onChange={(e) => onChange(e, index)} />
        </div>
    )
}

export default BaseInput;