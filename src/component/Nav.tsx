import React from "react";
import MainPoster from "../img/main-poster.png";
import {Initializer} from "../util/Initializer";
// import {useNavigate} from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export const Nav = () => {
    Initializer();
    const shareToTwitter = () => {
        const sharedLink =
            "text=" + encodeURIComponent("눈 뜨는 봄: 설강화" + " \n ") + encodeURIComponent("waterup.co.kr");
        window.open(`https://twitter.com/intent/tweet?${sharedLink}`);
    };
    const shareToFacebook = () => {
        const sharedLink = encodeURIComponent("waterup.co.kr");
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
    };
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={MainPoster} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="#hero">눈 뜨는 봄: 설강화</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a onClick={shareToTwitter} className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a onClick={shareToFacebook}><i className="bx bxl-facebook"></i></a>
                            <CopyToClipboard text={"waterup.co.kr"} onCopy={()=>alert("홈페이지 주소가 복사되었습니다")}>
                                <a><i className="bx bx-copy"></i></a>
                            </CopyToClipboard>
                            {/*<a href="#" className="instagram"><i className="bx bx-copy"></i></a>*/}
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <h4>Home</h4></a>
                            </li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-message-dots"></i> <h4>공연 소개</h4></a>
                            </li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-bell"></i>
                                <h4>공지 사항</h4></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-calendar-check"></i>
                                <h4>예매하기</h4></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-user-pin"></i>
                                <h4>출연진</h4></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-map-alt"></i> <h4>찾아오는길</h4></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
// export const DetailNav = () => {
//     Initializer();
//     const navigate = useNavigate();
//     const move = (role: string, name: string) => {
//         navigate("/waterUpActor", {
//             state: {
//                 role: role,
//                 name: name,
//             }
//         })
//     };
//     return (
//         <>
//             <header id="header">
//                 <div className="d-flex flex-column">
//                     <div className="profile">
//                         <img src={MainPoster} alt="" className="img-fluid rounded-circle"/>
//                         <h1 className="text-light"><a onClick={() => navigate("/")} >눈 뜨는 봄: 설강화</a></h1>
//                     </div>
//                     <nav id="navbar" className="nav-menu navbar">
//                         <ul>
//                             <li>
//                                 <a onClick={() => navigate("/")} className="nav-link scrollto active"><i className="bx bx-home"></i>
//                                     <span>Home</span>
//                                 </a>
//                                 <a onClick={() => move("멜키어", "김태현")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>멜키어 役 김태현</span>
//                                 </a>
//                                 <a onClick={() => move("벤들라", "장수진")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>벤들라 役 장수진</span>
//                                 </a>
//                                 <a onClick={() => move("벤들라", "주예진")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>벤들라 役 주예진</span>
//                                 </a>
//                                 <a onClick={() => move("모리츠", "조하람")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>모리츠 役 조하람</span>
//                                 </a>
//                                 <a onClick={() => move("모리츠", "주재현")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>모리츠 役 주재현</span>
//                                 </a>
//                                 <a onClick={() => move("마르타&테아", "최은진")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>마르타&테아 役 최은진</span>
//                                 </a>
//                                 <a onClick={() => move("마르타&테아", "한송연")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>마르타&테아 役 한송연</span>
//                                 </a>
//                                 <a onClick={() => move("게오르크", "박지수")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>게오르크 役 박지수</span>
//                                 </a>
//                                 <a onClick={() => move("게오르크", "이승준")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>게오르크 役 이승준</span>
//                                 </a>
//                                 <a onClick={() => move("일세&크뉘펠티크", "박재연")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>일세&크뉘펠티크 役 박재연</span>
//                                 </a>
//                                 <a onClick={() => move("일세&크뉘펠티크", "오채율")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>일세&크뉘펠티크 役 오채율</span>
//                                 </a>
//                                 <a onClick={() => move("가보어 부인", "안세영")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>가보어 부인 役 안세영</span>
//                                 </a>
//                                 <a onClick={() => move("베르크만 부인", "이은진")} className="nav-link scrollto active"><i className="bx bx-female"></i>
//                                     <span>베르크만 부인 役 이은진</span>
//                                 </a>
//                                 <a onClick={() => move("목사", "송서유")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>목사 役 송서유</span>
//                                 </a>
//                                 <a onClick={() => move("쇼넨슈티히", "윤태흥")} className="nav-link scrollto active"><i className="bx bx-male"></i>
//                                     <span>쇼넨슈티히 役 윤태흥</span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     );
// }