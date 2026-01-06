"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Cpu, Globe, Terminal, Layers } from "lucide-react";

const skills = [
    {
        category: "Languages",
        items: ["Python", "C++", "C", "JavaScript", "TypeScript", "Java"],
        icon: Code2,
    },
    {
        category: "Full Stack",
        items: ["React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS", "Redux"],
        icon: Globe,
    },
    {
        category: "Systems & Tools",
        items: ["Linux", "Git", "Docker", "Postman", "VS Code"],
        icon: Terminal,
    },
    {
        category: "Databases & Cloud",
        items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "AWS (Basic)"],
        icon: Database,
    },
    {
        category: "CS Fundamentals",
        items: ["Data Structures", "Algorithms", "OOPs", "DBMS", "OS", "CN"],
        icon: Layers,
    }
];

export default function TechnicalSkills() {
    return (
        <section id="skills" className="py-24 relative bg-[#000000]">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
                        Technical <span className="text-sky-500">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit of technologies and methodologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-slate-800 bg-[#0A0A0A] hover:border-sky-500/50 transition-all duration-300 group hover:shadow-sky-500/10 hover:shadow-lg">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                                            <skill.icon className="h-6 w-6 text-sky-500" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-slate-100">{skill.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 rounded-md bg-slate-900/50 text-sm text-slate-300 border border-slate-800 group-hover:border-sky-500/30 group-hover:text-sky-200 transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
