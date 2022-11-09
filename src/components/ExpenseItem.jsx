import React from 'react'
import Expense from './Expense';


function ExpenseItem(props) {
  return (
    <React.Fragment>
      <h2>Expense Tracker</h2>
      <Expense
        title={props.items[0].title}
        price={props.items[0].amount}
        date={props.items[0].date}
      />
      <Expense
        title={props.items[1].title}
        price={props.items[1].amount}
        date={props.items[1].date}
      />
      <Expense
        title={props.items[2].title}
        price={props.items[2].amount}
        date={props.items[2].date}
      />
      <Expense
        title={props.items[3].title}
        price={props.items[3].amount}
        date={props.items[3].date}
      />
    </React.Fragment>
  );
}

export default ExpenseItem

