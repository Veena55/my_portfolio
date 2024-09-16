import React, { useEffect } from 'react';
import gsap from 'gsap';
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaHtml5, FaJava, FaNode } from 'react-icons/fa';
import { SiExpress, SiGreensock, SiMongodb } from 'react-icons/si';
import { ImHtmlFive2 } from 'react-icons/im';
import { TbBrandCss3 } from 'react-icons/tb';
import { DiJavascript } from 'react-icons/di';
import { BiLogoSpringBoot } from 'react-icons/bi';

import Skills from '../assets/images/sections/skills.png';

const HorizontalScroll = () => {
    useEffect(() => {
        // GSAP horizontal scroll animation for the whole skill container
        gsap.to(".skills-wrapper", {
            x: "-800%", // Move entire wrapper off screen
            duration: 8, // Adjust duration for smoothness
            delay: 1, // Delay before starting
            repeat: -1, // Infinite scroll
            ease: 'linear',
        });
    }, []);

    return (
        <div className="w-3/4 mx-auto overflow-hidden py-10 relative">
            {/* <h1 className='text-center py-5 text-5xl font-bold text-themeColor'>Skills</h1> */}
            <img src={Skills} className="mx-auto w-80" alt="skills" />
            <div className='flex relative justify-between items-center mt-10'>
                <div className="w-10 bg-[#ededee5d] h-28">
                </div>
                <div className=" absolute -z-10 py-10">
                    {/* First row of skills */}
                    <div className=" mx-2 whitespace-nowrap">
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <ImHtmlFive2 className="text-blue-700" size={100} />
                                <p className="text-center font-bold text-lg">HTML</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <TbBrandCss3 className="text-orange-500" size={100} />
                                <p className="text-center font-bold text-lg">CSS</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <DiJavascript className="text-yellow-300" size={100} />
                                <p className="text-center font-bold text-lg">Javascript</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <FaBootstrap className="text-indigo-500" size={100} />
                                <p className="text-center font-bold text-lg">Bootstrap</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <SiGreensock className="text-green-500" size={100} />
                                <p className="text-center font-bold text-lg ml-10">GSAP</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <RiReactjsLine className="text-cyan-400" size={100} />
                                <p className="text-center font-bold text-lg">React JS</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <FaNode className="text-green-700" size={100} />
                                <p className="text-center font-bold text-lg">Node JS</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <SiExpress className="text-black" size={100} />
                                <p className="text-center font-bold text-lg">Express JS</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <SiMongodb className="text-green-500" size={100} />
                                <p className="text-center font-bold text-lg">Mongo DB</p>
                            </div>
                        </div>

                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <FaJava className="text-red-500" size={100} />
                                <p className="text-center font-bold text-lg">Core Java</p>
                            </div>
                        </div>
                        <div className="inline-block mx-10 skills-wrapper">
                            <div className="flex flex-col items-center">
                                <BiLogoSpringBoot className="text-green-400" size={100} />
                                <p className="text-center font-bold text-lg">Spring Boot</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-10 bg-[#ededee8d] h-32">
                </div>
            </div>
        </div >
    );
};

export default HorizontalScroll;