import React from 'react'
import Image from 'next/image'
import PasFoto from '../public/assets/image/Pas-Foto.png'

export default function About() {
    return <section className="about section" id="about"  >

        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <Image src={PasFoto} alt='' className="about_img" />

            <div className="about_data">
                <p className="about_description" >Saya adalah seorang pekerja yang memiliki pengalaman di bidang administrasi dan marketing. Bergelar sarjana S1 di bidang Pendidikan, sempat berprofesi menjadi seorang guru dan sekarang saya mencoba memulai karir di dunia IT dengan mengikuti Bootcamp FullStack Developer</p>

                <div className="about_info">
                    <div>

                        <span className="about_info-name"><b className="info_desc">City:</b> <br />Garut</span>
                        <span className="about_info-name"><b className="info_desc">Degree:</b> <br />S1</span>
                        <span className="about_info-name"><b className="info_desc">Age:</b> <br />27</span>
                    </div>
                    <div>
                        <span className="about_info-name"><b className="info_desc">Email:  </b> <br />Fahmiandriana22@gmail.com</span>
                        <span className="about_info-name"><b className="info_desc">Birthday:  </b> <br />05 June 1994</span>
                        <span className="about_info-name"><b className="info_desc">Phone:  </b> <br />0821-2358-0764</span>
                    </div>
                    <div>
                        <span className="about_info-title"></span>
                        <span className="about_info-name"><br /></span>

                    </div>
                </div>

            </div>
        </div>
    </section>
}
