import React, { useLayoutEffect } from 'react'
import projects from "../assets/images/sections/projects.png";
import { LiaLinkSolid } from 'react-icons/lia';
import gsap from 'gsap';
import contactme from '../assets/images/sections/contactme.png';

const Projects = () => {
    const moveOnProject = (e, index) => {
        const parentMove = document.getElementsByClassName('parentMoveBox')[index];
        const childMove = document.getElementsByClassName('childMoveBox')[index];
        const parentRect = parentMove.getBoundingClientRect();
        // parentMove.addEventListener('mouseover', (e) => {
        const x = e.clientX - parentRect.left;
        const y = e.clientY - parentRect.top;
        gsap.to(childMove, {
            opacity: 1,
            x: Math.min(Math.max(0, x), parentRect.width),
            y: Math.min(Math.max(0, y), parentRect.height),
            duration: 0.5
        })
        // })
        parentMove.addEventListener('mouseleave', (e) => {
            gsap.to(childMove, {
                opacity: 0,
                x: 0,
                y: 0,
                duration: 0
            })
        })
    }
    // useLayoutEffect(() => {

    // }, [])
    return (
        <div className="py-20 mx-auto flex gap-10 justify-around items-center bg">
            <div>
                <img src={projects} className="mx-auto w-80" alt="education" />
            </div>
            <div className='w-[60%] relative z-50'>
                <div className='rounded-xl parentMoveBox relative mt-16 bg-blue-50 hover:bg-blue-100 p-5 w-full border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700'>
                    <div className="flex justify-between" onMouseMove={(e) => moveOnProject(e, 0)}>
                        <h2 className='font-semibold text-xl'>Resume Builder</h2>
                        <a href='https://github.com/Veena55/resume_builder_frontend' target='_blank'><LiaLinkSolid className='text-xl font-bold text-themeDarkColor' /></a>
                    </div>
                    <div>
                        <p className='text- pt-3 text-justify z-50'>Authentication – Google & local Authentication
                            Protected Routes – Client side as well as Server side.
                            Authorization – Noone can login without valid token.
                            PDF Generator – HTML page will be generated as PDF which is downloadable.</p>
                    </div>
                    <div className="absolute w-20 h-20 bg-white top-0 childMoveBox rounded-full opacity-0 z-50">
                        <img src={contactme} alt="" />
                    </div>
                </div>
                <div className='rounded-xl parentMoveBox relative mt-16 bg-blue-50 hover:bg-blue-100 p-5 w-full border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700'>
                    <div className="flex justify-between" onMouseMove={(e) => moveOnProject(e, 1)}>
                        <h2 className='font-semibold text-xl'>NOVA Banking</h2>
                        <a href='https://github.com/Veena55/resume_builder_frontend' target='_blank'><LiaLinkSolid className='text-xl font-bold text-themeDarkColor' /></a>
                    </div>
                    <div>
                        <p className='text- pt-3 text-justify z-50'>This is the group project& my role was to build API, enhance UI using Tailwind CSS,
                            basic security to api(s) like to check customer auathenication on each request & API
                            Integration in React. Customer can register and login securly and create account.
                            Can able to create Fixed Deposit and Recurring Deposit accounts & able to see recent
                            transactions, customer profile. Only verified customer’s email can able to create account
                            which is done by mail verification. Customer can make (dummy) transactionsas well.</p>
                    </div>
                    <div className="absolute w-20 h-20 bg-white top-0 childMoveBox rounded-full opacity-0 z-50">
                        <img src={contactme} alt="" />
                    </div>
                </div>
                <div className='rounded-xl parentMoveBox relative mt-16 bg-blue-50 hover:bg-blue-100 p-5 w-full border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700'>
                    <div className="flex justify-between" onMouseMove={(e) => moveOnProject(e, 2)}>
                        <h2 className='font-semibold text-xl'>Library Management</h2>
                        <a href='https://github.com/Veena55/fe-library-management' target='_blank'> <LiaLinkSolid className='text-xl font-bold text-themeDarkColor' /></a>
                    </div>
                    <div>
                        <p className='text- pt-3 text-justify z-50'>Can register students, books and track the records of book and student in library.
                            Integrated toast notifications to show messages (actions success/failed). Handled
                            errors globally in the project.</p>
                    </div>
                    <div className="absolute w-20 h-20 bg-white top-0 childMoveBox rounded-full opacity-0 z-50">
                        <img src={contactme} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;