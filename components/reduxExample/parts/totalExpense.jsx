import React from 'react';
import {useSelector} from "react-redux";

function TotalExpense(props) {
    const income = useSelector(store=>store.MYExpense.income)
    const expense = useSelector(store=>store.MYExpense.expenseList)
    const totalExpense = expense.reduce((acc,item)=>{
        return Number.parseFloat(acc)+Number.parseFloat(item.amount)},0)
    const remaining = income-totalExpense
    return (
        <>
            <div className="">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Total Amount</div>
                        <div className="stat-value">{totalExpense}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                </div>
            </div>
            <div className="stat-title">Remaining Amount</div>
            <div className="stat-value">{remaining}</div>
        </>
    );
}

export default TotalExpense;