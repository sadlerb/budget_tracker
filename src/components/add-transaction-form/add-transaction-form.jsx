import BaseForm from "../base-form/base-form";

import "./add-transaction-from.scss";
const AddTransactionForm = ({ closeTransactionForm, addTransaction }) => {
    const formFields =[
        { label: "name", type: "text", value: "" },
        { label: "value", type: "number", value: 0 },
    ]

    
    const formatTransactionDetails = (formValues) => {
        const results = {}
        formValues.forEach(formValue => {
            results[formValue.label] = formValue.value
        });
        
        addTransaction(results)
    }

    return (
        <BaseForm closeAction={closeTransactionForm} submitAction={formatTransactionDetails} formFields={formFields}>
        </BaseForm>
    );
};

export default AddTransactionForm;
