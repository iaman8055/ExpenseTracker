import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm=()=>{
    const[Enteredtitle,setEnteredTitle]=useState('');
    const[EnteredAmount,setEnteredAmount]=useState('');
    const[EnteredDate,setEnteredDate]=useState('');


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={AmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2023-12-31" onChange={DateChangeHandler}/>
            </div>
            
        </div>
        <div className="new-expense__actions">
                <button type="Submit">Add Expense</button>
            </div>
    </form>
}
export default ExpenseForm;