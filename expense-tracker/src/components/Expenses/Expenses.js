import { useState } from "react";
import Card from "../UI/card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Expenselist from "./ExpenseList";
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear)
    };
    const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
    });
    
    return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expense={filteredExpenses}/>
      <Expenselist items={filteredExpenses}/>
        </Card>
    );
}
export default Expenses;