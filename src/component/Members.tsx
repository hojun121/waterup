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
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import Isotope from "isotope-layout";
import {useOnLoadImages} from "../hooks/useOnLoadImages";
import p1 from "../img/portfolio/11-1. (크뉘펠티크)박재연.png";
import q1 from "../img/portfolio/11-2 (크뉘펠티크) 오채율.png";

const items = [
    {
        id: '0',
        src: a1,
        subHtml: `<div class="lightGallery-captions">
                <h2>멜키어 役 김태현</h2>
                <h3>"아무도 나의 눈물을 알아주지 않을거야. 그렇게 나는 자연스레 어른이 된다."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '1',
        src: b1,
        subHtml: `<div class="lightGallery-captions">
                <h2>벤들라 役 장수진</h2>
                <h3>"분명 나중에 나는 더 큰 세상에서 날아다닐 수도 있다구요!"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '2',
        src: c1,
        subHtml: `<div class="lightGallery-captions">
                <h2>벤들라 役 주예진</h2>
                <h3>"분명 나중에 나는 더 큰 세상에서 날아다닐 수도 있다구요!"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '3',
        src: d1,
        subHtml: `<div class="lightGallery-captions">
                <h2>모리츠 役 조하람</h2>
                <h3>"작은 나비가 되는 환상은 달콤해. 마음 속 고민 없이 그냥 날아올라. 나비가 되고 싶다…"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '4',
        src: e1,
        subHtml: `<div class="lightGallery-captions">
                <h2>모리츠 役 주재현</h2>
                <h3>"작은 나비가 되는 환상은 달콤해. 마음 속 고민 없이 그냥 날아올라. 나비가 되고 싶다…"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '5',
        src: f1,
        subHtml: `<div class="lightGallery-captions">
                <h2>마르타/테아 役 최은진</h2>
                <h3>"난 갈 곳이 없거든. 언제나 웃고 견뎌야 해!"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '6',
        src: g1,
        subHtml: `<div class="lightGallery-captions">
                <h2>마르타/테아 役 한송연</h2>
                <h3>"난 갈 곳이 없거든. 언제나 웃고 견뎌야 해!"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '7',
        src: h1,
        subHtml: `<div class="lightGallery-captions">
                <h2>게오르크 役 박지수</h2>
                <h3>"자위도 파괴적인 행동인가요?"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '8',
        src: i1,
        subHtml: `<div class="lightGallery-captions">
                <h2>게오르크 役 이승준</h2>
                <h3>"자위도 파괴적인 행동인가요?"</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '9',
        src: j1,
        subHtml: `<div class="lightGallery-captions">
                <h2>일세&크뉘펠티크 役 박재연</h2>
                <h3>일세: "내가 강해졌으면 좋겠어. 세상이 알았으면 좋겠어."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '10',
        src: p1,
        subHtml: `<div class="lightGallery-captions">
                <h2>일세&크뉘펠티크 役 박재연</h2>
                <h3>크뉘펠티크: "지금이야말로 창문을 열어야 할 때라는 사실을 더 이상 숨길 수 없습니다."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '11',
        src: k1,
        subHtml: `<div class="lightGallery-captions">
                <h2>일세&크뉘펠티크 役 오채율</h2>
                <h3>일세: "내가 강해졌으면 좋겠어. 세상이 알았으면 좋겠어."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '12',
        src: q1,
        subHtml: `<div class="lightGallery-captions">
                <h2>일세&크뉘펠티크 役 오채율</h2>
                <h3>크뉘펠티크: "지금이야말로 창문을 열어야 할 때라는 사실을 더 이상 숨길 수 없습니다."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '13',
        src: l1,
        subHtml: `<div class="lightGallery-captions">
                <h2>가보어 부인 役 안세영</h2>
                <h3>"때론 순응할 줄도 알아야 어른이 되는 거란다."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '14',
        src: m1,
        subHtml: `<div class="lightGallery-captions">
                <h2>베르크만 부인 役 이은진</h2>
                <h3>"다 컸을 때 네가 어떨지 상상만 해도 무섭구나."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '15',
        src: n1,
        subHtml: `<div class="lightGallery-captions">
                <h2>목사 役 송서유</h2>
                <h3>"쾌락은 진정한 행복을 줄 수 없습니다."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    },
    {
        id: '16',
        src: o1,
        subHtml: `<div class="lightGallery-captions">
                <h2>쇼넨슈티히 役 윤태흥</h2>
                <h3>"명예 교사로써 교양시민층 교육을 더욱 중요시 해야겠군요."</h3>
                <h4>극단 물오름</h4>
            </div>`,
    }
];

export const Members = () => {
    const lightGallery = React.useRef<any>(null);
    const openGallery = React.useCallback((idx: number) => {
        lightGallery.current.openGallery(idx);
    }, []);
    const onInit = React.useCallback((detail: any) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const imagesLoaded = useOnLoadImages(wrapperRef);
    const [isotope, setIsotope] = React.useState<Isotope>();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState("*");
    // initialize an Isotope object with configs
    React.useEffect(() => {
        async function delay() {
            await new Promise(
                resolve => setTimeout(resolve, 500)
            );
        }

        if (imagesLoaded) {
            delay();
            setIsotope(new Isotope(".portfolio-container", {
                itemSelector: ".portfolio-item",
                layoutMode: 'fitRows',
            }));
        }
    }, [imagesLoaded]);

    React.useEffect(() => {
        if (isotope) {
            filterKey === '*'
                ? isotope.arrange({filter: `*`})
                : isotope.arrange({filter: `${filterKey}`});
        }
    }, [isotope, filterKey]);

    const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
    const move = (instagramUrl: string) => {
        window.open(instagramUrl);
    };
    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>출연진</h2>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li onClick={handleFilterKeyChange("*")} className="filter-active"><h5>All</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-a")}><h5>멜키어</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-b")}><h5>벤들라</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-c")}><h5>모리츠</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-d")}><h5>마르타 / 테아</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-e")}><h5>게오르크</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-f")}><h5>일세 / 크뉘펠티크</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-g")}><h5>가보어 부인</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-h")}><h5>베르크만 부인</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-i")}><h5>목사</h5></li>
                                <li onClick={handleFilterKeyChange(".filter-j")}><h5>쇼넨슈티히</h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100" ref={wrapperRef}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-a">
                            <div className="portfolio-wrap">
                                <img src={a1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(0)} title="멜키어 役 김태현"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/xoxogusl?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                            <div className="portfolio-wrap">
                                <img src={b1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(1)} title="벤들라 役 장수진"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/tnwls_jin?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                            <div className="portfolio-wrap">
                                <img src={c1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(2)} title="벤들라 役 주예진"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/yetinlife?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                            <div className="portfolio-wrap">
                                <img src={d1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(3)} title="모리츠 役 조하람"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/ram2_ha?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                            <div className="portfolio-wrap">
                                <img src={e1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(4)} title="모리츠 役 주재현"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/joo9o.o?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                            <div className="portfolio-wrap">
                                <img src={f1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(5)} title="마르타&테아 役 최은진"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/brother_oi?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                            <div className="portfolio-wrap">
                                <img src={g1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(6)} title="마르타&테아 役 한송연"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/songyeon_h?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                            <div className="portfolio-wrap">
                                <img src={h1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(7)} title="게오르크 役 박지수"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/j2soo_park?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                            <div className="portfolio-wrap">
                                <img src={i1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(8)} title="게오르크 役 이승준"><i className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/lee_goon3805?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                            <div className="portfolio-wrap">
                                <img src={j1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(9)} title="일세&크뉘펠티크 役 박재연"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/jae_ye0ny?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                            <div className="portfolio-wrap">
                                <img src={k1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(11)} title="일세&크뉘펠티크 役 오채율"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/_1amyul?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-g">
                            <div className="portfolio-wrap">
                                <img src={l1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(13)} title="가보어 부인 役 안세영"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://www.instagram.com/asy_act")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-h">
                            <div className="portfolio-wrap">
                                <img src={m1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(14)} title="베르크만 부인 役 이은진"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/jjins_lee?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-i">
                            <div className="portfolio-wrap">
                                <img src={n1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(15)} title="목사 役 송서유"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => window.open("https://instagram.com/pparkxxi?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-j">
                            <div className="portfolio-wrap">
                                <img src={o1} className="img-fluid" alt=""/>
                                <div className="portfolio-links" style={{cursor:"pointer"}}>
                                    <a onClick={() => openGallery(16)} title="쇼넨슈티히 役 윤태흥">
                                        <i className="bx bx-search"/>
                                    </a>
                                    <a onClick={() => window.open("https://instagram.com/heung___aaa?igshid=YmMyMTA2M2Y=")} title="인스타그램">
                                        <i className="bx bxl-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <LightGallery
                            elementClassNames="custom-classname"
                            dynamic
                            dynamicEl={items}
                            onInit={onInit}
                            download={false}
                        ></LightGallery>
                    </div>
                </div>
            </section>
        </>
    );
};