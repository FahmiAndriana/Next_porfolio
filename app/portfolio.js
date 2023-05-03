/* @jsxRuntime classic */
import React from "react";
import Image from "next/image";
import Calculator from "../public/assets/image/calculator.jpeg";
import VueFirebase from "../public/assets/image/vue-firebase.png";
import SellerImg from "../public/assets/image/seller-ecommerce.png";
import UserImg from "../public/assets/image/user-ecommerce.png";
import QuranImg from "../public/assets/image/alquran2.png";
import Coverimg from "../public/assets/image/cover.jpeg";

export default function Portfolio() {
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">My recent project</span>
        <div className=" section services_container container">
          <div className="flex m-auto max-w-full overflow-x-scroll scroll-snap-type: x ">
            {/* Portfolio 3 */}
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2">
              <div className="services_content">
                <div className="">
                  <Image src={Coverimg} alt="Image 2" height={300} />
                  <h3 class="service_title">Portfolio</h3>
                  <p>Portfolio personal using Vue and Firevase</p>
                </div>
              </div>
            </div>
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2">
              <div className="services_content">
                <div className="">
                  <Image src={QuranImg} alt="Image 2" height={300} />
                  <h3 class="service_title">Al Quran Android App</h3>
                  <p>
                    Al Quran Android Mobile Apps using Flutter 3, simple to use,
                    lets read quran!
                  </p>
                  <span>View : </span>
                  <a
                    href="https://drive.google.com/file/d/1L8wifgyAoP2abD8yjyCBOs7_0oAIcLoD/view?usp=share_link"
                    class=""
                  >
                    <i class="uil uil-import">Download</i>
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2">
              <div className="services_content">
                <div className="">
                  <Image src={UserImg} alt="Image 2" height={300} />
                  <h3 class="service_title">User E Commerce</h3>
                  <p>
                    Android App Prototype for Multi E-Commerce using Flutter, an
                    application used by users to search for needed items, place
                    orders, and make payments. It is still in the development
                    stage.p
                  </p>
                  <span>View : </span>
                  <a
                    href="https://drive.google.com/file/d/1rUQ50ATKA_u4obLutX5BusVIIuH-ilvU/view"
                    class=""
                  >
                    <i class="uil uil-import">Download</i>
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2">
              <div className="services_content">
                <div className="">
                  <Image src={SellerImg} alt="Image 2" height={300} />
                  <h3 class="service_title">Seller E Commerce</h3>
                  <p>
                    Android App Prototype for Multi E-Commerce using flutter, an
                    application used by resellers to sell products, register
                    items, update inventory, and view sales progress. It is
                    still in the development stage.{" "}
                  </p>
                  <span>View : </span>
                  <a
                    href="https://drive.google.com/file/d/1cd18lwHpV7sic6QSdwHiuJdWaVVlbYte/view?usp=share_link"
                    class=""
                  >
                    <i class="uil uil-import">Download</i>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio 1 */}
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2 justify-center">
              <div className="services_content">
                <div className="">
                  <Image src={Calculator} alt="Image 1" height={300} />
                  <h3 className="service_title">Calculator</h3>
                  <p>Calculator using HTML, CSS and JavaScript</p>
                  <span>View : </span>
                  <a
                    href="https://github.com/FahmiAndriana/Calculator.fahmiandriana"
                    className=""
                  >
                    <i className="uil uil-github-alt"> github</i>
                  </a>
                </div>
              </div>
            </div>
            {/* Portfolio 2 */}
            <div className="scroll-snap-align: start flex-shrink-0 w-full m-2">
              <div className="services_content">
                <div className="">
                  <Image src={VueFirebase} alt="Image 2" height={300} />
                  <h3 className="service_title">Vue Firebase Blog</h3>
                  <p>Blog using vue 3 and firebase</p>
                  <span>View : </span>
                  <a
                    href="https://github.com/FahmiAndriana/vue-firbase-blog"
                    className=""
                  >
                    <i className="uil uil-github-alt"> github</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
