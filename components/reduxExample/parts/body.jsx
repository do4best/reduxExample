import React from 'react';
import ExpenseList from "./expenseList.jsx";

function Body() {
    return (
        <>
            <div className="overflow-x-auto">
                <ExpenseList/>
            </div>
        </>
    );
}

export default Body;