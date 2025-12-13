"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/data/products";
import ProductGallery from "@/components/products/product-gallery";
import ProductCard from "@/components/products/product-card";
import { ShoppingCart, FileText, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    // Get recommended products from same category
    const recommended = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="pt-20">
            {/* Product Details */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Gallery */}
                        <div>
                            <ProductGallery images={product.images} productName={product.name} />
                        </div>

                        {/* Info */}
                        <div>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <Link href="/" className="hover:text-primary">Accueil</Link>
                                <span>/</span>
                                <Link href="/catalogue" className="hover:text-primary">Catalogue</Link>
                                <span>/</span>
                                <span className="text-foreground">{product.name}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                            {/* Short Description */}
                            <p className="text-lg text-muted-foreground mb-6">{product.shortDesc}</p>

                            {/* Price */}
                            {product.price && (
                                <div className="mb-8">
                                    <p className="text-4xl font-bold text-foreground">
                                        {product.price.toLocaleString()} MAD
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">Prix HT, TVA non applicable</p>
                                </div>
                            )}

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all">
                                    <ShoppingCart size={20} />
                                    Ajouter au panier
                                </button>
                                <Link
                                    href="/contact"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-bold transition-all"
                                >
                                    <FileText size={20} />
                                    Demander un devis
                                </Link>
                            </div>

                            {/* Features */}
                            <div className="border-t border-border pt-8">
                                <h3 className="text-xl font-bold mb-4">Points clés</h3>
                                <ul className="space-y-3">
                                    {product.specs.slice(0, 4).map((spec) => (
                                        <li key={spec.label} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check size={16} className="text-primary" />
                                            </div>
                                            <span className="text-foreground">
                                                <strong>{spec.label}:</strong> {spec.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Spécifications techniques complètes</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.specs.map((spec) => (
                                <div key={spec.label} className="p-6 bg-card rounded-xl border border-border">
                                    <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                                    <p className="text-lg font-bold">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-16 prose prose-lg max-w-none">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Description</h2>
                        <p className="text-muted-foreground leading-relaxed">{product.longDesc}</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
                    <FAQSection />
                </div>
            </section>

            {/* Recommended Products */}
            {recommended.length > 0 && (
                <section className="py-16">
                    <div className="container max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Produits recommandés</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recommended.map((prod) => (
                                <ProductCard key={prod.id} product={prod} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

function FAQSection() {
    const faqs = [
        {
            q: "Quelle est la durée de vie de la batterie ?",
            a: "La batterie LFP garantit plus de 5000 cycles de charge, soit environ 8-10 ans d'utilisation quotidienne."
        },
        {
            q: "Combien de temps pour recharger complètement ?",
            a: "Avec le chargeur standard 20A, comptez 6-8 heures pour une charge complète. La charge solaire ajoute 15-20 km d'autonomie par jour ensoleillé."
        },
        {
            q: "Quel est le coût de maintenance annuel ?",
            a: "Le coût de maintenance est minimal : environ 500-800 MAD/an pour l'entretien préventif standard."
        },
        {
            q: "Les produits sont-ils garantis ?",
            a: "Oui, tous nos produits bénéficient d'une garantie constructeur (2 à 5 ans selon les composants) et d'un support technique complet."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                    >
                        <span className="font-semibold">{faq.q}</span>
                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-4 text-muted-foreground">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
