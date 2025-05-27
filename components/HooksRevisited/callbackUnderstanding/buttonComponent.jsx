import React from 'react';

function ButtonComponent({aclick}) {
    console.log("Component")
    return (
        <>
            <button className={"btn btn-primary"} onClick={aclick}>Click Me</button>

        </>
    );
}

export default React.memo(ButtonComponent);