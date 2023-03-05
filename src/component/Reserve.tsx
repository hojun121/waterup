import React from "react";
import Ticket_1 from "../img/ticket-1.png"
import Ticket_2 from "../img/ticket-2.png"

export const Reserve = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>예매하기</h2>
                        <a style={{textDecoration:"underline", color:"#32A4FF", cursor:"pointer"}} onClick={() => window.open("https://naver.me/x0hH8vF6")}>
                            <h3>본링크를 클릭하여 예매해주세요!</h3></a>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={Ticket_1} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <img src={Ticket_2} style={{border:0, width:"100%", height:"auto"}} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
