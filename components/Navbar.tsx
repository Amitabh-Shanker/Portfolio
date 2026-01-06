"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/70 backdrop-blur-xl border-b border-slate-800/50 py-4 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-xl font-bold font-heading cursor-pointer text-slate-100 hover:text-sky-500 transition-colors"
                >
                    AMITABH<span className="text-sky-500">.</span>
                </ScrollLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="text-sm font-medium text-slate-400 hover:text-sky-500 cursor-pointer transition-colors"
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>

                {/* Mobile Nav placeholder */}
            </div>
        </motion.nav>
    );
}
