import { useState } from "react";

import Input from "../base-input/base-input"

const BaseForm = ({ closeAction, submitAction,formFields }) => {
    const [formValues, setFormFields] = useState(formFields);
    const handleChange = (event,index) => {
        const values = [...formValues];
        values[index].value = event.target.value;
        setFormFields(values);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitAction(formValues);
        closeAction();
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            {formValues.map((obj,index) => {
                return (
                    <Input key={index} objValue={obj} onChange={handleChange} index={index}/>
                )
            })}
            <button type="submit">Submit</button>
            <button onClick={closeAction}>Close</button>
            </form>
        </div>
    );
};

export default BaseForm;
