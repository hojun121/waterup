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
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MemberDetail} from "./component/MemberDetail";

const App = () => {
    Initializer();
    const wrappingComponent = (
        <>
            <Introduce/>
            <Notice/>
            <Reserve/>
            <Members/>
            <Location/>
        </>
    );
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Home/>
                <main id="main">
                    <Routes>
                        <Route path="/" element={wrappingComponent} />
                        <Route path="/actor/:actorId" element={<MemberDetail/>} />
                    </Routes>
                </main>
                <Copyright/>
            </BrowserRouter>
        </>
    );
}

export default App;
