import {Form, FormGroup} from "react-bootstrap";

const BaseInput = ({ objValue, onChange, index }) => {
    const { label, type, value } = objValue;
    return (
        <FormGroup className="input">
            <Form.Label htmlFor={label}>{label}</Form.Label>
            <Form.Control type={type || "text"} id={label} value={value || ""} onChange={(e) => onChange(e, index)} />
        </FormGroup>
    )
}

export default BaseInput;