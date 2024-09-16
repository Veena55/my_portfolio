import React from 'react'
import about from "../assets/images/sections/about_me.png";
import aboutme from "../assets/images/sections/aboutme3.svg";

const AboutMe = () => {
    return (
        <div className="px-10 mx-auto">
            <div>
                <img src={about} className="mx-auto w-80" alt="education" />
            </div>
            <div className='grid grid-cols-2 justify-between items-center'>
                <div>
                    <img src={aboutme} className='scale-75' alt="aboutme" />
                </div>
                <div>
                    <p className='text-justify pt-5'>
                        I'm a passionate Full-Stack Developer specializing in the MERN stack and Java. My journey in web development started with a fascination for creating intuitive, dynamic user interfaces, and it has evolved into building robust and scalable web applications. I thrive in environments where creativity meets logic and where code transforms ideas into functional solutions.
                    </p>
                    <p className='text-justify pt-5'>
                        My expertise includes Frontend Development with React, where I love to bring life to user interfaces using GSAP for animations, Tailwind CSS, and Bootstrap for styling, and Redux for managing complex state logic. On the Backend, I work with Node.js and Express, and I'm proficient in designing APIs and managing databases with MongoDB and MySQL. I also have experience with Spring Boot for building REST APIs using Java.
                    </p>
                    <p className='text-justify pt-5'>
                        Over the years, I’ve gained valuable experience working on various projects, including chat applications, online banking systems, and responsive websites. My approach to problem-solving involves a balance of creativity, technical skill, and perseverance. I'm constantly exploring new tools and technologies to stay on the cutting edge of development.
                    </p>
                    <p className='text-justify pt-5'>
                        When I’m not coding, you can find me exploring the latest tech trends or refining my skills in Core Java, JavaScript, and version control with Git.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe