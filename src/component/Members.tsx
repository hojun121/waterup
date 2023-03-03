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
import {Link, useNavigate} from "react-router-dom";
import Isotope from "isotope-layout";
import {useOnLoadImages} from "../hooks/useOnLoadImages";

export const Members = () => {
    const lightGallery = React.useRef<any>(null);
    const items = [
        {
            id: '0',
            src: a1,
            subHtml: `<div class="lightGallery-captions">
                <h4>멜키어 役 김태현</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '1',
            src: b1,
            subHtml: `<div class="lightGallery-captions">
                <h4>벤들라 役 장수진</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '2',
            src: c1,
            subHtml: `<div class="lightGallery-captions">
                <h4>벤들라 役 주예진</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '3',
            src: d1,
            subHtml: `<div class="lightGallery-captions">
                <h4>모리츠 役 조하람</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '4',
            src: e1,
            subHtml: `<div class="lightGallery-captions">
                <h4>모리츠 役 주재현</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '5',
            src: f1,
            subHtml: `<div class="lightGallery-captions">
                <h4>마르타/테아 役 최은진</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '6',
            src: g1,
            subHtml: `<div class="lightGallery-captions">
                <h4>마르타/테아 役 한송연</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '7',
            src: h1,
            subHtml: `<div class="lightGallery-captions">
                <h4>게오르크 役 박지수</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '8',
            src: i1,
            subHtml: `<div class="lightGallery-captions">
                <h4>게오르크 役 이승준</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '9',
            src: j1,
            subHtml: `<div class="lightGallery-captions">
                <h4>일세 役 박재연</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '10',
            src: k1,
            subHtml: `<div class="lightGallery-captions">
                <h4>일세 役 오채율</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '11',
            src: l1,
            subHtml: `<div class="lightGallery-captions">
                <h4>가보어 부인 役 안세영</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '12',
            src: m1,
            subHtml: `<div class="lightGallery-captions">
                <h4>베르크만 부인 役 이은진</h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '13',
            src: n1,
            subHtml: `<div class="lightGallery-captions">
                <h4>목사 役 송서유</Link></h4>
                <p>극단 물오름</p>
            </div>`,
        },
        {
            id: '14',
            src: o1,
            subHtml: `<div class="lightGallery-captions">
                <h4>쇼넨슈티히 役 윤태흥</a></h4>
                <p>극단 물오름</p>
            </div>`,
        }
    ];
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
    const navigate = useNavigate();
    const move = (role: string, name: string) => {
        navigate("/waterUpActor", {
            state: {
                role: role,
                name: name,
            }
        })
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
                                <li onClick={handleFilterKeyChange("*")} className="filter-active">All</li>
                                <li onClick={handleFilterKeyChange(".filter-a")}>멜키어</li>
                                <li onClick={handleFilterKeyChange(".filter-b")}>벤들라</li>
                                <li onClick={handleFilterKeyChange(".filter-c")}>모리츠</li>
                                <li onClick={handleFilterKeyChange(".filter-d")}>마르타 / 테아</li>
                                <li onClick={handleFilterKeyChange(".filter-e")}>게오르크</li>
                                <li onClick={handleFilterKeyChange(".filter-f")}>일세 / 크뉘펠티크</li>
                                <li onClick={handleFilterKeyChange(".filter-g")}>가보어 부인</li>
                                <li onClick={handleFilterKeyChange(".filter-h")}>베르크만 부인</li>
                                <li onClick={handleFilterKeyChange(".filter-i")}>목사</li>
                                <li onClick={handleFilterKeyChange(".filter-j")}>쇼넨슈티히</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100" ref={wrapperRef}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-a">
                            <div className="portfolio-wrap">
                                <img src={a1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(0)} title="멜키어 役 김태현"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("멜키어", "김태현")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                            <div className="portfolio-wrap">
                                <img src={b1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(1)} title="벤들라 役 장수진"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("벤들라", "장수진")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                            <div className="portfolio-wrap">
                                <img src={c1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(2)} title="벤들라 役 주예진"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("벤들라", "주예진")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                            <div className="portfolio-wrap">
                                <img src={d1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(3)} title="모리츠 役 조하람"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("모리츠", "조하람")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                            <div className="portfolio-wrap">
                                <img src={e1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(4)} title="모리츠 役 주재현"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("모리츠", "주재현")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                            <div className="portfolio-wrap">
                                <img src={f1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(5)} title="마르타&테아 役 최은진"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("마르타&테아", "최은진")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                            <div className="portfolio-wrap">
                                <img src={g1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(6)} title="마르타&테아 役 한송연"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("마르타&테아", "한송연")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                            <div className="portfolio-wrap">
                                <img src={h1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(7)} title="게오르크 役 박지수"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("게오르크", "박지수")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                            <div className="portfolio-wrap">
                                <img src={i1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(8)} title="게오르크 役 이승준"><i className="bx bx-search"></i></a>
                                    <a onClick={() => move("게오르크", "이승준")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                            <div className="portfolio-wrap">
                                <img src={j1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(9)} title="일세&크뉘펠티크 役 박재연"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("일세&크뉘펠티크", "박재연")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                            <div className="portfolio-wrap">
                                <img src={k1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(10)} title="일세&크뉘펠티크 役 오채율"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("일세&크뉘펠티크", "오채율")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-g">
                            <div className="portfolio-wrap">
                                <img src={l1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(11)} title="가보어 부인 役 안세영"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("가보어 부인", "안세영")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-h">
                            <div className="portfolio-wrap">
                                <img src={m1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(12)} title="베르크만 부인 役 이은진"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("베르크만 부인", "이은진")} title="상세보기">
                                        <i className="bx bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-i">
                            <div className="portfolio-wrap">
                                <img src={n1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(13)} title="목사 役 송서유"><i
                                        className="bx bx-search"></i></a>
                                    <a onClick={() => move("목사", "송서유")} title="상세보기">
                                        <i className="bx-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-j">
                            <div className="portfolio-wrap">
                                <img src={o1} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a onClick={() => openGallery(14)} title="쇼넨슈티히 役 윤태흥">
                                        <i className="bx bx-search"/>
                                    </a>
                                    <a onClick={() => move("쇼넨슈티히", "윤태흥")} title="상세보기">
                                        <i className="bx bx-plus"/>
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