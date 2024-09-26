import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Cursor = () => {
    const cursor1 = useRef();
    const cursor2 = useRef();
    const cursor3 = useRef();
    const cursor4 = useRef();

    useEffect(() => {
        const moveCustormCursor = (event) => {
            // console.log(event);

            gsap.to(cursor1.current, { x: event.clientX - 12, y: event.clientY - 12, duration: 0.5, ease: 'power3.out' })
            gsap.to(cursor2.current, { x: event.clientX - 6, y: event.clientY - 6, duration: 0.8, ease: 'power3.out' })
            gsap.to(cursor3.current, { x: event.clientX - 4, y: event.clientY - 4, duration: 1.0, ease: 'power3.out' })
            gsap.to(cursor4.current, { x: event.clientX - 2, y: event.clientY - 2, duration: 1.2, ease: 'power3.out' })
        }
        document.addEventListener('mousemove', moveCustormCursor);
        return () => {
            document.removeEventListener('mousemove', moveCustormCursor);
        }
    }, [])
    return (
        <>
            <div className="flex flex-col fixed z-40">
                <div className='h-6 w-6 flex items-center justify-center rounded-full pointer-events-none bg-themeLightBg absolute z-50' ref={cursor1}>
                    <div className='bg-themeColor h-3 w-3 rounded-full animate-bounce'></div>
                </div>
                <div className='bg-themeLightBg h-3 w-3 rounded-full absolute' ref={cursor2}></div>
                <div className='bg-themeLightBg h-2 w-2 rounded-full absolute' ref={cursor3}></div>
                <div className='bg-themeLightBg h-1 w-1 rounded-full absolute' ref={cursor4}></div>
            </div>
        </>
    )
}

export default Cursor