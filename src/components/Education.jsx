import React, { useLayoutEffect } from 'react';
import education from "../assets/images/sections/education.png";
import { HiAcademicCap } from 'react-icons/hi';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { FaSchool } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    useLayoutEffect(() => {
        const mm = gsap.matchMedia();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".edu-section", // The element that triggers the animation
                start: "top 80%",        // When the top of the trigger hits 80% of the viewport height
                end: "bottom 20%",       // When the bottom of the trigger hits 20% of the viewport
                toggleActions: "play none none reverse", // Animation behavior: play on enter, reverse on exit
            },
        });

        // Animation for large screens (lg and up)
        mm.add("(min-width: 1024px)", () => {
            tl.to([".edu1", ".edu2", ".edu3"], {
                opacity: 1,
                x: 50, // X translation for large screens
                duration: 1,
                stagger: 0.8, // Delay each element by 0.8s
            });
        });

        // Animation for smaller screens (below lg)
        mm.add("(max-width: 1023px)", () => {
            tl.to([".edu1", ".edu2", ".edu3"], {
                opacity: 1,
                x: 0, // No x translation for smaller screens
                duration: 2,
                stagger: 0.8, // Delay each element by 0.8s
            });
        });
    }, []);

    return (
        <div id='education' className="px-10 mx-auto edu-section">
            <div>
                <img src={education} className="mx-auto w-80" alt="education" />
            </div>
            <div className="grid lg:grid-cols-3 justify-center items-center  gap-x-10 pt-5">
                <div className='pt-10 flex items-center gap-5 edu1 opacity-0'>
                    <div className="w-16 h-16 bg-themeDarkBg rounded-full flex justify-center items-center shadow-xl">
                        <HiAcademicCap className="text-white p-1" size={55} />
                    </div>
                    <div>
                        <h3 className='text-lg font-bold text-themeDarkColor'>Bachelor's Of Science (B.Sc.)</h3>
                        <p className='text-slate-500'>Hislop College, Nagpur</p>
                    </div>
                </div>
                <div className='pt-10 flex items-center gap-5 edu2 opacity-0'>
                    <div className="w-16 h-16 bg-themeDarkBg rounded-full flex justify-center items-center shadow-xl">
                        <PiBuildingApartmentFill className="text-white p-1" size={50} />
                    </div>
                    <div>
                        <h3 className='text-lg font-bold text-themeDarkColor'>Higher Secondary Certificate (HSC)</h3>
                        <p className='text-slate-500'>Maharashtra Vidyalaya, Nagpur</p>
                    </div>
                </div>
                <div className='pt-10 flex items-center gap-5 edu3 opacity-0'>
                    <div className="w-16 h-16 bg-themeDarkBg rounded-full flex justify-center items-center shadow-xl">
                        <FaSchool className="text-white p-1" size={50} />
                    </div>
                    <div>
                        <h3 className='text-lg font-bold text-themeDarkColor'>Secondary School Certificate (SSC)</h3>
                        <p className='text-slate-500'>Shankarrao Chavhan Vidyalaya, Nagpur</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
