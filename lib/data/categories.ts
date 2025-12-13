import { Category } from "../types";

export const categories: Category[] = [
    {
        id: "tricycles",
        name: "Tricycles Électriques",
        slug: "tricycles",
        description: "Solutions de mobilité électrique solaire pour passagers et logistique",
        image: "/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg",
        icon: "Bike"
    },
    {
        id: "batteries",
        name: "Batteries & Stockage",
        slug: "batteries",
        description: "Batteries LFP haute capacité avec Smart BMS intégré",
        image: "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg",
        icon: "Battery"
    },
    {
        id: "motors",
        name: "Moteurs & Contrôleurs",
        slug: "moteurs",
        description: "Systèmes de traction BLDC haute efficacité",
        image: "/images/products/Moteur BLDC 8 kW (Brushless DC Motor).jpeg",
        icon: "Zap"
    },
    {
        id: "solar",
        name: "Panneaux Solaires",
        slug: "solaire",
        description: "Panneaux flexibles haute performance pour charge embarquée",
        image: "/images/products/Panneau solaire flexible.jpeg",
        icon: "Sun"
    },
    {
        id: "accessories",
        name: "Accessoires",
        slug: "accessoires",
        description: "Chargeurs, convertisseurs et équipements intelligents",
        image: "/images/products/Contrôleur BLDC 8 kW.jpeg",
        icon: "Wrench"
    }
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(c => c.slug === slug);
}
