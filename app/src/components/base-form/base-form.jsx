import { useState } from "react";

import Input from "../base-input/base-input";

import {FormContainer} from "./base-form.styles.jsx"


import { Form,Button,Row,Col } from "react-bootstrap";

const BaseForm = ({ closeAction, submitAction,formFields,children }) => {
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
        <FormContainer className="p-4"> 
            <Form onSubmit={handleSubmit}>
            {formValues.map((obj,index) => {
                return (
                    <Row key={index}>
                        <Input key={index} objValue={obj} onChange={handleChange} index={index}/>
                    </Row>
                )
            })}
                <Row className="my-2 mx-1">
                    {children}
                </Row>
                <Row className="d-grid gap-2">
                    <Col className="m-2" >
                        <Button type="submit" variant="primary">Submit</Button>
                    </Col>
                    <Col className="m-2">
                        <Button onClick={closeAction} variant="danger">Close</Button>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};

export default BaseForm;
