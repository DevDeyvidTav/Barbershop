import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full h-16 fixed z-50 duration-500 ${scrollPosition > 0 ? 'bg-[]' : 'bg-transparent'}`}>
            <div className="px-5 md:px-0 max-w-[1140px] mx-auto w-full flex items-center h-full justify-between">
                <h2 className="text-white text-2xl font-bold">
                    Barber<span className="text-[#f51a13]">shop</span>
                </h2>
                {
                    open ?
                    <AiOutlineClose
                    onClick={() => setOpen(!open)}
                    className="text-white cursor-pointer w-8 h-8" /> 
                    
                    : <GiHamburgerMenu
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer w-8 h-8" />
                }
            </div>
            <div className={`${open ? "translate-y-0 backdrop-blur-lg" : "-translate-y-[150%] lg:-translate-y-[200%] backdrop-blur-0"} duration-500 lg:h-20 h-[92vh] flex  items-center bg-gradient absolute z-50 w-full`}>
                <div className="w-[90%] md:max-w-[1140px] mx-auto items-center text-white flex lg:flex-row md:justify-between flex-col font-semibold lg:text-lg text-2xl gap-5 ">
                    <a 
                    onClick={() => setOpen(!open) }
                    href="#">
                        HOME
                    </a>
                    <a href="#about"
                    onClick={() => setOpen(!open) }>
                        CORTES
                    </a>
                    <a href="#faq"
                    onClick={() => setOpen(!open) }>
                        MENTORIA
                    </a>



                    <Link
                        className="bg-[#f51a13] font-bold px-2 py-2 flex justify-center items-center rounded relative hover:scale-110 hover:duration-500 hover:ease-out "
                        href="/sell">
                       AGENDE SEU HORÁRIO
                    </Link>
                </div>
            </div>
        </div>
    );
}