import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-center">
            <div className='flex gap-10 px-10 py-5 shadow-2xl max-w-fit mx-auto rounded-lg bg-white fixed'>
                <div><a className='text-lg text-themeColor font-medium'>Home</a></div>
                <div><a className='text-lg text-themeColor font-medium'>About</a></div>
                <div><a className='text-lg text-themeColor font-medium'>Skills</a></div>
                <div><a className='text-lg text-themeColor font-medium'>Projects</a></div>
                <div><a className='text-lg text-themeColor font-medium'>Education</a></div>
                <div><a className='text-lg bg-themeBgGardient px-5 py-2 rounded-lg shadow-md'>Contact</a></div>
            </div>
        </div>
    )
}

export default Navbar