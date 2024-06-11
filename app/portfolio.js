/* @jsxRuntime classic */
"use client"
import React, { useState } from "react";
import Image from "next/image";
import Calculator from "../public/assets/image/calculator.jpeg";
import VueFirebase from "../public/assets/image/vue-firebase.png";
import Ayuayu from "../public/assets/image/ayuayu.png"
import Coverimg from "../public/assets/image/cover.jpeg";
import Dimo from "../public/assets/image/dimo.png";
import Fotohokkie from "../public/assets/image/fotohokkie.png";
import Foxo from "../public/assets/image/foxo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

export default function Portfolio() {
 
  const items = [
    
    {
      img: Dimo,
      title: 'Discovery Montessori',
      description:
        "Web and Mobile Apps to help parents with transactions, monitor their children's progress, and make it easier for teachers to evaluate, all in one app.",
      link: 'https://www.discoverymontessori.id/',
      google: 'https://play.google.com/store/apps/details?id=com.tanam.dicovery_montessori',
      appstore: 'https://apps.apple.com/app/discovery-montessori/id6450524311', 
    },
    {
      img: Ayuayu,
      title: 'Ayu Ayu',
      description:
        'A provider of traditionally packaged cakes with a modern twist, offering a unique experience with deeply rooted traditional menus.',
      link: 'https://ayuayu.tanam.io/',
    },
    {
      img: Fotohokkie,
      title: 'Fotohokkie',
      description:
        "Fotohokkie is a provider of photobox services with multiple branches across Indonesia, utilizing websites and mobile apps to facilitate transactions for users.",
      link: 'https://www.fotohokkie.id/',
      google: 'https://play.google.com/store/apps/details?id=com.fotohokkie.tanam&pli=1',
      appstore: 'https://apps.apple.com/us/app/fotohokkie/id6471645466', 
  
    },
    {
      img: Foxo,
      title: 'Foxo Studio',
      description:
        "A photo studio service provider capturing every moment across various regions in Indonesia.",
      link: 'https://foxo.studio',
    },
    
  ];

  return (
  
    <div className="portfolio_container w-full flex flex-col items-center justify-center  sm:pl-0 px-4">
      <h2 className="section_title">Projects</h2>
                <span className="section_subtitle">My Recent Projects</span>

    <div className="relative  w-full  sm:max-w-lg max-w-xl ">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>

          <div className="services_content  sm:h-[320px] h-[450px] m-2 flex sm:flex-row flex-col justify-center items-center">
            <div className="w-3/4 bg-red4-400 h-full flex items-center justify-center mr-3 my-2">
              
              <Image src={item.img} alt={`Image ${index}`} height={200} width={200} />
              </div>
            <div className="w-full ">
              <h3 className="service_title text-lg">{item.title}</h3>
            <p className="text-sm sm:text-sm font-light">{item.description}</p>
            <div className="flex items-center justify-start  h-fit">
            {item.google && <a href={item.google} className="text-blue-500  h-fit mr-2" target="_blank" rel="noopener noreferrer">
                <img src='./google-play.svg' width={70} height={30}  className="h-fit "/>
                </a>}
                {item.appstore && <a href={item.appstore} className="text-blue-500 mr-4 h-fit" target="_blank" rel="noopener noreferrer">
                <img src='./apple.svg' height={56} width={70}/>
                </a>}
            </div>
            {item.link && (
              <div>
                <span>View Website : </span>
                <a href={item.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
  <i className="uil uil-import"></i> link
</a>

              </div>
            )}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

</div>
</div>
  );
}
