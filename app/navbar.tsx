import React from 'react'



export default function Navbar() {

    const open = () => {
        console.log("masuk sini");
        const navMenu = document.getElementById("nav-menu"),
            navToggle = document.getElementById("nav-toggle"),
            navClose = document.getElementById("nav-close");

        if (navToggle) {
            navToggle.addEventListener("click", () => {
                navMenu!.classList.add("show-menu");
            });
        }
        if (navClose) {
            navClose.addEventListener("click", () => {
                navMenu!.classList.remove("show-menu");
            });
        }
    };

    return (

        <header className="header font-semibold" id="header">
            <nav className="nav container px-1">
                <a href="#" className="nav_logo">Fahmi Andriana</a>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil-home nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skill" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" id="nav-close"></i>
                </div>
               
            </nav>
        </header>

    )
}
