"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        year: "NOW",
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        description: "Delivered full-stack solutions for 10+ clients, handling everything from UI/UX to backend, deployment, SEO, and performance optimization.",
        color: "text-purple-400",
        glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
    },
    {
        year: "Dec 2025",
        title: "Full Stack Developer",
        company: "ZeroDayArena",
        description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams.",
        color: "text-blue-400",
        glow: "shadow-[0_0_20px_rgba(96,165,250,0.5)]"
    },
    {
        year: "2024",
        title: "Data Science Intern",
        company: "IIT Guwahati",
        description: "Worked on advanced computer vision models and real-time data processing pipelines.",
        color: "text-green-400",
        glow: "shadow-[0_0_20px_rgba(74,222,128,0.5)]"
    }
];

export function Timeline() {
    return (
        <div className="relative py-10 pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 md:-translate-x-1/2" />

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 md:-translate-x-1/2 translate-y-1.5 z-10">
                            <div className={`absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75`} />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 md:px-12 pl-12">
                            <div className="text-left">
                                <span className={`text-5xl md:text-6xl font-bold opacity-20 absolute -top-4 ${index % 2 === 0 ? "md:right-12 right-0" : "md:left-12 left-0"} select-none pointer-events-none`}>
                                    {exp.year}
                                </span>
                                <h3 className="text-2xl font-bold text-white relative z-10">{exp.title}</h3>
                                <p className={`${exp.color} font-medium mb-2 relative z-10`}>{exp.company}</p>
                                <p className="text-gray-400 text-sm leading-relaxed relative z-10 max-w-md">
                                    {exp.description}
                                </p>
                            </div>
                        </div>

                        {/* Empty Space for alignment */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
