import React from 'react';

function CountryLocation({location}) {
    console.log(location)
    return (
        <>
<h1>Location is {location}</h1>

        </>
    );
}

export default React.memo(CountryLocation);