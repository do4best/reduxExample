import React from 'react';
import StockLahore from "./StockLahore.jsx";
import CountryLocation from "./CountryLocation.jsx";
import ResultComponent from "./resultComponent.jsx";

function MainMemo(props) {
    return (
        <>
        <StockLahore stock="Malaga"/>
            <CountryLocation location="India"/>
            <ResultComponent subject={"computer"} marks={"10"}/>
        </>
    );
}

export default MainMemo;