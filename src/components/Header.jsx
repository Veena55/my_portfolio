import React, { useEffect, useState } from 'react'
import coding from '../assets/images/coding.svg'
import gsap from 'gsap'
import { BiDownload } from 'react-icons/bi';
import { MdComputer, MdDeveloperBoard } from 'react-icons/md';

const Header = () => {
  const roles = [
    "frontend developer",
    "backend developer",
    "mern developer",
    "java fullstatck developer"
  ];

  const [role, setRole] = useState('');

  useEffect(() => {
    const blinkAnimation = gsap.to('#blink', {
      opacity: 1,
      duration: .25,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    let perRole = "";
    let i;
    const loopRoles = async () => {
      for (i = 0; i < roles.length; i++) {
        let element = roles[i];
        for (let j = 0; j < element.length; j++) {
          await new Promise((resolve) => setTimeout(resolve, 80));
          perRole += element[j];
          setRole(perRole); // Updates the role state
        }
        perRole = ""; // Reset for next role element
        if (i == roles.length - 1) i = -1;
      }
    };

    loopRoles();

    return () => {
      blinkAnimation.kill();
    };
  }, []);


  return (
    <div className='flex justify-between items-center px-10'>
      <div>
        <h1 className='text-7xl font-medium'>I'm
          <span className='text-7xl font-bold text-[#247ad0]'> Veena Rao</span></h1>
        <h1 className='text-3xl py-5 '>
          <span>I'm </span>
          <span className='text-[#247ad0] capitalize roles'> {role}</span>
          <span className='text-[#247ad0] opacity-0 h-10 w-1 bg-[#247ad0] inline-block ms-1 align-middle' id='blink'></span>
        </h1>
        <div className='flex gap-x-5 mt-5'>
          <a className='text-lg bg-themeColor text-white px-5 py-2 rounded-lg shadow-md inline-flex items-center gap-2 font-medium'>Hire Me <MdComputer size={20} /></a>
          <a className='text-lg border border-themeColor bg-themeBgGardient font-medium px-5 py-2 rounded-lg shadow-md inline-flex items-center gap-2'>Download CV <BiDownload size={20} /></a>
        </div>
      </div>
      <div className='h-screen w-1/3 md:w-1/4 lg:w-1/2'>
        <img src={coding} alt="" className='h-auto w-full' />
      </div>
    </div>
  )
}

export default Header