import React from 'react';
import {Nav} from "./component/Nav";
import {Home} from "./component/Home";
import {Introduce} from "./component/Introduce";
import {Notice} from "./component/Notice";
import {Reserve} from "./component/Reserve";
import {Members} from "./component/Members";
import {Location} from "./component/Location";
import {Copyright} from "./component/Copyright";
import {Initializer} from "./initializer/Initializer";

const App = () => {
    Initializer();
    return (
        <>
            <Nav/>
            <Home/>
            <main id="main">
                <Introduce/>
                <Notice/>
                <Reserve/>
                <Members/>
                <Location/>
            </main>
            <Copyright/>
        </>
    );
}

export default App;
