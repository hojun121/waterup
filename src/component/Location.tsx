import React from "react";
import Map from "../img/map.png"

export const Location = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>찾아 오시는 길</h2>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-12 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>장소: 나온씨어터</h4>
                                    <p>(도로명) 서울 종로구 혜화로9길 7
                                        <br/>
                                        (지번) 명륜1가 36-4 03068
                                    </p>
                                </div>
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>오시는 길:</h4>
                                    <p>- 4호선 혜화역 4번출구에서 도보 10분
                                        <br/>
                                        - 혜화역, 동성중고(장면총리가옥) 정류장 하차 도보 10분 (100, 102, 104, 106, 107, 109, 140, 143, 150, 160, 162, 273,
                                        710, 2112)
                                        <br/>
                                        - 혜화초등학교에서 도보 1분
                                    </p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>문의 사항:</h4>
                                    <p><a href="https://instagram.com/waterup___?igshid=YmMyMTA2M2Y=">극단 물오름 공식 인스타</a> 또는 <a
                                        href="https://twitter.com/waterup___ ">트위터(@waterup___)</a></p>
                                </div>
                                <div>
                                    <a href="https://map.naver.com/v5/directions/-/14137508.216207687,4521344.788375586,%EB%82%98%EC%98%A8%EC%94%A8%EC%96%B4%ED%84%B0,13281909,PLACE_POI/-/car?c=16.1,0,0,0,dh">
                                        <img src={Map} style={{border:0, width: "100%", height: "65%"}} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};