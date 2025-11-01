import styles from "./SocialIcons.module.css";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";    

export default function Footer() {
    return (
        <footer className="bg-linear-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & About */}
                    <div className="md:col-span-1">
                        <a href="#" className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white">CodeNest</span>
                        </a>
                        <p className="text-gray-300 mb-4">
                            CodeNest is your digital nest to learn coding, build projects, and
                            grow into a confident developer. Explore courses, challenges, and
                            communities built for the next generation of tech creators.
                        </p>

                        {/* Social Icons */}
                        <ul className={styles.socialList}>
                            <li>
                                <a href="#">
                                    <Facebook className={styles.icon} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Twitter className={styles.icon} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Instagram className={styles.icon} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Github className={styles.icon} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Coding Challenges
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Community Forum
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Contact Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Tutorials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About CodeNest</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Partnerships
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-indigo-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} CodeNest. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                Terms of Use
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                Cookie Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <p className="text-gray-500 text-xs mt-6 text-center md:text-left">
                        CodeNest is a community-driven learning hub helping students and
                        developers grow their coding skills through interactive education
                        and collaboration.
                    </p>
                </div>
            </div>
        </footer>
    );
}
