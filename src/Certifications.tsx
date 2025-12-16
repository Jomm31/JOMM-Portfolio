import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import java from './assets/cert/java.jpg'
import database from './assets/cert/database.jpg'
import javascript from './assets/cert/javascript.jpg'
import responsive from './assets/cert/responsive_web_design.png'
import webdev from './assets/cert/webdev.jpg'
import react from './assets/cert/react.jpg'

// Import badge images
import htmlBadge from './assets/programming_lang/html.png'
import cssBadge from './assets/programming_lang/css.png'
import jsBadge from './assets/programming_lang/js.png'
import javaBadge from './assets/programming_lang/java.png'
import pythonBadge from './assets/programming_lang/python.png'
import sqlBadge from './assets/programming_lang/sql.png'
import reactBadge from './assets/programming_lang/react.png'

function Certifications(){
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const certifications = [
        { name: 'Java Certification', image: java, badges: [javaBadge] },
        { name: 'Database Certification', image: database, badges: [sqlBadge] },
        { name: 'Javasdript Certification', image: javascript, badges: [jsBadge] },
        { name: 'webdev Certification', image: webdev, badges: [htmlBadge, cssBadge, jsBadge] },
        { name: 'Responsive Certification', image: responsive, badges: [htmlBadge, cssBadge, jsBadge] },
        { name: 'react Certification', image: react, badges: [reactBadge] },
    ];

    return(
        <section id="certifications" className="relative z-20 w-full min-h-screen py-20 px-6 bg-gradient-to-b from-[#1a0a4a] to-[#0F0732]">
            <h1 className="text-6xl md:text-7xl text-white text-center mb-12" style={{ fontFamily: 'pixelGridL' }}>
                CERTIFICATIONS
            </h1>

            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-[#1a1a3a] rounded-lg overflow-hidden flex flex-row">
                        {/* Badges on the left */}
                        <div className="flex flex-col gap-2 p-3 bg-[#0F0732] justify-center">
                            {cert.badges.map((badge, i) => (
                                <img key={i} src={badge} alt="Badge" className="w-10 h-10 object-contain" />
                            ))}
                        </div>
                        {/* Certificate image on the right */}
                        <div 
                            className="flex-1 p-2 cursor-pointer"
                            onClick={() => setSelectedImage(cert.image)}
                        >
                            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal/Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Certificate"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}export default Certifications;