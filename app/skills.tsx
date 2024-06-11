import React from 'react'


export default function Skill() {
    return (
        <div>
            <section className="services section " id="skill">
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">My Technical level</span>

                <div className="services_container w-fit item mx-auto grid">
                    {/* <!--==================== PORFOLIO 1 ====================--> */}
                    <div className="services_content">
                        <div className="">

                            <div className="">
                                <h1 className="skills_titles">Frontend Developer</h1>
                                <span className="Skill_subtitle"></span>
                            </div>

                        </div>
                        <div className="services_modal-content active-modal">



                        <div className="skills_list grid grid-cols-2 sm:grid-cols-2 text-[10px] font-light md:grid-cols-3 gap-4">
  <div className="bg-gray-50 pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col shadow">

   <div className="h-full flex items-center"> <img src='./html-5.png' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">HTML</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./css-3.png' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">CSS</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./next.svg'height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Next</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./vue.png' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Vue</h3>
  </div>
  <div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./flutter.svg' height={80} width={80}/></div>
    <h3 className=" pt-2 font-semibold text-center">Flutter</h3>
  </div>

  <div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
<div className="h-full flex items-center">    <img src='./tailwind.svg' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Tailwind</h3>
  </div>

  

</div>

                        </div>

                    </div>

                    {/* <!--==================== PORFOLIO 2 ====================--> */}
                    <div className="services_content">
                        <div className="">
                            <div className="">
                                <h1 className="skills_titles">Backend Developer</h1>
                                <span className="Skill_subtitle"></span>

                            </div>
                        </div>
                        <div className="services_modal-content">
                        <div className="skills_list grid grid-cols-2 sm:grid-cols-2 text-[10px] text-light md:grid-cols-3 gap-4">
  <div className="bg-gray-50 pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col shadow">
   <div className="h-full flex items-center"> <img src='./node.svg' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Node</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./prisma.svg' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Prisma</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./sequelize.svg'height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Sequelize</h3>
  </div>
  <div className="bg-gray-50 pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col shadow">
   <div className="h-full flex items-center"> <img src='./mysql.svg' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Mysql</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./mongodb.svg' height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">MongoDB</h3>
  </div><div className="bg-gray-50 shadow pt-2 pb-2 px-3 rounded flex items-center justify-between flex-col">
    <div className="h-full flex items-center"><img src='./postgres.svg'height={75} width={100}/></div>
    <h3 className=" pt-2 font-semibold text-center">Postgres</h3>
  </div>
  

</div>
                        </div>
                    </div>

                    {/* <!--==================== PORFOLIO 3 ====================--> */}
                    {/* <div className="services_content">
                        <div className="">
                            <div className="skills_header">
                                <i className="uil uil-swatchbook skills_icon"></i><br />

                                <div className="">
                                    <h1 className="skills_titles">Design</h1>
                                    <span className="Skill_subtitle"></span>

                                </div>

                            </div>

                        </div>


                        <div className="services_modal-content">


                            <div className="skills_list grid">
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Figma</h3>
                                        <span className="skills_number">60%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_figma"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Photoshop</h3>
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_photoshop"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Canva</h3>
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_canva"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Corel Draw</h3>
                                        <span className="skills_number">60%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_coreldraw"></span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div> */}
                    {/* <--==================== PORFOLIO 4 ====================--> */}
                   
{/*                    
                    <div className="services_content">
                        <div className="">
                            <div className="skills_header">
                                <i className="uil uil-database skills_icon"></i><br />

                                <div className="">
                                    <h1 className="skills_titles">DataBase</h1>
                                    <span className="Skill_subtitle"></span>

                                </div>

                            </div>

                        </div>


                        <div className="services_modal-content">


                            <div className="skills_list grid">
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">MongoDB</h3>
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_mongodb"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Mysql</h3>
                                        <span className="skills_number">70%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_mysql"></span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Firebase</h3>
                                        <span className="skills_number">60%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_sqllite"></span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div> */}


                </div>


            </section>
        </div>
    )
}
