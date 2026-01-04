import { motion } from 'framer-motion';
import { FaGooglePlay, FaChevronDown, FaGoogleDrive, FaYoutube, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Video Background with Fallback */}
            <div className="absolute inset-0">
                {/* Video element - using a free sports video placeholder */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1920"
                >
                    <source
                        src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_30fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/70 via-neutral-dark/50 to-neutral-dark" />
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-sparin-yellow/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sparin-cyan/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-5xl md:text-6xl font-black">
                            <span className="text-sparin-yellow">Spar</span>
                            <span className="text-sparin-cyan">In</span>
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Find Your Perfect{' '}
                        <span className="text-gradient-yellow-cyan">Sparring Partner</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Connect with sports enthusiasts, join sparring rooms, track your ranking, and become a legend!
                    </p>

                    {/* Indonesian tagline */}
                    <p className="text-sparin-yellow font-semibold text-lg mb-10">
                        🏆 Temukan Partner Olahraga Anda dengan Mudah!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center items-center">
                        {/* YouTube */}
                        <motion.a
                            href="https://www.youtube.com/watch?v=RgNvrjurw5c"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition-colors"
                        >
                            <FaYoutube className="text-xl" />
                            Watch Demo
                        </motion.a>

                        {/* Google Drive */}
                        <motion.a
                            href="https://drive.google.com/drive/folders/16XhJjXnRJ4TPbKyB7ZfGuPihTwREJ_7V"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            <FaGoogleDrive className="text-xl" />
                            Google Drive
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com/kasyifana/SparIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 text-white font-semibold shadow-lg hover:bg-gray-900 transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            GitHub
                        </motion.a>

                        {/* Play Store - Coming Soon */}
                        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-charcoal/80 border border-sparin-cyan/30">
                            <FaGooglePlay className="text-lg text-sparin-cyan" />
                            <span className="text-white/80">Play Store</span>
                            <span className="px-2 py-0.5 bg-sparin-cyan/20 text-sparin-cyan text-xs font-bold rounded">SOON</span>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <a href="#features" className="flex flex-col items-center text-sparin-cyan">
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <FaChevronDown className="text-2xl" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
