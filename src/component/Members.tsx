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
// import p1 from "../img/portfolio/11-1. (크뉘펠티크)박재연.png";
// import q1 from "../img/portfolio/11-2 (크뉘펠티크) 오채율.png";

export const Members = () => {
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
                              <li data-filter="*" className="filter-active">All</li>
                              <li data-filter=".filter-a">멜키어</li>
                              <li data-filter=".filter-b">벤들라</li>
                              <li data-filter=".filter-c">모리츠</li>
                              <li data-filter=".filter-d">마르타 / 테아</li>
                              <li data-filter=".filter-e">게오르크</li>
                              <li data-filter=".filter-f">일세 / 크뉘펠티크</li>
                              <li data-filter=".filter-g">가보어 부인</li>
                              <li data-filter=".filter-h">베르크만 부인</li>
                              <li data-filter=".filter-i">목사</li>
                              <li data-filter=".filter-j">쇼넨슈티히</li>
                          </ul>
                      </div>
                  </div>

                  <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                      <div className="col-lg-4 col-md-6 portfolio-item filter-a">
                          <div className="portfolio-wrap">
                              <img src={a1} className="img-fluid" alt=""/>
                                  <div className="portfolio-links">
                                      <a href={a1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="멜키어 役 김태현"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-1.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                          <div className="portfolio-wrap">
                              <img src={b1} className="img-fluid" alt=""/>
                                  <div className="portfolio-links">
                                      <a href={b1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="벤들라 役 장수진"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-2.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-b">
                          <div className="portfolio-wrap">
                              <img src={c1} className="img-fluid" alt=""/>
                                  <div className="portfolio-links">
                                      <a href={c1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="벤들라 役 주예진"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-3.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                          <div className="portfolio-wrap">
                              <img src={d1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={d1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="모리츠 役 조하람"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-4.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-c">
                          <div className="portfolio-wrap">
                              <img src={e1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={e1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="모리츠 役 주재현"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-5.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                          <div className="portfolio-wrap">
                              <img src={f1} className="img-fluid" alt=""/>
                                  <div className="portfolio-links">
                                      <a href={f1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="마르타/테아 役 최은진"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-6.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-d">
                          <div className="portfolio-wrap">
                              <img src={g1} className="img-fluid" alt=""/>
                                  <div className="portfolio-links">
                                      <a href={g1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="마르타/테아 役 한송연"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-7.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                          <div className="portfolio-wrap">
                              <img src={h1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={h1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="게오르크 役 박지수"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-8.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-e">
                          <div className="portfolio-wrap">
                              <img src={i1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={i1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="게오르크 役 이승준"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-9.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                          <div className="portfolio-wrap">
                              <img src={j1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={j1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="일세 役 박재연"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-10.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-f">
                          <div className="portfolio-wrap">
                              <img src={k1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={k1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="일세 役 오채율"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-11.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-g">
                          <div className="portfolio-wrap">
                              <img src={l1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={l1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="가보어 부인 役 안세영"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-12.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-h">
                          <div className="portfolio-wrap">
                              <img src={m1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={m1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="베르크만 부인 役 이은진"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-13.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-i">
                          <div className="portfolio-wrap">
                              <img src={n1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={n1} data-gallery="portfolioGallery"
                                         className="portfolio-lightbox" title="목사 役 송서유"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-14.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6 portfolio-item filter-j">
                          <div className="portfolio-wrap">
                              <img src={o1} className="img-fluid" alt="" />
                                  <div className="portfolio-links">
                                      <a href={o1}
                                         data-gallery="portfolioGallery" className="portfolio-lightbox"
                                         title="쇼넨슈티히 役 윤태흥"><i className="bx bx-plus"></i></a>
                                      <a href="portfolio-details-15.html" title="More Details"><i
                                          className="bx bx-link"></i></a>
                                  </div>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
      </>
  );
};