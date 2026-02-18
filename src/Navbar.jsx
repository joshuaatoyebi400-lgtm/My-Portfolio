import { href } from "react-router-dom";
import {cn} from "./lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero"},
    { name: "About", href: "#about"},
    { name: "Skills", href: "#skills"},
    { name: "Contact", href: "#contact"}
]
function Navbar(){

    const [isScrollled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsmenuOpen] = useState(true);

    useEffect(() =>{
        function handleScroll(){
            setIsScrolled(window.screenY > 10)
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return(
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrollled ? "py-3 bg-background backdrop-md shadow-xs" : "py-5"
        )}>

            <div className="container flex items-center justify-between">
                <a  href="#hero" className="text-xl font-bold flex text-center text-primary z-10">
                    <span><span className="text-glow text-foreground">HAY</span> JAY</span>
                </a>


                {/** desktop nav */}
                <div className="hidden md:flex space-x-8 mx-10">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary traansition-colors duration-300">{item.name}</a>
                    ))}
                </div>

                {/**mobile version */}

            <button onClick={() => setIsmenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground hover:text-primary z-50"
             aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}   
                >{isMenuOpen ? <X size={24} /> : <Menu size={24}/>}</button>

                <div className={cn("fixed inset-0 bg-background backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-event-auto" : "opacity-0 pointer-event-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) =>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsmenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;