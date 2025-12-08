'use client'
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import NavbarItem from "@/components/ui/navbar/NavbarItem";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [isToggled, setToggle] = useState(false);
    const pathname = usePathname()

    const navContainer = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: {velocity: 100},
                duration: 0.3
            }
        },
        hidden: {
            x: -250,
            opacity: 0,
            transition: {
                x: {velocity: 100},
                duration: 0.3
            }
        }
    };

    return (
        <>
            <nav className="md:block hidden">
                <div
                    className="fixed top-10 left-[50%] -translate-x-1/2 w-fit rounded-full border-2 px-8 py-4 bg-[#F8E231]/30 backdrop-blur-xs flex items-center justify-center gap-4 font-bold text-xl">
                    <Link href="/" className={pathname === '/' ? 'text-[#F8E231]' : ''}>Home</Link>
                    <Link href="/projects" className={pathname === '/projects' ? 'text-[#F8E231]' : ''}>Projects</Link>
                    <Link href="https://github.com/G0rz" target="_blank" rel="noopener noreferrer" className="hover:transform hover:scale-110 transition-all duration-300">
                        <img src="/images/github-mark-white.svg"
                             alt="Github icon" width={25}
                             height={25}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/typenull/" target="_blank" rel="noopener noreferrer" className="hover:transform hover:scale-110 transition-all">
                        <img src="/images/InBug-White.png"
                             alt="Linkedin icon" width={25}
                             height={25}/>
                    </Link>
                </div>
            </nav>
            <nav className="md:hidden block">
                <button className="rounded-full bg-[#F8E231]/30 size-12 cursor-pointer absolute top-10 left-10"
                        onClick={() => setToggle(!isToggled)}>
                    =
                </button>
                <AnimatePresence>
                    {isToggled && (
                        <motion.div
                            className="absolute top-25 left-5 h-[85vh] md:w-[20vw] w-[90vw] flex flex-wrap items-start justify-center rounded-2xl p-10 bg-[#F8E231] backdrop-blur-xs"
                            initial="hidden"
                            animate={isToggled ? "visible" : "hidden"}
                            exit="hidden"
                            variants={navContainer}
                        >
                            <NavbarItem isToggled={isToggled}/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;