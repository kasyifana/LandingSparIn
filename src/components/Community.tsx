import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUsers, FaCalendar } from 'react-icons/fa';

const Community = () => {
    return (
        <section id="community" className="section-padding bg-neutral-charcoal relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #6FEDD6 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title mb-6">
                            Join <span className="text-sparin-cyan">Communities</span> Near You
                        </h2>
                        <p className="section-subtitle mb-8">
                            Connect with local sports enthusiasts, join community events, and build lasting friendships through shared passion.
                        </p>

                        {/* Community Features */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-neutral-dark text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Location-Based</h3>
                                    <p className="text-neutral-gray text-sm">Find communities and players in your area with our interactive map feature.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl gradient-yellow flex items-center justify-center flex-shrink-0">
                                    <FaUsers className="text-neutral-dark text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Sport Categories</h3>
                                    <p className="text-neutral-gray text-sm">Join communities based on your favorite sports and skill levels.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                                    <FaCalendar className="text-neutral-dark text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Events & Tournaments</h3>
                                    <p className="text-neutral-gray text-sm">Participate in community-organized events and competitions.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Map Preview Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Map container */}
                        <div className="relative rounded-3xl overflow-hidden border-2 border-sparin-cyan/30 shadow-2xl">
                            {/* Map placeholder with gradient background */}
                            <div className="aspect-square bg-gradient-to-br from-neutral-dark via-neutral-charcoal to-neutral-dark p-8">
                                {/* Grid lines to simulate map */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="w-full h-full" style={{
                                        backgroundImage: `
                      linear-gradient(to right, #6FEDD6 1px, transparent 1px),
                      linear-gradient(to bottom, #6FEDD6 1px, transparent 1px)
                    `,
                                        backgroundSize: '30px 30px'
                                    }} />
                                </div>

                                {/* Animated location pins */}
                                {[
                                    { top: '20%', left: '30%', delay: 0 },
                                    { top: '40%', left: '60%', delay: 0.2 },
                                    { top: '60%', left: '25%', delay: 0.4 },
                                    { top: '35%', left: '75%', delay: 0.6 },
                                    { top: '70%', left: '55%', delay: 0.8 },
                                ].map((pin, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: pin.delay }}
                                        className="absolute"
                                        style={{ top: pin.top, left: pin.left }}
                                    >
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                                            className="relative"
                                        >
                                            <div className="w-10 h-10 rounded-full gradient-yellow flex items-center justify-center shadow-lg glow-yellow">
                                                <span className="text-lg">📍</span>
                                            </div>
                                            {/* Pulse effect */}
                                            <div className="absolute inset-0 rounded-full bg-sparin-yellow/30 animate-ping" />
                                        </motion.div>
                                    </motion.div>
                                ))}

                                {/* Center badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="glass-cyan p-4 rounded-2xl text-center">
                                        <div className="text-2xl font-bold text-sparin-cyan">500+</div>
                                        <div className="text-xs text-white/70">Active Communities</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 glass-yellow p-3 rounded-xl"
                        >
                            <span className="text-2xl">🏸</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                            className="absolute -bottom-4 -left-4 glass-cyan p-3 rounded-xl"
                        >
                            <span className="text-2xl">⚽</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Community;
