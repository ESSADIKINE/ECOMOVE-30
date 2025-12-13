"use client";

import Link from "next/link";
import { Check, Upload, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useState } from "react";

export default function B2BPage() {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        fleetSize: "",
        useCase: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote request:", formData);
        alert("Demande de devis envoyée ! Notre équipe vous contactera sous 24h.");
    };

    const offers = [
        {
            title: "Starter",
            price: "Sur devis",
            description: "Idéal pour tester la solution",
            features: [
                "1-5 véhicules",
                "Support email",
                "Formation initiale",
                "Maintenance standard",
                "Garantie 3 ans"
            ]
        },
        {
            title: "Business",
            price: "Sur devis",
            description: "Pour les flottes moyennes",
            featured: true,
            features: [
                "6-20 véhicules",
                "Support prioritaire 24/7",
                "Formation complète",
                "Maintenance premium",
                "Garantie 5 ans",
                "Dashboard analytics"
            ]
        },
        {
            title: "Enterprise",
            price: "Sur devis",
            description: "Solutions sur mesure",
            features: [
                "Flotte illimitée",
                "Account manager dédié",
                "Formation continue",
                "Maintenance VIP",
                "Garantie 5 ans +",
                "API & intégrations",
                "Personnalisation complète"
            ]
        }
    ];

    const benefits = [
        {
            icon: Users,
            title: "Accompagnement dédié",
            description: "Une équipe à votre service pour la transition"
        },
        {
            icon: TrendingUp,
            title: "ROI rapide",
            description: "Retour sur investissement en moins de 2 ans"
        },
        {
            icon: Shield,
            title: "Garantie étendue",
            description: "Jusqu'à 5 ans sur l'ensemble de la flotte"
        },
        {
            icon: Zap,
            title: "Performance optimale",
            description: "Suivi en temps réel et optimisation IA"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-6">
                            Solutions B2B
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Électrifiez votre flotte avec ECOMOVE
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Des solutions de mobilité électrique solaire adaptées aux professionnels et aux grandes flottes
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Pourquoi ECOMOVE pour votre flotte ?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={benefit.title} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Offers */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nos offres B2B
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Des solutions flexibles adaptées à la taille de votre flotte
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {offers.map((offer) => (
                            <div
                                key={offer.title}
                                className={`relative p-8 rounded-2xl ${offer.featured
                                        ? "bg-gradient-to-br from-primary to-accent text-white ring-4 ring-primary/30 scale-105"
                                        : "bg-card border border-border"
                                    }`}
                            >
                                {offer.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-bold rounded-full">
                                        POPULAIRE
                                    </div>
                                )}

                                <h3 className={`text-2xl font-bold mb-2 ${offer.featured ? "text-white" : "text-foreground"}`}>
                                    {offer.title}
                                </h3>
                                <p className={`mb-4 ${offer.featured ? "text-white/90" : "text-muted-foreground"}`}>
                                    {offer.description}
                                </p>
                                <p className={`text-3xl font-bold mb-6 ${offer.featured ? "text-white" : "text-primary"}`}>
                                    {offer.price}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {offer.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check size={20} className={`flex-shrink-0 ${offer.featured ? "text-white" : "text-primary"}`} />
                                            <span className={offer.featured ? "text-white" : "text-foreground"}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
                                    className={`w-full py-3 rounded-xl font-bold transition-all ${offer.featured
                                            ? "bg-white text-primary hover:bg-white/90"
                                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                                        }`}
                                >
                                    Demander un devis
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section id="quote-form" className="py-16">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Demander un devis personnalisé
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Remplissez le formulaire et notre équipe vous contactera sous 24h
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Entreprise *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Nom de votre entreprise"
                                />
                            </div>
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
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="email@entreprise.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Téléphone *</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="+212 6XX-XXXXXX"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Taille de la flotte *</label>
                                <select
                                    required
                                    value={formData.fleetSize}
                                    onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="1-5">1-5 véhicules</option>
                                    <option value="6-20">6-20 véhicules</option>
                                    <option value="21-50">21-50 véhicules</option>
                                    <option value="50+">Plus de 50 véhicules</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Cas d&apos;usage *</label>
                                <select
                                    required
                                    value={formData.useCase}
                                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="delivery">Livraison urbaine</option>
                                    <option value="campus">Campus / Université</option>
                                    <option value="municipal">Services municipaux</option>
                                    <option value="tourism">Tourisme</option>
                                    <option value="other">Autre</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Décrivez votre projet..."
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Pièce jointe (optionnel)</label>
                            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">Cliquez pour uploader un fichier</p>
                                <p className="text-xs text-muted-foreground mt-1">PDF, DOC, XLS (max 10MB)</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all"
                        >
                            Envoyer la demande
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
