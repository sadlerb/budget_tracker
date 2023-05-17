import BaseForm from "../base-form/base-form";

import {Form} from "react-bootstrap";

import "./add-transaction-from.scss";
import { useState } from "react";
const AddTransactionForm = ({ closeForm, confirmForm,categories }) => {
    const formFields =[
        { label: "Name", type: "text", value: ""},
        { label: "Value", type: "number", value: 0},        
    ]

    const [category,setCategory] = useState(categories[0].id)


    
    const formatTransactionDetails = (formValues) => {
        const results = {}
        results['category'] = category
        formValues.forEach(formValue => {
            results[formValue.label] = formValue.value
        });

        confirmForm(results)
    }

    return (
        <BaseForm closeAction={closeForm} submitAction={formatTransactionDetails} formFields={formFields}>
            <Form.Label>Category</Form.Label>
            <Form.Select onChange={e => setCategory(e.currentTarget.value)} value={category}> 
                {categories.map((category)=>{
                    return (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )
                })}
            </Form.Select>
        </BaseForm>
    );
};

export default AddTransactionForm;
