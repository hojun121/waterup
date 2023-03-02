import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos';

export const Initializer = () => {
    const hasRunOnce = React.useRef(false);
    const arrayDistinct = (list: NodeListOf<any>): any[] => {
        const result = [];
        for (var i = 0; i < list.length; i++) {
            var value = list[i];
            if (result.indexOf(value) === -1)
                result.push(value);
        }
        return result;
    }
    React.useEffect(() => {
        if (!hasRunOnce.current) {
            const select = (el: any, all = false) => {
                el = el.trim()
                if (all) {
                    return arrayDistinct(document.querySelectorAll(el))
                } else {
                    return document.querySelector(el)
                }
            }
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
            const onscroll = (el: any, listener: any) => {
                el.addEventListener('scroll', listener)
            }
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
            const scrollto = (el: any) => {
                let elementPos = select(el).offsetTop
                window.scrollTo({
                    top: elementPos,
                    behavior: 'smooth'
                })
            }
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
            on('click', '.mobile-nav-toggle', function (e: any) {
                select('body').classList.toggle('mobile-nav-active')
                // @ts-ignore
                this.classList.toggle('bi-list')
                // @ts-ignore
                this.classList.toggle('bi-x')
            })
            on('click', '.scrollto', function (e: any) {
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

            if (window.location.hash) {
                if (select(window.location.hash)) {
                    scrollto(window.location.hash)
                }
            }
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            })

            let portfolioContainer = select('.portfolio-container');
            if (portfolioContainer) {

                let portfolioFilters = select('#portfolio-flters li', true);

                on('click', '#portfolio-flters li', function (e: any) {
                    e.preventDefault();
                    portfolioFilters.forEach(function (el: any) {
                        el.classList.remove('filter-active');
                    });
                    // @ts-ignore
                    this.classList.add('filter-active');

                }, true);
            }
            hasRunOnce.current = true;
        }
    }, []);
}