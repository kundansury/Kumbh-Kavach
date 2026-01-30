import { motion } from 'framer-motion';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';

const galleryImages = [
    {
        src: g1,
        alt: "Aerial view of Kumbh Mela",
        caption: "Massive Gathering",
        description: "Millions congregate at the sacred river banks"
    },
    {
        src: g2,
        alt: "Family at Kumbh",
        caption: "Family Safety",
        description: "Staying connected in the world's largest crowd"
    },
    {
        src: g3,
        alt: "Holy Dip Night View",
        caption: "Spiritual Illumination",
        description: "Thousands of diyas floating during the evening prayers"
    }
];

const KumbhGallery = () => {
    return (
        <section className="py-24 relative">
            <div className="section-container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        Experience the Scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle mx-auto"
                    >
                        Kumbh Mela is not just an event; it's a phenomenon. See why protection is essential.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-80 rounded-2xl overflow-hidden glass-card p-0 border-0"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.caption}
                                </h3>
                                <p className="text-warm-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {image.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KumbhGallery;
