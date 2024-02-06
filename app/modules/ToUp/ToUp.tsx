"use client";

import { IconArrowUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 100) {
                return setVisible(true)
            }
            return setVisible(false)
        };
        window.addEventListener('scroll', toggleVisible);
    }, [])

    return (
        <button
            className={`scroll-to-top-button ${visible ? 'visible' : 'hidden'} bg-black fixed bottom-20 right-6 h-10 w-10 text-white flex flex-col items-center justify-center hover:opacity-50 z-50`}
            onClick={scrollToTop}
        >
            <IconArrowUp />
        </button>
    );
}

export default ScrollToTopButton;
