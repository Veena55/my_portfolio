import React, { useLayoutEffect } from 'react';
import projects from "../assets/images/sections/projects.png";
import { LiaLinkSolid } from 'react-icons/lia';
import gsap from 'gsap';
import contactme from '../assets/images/sections/contactme.png';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useLayoutEffect(() => {
        const parentBoxes = document.getElementsByClassName('parentMoveBox');
        const childBoxes = document.getElementsByClassName('childMoveBox');

        const moveOnProject = (e, index) => {
            const parentMove = parentBoxes[index];
            const childMove = childBoxes[index];
            const parentRect = parentMove.getBoundingClientRect();

            const x = e.clientX - parentRect.left;
            const y = e.clientY - parentRect.top;

            gsap.to(childMove, {
                opacity: 1,
                x: Math.min(Math.max(0, x), parentRect.width),
                y: Math.min(Math.max(0, y), parentRect.height),
                duration: 0.5,
                ease: 'power3.out',
            });
        };

        const resetAnimation = (index) => {
            const childMove = childBoxes[index];
            gsap.to(childMove, {
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0.5,
            });
        };

        Array.from(parentBoxes).forEach((parentMove, index) => {
            parentMove.addEventListener('mousemove', (e) => moveOnProject(e, index));
            parentMove.addEventListener('mouseleave', () => resetAnimation(index));
        });

        // ScrollTrigger for projectTitle rotation
        const titleRotation = gsap.to(".projectTitle", {
            rotate: 360,
            ease: "circ.inOut",
            duration: 5,
            scrollTrigger: {
                trigger: ".projectTitle",
                start: "top 90%",
                end: "top 10%",
                scrub: true,
                toggleActions: "play none none none",
            },
        });

        // const imgRotation = gsap.to(".projectTitleImg", {
        //     rotate: -360,
        //     ease: "circ.inOut",
        //     duration: 5,
        //     scrollTrigger: {
        //         trigger: ".projectTitleImg",
        //         start: "top 90%",
        //         end: "top 10%",
        //         scrub: true,
        //         toggleActions: "play none none none",
        //     },
        // });

        // Cleanup event listeners on unmount
        return () => {
            Array.from(parentBoxes).forEach((parentMove, index) => {
                parentMove.removeEventListener('mousemove', (e) => moveOnProject(e, index));
                parentMove.removeEventListener('mouseleave', () => resetAnimation(index));
            });
            gsap.killTweensOf(".projectTitle");
            gsap.killTweensOf(".projectTitleImg");
        };
    }, []);


    return (
        <div id='projects' className="py-20 mx-auto flex lg:flex-row flex-col gap-10 justify-around items-center bg-themeBgGardient projects">
            <div className='projectTitle bg-slate-50 outline-dashed outline-4 outline-offset-8 outline-themeDarkColor rounded-full sticky top-0'>
                <img src={projects} className="mx-auto w-48 h-48 rounded-full shadow-md object-contain border border-themeDarkColor projectTitleImg" alt="education" />
            </div>
            <div className="lg:w-[50%] px-5 relative z-50">
                {/** Project Cards */}
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-xl w-full parentMoveBox relative mt-16 bg-blue-50 hover:bg-blue-100 p-5 border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700"
                    >
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl">{project.title}</h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <LiaLinkSolid className="text-xl font-bold text-themeDarkColor" />
                            </a>
                        </div>
                        <div>
                            <p className="line-clamp-1 pt-3 text-justify z-50">{project.description}</p>
                        </div>
                        <div className="absolute lg:w-20  w-12 h-1w-12 lg:h-20 bg-white top-0 childMoveBox rounded-full opacity-0 z-50">
                            <img src={contactme} alt="contact" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const projectData = [
    {
        title: 'Resume Builder',
        link: 'https://github.com/Veena55/resume_builder_frontend',
        description: 'Authentication – Google & local Authentication Protected Routes – Client side as well as Server side.',
    },
    {
        title: 'NOVA Banking',
        link: 'https://github.com/Veena55/resume_builder_frontend',
        description: 'This is the group project& my role was to build API, enhance UI using Tailwind CSS,basic security to api(s) like to check customer auathenication on each request & API Integration in React. Customer can register and login securly and create account. Can able to create Fixed Deposit and Recurring Deposit accounts & able to see recent transactions, customer profile. Only verified customer’s email can able to create account which is done by mail verification. Customer can make (dummy) transactionsas well.',
    },
    {
        title: 'Library Management',
        link: 'https://github.com/Veena55/fe-library-management',
        description: 'Can register students, books and track the records of book and student in library.',
    },
];

export default Projects;
