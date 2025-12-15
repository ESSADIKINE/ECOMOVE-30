import { Product } from "../types";

export const products: Product[] = [
    {
        id: "ecomove-30-standard",
        name: "ECOMOVE-30 – Version Standard (Passagers)",
        slug: "ecomove-30-standard",
        category: "tricycles",
        shortDesc: "Tricycle électrique solaire pour le transport de passagers, autonomie de 80 km",
        longDesc: `Le ECOMOVE-30 Standard est conçu pour le transport écologique de passagers en milieu urbain et péri-urbain. Équipé d'une batterie LFP 12 kWh et de panneaux solaires intégrés, il offre une autonomie exceptionnelle de 80 km avec recharge solaire continue. Idéal pour les services de mobilité partagée, les campus universitaires et les zones touristiques.`,
        images: [
            "/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg",
            "/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg",
            "/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg"
        ],
        specs: [
            { label: "Autonomie", value: "80 km" },
            { label: "Batterie", value: "LFP 12 kWh" },
            { label: "Moteur", value: "BLDC 8 kW" },
            { label: "Charge solaire", value: "Panneaux 500 Wc" },
            { label: "Capacité", value: "3 passagers" },
            { label: "Vitesse max", value: "45 km/h" },
            { label: "Poids", value: "450 kg" },
            { label: "Charge utile", value: "250 kg" }
        ],
        tags: ["Solaire", "IA-ready", "Passagers", "Urbain"],
        price: 77000,
        featured: true
    },
    {
        id: "ecomove-30-cargo",
        name: "ECOMOVE-30 – Version Cargo (Logistique)",
        slug: "ecomove-30-cargo",
        category: "tricycles",
        shortDesc: "Tricycle électrique solaire pour la livraison et la logistique urbaine",
        longDesc: `Le ECOMOVE-30 Cargo transforme la logistique urbaine avec une solution 100% électrique et solaire. Avec sa grande capacité de chargement et son système de gestion intelligente, il est parfait pour les services de livraison, la distribution alimentaire et les opérations municipales. L'IA embarquée optimise les trajets et la consommation d'énergie.`,
        images: [
            "/images/products/ECOMOVE-30 – Version Cargo (Logistique).jpeg",
            "/images/products/ECOMOVE-30 – Version Cargo (Logistique).jpeg",
            "/images/products/ECOMOVE-30 – Version Cargo (Logistique).jpeg"
        ],
        specs: [
            { label: "Autonomie", value: "80 km" },
            { label: "Batterie", value: "LFP 12 kWh" },
            { label: "Moteur", value: "BLDC 8 kW" },
            { label: "Charge solaire", value: "Panneaux 500 Wc" },
            { label: "Volume cargo", value: "2 m³" },
            { label: "Vitesse max", value: "40 km/h" },
            { label: "Poids", value: "500 kg" },
            { label: "Charge utile", value: "400 kg" }
        ],
        tags: ["Solaire", "IA-ready", "Cargo", "Logistique"],
        price: 70000,
        featured: true
    },
    {
        id: "batterie-lfp-12kwh",
        name: "Batterie LFP (LiFePO₄) – Module 12 kWh",
        slug: "batterie-lfp-12kwh",
        category: "batteries",
        shortDesc: "Batterie lithium fer phosphate avec Smart BMS intégré",
        longDesc: `Batterie de nouvelle génération en technologie LiFePO₄ offrant une durée de vie exceptionnelle de plus de 5000 cycles. Le Smart BMS intégré assure une gestion optimale de la charge, de la décharge et de l'équilibrage cellulaire. Compatible avec tous nos systèmes ECOMOVE et évolutive en configuration parallèle.`,
        images: [
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg",
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg",
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg"
        ],
        specs: [
            { label: "Capacité", value: "12 kWh" },
            { label: "Tension", value: "48V nominal" },
            { label: "Technologie", value: "LiFePO₄" },
            { label: "BMS", value: "Smart BMS intégré" },
            { label: "Cycles de vie", value: ">5000 cycles" },
            { label: "Poids", value: "85 kg" },
            { label: "Température", value: "-20°C à +60°C" },
            { label: "Garantie", value: "5 ans" }
        ],
        tags: ["Smart BMS", "LiFePO₄", "Longue durée", "Sécurité"],
        price: 8000
    },
    {
        id: "moteur-bldc-8kw",
        name: "Moteur BLDC 8 kW (Brushless DC Motor)",
        slug: "moteur-bldc-8kw",
        category: "motors",
        shortDesc: "Moteur brushless haute performance pour traction électrique",
        longDesc: `Moteur BLDC de 8 kW offrant un couple élevé et un rendement supérieur à 95%. Conçu pour les applications de mobilité électrique, il combine puissance, efficacité et fiabilité. Refroidissement optimisé pour usage intensif et fonctionnement silencieux.`,
        images: [
            "/images/products/Moteur BLDC 8 kW (Brushless DC Motor).jpeg",
            "/images/products/Moteur BLDC 8 kW (Brushless DC Motor).jpeg",
            "/images/products/Moteur BLDC 8 kW (Brushless DC Motor).jpeg"
        ],
        specs: [
            { label: "Puissance", value: "8 kW continu" },
            { label: "Puissance crête", value: "12 kW" },
            { label: "Tension", value: "48V DC" },
            { label: "Rendement", value: ">95%" },
            { label: "Couple max", value: "95 Nm" },
            { label: "Vitesse max", value: "3000 RPM" },
            { label: "Poids", value: "18 kg" },
            { label: "Protection", value: "IP65" }
        ],
        tags: ["Haute efficacité", "Brushless", "Silencieux"],
        price: 9000
    },
    {
        id: "controleur-bldc-8kw",
        name: "Contrôleur BLDC 8 kW",
        slug: "controleur-bldc-8kw",
        category: "motors",
        shortDesc: "Contrôleur intelligent pour moteur BLDC avec régénération",
        longDesc: `Contrôleur avancé pour moteurs BLDC intégrant la régénération d'énergie au freinage. Interface de programmation complète pour optimisation des performances. Compatible IoT pour monitoring en temps réel et diagnostics à distance.`,
        images: [
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg"
        ],
        specs: [
            { label: "Puissance", value: "8 kW" },
            { label: "Tension", value: "48V DC" },
            { label: "Courant max", value: "200A" },
            { label: "Régénération", value: "Oui" },
            { label: "Interface", value: "CAN, UART, IoT" },
            { label: "Protection", value: "IP65" },
            { label: "Température", value: "-20°C à +70°C" },
            { label: "Garantie", value: "3 ans" }
        ],
        tags: ["Régénération", "IoT", "Programmable"],
        price: 3500
    },
    {
        id: "kit-bldc-8kw",
        name: "Kit complet BLDC 8 kW",
        slug: "kit-bldc-8kw",
        category: "motors",
        shortDesc: "Kit moteur + contrôleur + câblage prêt à installer",
        longDesc: `Solution complète plug-and-play incluant moteur BLDC 8 kW, contrôleur intelligent, câblage complet et logiciel de configuration. Installation simplifiée avec documentation technique détaillée. Support technique inclus pendant 1 an.`,
        images: [
            "/images/products/Kit complet BLDC 8 kW.jpeg",
            "/images/products/Kit complet BLDC 8 kW.jpeg",
            "/images/products/Kit complet BLDC 8 kW.jpeg"
        ],
        specs: [
            { label: "Contenu", value: "Moteur + Contrôleur" },
            { label: "Puissance", value: "8 kW" },
            { label: "Câblage", value: "Complet inclus" },
            { label: "Logiciel", value: "Configuration incluse" },
            { label: "Documentation", value: "Complète FR/EN" },
            { label: "Support", value: "1 an inclus" },
            { label: "Garantie", value: "3 ans" },
            { label: "Délai livraison", value: "72h" }
        ],
        tags: ["Kit complet", "Plug & Play", "Support inclus"],
        price: 13000
    },
    {
        id: "panneau-solaire-100w",
        name: "Panneau solaire flexible 100 Wc",
        slug: "panneau-solaire-100w",
        category: "solar",
        shortDesc: "Panneau solaire flexible léger pour intégration véhicule",
        longDesc: `Panneau solaire monocristallin flexible de 100 Wc spécialement conçu pour l'intégration sur véhicules électriques. Ultra-léger et résistant aux vibrations, il offre un rendement optimal même en faible luminosité. Installation facile sur surfaces courbes.`,
        images: [
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg"
        ],
        specs: [
            { label: "Puissance crête", value: "100 Wc" },
            { label: "Technologie", value: "Monocristallin" },
            { label: "Rendement", value: "22%" },
            { label: "Tension", value: "18V" },
            { label: "Courant", value: "5.5A" },
            { label: "Poids", value: "2 kg" },
            { label: "Flexibilité", value: "30° max" },
            { label: "Garantie", value: "10 ans" }
        ],
        tags: ["Flexible", "Léger", "MPPT"],
        price: 1500
    },
    {
        id: "panneau-solaire-200w",
        name: "Panneau solaire flexible 200 Wc",
        slug: "panneau-solaire-200w",
        category: "solar",
        shortDesc: "Panneau solaire haute puissance pour charge rapide",
        longDesc: `Panneau solaire flexible de 200 Wc offrant une charge rapide et efficace. Parfait pour les configurations nécessitant plus de puissance. Connecteurs MC4 intégrés et régulateur MPPT compatible.`,
        images: [
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg"
        ],
        specs: [
            { label: "Puissance crête", value: "200 Wc" },
            { label: "Technologie", value: "Monocristallin" },
            { label: "Rendement", value: "22%" },
            { label: "Tension", value: "18V" },
            { label: "Courant", value: "11A" },
            { label: "Poids", value: "3.5 kg" },
            { label: "Connecteurs", value: "MC4" },
            { label: "Garantie", value: "10 ans" }
        ],
        tags: ["Flexible", "Haute puissance", "MPPT"],
        price: 2500
    },
    {
        id: "panneau-solaire-500w",
        name: "Panneau solaire flexible 500 Wc",
        slug: "panneau-solaire-500w",
        category: "solar",
        shortDesc: "Configuration solaire premium pour autonomie maximale",
        longDesc: `Kit de panneaux solaires flexibles totalisant 500 Wc pour une autonomie énergétique maximale. Configuration optimale pour les véhicules ECOMOVE-30. Incluant régulateur MPPT intelligent et câblage complet.`,
        images: [
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg",
            "/images/products/Panneau solaire flexible.jpeg"
        ],
        specs: [
            { label: "Puissance totale", value: "500 Wc" },
            { label: "Configuration", value: "5 x 100W" },
            { label: "Régulateur", value: "MPPT 40A inclus" },
            { label: "Tension système", value: "48V" },
            { label: "Production/jour", value: "2-3 kWh" },
            { label: "Poids total", value: "12 kg" },
            { label: "Installation", value: "Kit complet" },
            { label: "Garantie", value: "10 ans" }
        ],
        tags: ["Kit complet", "MPPT", "Autonomie max"],
        price: 5500
    },
    {
        id: "chargeur-intelligent",
        name: "Chargeur intelligent 48V 20A",
        slug: "chargeur-intelligent",
        category: "accessories",
        shortDesc: "Chargeur rapide avec protection et monitoring",
        longDesc: `Chargeur intelligent pour batteries LFP 48V avec protection complète et monitoring en temps réel. Compatible avec l'application mobile ECOMOVE pour suivi de charge à distance.`,
        images: [
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg",
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg",
            "/images/products/Batterie LFP (LiFePO₄) – Module 12 kWh.jpeg"
        ],
        specs: [
            { label: "Tension", value: "48V" },
            { label: "Courant", value: "20A" },
            { label: "Puissance", value: "960W" },
            { label: "Temps charge", value: "6-8h (12kWh)" },
            { label: "Protection", value: "Complète" },
            { label: "App mobile", value: "iOS/Android" },
            { label: "Poids", value: "4 kg" },
            { label: "Garantie", value: "2 ans" }
        ],
        tags: ["Charge rapide", "App mobile", "Sécurisé"],
        price: 650
    },
    {
        id: "convertisseur-dcdc",
        name: "Convertisseur DC-DC 48V/12V 30A",
        slug: "convertisseur-dcdc",
        category: "accessories",
        shortDesc: "Convertisseur pour alimentation accessoires 12V",
        longDesc: `Convertisseur DC-DC haute efficacité pour alimenter tous vos accessoires 12V à partir du système 48V principal. Protection contre les surtensions et court-circuits.`,
        images: [
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg"
        ],
        specs: [
            { label: "Entrée", value: "48V DC" },
            { label: "Sortie", value: "12V DC" },
            { label: "Courant max", value: "30A" },
            { label: "Puissance", value: "360W" },
            { label: "Rendement", value: "95%" },
            { label: "Protection", value: "IP65" },
            { label: "Poids", value: "1.2 kg" },
            { label: "Garantie", value: "2 ans" }
        ],
        tags: ["Haute efficacité", "Protégé", "Compact"],
        price: 2300
    },
    {
        id: "ecran-intelligent",
        name: "Écran intelligent LCD 7 pouces",
        slug: "ecran-intelligent",
        category: "accessories",
        shortDesc: "Dashboard tactile avec navigation et monitoring",
        longDesc: `Écran tactile 7 pouces affichant toutes les informations essentielles : vitesse, autonomie, niveau batterie, navigation GPS, et monitoring énergétique en temps réel. Interface intuitive et lisible en plein soleil.`,
        images: [
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg",
            "/images/products/Contrôleur BLDC 8 kW.jpeg"
        ],
        specs: [
            { label: "Taille", value: "7 pouces" },
            { label: "Type", value: "LCD tactile" },
            { label: "Résolution", value: "1024x600" },
            { label: "GPS", value: "Intégré" },
            { label: "Connectivité", value: "Bluetooth, WiFi" },
            { label: "Protection", value: "IP67" },
            { label: "App", value: "Compatible" },
            { label: "Garantie", value: "2 ans" }
        ],
        tags: ["GPS", "Tactile", "Monitoring"],
        price: 1700
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
    return products.filter(p => p.featured);
}
