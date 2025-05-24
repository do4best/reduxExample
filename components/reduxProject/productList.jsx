import React from 'react';
import {useDispatch} from "react-redux";
import addToCard from "./action.js";

function ProductList(props) {
    const product=[
        {id:1,name:"Tea",price:100},
        {id:2,name:"Coffee",price:200},
        {id:3,name:"Milk",price:300}
    ]
    const dispatch = useDispatch()
    return (
        <>
        <h2>Product List</h2>
            <ul>
                {product.map(item=><li key={item.id} className={'flex flex-row justify-between'}><span>{item.id}</span><span>{item.name}</span>
                    <span>${item.price}</span>
                <button className="btn btn-success m-5" onClick={()=>dispatch(addToCard(item))}>Add It</button></li>)}
            </ul>

        </>
    );
}

export default ProductList;