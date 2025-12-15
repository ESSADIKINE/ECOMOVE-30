"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">ECOMOVE</h3>
                        <p className="text-gray-300 mb-6">
                            Solutions de mobilité électrique solaire pour un avenir durable et intelligent.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Produits</h4>
                        <ul className="space-y-3">
                            <li><Link href="/catalogue?category=tricycles" className="text-gray-300 hover:text-primary transition-colors">Tricycles Électriques</Link></li>
                            <li><Link href="/catalogue?category=batteries" className="text-gray-300 hover:text-primary transition-colors">Batteries & Stockage</Link></li>
                            <li><Link href="/catalogue?category=motors" className="text-gray-300 hover:text-primary transition-colors">Moteurs & Contrôleurs</Link></li>
                            <li><Link href="/catalogue?category=solar" className="text-gray-300 hover:text-primary transition-colors">Panneaux Solaires</Link></li>
                            <li><Link href="/catalogue?category=accessories" className="text-gray-300 hover:text-primary transition-colors">Accessoires</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
                        <ul className="space-y-3">
                            <li><Link href="/a-propos" className="text-gray-300 hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/technologies-ia" className="text-gray-300 hover:text-primary transition-colors">Technologies & IA</Link></li>
                            <li><Link href="/b2b" className="text-gray-300 hover:text-primary transition-colors">Solutions B2B</Link></li>
                            <li><Link href="/support" className="text-gray-300 hover:text-primary transition-colors">Support</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Casablanca, Maroc</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary flex-shrink-0" />
                                <span className="text-gray-300">+212 670-268130</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span className="text-gray-300">contact@ecomove.ma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="text-lg font-semibold mb-3">Restez informé</h4>
                        <p className="text-gray-300 mb-4">Recevez nos actualités et offres exclusives</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg font-semibold transition-colors">
                                S&apos;inscrire
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; 2025 ECOMOVE. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link>
                        <Link href="#" className="hover:text-primary transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
