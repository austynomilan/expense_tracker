import React from 'react'
import './ExpenseDate.css'


function ExpenseDate(props) {
      const month = props.date.toLocaleString("en-US", { month: "long" });
      const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    
  return (
    <React.Fragment>
      <section className='ExpenseDate'>
        <div className='ExpenseDate__month'>{month}</div>
        <div className='ExpenseDate__year'>{year}</div>
        <div className='ExpenseDate__day'>{day}</div>
      </section>
    </React.Fragment>
  );
}

export default ExpenseDate
