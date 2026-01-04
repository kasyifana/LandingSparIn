import { FaInstagram, FaTwitter, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = 2026;

    return (
        <footer className="bg-neutral-charcoal border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <span className="text-3xl font-black">
                                <span className="text-sparin-yellow">Spar</span>
                                <span className="text-sparin-cyan">In</span>
                            </span>
                        </div>
                        <p className="text-neutral-gray mb-6 max-w-md">
                            The easiest way to find your perfect sparring partner. Connect with sports enthusiasts, join communities, and level up your game.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaInstagram />, href: '#', label: 'Instagram' },
                                { icon: <FaTwitter />, href: '#', label: 'Twitter' },
                                { icon: <FaFacebook />, href: '#', label: 'Facebook' },
                                { icon: <FaTiktok />, href: '#', label: 'TikTok' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-sparin-cyan hover:text-neutral-dark transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Features', href: '#features' },
                                { label: 'Sports', href: '#sports' },
                                { label: 'How It Works', href: '#how-it-works' },
                                { label: 'Rankings', href: '#ranking' },
                                { label: 'Community', href: '#community' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-gray hover:text-sparin-cyan transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Contact */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Privacy Policy', href: '#' },
                                { label: 'Terms of Service', href: '#' },
                                { label: 'Cookie Policy', href: '#' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-gray hover:text-sparin-cyan transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Contact */}
                        <div className="mt-6">
                            <h4 className="font-bold mb-3 text-white">Contact</h4>
                            <a
                                href="mailto:hello@sparin.app"
                                className="flex items-center gap-2 text-neutral-gray hover:text-sparin-yellow transition-colors"
                            >
                                <FaEnvelope />
                                hello@sparin.app
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-gray text-sm">
                        © {currentYear} SparIn. All rights reserved.
                    </p>
                    <p className="text-neutral-gray text-sm flex items-center gap-2">
                        Made with <span className="text-red-500">❤️</span> for sports enthusiasts
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
