"use client";

import Image from "next/image";
import { Brain, Battery, Sun, Shield, Zap, TrendingUp, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function TechnologiesPage() {
    const technologies = [
        {
            icon: Brain,
            title: "Intelligence Artificielle",
            description: "Algorithmes de machine learning pour optimisation des trajets et prédiction de consommation"
        },
        {
            icon: Sun,
            title: "Énergie Solaire",
            description: "Panneaux monocristallins haute efficacité avec intégration aérodynamique"
        },
        {
            icon: Battery,
            title: "Smart BMS",
            description: "Gestion intelligente de batterie avec équilibrage actif et monitoring temps réel"
        },
        {
            icon: Zap,
            title: "Régénération",
            description: "Récupération d'énergie au freinage pour maximiser l'autonomie"
        }
    ];

    const aiFeatures = [
        {
            title: "Optimisation des trajets",
            description: "L'IA analyse le trafic en temps réel et propose les itinéraires les plus efficaces énergétiquement"
        },
        {
            title: "Prédiction de consommation",
            description: "Apprentissage des habitudes de conduite pour prévoir l'autonomie restante avec précision"
        },
        {
            title: "Maintenance prédictive",
            description: "Détection précoce des anomalies et alertes avant pannes grâce à l'analyse des données"
        },
        {
            title: "Gestion de flotte",
            description: "Dashboard analytics pour suivre et optimiser l'utilisation de toute votre flotte"
        }
    ];

    const roadmap = [
        {
            quarter: "Q1 2025",
            title: "Conduite autonome niveau 2",
            status: "En développement",
            description: "Assistance à la conduite avec maintien de voie et régulation de vitesse"
        },
        {
            quarter: "Q2 2025",
            title: "V2G (Vehicle-to-Grid)",
            status: "Planifié",
            description: "Revente d'électricité au réseau pendant les heures creuses"
        },
        {
            quarter: "Q3 2025",
            title: "Batterie solide",
            status: "Recherche",
            description: "Nouvelle génération de batteries pour +50% d'autonomie"
        },
        {
            quarter: "Q4 2025",
            title: "5G & IoT avancé",
            status: "Planifié",
            description: "Connectivité 5G pour communication inter-véhicules"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-accent/20 via-primary/10 to-background overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-6">
                            <Cpu size={20} />
                            Technologies & IA
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            L&apos;intelligence au service de la mobilité durable
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Une combinaison unique d&apos;IA, d&apos;énergie solaire et d&apos;ingénierie de pointe
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Technologies */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Technologies embarquées
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={tech.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* AI Section 1 */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-6">
                                Intelligence artificielle
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                L&apos;IA au cœur du système
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Notre système d&apos;intelligence artificielle embarquée analyse en permanence plus de 50 paramètres pour optimiser chaque trajet et maximiser l&apos;efficacité énergétique.
                            </p>
                            <div className="space-y-4">
                                {aiFeatures.map((feature) => (
                                    <div key={feature.title} className="flex gap-4">
                                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden flex items-center justify-center">
                            <Network size={120} className="text-primary/40" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Section */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 bg-muted rounded-2xl overflow-hidden order-2 lg:order-1">
                            <Image
                                src="/images/products/Panneau solaire flexible.jpeg"
                                alt="Panneau solaire"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-6">
                                Énergie solaire
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Autonomie énergétique maximale
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Nos panneaux solaires flexibles haute performance génèrent jusqu&apos;à 500 Wc, offrant 15-20 km d&apos;autonomie supplémentaire par jour ensoleillé.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <span>Régulateur MPPT intelligent pour extraction maximale de puissance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <span>Panneaux flexibles résistants aux vibrations et intempéries</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <span>Rendement de 22% même en conditions de faible luminosité</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Cards */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Architecture simplifiée
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Comprendre le système ECOMOVE en 4 composants clés
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-card rounded-2xl border-2 border-primary/30">
                            <div className="text-center mb-4">
                                <Sun size={48} className="text-primary mx-auto mb-2" />
                                <h3 className="font-bold">1. Capture solaire</h3>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                Les panneaux convertissent la lumière en électricité DC
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border-2 border-accent/30">
                            <div className="text-center mb-4">
                                <TrendingUp size={48} className="text-accent mx-auto mb-2" />
                                <h3 className="font-bold">2. Régulation MPPT</h3>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                Optimisation de la charge vers la batterie
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border-2 border-primary/30">
                            <div className="text-center mb-4">
                                <Battery size={48} className="text-primary mx-auto mb-2" />
                                <h3 className="font-bold">3. Stockage LFP</h3>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                12 kWh de capacité avec Smart BMS
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-2xl border-2 border-accent/30">
                            <div className="text-center mb-4">
                                <Zap size={48} className="text-accent mx-auto mb-2" />
                                <h3 className="font-bold">4. Traction BLDC</h3>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                Moteur 8 kW haute efficacité avec régénération
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-16">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Roadmap innovation
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Les prochaines avancées technologiques ECOMOVE
                        </p>
                    </div>
                    <div className="space-y-6">
                        {roadmap.map((item, index) => (
                            <motion.div
                                key={item.quarter}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all"
                            >
                                <div className="flex-shrink-0 w-24 text-center">
                                    <div className="px-3 py-1 bg-primary/10 text-primary font-bold rounded-lg text-sm">
                                        {item.quarter}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.status === "En développement" ? "bg-accent/20 text-accent" :
                                                item.status === "Planifié" ? "bg-primary/20 text-primary" :
                                                    "bg-muted text-muted-foreground"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
