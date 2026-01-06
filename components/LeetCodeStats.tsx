"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Zap, Code2, TrendingUp, Award, Layers, Hash, GitBranch } from "lucide-react";

export default function LeetCodeStats() {
    return (
        <div className="w-full max-w-5xl mx-auto p-6 md:p-10 bg-[#0A0A0A] border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden group">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 border-b border-slate-800/50 pb-8">
                <div className="flex items-center gap-5">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-slate-700/50 flex items-center justify-center text-slate-300 font-bold text-2xl shadow-inner">
                        AS
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-1">Amitabh Shanker</h3>
                        <p className="text-slate-400 font-mono text-sm flex items-center gap-2">
                            <Zap className="h-3 w-3 text-yellow-500" /> @amitabh_02
                        </p>
                    </div>
                </div>
                <a
                    href="https://leetcode.com/u/amitabh_02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-white font-medium rounded-xl text-sm flex items-center gap-2 transition-all group/btn"
                >
                    View Profile <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Stats (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Main Stats Card */}
                    <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy className="h-24 w-24 text-sky-500" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm mb-2 font-medium uppercase tracking-wider">Contest Rating</p>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-bold text-white">1,423</span>
                                <span className="text-sky-500 text-sm font-medium">Top 25%</span>
                            </div>
                            <p className="text-slate-500 text-xs mt-2">Global Ranking: 270,702</p>
                        </div>
                    </div>

                    {/* Languages - Corrected to C++ */}
                    <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50">
                        <h4 className="text-slate-200 font-medium mb-5 flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-purple-400" /> Languages Used
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-400 font-medium">C++</span>
                                    <span className="text-slate-500">392 problems</span>
                                </div>
                                <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1 }} className="h-full bg-sky-500 rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-400 font-medium">Java</span>
                                    <span className="text-slate-500">3 problems</span>
                                </div>
                                <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "2%" }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-orange-500 rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-400 font-medium">Python</span>
                                    <span className="text-slate-500">2 problems</span>
                                </div>
                                <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "1%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-yellow-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Badges - From Screenshot */}
                    <div className="bg-slate-900/30 rounded-2xl p-6 border border-slate-800/50">
                        <h4 className="text-slate-200 font-medium mb-5 flex items-center gap-2">
                            <Award className="h-4 w-4 text-yellow-500" /> Badges (2)
                        </h4>
                        <div className="flex gap-4">
                            <div className="bg-black/40 p-3 rounded-xl border border-slate-800/50 flex flex-col items-center gap-2 w-1/2">
                                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 border border-slate-700">100</div>
                                <span className="text-[10px] text-slate-500 text-center">100 Days Badge 2024</span>
                            </div>
                            <div className="bg-black/40 p-3 rounded-xl border border-slate-800/50 flex flex-col items-center gap-2 w-1/2">
                                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 border border-slate-700">50</div>
                                <span className="text-[10px] text-slate-500 text-center">50 Days Badge 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Problem Breakdown & Skills */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Solved Stats */}
                    <div className="bg-slate-900/20 rounded-2xl p-6 border border-slate-800/50">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-slate-200 font-medium flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" /> Problem Solving
                            </h4>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-white">395</span>
                                <span className="text-slate-500 text-sm ml-2">solved</span>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            {/* Easy */}
                            <div className="group/item">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-400 font-medium group-hover/item:text-green-400 transition-colors">Easy</span>
                                    <span className="text-sm text-slate-300">172 <span className="text-slate-600 text-xs">/ 921</span></span>
                                </div>
                                <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "18.6%" }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                                </div>
                            </div>

                            {/* Medium */}
                            <div className="group/item">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-400 font-medium group-hover/item:text-yellow-400 transition-colors">Medium</span>
                                    <span className="text-sm text-slate-300">205 <span className="text-slate-600 text-xs">/ 1982</span></span>
                                </div>
                                <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "10.3%" }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full" />
                                </div>
                            </div>

                            {/* Hard */}
                            <div className="group/item">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-400 font-medium group-hover/item:text-red-400 transition-colors">Hard</span>
                                    <span className="text-sm text-slate-300">18 <span className="text-slate-600 text-xs">/ 898</span></span>
                                </div>
                                <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-slate-800/50">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "2%" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Skills - From Screenshot */}
                    <div className="bg-slate-900/20 rounded-2xl p-6 border border-slate-800/50">
                        <h4 className="text-slate-200 font-medium mb-6 flex items-center gap-2">
                            <Layers className="h-4 w-4 text-sky-400" /> Skills Breakdown
                        </h4>

                        <div className="space-y-6">
                            {/* Advanced */}
                            <div>
                                <p className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-3">Advanced</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-200 flex items-center gap-2">
                                        Dynamic Programming <span className="bg-red-500/20 px-1.5 py-0.5 rounded text-[10px]">x34</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-200 flex items-center gap-2">
                                        Backtracking <span className="bg-red-500/20 px-1.5 py-0.5 rounded text-[10px]">x14</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-200 flex items-center gap-2">
                                        Divide & Conquer <span className="bg-red-500/20 px-1.5 py-0.5 rounded text-[10px]">x13</span>
                                    </span>
                                </div>
                            </div>

                            {/* Intermediate */}
                            <div>
                                <p className="text-xs text-yellow-500 font-semibold uppercase tracking-wider mb-3">Intermediate</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200 flex items-center gap-2">
                                        <Hash className="h-3 w-3" /> Hash Table <span className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]">x85</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200 flex items-center gap-2">
                                        Math <span className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]">x60</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200 flex items-center gap-2">
                                        <GitBranch className="h-3 w-3" /> Tree <span className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-[10px]">x44</span>
                                    </span>
                                </div>
                            </div>

                            {/* Fundamental */}
                            <div>
                                <p className="text-xs text-green-500 font-semibold uppercase tracking-wider mb-3">Fundamental</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-200 flex items-center gap-2">
                                        Array <span className="bg-green-500/20 px-1.5 py-0.5 rounded text-[10px]">x204</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-200 flex items-center gap-2">
                                        String <span className="bg-green-500/20 px-1.5 py-0.5 rounded text-[10px]">x91</span>
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-200 flex items-center gap-2">
                                        Two Pointers <span className="bg-green-500/20 px-1.5 py-0.5 rounded text-[10px]">x69</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
