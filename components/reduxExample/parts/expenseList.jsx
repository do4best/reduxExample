import React from 'react';
import {useSelector} from "react-redux";
import List from "./list.jsx";

function ExpenseList(props) {
    const expense = useSelector(store=>store.MYExpense.expenseList)
    return <List items={expense}/>;
}

export default ExpenseList;