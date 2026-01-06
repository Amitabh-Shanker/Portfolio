"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        // Construct mailto link
        const mailtoLink = `mailto:shankeramitabh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-[#000000] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Contact <span className="text-sky-500 border-b-4 border-sky-500 pb-1">Me</span>
                    </h2>
                    <p className="text-slate-400 mt-4">
                        Feel free to reach out to me for any questions or opportunities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Get Included */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                        {/* Email */}
                        <div className="bg-[#0A0A0A] border border-slate-800 p-6 rounded-2xl flex items-center gap-5 hover:border-sky-500/50 transition-colors group shadow-lg">
                            <div className="h-12 w-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all duration-300">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Email</p>
                                <p className="text-slate-200 font-semibold text-lg break-all">shankeramitabh@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-[#0A0A0A] border border-slate-800 p-6 rounded-2xl flex items-center gap-5 hover:border-sky-500/50 transition-colors group shadow-lg">
                            <div className="h-12 w-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all duration-300">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Phone</p>
                                <p className="text-slate-200 font-semibold text-lg">(+91) 8005386831</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-[#0A0A0A] border border-slate-800 p-6 rounded-2xl flex items-center gap-5 hover:border-sky-500/50 transition-colors group shadow-lg">
                            <div className="h-12 w-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-black transition-all duration-300">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Location</p>
                                <p className="text-slate-200 font-semibold text-lg">Bengaluru, India</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-white font-bold mb-4">Connect With Me</p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/amitabh-shanker-a5b07424b/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="https://github.com/Amitabh-Shanker" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all">
                                    <Github className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="bg-[#0A0A0A] border border-slate-800 rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Input
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-[#050505] border-slate-800/80 h-12 focus-visible:ring-sky-500/50 focus-visible:border-sky-500/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-[#050505] border-slate-800/80 h-12 focus-visible:ring-sky-500/50 focus-visible:border-sky-500/50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="bg-[#050505] border-slate-800/80 h-12 focus-visible:ring-sky-500/50 focus-visible:border-sky-500/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="min-h-[150px] bg-[#050505] border-slate-800/80 resize-none focus-visible:ring-sky-500/50 focus-visible:border-sky-500/50"
                                    />
                                </div>
                                <Button type="submit" className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-black font-bold text-base transition-all rounded-xl mt-4">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
