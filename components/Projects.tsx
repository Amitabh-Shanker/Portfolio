"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
                        Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A selection of projects that demonstrate my ability to solve complex problems.
                    </p>
                </motion.div>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {/* Project 1 - CareNexus */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0A0A0A] border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 shadow-xl group"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">CareNexus</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-sky-400 font-medium">React</span>
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-sky-400 font-medium">FastAPI</span>
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-slate-400">+3 more</span>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    A Full-Stack Health-Tech Platform featuring AI-driven disease prediction and a patient dashboard for personalized care.
                                    Built to streamline patient-doctor interactions and provide intelligent health insights.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://github.com/Amitabh-Shanker/Care" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white rounded-full">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Button>
                                    </a>
                                    <a href="https://care-six-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-sky-500 hover:bg-sky-600 text-black font-bold border-0 rounded-full">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10" />
                                <Image
                                    src="/carenexus.png"
                                    alt="CareNexus Project"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2 - Travel Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0A0A0A] border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 shadow-xl group"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Order switch on Desktop if preferred, but keeping text left for consistency */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">Travel Story Website</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-sky-400 font-medium">MERN Stack</span>
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-sky-400 font-medium">MongoDB</span>
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-sky-400 font-medium">Express.js</span>
                                    <span className="text-xs px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-slate-400">+3 more</span>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    Built a travel story website for users to record and share experiences with dates and images.
                                    Developed a secure backend for data management and user authentication, with a seamless React frontend.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://github.com/Amitabh-Shanker/travel-Story" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white rounded-full">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Button>
                                    </a>
                                    <a href="https://travel-story-zshg.vercel.app/login" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-sky-500 hover:bg-sky-600 text-black font-bold border-0 rounded-full">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10" />
                                <Image
                                    src="/travelstory.png"
                                    alt="Travel Story Project"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
