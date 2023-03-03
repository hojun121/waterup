import React from "react";
import MainPoster from "../img/main-poster.png";
import {Initializer} from "../util/Initializer";
import {useNavigate} from "react-router-dom";

export const Nav = () => {
    Initializer();
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={MainPoster} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="#hero">눈 뜨는 봄: 설강화</a></h1>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a>
                            </li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>공연 소개</span></a>
                            </li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i>
                                <span>공지 사항</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                                <span>예매하기</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-server"></i>
                                <span>출연진</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>찾아오는길</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
export const DetailNav = () => {
    Initializer();
    const navigate = useNavigate();
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={MainPoster} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a onClick={() => navigate("/")} >눈 뜨는 봄: 설강화</a></h1>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <a onClick={() => navigate("/")} className="nav-link scrollto active"><i className="bx bx-home"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}