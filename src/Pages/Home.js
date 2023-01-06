import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Logo from '../Components/Logo';
import "./Home.css"
import './Pages.css'
import './StarBg.css'

function Home() {
    const loc = useLocation();
    const navigate = useNavigate();
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('enter');
                    entry.target.classList.add('scroll-show')
                    entry.target.classList.remove('scroll-hide')
                }
                else {
                    console.log('exit');
                    entry.target.classList.add('scroll-hide')
                    entry.target.classList.remove('scroll-show')
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.scroll-hide');
        hiddenElements.forEach(element => {
            observer.observe(element);
        })
    })

    useEffect(() => {
        if (loc.pathname === '/') {
            window.scroll(0, 0);
        }
    }, [loc.pathname, loc.hash]);


    return (
        <div className='home-page page'>
            <div className="stars-bg">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>

            <div className="homepage-logo">
                <div className="main-content">
                    <Logo width="242px" height="104px" fontSize="20rem" />
                </div>
                <div className="sub-content">
                    <div className="club">Coding Club</div>
                    <div className="college-name">
                        <a href="https://www.mcemotihari.ac.in/" target="_blank" rel="noreferrer">M.C.E.&nbsp; Motihari</a>
                    </div>
                </div>
            </div>
            <div id="about" className='about'>
                <section className="about-section">
                    <div className="section-heading scroll-hide">
                        <p>About</p>
                    </div>
                    <div className="section-content scroll-hide">
                        <p>
                            This club is an initiative to bring together students interested in coding and associated skills in a peer-to-peer learning environment.
                            We believe that a peer-to-peer learning environment is the best way to hone our skills and achieve our goals.
                            Each member of the club brings their own unique vision and perspective, and we encourage everyone to share their ideas and experiences. Whether you're a seasoned developer or just starting out, we welcome you to join us and be a part of our community.

                            The club is open to all students. The only prerequisite to join us is enthusiasm for coding and development, or at least curiosity towards it.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
