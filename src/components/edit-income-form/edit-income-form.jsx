import BaseForm from "../base-form/base-form";


const EditIncomeForm = ({ closeForm, confirmForm,currentValue}) => {
    const formFields =[
        { label: "value", type: "number", value: currentValue },
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

export default EditIncomeForm;
