import BaseForm from "../base-form/base-form";


const AddExpenceForm = ({ closeForm, confirmForm,expenseValues={name:"",amount:0,id:0} }) => {
    const formFields =[
        { label: "Expense", type: "text", value: expenseValues.name,returnValue:"name"},
        { label: "Budget", type: "number", value: expenseValues.amount,returnValue:"amount"},
    ]
    const formatTransactionDetails = (formValues) => {
        const results = {}
        results["id"] = expenseValues.id
        formValues.forEach(formValue => {
            results[formValue.returnValue] = formValue.value
        });
        
        confirmForm(results)
    }

    return (
        <BaseForm closeAction={closeForm} submitAction={formatTransactionDetails} formFields={formFields}>
        </BaseForm>
    );
};

export default AddExpenceForm;
