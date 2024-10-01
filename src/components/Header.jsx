import React, { useEffect, useState } from 'react'
import coding from '../assets/images/coding.svg'
import gsap from 'gsap'
import { BiDownload } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';
import resume from "../assets/resume/Veena_S_Rao_Resume.pdf"

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
      duration: 1,
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
          await new Promise((resolve) => setTimeout(resolve, 100));
          perRole += element[j];
          setRole(perRole); // Updates the role state
        }
        perRole = ""; // Reset for next role element
        if (i == roles.length - 1) i = -1;
      }
    };

    loopRoles();

    const animateMyName = gsap.to(".myName", {
      height: "68px",
      width: "max-content",
      duration: 2,
      ease: "sine.in",
      repeat: 1,
      repeatDelay: .5
    })

    return () => {
      blinkAnimation.kill();
      animateMyName.kill()
    };
  }, []);


  return (
    <div className='flex justify-between items-center px-10 flex-col-reverse lg:flex-row lg:h-screen'>
      <div>
        <h1 className='text-5xl lg:text-7xl font-medium block h-[max-content]'>I'm
          <span className='text-stroke text-half-color myName'>
            <h1 className='text-5xl lg:text-7xl font-bold  text-transparent lg:pl-5'> Veena Rao</h1>
          </span>
        </h1>
        <h1 className='text-lg lg:text-3xl lg:mt-0 lg:py-5 '>
          <span>I'm </span>
          <span className='text-[#247ad0] capitalize roles'> {role}</span>
          <span className='text-[#247ad0] opacity-0 h-10 w-1 bg-[#247ad0] inline-block ms-1 align-middle' id='blink'></span>
        </h1>
        <div className='flex flex-col md:flex-row gap-3 md:gap-x-5 mt-5'>
          <a href='#contact' className='text-lg bg-themeColor text-white px-5 py-2 rounded-lg shadow-md inline-flex items-center gap-2 font-medium relative z-50'>Hire Me <MdComputer size={20} /></a>
          {/* <embed src={resume} type="application/pdf" width="100%" height="600px" /> */}

          <a href={resume} className='text-lg border border-themeColor bg-themeBgGardient font-medium px-5 py-2 rounded-lg shadow-md inline-flex items-center gap-2 relative z-50' download="veena_rao_resume.pdf">Download CV <BiDownload size={20} /></a>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <img src={coding} alt="" className='h-auto w-full' />
      </div>
    </div>
  )
}

export default Header