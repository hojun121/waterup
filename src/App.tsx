import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import {DetailNav, Nav} from "./component/Nav";
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
    const mainDashboard = (
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
    const detailDashboard = (
        <>
            <DetailNav/>
            <main id="main">
                <MemberDetail/>
            </main>
        </>
    );
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={mainDashboard}/>
                    {/*<Route path="/waterUpActor/:role/:actorName" element={<MemberDetail/>} />*/}
                    <Route path="waterUpActor" element={detailDashboard}/>
                    <Route path="*" element={mainDashboard}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
