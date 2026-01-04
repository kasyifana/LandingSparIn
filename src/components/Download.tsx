import { motion } from 'framer-motion';
import { FaGooglePlay, FaStar, FaYoutube, FaGoogleDrive, FaGithub } from 'react-icons/fa';

const Download = () => {
    return (
        <section id="download" className="section-padding relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sparin-yellow via-sparin-gold to-sparin-yellow-soft" />

            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-sparin-cyan/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Floating sports icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {['🏸', '⚽', '🏀', '🎾', '🏐', '🏊'].map((emoji, index) => (
                    <motion.span
                        key={index}
                        className="absolute text-4xl opacity-30"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            delay: index * 0.5,
                        }}
                    >
                        {emoji}
                    </motion.span>
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-dark/20 backdrop-blur-sm rounded-full mb-8"
                    >
                        <FaStar className="text-neutral-dark" />
                        <span className="text-neutral-dark font-semibold">Explore SparIn</span>
                    </motion.div>

                    {/* Main headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mb-6">
                        Ready to Find Your{' '}
                        <span className="relative">
                            Sparring Partner?
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-2 bg-neutral-dark/20 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            />
                        </span>
                    </h2>

                    <p className="text-xl text-neutral-dark/80 mb-10 max-w-2xl mx-auto">
                        Lihat demo video, dokumentasi project, atau source code di GitHub!
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                        {/* YouTube */}
                        <motion.a
                            href="https://www.youtube.com/watch?v=RgNvrjurw5c"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 bg-red-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-red-700 transition-colors"
                        >
                            <FaYoutube className="text-2xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80">WATCH</div>
                                <div className="font-bold">Demo Video</div>
                            </div>
                        </motion.a>

                        {/* Google Drive */}
                        <motion.a
                            href="https://drive.google.com/drive/folders/16XhJjXnRJ4TPbKyB7ZfGuPihTwREJ_7V"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-blue-700 transition-colors"
                        >
                            <FaGoogleDrive className="text-2xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80">VIEW</div>
                                <div className="font-bold">Google Drive</div>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com/kasyifana/SparIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 bg-gray-800 text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-gray-900 transition-colors"
                        >
                            <FaGithub className="text-2xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80">EXPLORE</div>
                                <div className="font-bold">Source Code</div>
                            </div>
                        </motion.a>
                    </div>

                    {/* Play Store Coming Soon */}
                    <motion.div
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative group">
                            {/* Animated border glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-sparin-cyan via-neutral-dark to-sparin-cyan rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />

                            <div className="relative flex items-center gap-4 px-8 py-4 bg-neutral-dark rounded-2xl border border-white/10 shadow-xl">
                                {/* Play Store Icon with gradient background */}
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sparin-cyan/20 to-sparin-yellow/20 rounded-xl">
                                    <FaGooglePlay className="text-2xl text-white" />
                                </div>

                                <div className="text-left">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-sparin-cyan tracking-wider">COMING SOON</span>
                                        <span className="px-2 py-0.5 bg-gradient-to-r from-sparin-yellow/20 to-sparin-cyan/20 text-white text-xs font-bold rounded-full border border-white/20 animate-pulse">
                                            🚀 ~2 months
                                        </span>
                                    </div>
                                    <div className="text-lg font-bold text-white">Google Play Store</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        {[
                            { value: '16', label: 'Sports' },
                            { value: '9', label: 'Rank Tiers' },
                            { value: '24/7', label: 'Matching' },
                            { value: '⭐', label: 'Free to Use' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-neutral-dark">{stat.value}</div>
                                <div className="text-neutral-dark/70 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Download;
