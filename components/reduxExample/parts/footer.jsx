import React from 'react';
import TotalExpense from "./totalExpense.jsx";

function Footer(props) {

    return (
        <>
        <div className="">
            <TotalExpense/>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">Total Amount with Expenditure</li>

                <li className="list-row">
                    <div className="size-10 rounded-box"></div>
                    <div>

                    </div>
                </li>


            </ul>
        </div>

        </>
    );
}

export default Footer;