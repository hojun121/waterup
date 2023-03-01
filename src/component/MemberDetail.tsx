import React from "react";
import a1 from "../img/portfolio/1. (멜키어) 김태현.png";
import b1 from "../img/portfolio/2-1. (벤들라) 장수진.png";
import c1 from "../img/portfolio/2-2. (벤들라) 주예진.png";
import d1 from "../img/portfolio/3-1. (모리츠) 조하람.png";
import e1 from "../img/portfolio/3-2. (모리츠) 주재현.png";
import f1 from "../img/portfolio/4-1. (마르타.테아) 최은진.png";
import g1 from "../img/portfolio/4-2. (마르타.테아) 한송연.png";
import h1 from "../img/portfolio/5-1. (게오르크) 박지수.png";
import i1 from "../img/portfolio/5-2. (게오르크) 이승준.png";
import j1 from "../img/portfolio/6-1. (일세) 박재연.png";
import k1 from "../img/portfolio/6-2. (일세) 오채율.png";
import l1 from "../img/portfolio/7. (가보어 부인) 안세영.jpg";
import m1 from "../img/portfolio/8. (베르크만 부인) 이은진.png";
import n1 from "../img/portfolio/9. (목사) 송서유.png";
import o1 from "../img/portfolio/10. (쇼넨슈티히) 윤태흥.png";
import p1 from "../img/portfolio/11-1. (크뉘펠티크)박재연.png";
import q1 from "../img/portfolio/11-2 (크뉘펠티크) 오채율.png";
import * as _ from "lodash";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {useParams} from "react-router-dom";

type props = {
    imageName1: string;
    imageName2: string;
    role: string;
    name: string;
    comment: string;
    instaUrl: string;
}
const IMAGE_POLL = {
    a1: a1,
    b1: b1,
    c1: c1,
    d1: d1,
    e1: e1,
    f1: f1,
    g1: g1,
    h1: h1,
    i1: i1,
    j1: j1,
    k1: k1,
    l1: l1,
    m1: m1,
    n1: n1,
    o1: o1,
    p1: p1,
    q1: q1
}

export const MemberDetail = () => {
    const { actorId } = useParams();
    console.log(actorId)
    return (
        <>
        </>
    );
}
//
// export const MemberDetail = ({imageName1, imageName2, name, role, comment, instaUrl}: props) => {
//     SwiperCore.use([Navigation, Pagination, Autoplay]);
//     React.useEffect(() => {
//         new Swiper('.portfolio-details-slider', {
//             speed: 400,
//             loop: true,
//             autoplay: {
//                 delay: 5000,
//                 disableOnInteraction: false
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 type: 'bullets',
//                 clickable: true
//             }
//         });
//     }, []);
//     const image = _.get(IMAGE_POLL, imageName1);
//     const image2 = _.get(IMAGE_POLL, imageName2);
//     let imageSection;
//     if (image2) {
//         imageSection = (
//             <>
//                 <div className="portfolio-details-slider swiper">
//                     <div className="swiper-wrapper align-items-center">
//
//                         <div className="swiper-slide">
//                             <img src={image} alt=""/>
//                         </div>
//
//                         <div className="swiper-slide">
//                             <img src={image2} alt=""/>
//                         </div>
//
//                     </div>
//                     <div className="swiper-pagination"></div>
//                 </div>
//             </>
//         );
//     } else {
//         imageSection = (
//             <>
//                 <div className="portfolio-details-slider swiper">
//                     <div className="swiper-wrapper align-items-center">
//                         <img src={image} alt=""/>
//                     </div>
//                 </div>
//             </>
//         );
//     }
//     return (
//         <>
//             <section id="breadcrumbs" className="breadcrumbs">
//                 <div className="container">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <h2>배우 상세 소개</h2>
//                         <ol>
//                             <li><a href="index.html">Home</a></li>
//                             <li>출연진</li>
//                         </ol>
//                     </div>
//                 </div>
//             </section>
//             <section id="portfolio-details" className="portfolio-details">
//                 <div className="container">
//                     <div className="row gy-4">
//                         <div className="col-lg-8">
//                             {imageSection}
//                         </div>
//                         <div className="col-lg-4">
//                             <div className="portfolio-info">
//                                 <h3>Actor Information</h3>
//                                 <ul>
//                                     <li><strong>이름: </strong>{name}</li>
//                                     <li><strong>Instagram: </strong><a
//                                         href={instaUrl}> 링크 클릭</a></li>
//                                 </ul>
//                             </div>
//                             <div className="portfolio-description">
//                                 <h2>{role}</h2>
//                                 <p>
//                                     “{comment}”
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };