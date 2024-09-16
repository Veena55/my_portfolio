import React from 'react'
import projects from "../assets/images/sections/projects.png";
import { LiaLinkSolid } from 'react-icons/lia';

const Projects = () => {
    return (
        <div className="pt-20 mx-auto flex h-screen gap-10 justify-around bg">
            <div>
                <img src={projects} className="mx-auto w-80" alt="education" />
            </div>
            <div className='w-[60%]'>
                <div className='mt-16 bg-blue-50 hover:bg-blue-100 p-5 w-full border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700'>
                    <div className="flex justify-between">
                        <h2 className='font-semibold text-xl'>Project 1</h2>
                        <LiaLinkSolid className='text-xl font-bold text-themeDarkColor' />
                    </div>
                </div>
                <div className='mt-16 bg-blue-50 hover:bg-blue-100 p-5 w-full border border-b-2 border-b-themeDarkColor hover:border-b-4 duration-700'>
                    <div className="flex justify-between">
                        <h2 className='font-semibold text-xl'>Project 1</h2>
                        <LiaLinkSolid className='text-xl font-bold text-themeDarkColor' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects