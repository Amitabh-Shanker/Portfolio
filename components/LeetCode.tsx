"use client";

import { motion } from "framer-motion";
import LeetCodeStats from "@/components/LeetCodeStats";

export default function LeetCode() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold font-heading mb-4 text-slate-100">
                        LeetCode <span className="text-sky-500">Activity</span>
                    </h2>
                    <p className="text-slate-400">
                        Problem solving and continuous learning.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center w-full"
                >
                    <LeetCodeStats />
                </motion.div>
            </div>
        </section>
    );
}
