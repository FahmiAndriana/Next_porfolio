import React from 'react'
import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, where, query, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase"


export default function ContactMe() {
    // const {sentMail, setSentMail} = useState("")
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle"></span>
            <div className="contact_container container grid">
                <div>
                    <div className="contact_information">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">0821-2358-0764</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">fahmiandriana22@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact_information">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Jl. Citiis, Tarogong Kaler-Garut</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact_form grid" >
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Name</label>
                            <input type="text" className="contact_input" v-model="name" required />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Email</label>
                            <input type="email" className="contact_input" v-model="email" required />
                        </div>
                    </div>
                    <div className="contact_content">
                        <label htmlFor="" className="contact_label">Message</label>
                        <textarea name="" id="" cols={0} rows={7} className="contact_input" v-model="message" required></textarea>
                    </div>
                    <div>

                        <button type="submit" className="button "
                        // @submit.prevent="handleSubmit"
                        >
                            Send Message
                            <i className="uil uil-message button_icon"></i>
                        </button>
                    </div>
                </form>

            </div >

        </section >
    )
}
