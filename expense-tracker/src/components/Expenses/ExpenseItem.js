import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/card';
import './ExpenseItem.css';      
function ExpenseItem(props){
    const[title,setTitle]=useState(props.title)
    const clickhandler=()=>{
        setTitle('!updated')
    }
    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickhandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;