"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Simple Glow Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sky-500 font-medium mb-4 tracking-wide text-lg">Hello, I'm</p>

                    <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight leading-none mb-6 text-white">
                        Amitabh<br />
                        <span className="text-slate-400">Shanker</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-mono text-sky-400 mb-8 h-[60px] flex items-center">
                        Full Stack Developer
                    </div>

                    <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Engineering robust solutions from <span className="text-white font-medium">embedded systems</span> to <span className="text-white font-medium">modern web applications</span>.
                        Focusing on performance, security, and scalability.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="rounded-full text-base bg-sky-500 hover:bg-sky-600 text-white border-none"
                            onClick={() => {
                                const element = document.getElementById("projects");
                                if (element) element.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <a href="/AMITABH_BMSITM_1BY22CS019.pdf" download="Amitabh_Shanker_Resume.pdf">
                            <Button variant="outline" size="lg" className="rounded-full text-base border-slate-700 hover:bg-slate-900 hover:text-sky-400">
                                Download CV
                            </Button>
                        </a>
                    </div>

                    <div className="flex gap-6 mt-12 text-slate-500">
                        <a href="https://github.com/Amitabh-Shanker" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/amitabh-shanker-a5b07424b/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:shankeramitabh@gmail.com" className="hover:text-sky-400 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </motion.div>

                {/* Abstract Code Visual - Simplified for Reference Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative hidden md:block"
                >
                    <div className="relative rounded-2xl bg-black border border-slate-800 p-6 shadow-2xl overflow-hidden">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-sky-500/20" />
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex">
                                <span className="text-slate-600 w-8">1</span>
                                <span className="text-purple-400">class</span> <span className="text-yellow-200 ml-2">Engineer</span> <span className="text-slate-400">{"{"}</span>
                            </div>
                            <div className="flex">
                                <span className="text-slate-600 w-8">2</span>
                                <span className="text-slate-400 ml-4">constructor() {"{"}</span>
                            </div>
                            <div className="flex">
                                <span className="text-slate-600 w-8">3</span>
                                <span className="text-sky-400 ml-8">this</span><span className="text-slate-400">.name</span> <span className="text-slate-400">=</span> <span className="text-sky-300">"Amitabh"</span><span className="text-slate-400">;</span>
                            </div>
                            <div className="flex">
                                <span className="text-slate-600 w-8">4</span>
                                <span className="text-sky-400 ml-8">this</span><span className="text-slate-400">.traits</span> <span className="text-slate-400">=</span> <span className="text-slate-400">[</span><span className="text-sky-300">"Systems"</span><span className="text-slate-400">,</span> <span className="text-sky-300">"Web"</span><span className="text-slate-400">];</span>
                            </div>
                            <div className="flex">
                                <span className="text-slate-600 w-8">5</span>
                                <span className="text-slate-400 ml-4">{"}"}</span>
                            </div>
                            <div className="flex">
                                <span className="text-slate-600 w-8">6</span>
                                <span className="text-slate-400">{"}"}</span>
                            </div>
                        </div>
                        {/* Reflection Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
