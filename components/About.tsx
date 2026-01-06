"use client";

import { motion } from "framer-motion";
import { User, Mail, MapPin, GraduationCap, Terminal, Code2, Globe } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative bg-[#000000] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        About <span className="text-sky-500 border-b-4 border-sky-500 pb-1">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Code Philosophy */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0A] border border-slate-800 rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300 shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                                <Terminal className="h-5 w-5 text-sky-500" /> Code Philosophy
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                I&apos;m a software engineer with expertise in web development, data structures, and algorithms.
                                Skilled in designing efficient solutions and transforming complex problems into clean, maintainable code.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                I believe in building software that is not just functional but also scalable and user-friendly.
                                My approach combines deep theoretical knowledge with practical application to solve real-world problems.
                            </p>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0A0A0A] border border-slate-800 rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300 shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                                <GraduationCap className="h-5 w-5 text-sky-500" /> Education
                            </h3>

                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-slate-800">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-sky-500" />
                                    <h4 className="text-white font-semibold text-lg">Bachelor of Engineering in CSE</h4>
                                    <p className="text-slate-400 text-sm mb-1">BMS Institute of Technology and Management (2022-2026)</p>
                                    <p className="text-sky-500 text-sm font-medium">CGPA: 8.57</p>
                                </div>

                                <div className="relative pl-6 border-l-2 border-slate-800">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-slate-600" />
                                    <h4 className="text-white font-semibold text-lg">Schooling</h4>
                                    <p className="text-slate-400 text-sm mb-1">Lucknow Public College (ICSE Board)</p>
                                    <div className="flex gap-4 text-sm mt-1">
                                        <span className="text-sky-500 font-medium">Class 12th: 92%</span>
                                        <span className="text-slate-500">|</span>
                                        <span className="text-sky-500 font-medium">Class 10th: 90%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Personal Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A0A0A] border border-slate-800 rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300 shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                                <User className="h-5 w-5 text-sky-500" /> Personal Info
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-500">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                                        <a href="mailto:shankeramitabh@gmail.com" className="text-slate-200 hover:text-sky-400 transition-colors">
                                            shankeramitabh@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Phone</p>
                    <p className="text-slate-200">(+91) ***** *****</p>
                  </div>
                </div> */}

                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-500">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Location</p>
                                        <p className="text-slate-200">Bengaluru, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-4 border-l-4 border-sky-500 pl-4">
                                Professional Summary
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                A software architect committed to continuous learning and staying ahead of industry trends to drive innovation.
                                Passionate about creating efficient, scalable solutions that solve real-world problems.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                With a strong foundation in <span className="text-slate-200 font-medium">Computer Science Engineering</span>, I specialize in full-stack development,
                                leveraging modern technologies like Next.js, Node.js, and Cloud services to build impactful digital experiences.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
