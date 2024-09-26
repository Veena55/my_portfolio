import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import contactme from '../assets/images/sections/contactme.png';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const ContactMe = () => {
    useEffect(() => {
        gsap.to(".jump", {
            y: "5%",
            duration: 1,
            ease: "sine.out", // Bounce effect
            yoyo: true, // Will reverse the animation after it finishes
            repeat: -1, // Infinite repeat, remove or set to a specific number for limited repeats
            scrollTrigger: {
                trigger: "#contactme", // The element that triggers the animation
                start: "top 80%", // When the top of #contactme hits 80% of the viewport height
                toggleActions: "play none none none", // Play animation on scroll in
            },
        });
    }, []);



    return (
        <div className='p-0 overflow-hidden' id='contactme'>
            <svg className='wave1' width="150%" height="150" xmlns="http://www.w3.org/2000/svg">
                {/* <path d="M 0 100 Q 50 0, 100 100 T 200 100 Q 250 0, 300 100 T 400 100 Q 450 0, 500 100 T 600 100 Q 650 0, 700 100 T 800 100 Q 850 0, 900 100 T 1000 100 Q 1050 0, 1100 100 T 1200 100 Q 1250 0, 1300 100 T 1400 100 Q 1450 0, 1500 100 T 1600 100 Q 1650 0, 1700 100 T 1800 100 Q 1850 0, 1900 100 V 150 H 0 Z" fill="#e7f0fd"></path> */}
                <path d="M 0 100 Q 50 0, 700 100 T 800 100 Q 850 0, 1900 0 V 150 H 0 Z" fill="#e7f0fd"></path>

            </svg>
            {/* <svg className='wave2 -mt-[10rem] ml-24' width="150%" height="150" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 100 Q 50 0, 100 100 T 200 100 Q 250 0, 300 100 T 400 100 Q 450 0, 500 100 T 600 100 Q 650 0, 700 100 T 800 100 Q 850 0, 900 100 T 1000 100 Q 1050 0, 1100 100 T 1200 100 Q 1250 0, 1300 100 T 1400 100 Q 1450 0, 1500 100 T 1600 100 Q 1650 0, 1700 100 T 1800 100 Q 1850 0, 1900 100 V 150 H 0 Z" fill="#e7f0fd"></path>
            </svg> */}
            <div className='bg-themeBgGardient grid grid-cols-2 items-center justify-center pb-10'>
                {/* Additional content */}
                <div className='px-5 w-3/4 mx-auto'>
                    <form action="" className='px-5 w-full'>
                        <div className='py-2'>
                            {/* <label htmlFor="" className='mt-2 text-themeDarkColor'>Enter Name:</label> */}
                            <input type="text" className='p-2 border-0 border-b-2 border-b-themeDarkColor mt-2 text-themeDarkColor focus:border-b-4 w-full bg-transparent focus:outline-none placeholder:text-themeDarkColor' placeholder='Enter Name' />
                        </div>
                        <div className='py-2'>
                            {/* <label htmlFor="" className='mt-2 text-themeDarkColor'>Enter Email:</label> */}
                            <input type="email" className='p-2 border-0 border-b-2 border-b-themeDarkColor mt-2 text-themeDarkColor focus:border-b-4 w-full bg-transparent focus:outline-none placeholder:text-themeDarkColor' placeholder='Enter Email' />
                        </div>
                        <div className='py-2'>
                            {/* <label htmlFor="" className='mt-2 text-themeDarkColor'>Enter Mobile:</label> */}
                            <input type="number" className='p-2 border-0 border-b-2 border-b-themeDarkColor mt-2 text-themeDarkColor focus:border-b-4 w-full bg-transparent focus:outline-none placeholder:text-themeDarkColor' placeholder='Enter Mobile No.' />
                        </div>
                        <div className='py-2'>
                            {/* <label htmlFor="" className='mt-2 text-themeDarkColor'>Enter Your Message:</label> */}
                            <textarea type="text" className='p-2 border-0 border-b-2 border-b-themeDarkColor mt-2 text-themeDarkColor focus:border-b-4 w-full bg-transparent focus:outline-none placeholder:text-themeDarkColor' placeholder='Enter Your Message' />
                        </div>
                        <div className='py-2'>
                            <button type="number" className='relative z-50
                            p-2 bg-themeDarkColor text-white rounded-lg shadow w-full font-semibold hover:bg-themeLightBg hover:text-themeDarkColor transition-all duration-500'>Contact Me</button>
                        </div>
                    </form>
                </div>
                <div className='px-5'>
                    <img src={contactme} alt="" className='scale-125 mx-auto jump' />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
