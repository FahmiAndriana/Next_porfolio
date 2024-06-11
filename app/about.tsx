import React from "react";
import Image from "next/image";
import PasFoto from "../public/assets/image/Pas-Foto.png";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <div className="flex items-center justify-center">
          <Image src={PasFoto} alt="" className="about_img" />
        </div>

        <div className="about_data p-4">
          <p className="about_description text-justify">
            I am a professional with a background in teaching and a bachelor&apos;s degree in Education. I started my career as a teacher before deciding to pursue my interest in information technology. Currently, I have experience as a fullstack developer with expertise in developing mobile and web applications using React.js for frontend and Express.js for backend. Additionally, I have skills in developing mobile applications using Flutter. I am dedicated to creating innovative and user-friendly technology solutions and continuously learning and developing in this ever-changing field.
          </p>

          <div className="about_info">
            <div>
              <span className="about_info-name">
                <b className="info_desc">City:</b> <br />
                Garut
              </span>
              <span className="about_info-name">
                <b className="info_desc">Degree:</b> <br />
                S1
              </span>
              <span className="about_info-name">
                <b className="info_desc">Age:</b> <br />
                27
              </span>
            </div>
            <div>
              <span className="about_info-name">
                <b className="info_desc">Email:</b> <br />
                Fahmiandriana22@gmail.com
              </span>
              <span className="about_info-name">
                <b className="info_desc">Birthday:</b> <br />
                05 June 1994
              </span>
              <span className="about_info-name">
                <b className="info_desc">Phone:</b> <br />
                0821-2358-0764
              </span>
            </div>
            <div>
              <span className="about_info-title"></span>
              <span className="about_info-name">
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
