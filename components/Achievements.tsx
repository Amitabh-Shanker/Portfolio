"use client";

import { motion } from "framer-motion";
import { FileText, Award } from "lucide-react";

export default function Achievements() {
    return (
        <section id="achievements" className="py-24">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-sky-900/20 to-blue-900/20 rounded-2xl border border-sky-500/20 p-8 md:p-12 text-center"
                >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 mb-6">
                        <Award className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl font-bold font-heading mb-4">Achievements & Publications</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Contributing to the scientific community through advanced research in Multimodal AI.
                    </p>

                    <div className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-slate-800 text-left hover:border-sky-500/40 transition-colors">
                        <div className="flex items-start gap-4">
                            <FileText className="h-6 w-6 text-sky-500 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-200">Zero-Shot Medical Diagnosis using Multimodal Foundation Models</h3>
                                <p className="text-sky-400 text-sm mb-2">ICONAT 2025</p>
                                <p className="text-slate-400 text-sm">
                                    Researched and presented a paper focusing on multimodal AI-driven diagnosis, leveraging foundation models for improved zero-shot performance in medical contexts.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
