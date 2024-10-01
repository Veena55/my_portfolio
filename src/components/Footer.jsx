import React from 'react'
import { BsEnvelope, BsEnvelopeCheck, BsGithub, BsLinkedin } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
    return (
        <div className='bg-themeDarkColor'>
            <div className='lg:max-w-7xl w-full mx-auto text-white flex justify-between items-center p-2 shadow-lg'>
                <div>
                    <small>Copyright 2024 - All Rights Reserved</small>
                </div>
                <div className='flex gap-5 relative z-[100] lg:pr-10'>
                    <a href='https://github.com/Veena55/' target='_blank'><BsGithub size={20} /></a>
                    <a href='https://www.linkedin.com/in/veena-rao-a36374175/' target='_blank'><BsLinkedin size={20} /></a>
                    <a href='mailto:veenasrao5@gmail.com' target='_blank'><BsEnvelopeCheck size={20} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer