import { motion } from 'framer-motion';

interface Rank {
    name: string;
    icon: string;
    color: string;
    bgColor: string;
    minPoints: number;
}

const ranks: Rank[] = [
    { name: 'Rookie', icon: '🌱', color: '#9CA3AF', bgColor: 'rgba(156, 163, 175, 0.2)', minPoints: 0 },
    { name: 'Bronze', icon: '🥉', color: '#CD7F32', bgColor: 'rgba(205, 127, 50, 0.2)', minPoints: 1000 },
    { name: 'Silver', icon: '🥈', color: '#C0C0C0', bgColor: 'rgba(192, 192, 192, 0.2)', minPoints: 2500 },
    { name: 'Gold', icon: '🥇', color: '#FFD700', bgColor: 'rgba(255, 215, 0, 0.2)', minPoints: 5000 },
    { name: 'Platinum', icon: '💎', color: '#E5E4E2', bgColor: 'rgba(229, 228, 226, 0.2)', minPoints: 10000 },
    { name: 'Diamond', icon: '💠', color: '#B9F2FF', bgColor: 'rgba(185, 242, 255, 0.2)', minPoints: 20000 },
    { name: 'Master', icon: '🏅', color: '#FF6B6B', bgColor: 'rgba(255, 107, 107, 0.2)', minPoints: 35000 },
    { name: 'Grandmaster', icon: '👑', color: '#9B59B6', bgColor: 'rgba(155, 89, 182, 0.2)', minPoints: 50000 },
    { name: 'Legend', icon: '🔥', color: '#FFD33D', bgColor: 'rgba(255, 211, 61, 0.3)', minPoints: 75000 },
];

const Ranking = () => {
    return (
        <section id="ranking" className="section-padding bg-neutral-dark relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 w-96 h-96 bg-sparin-gold/10 rounded-full blur-3xl transform -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-sparin-cyan/10 rounded-full blur-3xl" />
            </div>

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
                        Climb the <span className="text-sparin-gold">Rankings</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        From Rookie to Legend — prove your skills and earn your place at the top
                    </p>
                </motion.div>

                {/* Ranking Tiers */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-12">
                    {ranks.map((rank, index) => (
                        <motion.div
                            key={rank.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ scale: 1.1, y: -10 }}
                            className="relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300"
                            style={{
                                background: rank.bgColor,
                                border: `2px solid ${rank.color}40`
                            }}
                        >
                            {/* Rank icon */}
                            <span className="text-4xl mb-2">{rank.icon}</span>

                            {/* Rank name */}
                            <span
                                className="font-bold text-sm"
                                style={{ color: rank.color }}
                            >
                                {rank.name}
                            </span>

                            {/* Progress indicator for Legend */}
                            {rank.name === 'Legend' && (
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-sparin-yellow rounded-full flex items-center justify-center text-xs"
                                >
                                    ⭐
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* ELO Rating */}
                    <div className="glass-cyan p-6 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-sparin-cyan mb-2">ELO</div>
                        <p className="text-neutral-gray">Rating System</p>
                        <p className="text-sm text-white/60 mt-2">Fair matchmaking based on skill</p>
                    </div>

                    {/* Points per Win */}
                    <div className="glass-yellow p-6 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-sparin-yellow mb-2">+250</div>
                        <p className="text-neutral-gray">Points per Win</p>
                        <p className="text-sm text-white/60 mt-2">Climb faster with victories</p>
                    </div>

                    {/* Win Rate */}
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-4xl font-bold text-white mb-2">📊</div>
                        <p className="text-neutral-gray">Win Rate Tracking</p>
                        <p className="text-sm text-white/60 mt-2">Monitor your performance</p>
                    </div>
                </motion.div>

                {/* Achievement badges teaser */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-neutral-gray mb-4">Earn achievement badges along the way</p>
                    <div className="flex justify-center gap-4">
                        {['🏆', '⚡', '🎯', '💪', '🌟'].map((badge, index) => (
                            <motion.span
                                key={index}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                                className="text-3xl"
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Ranking;
