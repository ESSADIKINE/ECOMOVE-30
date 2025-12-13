"use client";

import { motion } from "framer-motion";
import { Battery, Cpu, Shield, Sun, Zap, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Cpu,
        title: "IA Embarquée",
        description: "Optimisation intelligente des trajets et de la consommation énergétique"
    },
    {
        icon: Sun,
        title: "Énergie Solaire",
        description: "Panneaux haute performance pour recharge continue et autonomie maximale"
    },
    {
        icon: Battery,
        title: "Batterie LFP",
        description: "Technologie LiFePO₄ avec plus de 5000 cycles de vie garantis"
    },
    {
        icon: Shield,
        title: "Sécurité Avancée",
        description: "Systèmes de protection multiples et monitoring en temps réel"
    },
    {
        icon: Zap,
        title: "Haute Performance",
        description: "Moteur BLDC 8 kW avec régénération d'énergie au freinage"
    },
    {
        icon: TrendingUp,
        title: "ROI Optimal",
        description: "Retour sur investissement rapide grâce aux économies opérationnelles"
    }
];

export default function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}
