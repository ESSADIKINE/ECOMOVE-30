"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form:", formData);
        alert("Message envoyé ! Nous vous répondrons sous 24h.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Notre équipe est à votre disposition pour répondre à toutes vos questions
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Nom complet *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="email@exemple.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Téléphone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="+212 670-268130"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Sujet *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Sujet de votre message"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message *</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Votre message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all"
                                >
                                    <Send size={20} />
                                    Envoyer le message
                                </button>
                            </form>
                        </div>

                        {/* Info + Map */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin size={24} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1">Adresse</p>
                                            <p className="text-muted-foreground">
                                                Zone Industrielle Ain Sebaa<br />
                                                Casablanca 20250<br />
                                                Maroc
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone size={24} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1">Téléphone</p>
                                            <p className="text-muted-foreground">+212 670-268130</p>

                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail size={24} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1">Email</p>
                                            <p className="text-muted-foreground">contact@ecomove.ma</p>
                                            <p className="text-muted-foreground">support@ecomove.ma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-muted rounded-2xl h-80 flex items-center justify-center border border-border">
                                <div className="text-center p-6">
                                    <MapPin size={48} className="text-muted-foreground mx-auto mb-3" />
                                    <p className="text-muted-foreground">Carte interactive</p>
                                    <p className="text-sm text-muted-foreground mt-1">Casablanca, Maroc</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="p-6 bg-card rounded-2xl border border-border">
                                <h3 className="font-bold mb-4">Horaires d&apos;ouverture</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Lundi - Vendredi</span>
                                        <span className="font-semibold">9h00 - 18h00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Samedi</span>
                                        <span className="font-semibold">9h00 - 13h00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Dimanche</span>
                                        <span className="font-semibold">Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
