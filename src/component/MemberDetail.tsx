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
import {Link, useLocation, useParams} from "react-router-dom";

const actorInfoPool = {
    "김태현": {
        instaUrl: "https://instagram.com/xoxogusl?igshid=YmMyMTA2M2Y=",
        comment: "아무도 나의 눈물을 알아주지 않을거야. 그렇게 나는 자연스레 어른이 된다.",
        image: a1,
    },
    "장수진": {
        instaUrl: "https://instagram.com/tnwls_jin?igshid=YmMyMTA2M2Y=",
        comment: "분명 나중에 나는 더 큰 세상에서 날아다닐 수도 있다구요!",
        image: b1,
    },
    "주예진": {
        instaUrl: "https://instagram.com/yetinlife?igshid=YmMyMTA2M2Y=",
        comment: "분명 나중에 나는 더 큰 세상에서 날아다닐 수도 있다구요!",
        image: c1,
    },
    "조하람": {
        instaUrl: "https://instagram.com/ram2_ha?igshid=YmMyMTA2M2Y=",
        comment: "작은 나비가 되는 환상은 달콤해. 마음 속 고민 없이 그냥 날아올라. 나비가 되고 싶다…",
        image: d1,
    },
    "주재현": {
        instaUrl: "https://instagram.com/joo9o.o?igshid=YmMyMTA2M2Y=",
        comment: "작은 나비가 되는 환상은 달콤해. 마음 속 고민 없이 그냥 날아올라. 나비가 되고 싶다…",
        image: e1,
    },
    "최은진": {
        instaUrl: "https://instagram.com/brother_oi?igshid=YmMyMTA2M2Y=",
        comment: "난 갈 곳이 없거든. 언제나 웃고 견뎌야 해!",
        image: f1,
    },
    "한송연": {
        instaUrl: "https://instagram.com/songyeon_h?igshid=YmMyMTA2M2Y=",
        comment: "난 갈 곳이 없거든. 언제나 웃고 견뎌야 해!",
        image: g1,
    },
    "박지수": {
        instaUrl: "https://instagram.com/j2soo_park?igshid=YmMyMTA2M2Y=",
        comment: "자위도 파괴적인 행동인가요?",
        image: h1,
    },
    "이승준": {
        instaUrl: "https://instagram.com/lee_goon3805?igshid=YmMyMTA2M2Y=",
        comment: "자위도 파괴적인 행동인가요?",
        image: i1,
    },
    "박재연": {
        instaUrl: "https://instagram.com/jae_ye0ny?igshid=YmMyMTA2M2Y=",
        comment1: "내가 강해졌으면 좋겠어. 세상이 알았으면 좋겠어.",
        comment2: "지금이야말로 창문을 열어야 할 때라는 사실을 더 이상 숨길 수 없습니다.",
        image1: j1,
        image2: p1,
    },
    "오채율": {
        instaUrl: "https://instagram.com/_1amyul?igshid=YmMyMTA2M2Y=",
        comment1: "내가 강해졌으면 좋겠어. 세상이 알았으면 좋겠어.",
        comment2: "지금이야말로 창문을 열어야 할 때라는 사실을 더 이상 숨길 수 없습니다.",
        image1: k1,
        image2: q1,
    },
    "안세영": {
        instaUrl: "https://instagram.com/asy9108?igshid=YmMyMTA2M2Y=",
        comment: "때론 순응할 줄도 알아야 어른이 되는 거란다.",
        image: l1,
    },
    "이은진": {
        instaUrl: "https://instagram.com/jjins_lee?igshid=YmMyMTA2M2Y=",
        comment: "다 컸을 때 네가 어떨지 상상만 해도 무섭구나.",
        image: m1,
    },
    "송서유": {
        instaUrl: "https://instagram.com/pparkxxi?igshid=YmMyMTA2M2Y=",
        comment: "쾌락은 진정한 행복을 줄 수 없습니다.",
        image: n1,
    },
    "윤태흥": {
        instaUrl: "https://instagram.com/heung___aaa?igshid=YmMyMTA2M2Y=",
        comment: "명예 교사로써 교양시민층 교육을 더욱 중요시 해야겠군요.",
        image: o1,
    },
};

export const MemberDetail = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    React.useEffect(() => {
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }, []);
    // const {role, actorName} = useParams();

    const location = useLocation();
    const state = location.state as { role: string; name: string };
    const { role, name } = state;

    let insta, com, com1, com2, img, img1, img2;
    if (name) {
        const { instaUrl, comment, comment1, comment2, image, image1, image2 } = _.get(actorInfoPool, name);
        insta = instaUrl;
        com = comment;
        com1 = comment1;
        com2 = comment2;
        img = image;
        img1 = image1;
        img2 = image2;
    }
    let imageSection, commentSection;
    if (name === "박재연" || name === "오채율") {
        imageSection = (
            <>
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">

                        <div className="swiper-slide">
                            <img src={img1} alt=""/>
                        </div>

                        <div className="swiper-slide">
                            <img src={img2} alt=""/>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </>
        );
        commentSection = (
            <>
                <h2>{role}</h2>
                <p>
                    “{com1}”
                </p>
                <br/>
                <h2>{role}</h2>
                <p>
                    “{com2}”
                </p>
            </>
        )
    } else {
        imageSection = (
            <>
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </>
        );
        commentSection = (
            <>
                <h2>{role}</h2>
                <p>
                    “{com}”
                </p>
            </>
        )
    }
    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>배우 상세 소개</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>출연진</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            {imageSection}
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Actor Information</h3>
                                <ul>
                                    <li><strong>이름: </strong>{name}</li>
                                    <li><strong>Instagram: </strong><a
                                        href={insta}> 링크 클릭</a></li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                {commentSection}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};