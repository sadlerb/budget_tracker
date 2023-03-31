import BaseForm from "../base-form/base-form";


const AddExpenceForm = ({ closeForm, confirmForm }) => {
    const formFields =[
        { label: "name", type: "text", value: "" },
        { label: "price", type: "number", value: 0 },
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
        </BaseForm>
    );
};

export default AddExpenceForm;
