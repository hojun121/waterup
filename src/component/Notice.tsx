import React from "react";
import Notice_1 from "../img/notice-1.png"
import Notice_2 from "../img/notice-2.png"

export const Notice = () => {
    return (
        <>
            <section id="resume" className="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>공지 사항</h2>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={Notice_1} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={Notice_2} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}