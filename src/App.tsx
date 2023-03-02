import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import 'react-bootstrap-icons';
import {Nav} from "./component/Nav";
import {Home} from "./component/Home";
import {Introduce} from "./component/Introduce";
import {Notice} from "./component/Notice";
import {Reserve} from "./component/Reserve";
import {Members} from "./component/Members";
import {Location} from "./component/Location";
import {Copyright} from "./component/Copyright";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MemberDetail} from "./component/MemberDetail";

const App = () => {
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
                        <Route path="/waterUpActor/:role/:actorName" element={<MemberDetail/>} />
                        <Route path="*" element={wrappingComponent}></Route>
                    </Routes>
                </main>
                <Copyright/>
            </BrowserRouter>
        </>
    );
}

export default App;
