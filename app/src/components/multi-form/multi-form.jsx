import AddTransactionForm from "../../components/add-transaction-form/add-transaction-form";
import AddExpenceForm from "../../components/add-expense-form/add-expense-form";
import EditIncomeForm from "../../components/edit-income-form/edit-income-form";

const MultiForm = ({type,submitAction,closeAction,props}) => {
    var form;
    if (type === "AddTrans"){
        form = <AddTransactionForm confirmForm={submitAction} closeForm={closeAction} categories={props.categories}/>
    }
    else if (type === "AddExp"){
        form = <AddExpenceForm  confirmForm={submitAction} closeForm={closeAction}/>
    }

    else if (type === "EditInc"){
        form = <EditIncomeForm confirmForm={submitAction} closeForm={closeAction} currentValue={props.currentValue}/>
    }

    return (
        <div>

            {form}
        </div>
    )
    
}

export default MultiForm;