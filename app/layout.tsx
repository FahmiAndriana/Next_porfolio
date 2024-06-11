/* @jsxRuntime classic */
import React from 'react'
import '../styles/globals.css';
import About from "./about"
import Skill from "./skills"
import '../public/assets/css/styles.css'
import HeroImg from "./heroImg"
import Footer from "./footer"
import Portfolio from "./portfolio"
import Navbar from "./navbar"
import ContactMe from "./contactme"


export const metadata = {
  title: 'Fahmi Andriana',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>Fahmi Andriana</head> */}
      <body>{children}
        <Navbar />
        <HeroImg />
        <About />

        <Skill />
        <Portfolio />
        <ContactMe />

        <Footer />
      </body>
    </html>
  )
}
