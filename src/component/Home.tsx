import React from "react";
import Typed from 'typed.js';

export const Home = () => {
    const hasRunOnce = React.useRef(false);
    React.useEffect(() => {
        if (!hasRunOnce.current) {
            const text = " 가득폈어, 새로운 생명같아";
            new Typed('.typed', {
                strings: text.split(","),
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
            });
            hasRunOnce.current = true;
        }
    }, []);
    return <>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" style={{textAlign:"center"}} data-aos="fade-in">
                <h1>이제 겨울이 가고 봄이 오려나봐</h1>
                <br/>
                <p>교회 뒷 동산에 설강화가 <span className="typed"></span></p>
            </div>
        </section>
    </>;
}
