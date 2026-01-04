import { motion } from 'framer-motion';
import { FaGoogle, FaSlidersH, FaSearch, FaChartLine } from 'react-icons/fa';

interface Step {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        icon: <FaGoogle className="text-3xl" />,
        number: '01',
        title: 'Sign Up with Google',
        description: 'Quick and secure authentication. Get started in seconds with your Google account.',
    },
    {
        icon: <FaSlidersH className="text-3xl" />,
        number: '02',
        title: 'Set Preferences',
        description: 'Choose your sports, set your skill level, and define your preferred locations.',
    },
    {
        icon: <FaSearch className="text-3xl" />,
        number: '03',
        title: 'Find or Create Room',
        description: 'Browse available sparring rooms or create your own. Invite friends or find new partners.',
    },
    {
        icon: <FaChartLine className="text-3xl" />,
        number: '04',
        title: 'Play & Grow',
        description: 'Complete matches, earn points, climb rankings, and track your progress over time.',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section-padding bg-neutral-charcoal relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sparin-yellow/30 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="section-title">
                        How It <span className="text-sparin-yellow">Works</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Get started in four simple steps
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-sparin-yellow via-sparin-cyan to-sparin-yellow transform -translate-y-1/2 opacity-30" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Step number background */}
                                <div className="absolute -top-4 text-8xl font-black text-white/5 select-none">
                                    {step.number}
                                </div>

                                {/* Icon circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 gradient-yellow-cyan"
                                >
                                    <div className="text-neutral-dark">{step.icon}</div>
                                </motion.div>

                                {/* Step number badge */}
                                <div className="absolute top-14 right-1/2 transform translate-x-12 w-8 h-8 rounded-full bg-sparin-gold flex items-center justify-center text-neutral-dark font-bold text-sm shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-neutral-gray text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <a href="#download" className="btn-primary inline-flex items-center gap-2">
                        Start Your Journey
                        <span className="text-xl">🚀</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
