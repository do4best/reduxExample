import React from 'react';
import addToCard from "./action.js";
import {useSelector} from "react-redux";

function Cart(props) {
    const selector =useSelector(state =>state.cart)
    return (
        <>
            <h2>Purchase List</h2>
            <ul>
                {selector.map(item=><li key={item.id} className={'flex flex-row justify-between'}><span>{item.id}</span><span>{item.name}</span>
                    {item.name} - ${item.price}</li>)}
            </ul>

        </>
    );
}

export default Cart;