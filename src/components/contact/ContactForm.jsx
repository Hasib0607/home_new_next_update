"use client"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from "@/components/home/home.module.css"

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_c8illig', 'template_ryybxbx', form.current, 'zMK6Phl5p2yWR61Ps')
        e.target.reset();
        toast("Message Successfully Send", { type: 'success' })

    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                <div className="mb-4">
                    <label className='font-bold'>Name</label>
                    <input type="text" name="name" placeholder='Type your name' className={`${styles.archivo} w-full mt-1 px-2 bg-white border-gray-300 focus:border-gray-300   focus:ring-0 outline-0 text-gray-700 placeholder:text-gray-300 py-1 leading-8 transition-colors duration-200 ease-in-out rounded`} />
                </div>
                <div className="mb-4">
                    <label className='font-bold'>Email</label>
                    <input required type="email" name="email" placeholder='Type your email address' className={`${styles.archivo} w-full mt-1 px-2 bg-white border-gray-300 focus:border-gray-300 focus:ring-0 outline-0 text-gray-700 placeholder:text-gray-300 py-1 leading-8 transition-colors duration-200 ease-in-out rounded`} />
                </div>
                <div className="mb-4">
                    <label className='font-bold'>Subject</label>
                    <input type="text" name="subject" placeholder='Type subject' className={`${styles.archivo} w-full mt-1 px-2 bg-white border-gray-300 focus:border-gray-300   focus:ring-0 outline-0 text-gray-700 placeholder:text-gray-300 py-1 leading-8 transition-colors duration-200 ease-in-out rounded`} />
                </div>
                <div className="mb-4">
                    <label className='font-bold'>Message</label>
                    <textarea required id="message" name="message" placeholder='Type your message' className={`${styles.archivo} w-full mt-1 bg-white border border-gray-300 focus:border-gray-300 focus:ring-0 h-32 px-2 outline-0 text-gray-700 placeholder:text-gray-300 py-1 leading-8 transition-colors duration-200 rounded ease-in-out`}></textarea>
                </div>
                <button type='submit' className={`group relative h-10 w-[88px] overflow-hidden rounded bg-[#f1593a] text-lg shadow`}>
                    <div className={`absolute inset-0 w-0 bg-[#000] transition-all duration-[250ms] ease-out group-hover:w-full`}></div>
                    <span className={`${styles.archivo} relative  text-white`}>Send</span>
                </button>
            </form>
        </>
    )
}

export default ContactForm