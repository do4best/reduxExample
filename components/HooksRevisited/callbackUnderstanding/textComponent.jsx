import React, {useCallback} from 'react';
import {useEffect as usEEffect} from "react";
import ButtonComponent from "./buttonComponent.jsx";


function TextComponent() {
    const [count,setCount]=React.useState(0)
    // As the memory refrence is not alike and it keep counting until and unless stop by callback
    const clickIt= useCallback(()=>{
        setCount(preinit=>preinit +1)
    },[])
    usEEffect(()=>{
        console.log("useEffect")
    },[clickIt])
    return (
        <>
        <h1> The Counter : {count}</h1>
            <ButtonComponent aclick={clickIt}/>
        </>
    );
}

export default TextComponent;