import Image from "next/image";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Innovation",
            description: "Pionnier de la mobilité électrique solaire en Afrique"
        },
        {
            icon: Users,
            title: "Engagement",
            description: "Accompagnement personnalisé de chaque client"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Qualité et fiabilité dans tous nos produits"
        },
        {
            icon: TrendingUp,
            title: "Durabilité",
            description: "Solutions écologiques pour un avenir durable"
        }
    ];

    const milestones = [
        { year: "2020", title: "Fondation d'ECOMOVE", description: "Création de l'entreprise avec la vision d'une mobilité 100% propre" },
        { year: "2021", title: "Premier prototype", description: "Développement du ECOMOVE-30 avec intégration solaire" },
        { year: "2022", title: "Lancement commercial", description: "Premières livraisons aux entreprises pilotes" },
        { year: "2023", title: "Expansion", description: "Déploiement dans 5 villes marocaines" },
        { year: "2024", title: "Innovation IA", description: "Intégration de l'intelligence artificielle embarquée" }
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            À propos d&apos;ECOMOVE
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Pionniers de la mobilité électrique solaire au Maroc et en Afrique
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-6">
                                Notre Histoire
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Une vision pour l&apos;avenir de la mobilité
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    ECOMOVE est née d&apos;une vision simple mais ambitieuse : rendre la mobilité urbaine 100% propre, autonome et intelligente grâce à l&apos;énergie solaire.
                                </p>
                                <p>
                                    Nous croyons que la transition vers une mobilité durable ne doit pas être un compromis sur la performance ou le coût. C&apos;est pourquoi nous avons développé une gamme complète de tricycles électriques solaires combinant autonomie énergétique, intelligence artificielle et design premium.
                                </p>
                                <p>
                                    Aujourd&apos;hui, nous équipons des entreprises de livraison, des campus universitaires, des services municipaux et des opérateurs touristiques partout au Maroc et bientôt en Afrique.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 bg-muted rounded-2xl overflow-hidden">
                            <Image
                                src="/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg"
                                alt="ECOMOVE Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nos valeurs
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Les principes qui guident notre action au quotidien
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div key={value.title} className="text-center p-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Notre parcours
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Les grandes étapes de notre développement
                        </p>
                    </div>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} className="relative flex gap-8 items-start">
                                    {/* Year Circle */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                                        {milestone.year}
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 bg-card p-6 rounded-2xl border border-border">
                                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                        <p className="text-muted-foreground">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-accent">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <p className="text-5xl font-bold mb-2">500+</p>
                            <p className="text-white/90">Véhicules déployés</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">50+</p>
                            <p className="text-white/90">Clients B2B</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">5</p>
                            <p className="text-white/90">Villes couvertes</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold mb-2">100%</p>
                            <p className="text-white/90">Satisfaction client</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
