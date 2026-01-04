import { motion } from 'framer-motion';

interface Sport {
    emoji: string;
    name: string;
    available: boolean;
}

const sports: Sport[] = [
    // Available Sports (16)
    { emoji: '🏸', name: 'Badminton', available: true },
    { emoji: '⚽', name: 'Futsal', available: true },
    { emoji: '🏀', name: 'Basket', available: true },
    { emoji: '🏐', name: 'Voli', available: true },
    { emoji: '🎾', name: 'Tenis', available: true },
    { emoji: '🎾', name: 'Padel', available: true },
    { emoji: '🏃', name: 'Jogging', available: true },
    { emoji: '♟️', name: 'Catur', available: true },
    { emoji: '🏃‍♂️', name: 'Lari', available: true },
    { emoji: '🚴', name: 'Sepeda', available: true },
    { emoji: '🏊', name: 'Renang', available: true },
    { emoji: '🏋️', name: 'Gym', available: true },
    { emoji: '🥊', name: 'Boxing', available: true },
    { emoji: '🎱', name: 'Billiard', available: true },
    { emoji: '🥾', name: 'Hiking', available: true },
    { emoji: '🎳', name: 'Bowling', available: true },
    // Coming Soon
    { emoji: '🏓', name: 'Tenis Meja', available: false },
    { emoji: '⛳', name: 'Golf', available: false },
    { emoji: '🥋', name: 'Muay Thai', available: false },
    { emoji: '🥋', name: 'Taekwondo', available: false },
    { emoji: '⚽', name: 'Football', available: false },
    { emoji: '⚽', name: 'Mini Soccer', available: false },
    { emoji: '🤺', name: 'Fencing', available: false },
    { emoji: '🏒', name: 'Hockey', available: false },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
    },
};

const Sports = () => {
    const availableSports = sports.filter(s => s.available);
    const comingSoonSports = sports.filter(s => !s.available);

    return (
        <section id="sports" className="section-padding bg-neutral-dark relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-charcoal via-neutral-dark to-neutral-charcoal opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="text-sparin-yellow">{availableSports.length}</span> Kategori Olahraga
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Temukan partner untuk berbagai jenis olahraga favorit kamu
                    </p>
                </motion.div>

                {/* Available Sports Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-10"
                >
                    {availableSports.map((sport, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.3 }
                            }}
                            className="sport-card flex flex-col items-center justify-center text-center"
                        >
                            <span className="text-4xl mb-2">{sport.emoji}</span>
                            <span className="text-xs font-medium text-white/80 truncate w-full">
                                {sport.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Coming Soon Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-charcoal border border-sparin-cyan/30 text-sparin-cyan">
                        🚀 Coming Soon
                    </span>
                </motion.div>

                {/* Coming Soon Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4"
                >
                    {comingSoonSports.map((sport, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative sport-card flex flex-col items-center justify-center text-center opacity-50"
                        >
                            <span className="text-3xl mb-2 grayscale">{sport.emoji}</span>
                            <span className="text-xs font-medium text-white/50 truncate w-full">
                                {sport.name}
                            </span>
                            {/* Soon badge */}
                            <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-sparin-cyan/20 text-sparin-cyan text-[10px] font-bold rounded">
                                SOON
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Sports;
