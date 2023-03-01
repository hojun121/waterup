import MainPoster from "../img/main-poster.png";
import Story from "../img/story.png";
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
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

export const Introduce = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    React.useEffect(() => {
        new Swiper('.testimonials-slider', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    }, []);
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>공연 소개</h2>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={MainPoster} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={Story} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="testimonials section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>극 중 캐릭터 소개</h2>
                    </div>

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        아무도 나의 눈물을 알아주지 않을거야.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={a1} className="testimonial-img" alt=""/>
                                    <h3>멜키어</h3>
                                    <h4>김태현</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        어린 소녀가 잘못했어요.
                                        <br/>
                                        수치스러운 일이죠.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={b1} className="testimonial-img" alt=""/>
                                    <h3>벤들라</h3>
                                    <h4>장수진</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        꼭 새로운 생명 같아.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={c1} className="testimonial-img" alt=""/>
                                    <h3>벤들라</h3>
                                    <h4>주예진</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        언제나 늘 웃고 견뎌야 해.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={f1} className="testimonial-img" alt=""/>
                                    <h3>마르타</h3>
                                    <h4>최은진</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        그 땐 저 담도 그냥 넘을 수 있겠지?
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={g1} className="testimonial-img" alt=""/>
                                    <h3>마르타</h3>
                                    <h4>한송연</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="500">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        나비가 되는 환상은 달콤해.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={d1} className="testimonial-img" alt=""/>
                                    <h3>모리츠</h3>
                                    <h4>조하람</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="600">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        준비가 됐어, 난 천사가 될거야.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={e1} className="testimonial-img" alt=""/>
                                    <h3>모리츠</h3>
                                    <h4>주재현</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="700">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        사랑 받으려면 인형이 되어야 하는 거야?
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={k1} className="testimonial-img" alt=""/>
                                    <h3>일세</h3>
                                    <h4>오채율</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="800">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        세상 일이라는게 다 마음 먹기 나름이지 뭐.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={j1} className="testimonial-img" alt=""/>
                                    <h3>일세</h3>
                                    <h4>박재연</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="900">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        자유로운 사고 방식을 가진 학생들의 음란함이 문제에요.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={p1} className="testimonial-img" alt=""/>
                                    <h3>크뉘펠디크</h3>
                                    <h4>박재연</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1000">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        지금이야말로 창문을 열어야 할 때라고 생각합니다.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={q1} className="testimonial-img" alt=""/>
                                    <h3>크뉘펠디크</h3>
                                    <h4>오채율</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1100">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        진정한 만족은 하느님만이 줄 수 있습니다.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={n1} className="testimonial-img" alt=""/>
                                    <h3>목사</h3>
                                    <h4>송서유</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1200">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        난 이 세상에서 널 가장 사랑한단다.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={m1} className="testimonial-img" alt=""/>
                                    <h3>베르크만 부인</h3>
                                    <h4>이은진</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1300">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        너희 아빠한텐 들키지 않게 하렴.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={l1} className="testimonial-img" alt=""/>
                                    <h3>가보어 부인</h3>
                                    <h4>안세영</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1400">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        보다 높은 사회적 위신!
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={o1} className="testimonial-img" alt=""/>
                                    <h3>쇼넨슈티히</h3>
                                    <h4>윤태흥</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1500">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        자위도 타락인가요?
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={h1} className="testimonial-img" alt=""/>
                                    <h3>게오르크</h3>
                                    <h4>박지수</h4>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="1600">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        선생님, 가슴이 아니라 그 선율!
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={i1} className="testimonial-img" alt=""/>
                                    <h3>게오르크</h3>
                                    <h4>이승준</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    );
};