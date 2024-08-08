import React, { useState, useEffect } from 'react';
import './style.css'; // Make sure to import your CSS file

const TopNav = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-down');

    const lines = [
        "Welecome to Top Orion Ecommerce Site",
        "Garb the huge offer this month"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass('slide-up');

            setTimeout(() => {
                setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
                setAnimationClass('slide-down');
            }, 1000); // Duration of the slide-up animation
        }, 4000); // 3 seconds of visibility + 1 second for the slide-up animation

        return () => clearInterval(interval);
    }, [lines.length]);

    return (
        <div className='bg-[#232f3e] text-white'>
            <div className='flex justify-between max-w-7xl mx-auto'>
                <div className='hidden md:block'>
                    {lines.map((line, index) => (
                        <p
                            key={index}
                            className={index === currentLine ? animationClass : 'hidden'}
                        >
                            {line}
                        </p>
                    ))}
                </div>
                <div className='flex gap-4'>
                    <p>Gift</p>
                    <p>My Account</p>
                    <p>USD</p>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
