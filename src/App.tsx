import React from 'react';
import { Nav } from "./component/Nav";
import { Home } from "./component/Home";
import { Introduce } from "./component/Introduce";
import { Notice } from "./component/Notice";
import { Reserve } from "./component/Reserve";
import { Members } from "./component/Members";
import { Location } from "./component/Location";
import { Copyright } from "./component/Copyright";

const App = () =>{
    const hasRunOnce = React.useRef(false);
    // const gLightbox = require('glightbox');
    // const { GLightbox } = gLightbox;
    // const pureCounter = require('@srexi/purecounterjs');
    // const { PureCounter } = pureCounter;
    const arrayDistinct = (list: NodeListOf<any>):any[] => {
        const result = [];
        for (var i = 0; i < list.length; i++) {
            var value = list[i];
            if (result.indexOf(value) == -1)
                result.push(value);
        }
        return result;
    }
    React.useEffect(() => {
        if (!hasRunOnce.current) {
            // const temp = GLightbox({
            //     selector: '.portfolio-lightbox'
            // })
            // new PureCounter();

            /**
             * Easy selector helper function
             */
            const select = (el: any, all = false) => {
                el = el.trim()
                if (all) {
                    return arrayDistinct(document.querySelectorAll(el))
                } else {
                    return document.querySelector(el)
                }
            }

            /**
             * Easy event listener function
             */
            const on = (type: any, el: any, listener: any, all = false) => {
                let selectEl = select(el, all)
                if (selectEl) {
                    if (all) {
                        selectEl.forEach((e: any) => e.addEventListener(type, listener))
                    } else {
                        selectEl.addEventListener(type, listener)
                    }
                }
            }

            /**
             * Easy on scroll event listener
             */
            const onscroll = (el: any, listener: any) => {
                el.addEventListener('scroll', listener)
            }

            /**
             * Navbar links active state on scroll
             */
            let navbarlinks = select('#navbar .scrollto', true)
            const navbarlinksActive = () => {
                let position = window.scrollY + 200
                navbarlinks.forEach((navbarlink: any) => {
                    if (!navbarlink.hash) return
                    let section = select(navbarlink.hash)
                    if (!section) return
                    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                        navbarlink.classList.add('active')
                    } else {
                        navbarlink.classList.remove('active')
                    }
                })
            }
            window.addEventListener('load', navbarlinksActive)
            onscroll(document, navbarlinksActive)

            /**
             * Scrolls to an element with header offset
             */
            const scrollto = (el: any) => {
                let elementPos = select(el).offsetTop
                window.scrollTo({
                    top: elementPos,
                    behavior: 'smooth'
                })
            }

            /**
             * Back to top button
             */
            let backtotop = select('.back-to-top')
            if (backtotop) {
                const toggleBacktotop = () => {
                    if (window.scrollY > 100) {
                        backtotop.classList.add('active')
                    } else {
                        backtotop.classList.remove('active')
                    }
                }
                window.addEventListener('load', toggleBacktotop)
                onscroll(document, toggleBacktotop)
            }

            /**
             * Mobile nav toggle
             */
            on('click', '.mobile-nav-toggle', function(e: any) {
                select('body').classList.toggle('mobile-nav-active')
                // @ts-ignore
                this.classList.toggle('bi-list')
                // @ts-ignore
                this.classList.toggle('bi-x')
            })

            /**
             * Scrool with ofset on links with a class name .scrollto
             */
            on('click', '.scrollto', function(e: any) {
                // @ts-ignore
                if (select(this.hash)) {
                    e.preventDefault()

                    let body = select('body')
                    if (body.classList.contains('mobile-nav-active')) {
                        body.classList.remove('mobile-nav-active')
                        let navbarToggle = select('.mobile-nav-toggle')
                        navbarToggle.classList.toggle('bi-list')
                        navbarToggle.classList.toggle('bi-x')
                    }
                    // @ts-ignore
                    scrollto(this.hash)
                }
            }, true)

            /**
             * Scroll with ofset on page load with hash links in the url
             */
            window.addEventListener('load', () => {
                if (window.location.hash) {
                    if (select(window.location.hash)) {
                        scrollto(window.location.hash)
                    }
                }
            });

            /**
             * Portfolio details slider
             */
            // new Swiper('.portfolio-details-slider', {
            //   speed: 400,
            //   loop: true,
            //   autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false
            //   },
            //   pagination: {
            //     el: '.swiper-pagination',
            //     type: 'bullets',
            //     clickable: true
            //   }
            // });



            hasRunOnce.current = true;
        }
    }, []);
  return (
    <>
      <Nav />
      <Home />
      <main id="main">
        <Introduce />
        <Notice />
        <Reserve />
        <Members />
        <Location />
      </main>
      <Copyright />
    </>
  );
}

export default App;
