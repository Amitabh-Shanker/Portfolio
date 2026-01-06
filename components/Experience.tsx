"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900/30">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-white">
                    Experience
                </h2>

                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mx-auto relative border-l border-slate-800 pl-8 md:pl-12 py-4 space-y-16">
                        {/* Role 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[45px] md:-left-[61px] top-2 h-6 w-6 rounded-full border-4 border-slate-900 bg-sky-500" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-100">R&D Intern</h3>
                                    <p className="text-sky-400 font-medium">Nokia</p>
                                </div>
                                <span className="text-sm font-mono text-slate-500 mt-1 sm:mt-0 bg-slate-800 px-2 py-1 rounded">
                                    Aug 2025 - Present
                                </span>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-4">
                                Working on core embedded Linux systems and OpenBMC.
                            </p>
                            <ul className="list-disc list-outside text-slate-400 space-y-2 ml-4 mb-6 text-sm">
                                <li>Refactored a URL-based script into a RESTful FastAPI service, enabling JSON-driven requests, CI/CD integration, and automated workflows.</li>
                                <li>Gained hands-on experience with OpenBMC, embedded Linux, kernel-level vulnerability investigation, patch application, and validation across product builds.</li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-500">FastAPI</span>
                                <span className="text-xs px-2 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-500">OpenBMC</span>
                                <span className="text-xs px-2 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-500">Embedded Linux</span>
                                <span className="text-xs px-2 py-1 rounded-full border border-slate-800 bg-slate-900 text-slate-500">CI/CD</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
