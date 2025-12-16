import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import all badge images
import python from './assets/programming_lang/python.png'
import react from './assets/programming_lang/react.png'
import js from './assets/programming_lang/js.png'
import html from './assets/programming_lang/html.png'
import css from './assets/programming_lang/css.png'
import node from './assets/programming_lang/node-js.png'
import php from './assets/programming_lang/php.png'
import sql from './assets/programming_lang/sql.png'
import java from './assets/programming_lang/java.png'
import vite from './assets/programming_lang/vite.png'
import sass from './assets/programming_lang/sass.png'
import sklearn from './assets/programming_lang/sklearn.png'

function Projects() {
    const [isExpanded, setIsExpanded] = useState(false);

    const projects = [
        { name: 'Project 1', image: null, badges: [react, js, css] },
        { name: 'Project 2', image: null, badges: [python, sklearn] },
        { name: 'Project 3', image: null, badges: [html, css, js] },
        { name: 'Project 4', image: null, badges: [php, sql] },
        { name: 'Project 5', image: null, badges: [react, vite, sass] },
        { name: 'Project 6', image: null, badges: [node, js] },
        { name: 'Project 7', image: null, badges: [java] },
        { name: 'Project 8', image: null, badges: [python] },
        { name: 'Project 9', image: null, badges: [react, node, sql] },
        { name: 'Project 10', image: null, badges: [html, css, php] },
        { name: 'Project 11', image: null, badges: [python, sql] },
        { name: 'Project 12', image: null, badges: [react, vite] },
    ];

    const visibleProjects = isExpanded ? projects : projects.slice(0, 6);

    return (
        <section id="projects" className="relative z-20 w-full min-h-screen bg-gradient-to-b from-[#0F0732] to-[#1a0a4a] py-20 px-6">
            <h1 className="text-6xl md:text-7xl text-white mb-8 text-center" style={{ fontFamily: 'pixelGridL' }}>
                PROJECTS
            </h1>
            
            <motion.div 
                className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                layout
            >
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-[#1a1a3a] rounded-lg overflow-hidden flex flex-col"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index >= 6 ? (index - 6) * 0.05 : 0 }}
                            layout
                        >
                            <div className="w-full h-48 bg-[#2a2a5a]">
                                {/* Project image goes here */}
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                                <p className="text-xl text-white text-center" style={{ fontFamily: 'pixelGridM' }}>{project.name}</p>
                                <div className="flex gap-2 flex-wrap justify-center">
                                    {project.badges.map((badge: string, i: number) => (
                                        <img key={i} src={badge} alt="Badge" className="w-8 h-8 object-contain" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Expand/Collapse Arrow */}
            {projects.length > 6 && (
                <motion.div 
                    className="flex justify-center mt-8"
                    layout
                >
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex flex-col items-center gap-2 text-white hover:text-purple-300 transition-colors cursor-pointer"
                    >
                        <span style={{ fontFamily: 'pixelGridS' }}>
                            {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
                        </span>
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-8 h-8"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    </button>
                </motion.div>
            )}
        </section>
    );
} export default Projects;