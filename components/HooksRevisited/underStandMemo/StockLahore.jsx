import React from 'react';

function StockLahore({stock}) {
    console.log(stock)
    return (
        <>
        <h1>Location is {stock}</h1>

        </>
    );
}

export default React.memo(StockLahore);