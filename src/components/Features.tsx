import { motion } from 'framer-motion';
import {
    FaUsers,
    FaComments,
    FaTrophy,
    FaCalendarAlt,
    FaRobot,
    FaUserShield
} from 'react-icons/fa';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <FaUsers className="text-4xl" />,
        title: 'Find Sparring Partners',
        description: 'Create or join sparring rooms. Match with players based on skill level and location. Choose Casual or Competitive modes.',
    },
    {
        icon: <FaComments className="text-4xl" />,
        title: 'Real-time Chat',
        description: 'Chat with room members, coordinate match schedules, and receive push notifications for updates.',
    },
    {
        icon: <FaTrophy className="text-4xl" />,
        title: 'Ranking & Stats',
        description: 'Climb from Rookie to Legend with our ELO rating system. Track your win rate and earn achievement badges.',
    },
    {
        icon: <FaCalendarAlt className="text-4xl" />,
        title: 'Campaigns & Events',
        description: 'Join sports events and tournaments. Register for competitions and track upcoming events near you.',
    },
    {
        icon: <FaUserShield className="text-4xl" />,
        title: 'Referee System',
        description: 'Invite referees via share link for fair match result confirmation. Ensure competitive integrity.',
    },
    {
        icon: <FaRobot className="text-4xl" />,
        title: 'AI Insights',
        description: 'Get smart recommendations and performance analysis powered by AI to improve your game.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const Features = () => {
    return (
        <section id="features" className="section-padding bg-neutral-charcoal relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sparin-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sparin-yellow/5 rounded-full blur-3xl" />

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
                        Powerful <span className="text-sparin-cyan">Features</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Everything you need to find partners, compete, and grow as an athlete
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="feature-card group"
                        >
                            {/* Icon */}
                            <div className="mb-4 text-sparin-cyan group-hover:text-sparin-yellow transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-sparin-cyan transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-neutral-gray leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sparin-cyan/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
