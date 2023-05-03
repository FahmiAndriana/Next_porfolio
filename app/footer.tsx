import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer_bg">
                    <div className="footer-container container grid">
                        <div>
                            <h1 className="footer_title">Fahmi Andriana</h1>
                            <span className="footer_subtitle">Frontend Developer</span>
                        </div>
                        <ul className="footer_links">
                            <li>
                                <a href="#about" className="footer_link">About</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer_link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer_link">Contact Me</a>
                            </li>
                        </ul>
                        <div className="footer_socials">
                            <a href="https://web.facebook.com/zhenn.asckkhabhann" className="footer_social">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/nevetpito" className="footer_social">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://github.com/FahmiAndriana" className="footer_social">
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/fahmi-andriana-a0394b225/" className="footer_social">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
