import React from 'react';
import ReduxExample from "./ReduxExample.jsx";
import {Provider} from "react-redux";
import {store} from "./container/store.js";

function MainRedux(props) {
    return (
        <>
<Provider store={store}>
        <ReduxExample/>
</Provider>
        </>
    );
}

export default MainRedux;