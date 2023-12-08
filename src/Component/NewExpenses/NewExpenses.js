import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";


const NewExpenses = (props) => {
    
       
        const saveExpenseDataHandler=(enteredExpenseData)=>{
            const expenseData ={
                ...enteredExpenseData,
                id: Math.random().toString()

            };
            props.onAddExpenseData(expenseData);
        

    };
    return <>
    <div className="new-expense">
        
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 

    </div>
    
    
    
    </>




};

export default NewExpenses;