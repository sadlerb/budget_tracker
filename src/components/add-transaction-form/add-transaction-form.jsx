import BaseForm from "../base-form/base-form";

import {Form} from "react-bootstrap";

import "./add-transaction-from.scss";
const AddTransactionForm = ({ closeForm, confirmForm,categories }) => {
    const formFields =[
        { label: "Name", type: "text", value: ""},
        { label: "Value", type: "number", value: 0},
    ]

    
    const formatTransactionDetails = (formValues) => {
        const results = {}
        formValues.forEach(formValue => {
            results[formValue.label] = formValue.value
        });
        
        confirmForm(results)
    }

    return (
        <BaseForm closeAction={closeForm} submitAction={formatTransactionDetails} formFields={formFields}>
            <Form.Label>Category</Form.Label>
            <Form.Select> 
                {categories.map((category)=>{
                    return (
                        <option value={category.id}>{category.name}</option>
                    )
                })}
            </Form.Select>
        </BaseForm>
    );
};

export default AddTransactionForm;
