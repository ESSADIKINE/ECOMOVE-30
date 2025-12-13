"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, getFeaturedProducts } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { testimonials } from "@/lib/data/testimonials";
import ProductCard from "@/components/products/product-card";
import CategoryTiles from "@/components/ui/category-tiles";
import FeatureGrid from "@/components/ui/feature-grid";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";
import { ArrowRight, Gauge, Sun, Battery, Users } from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const standardVersion = products.find(p => p.slug === "ecomove-30-standard");
  const cargoVersion = products.find(p => p.slug === "ecomove-30-cargo");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/ECOMOVE-30 – Version Standard (Passagers).jpeg"
            alt="ECOMOVE-30"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              L&apos;avenir de la mobilité est{" "}
              <span className="text-primary">solaire</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Tricycles électriques intelligents alimentés par l&apos;énergie solaire et l&apos;IA.
              Pour une mobilité urbaine durable et performante.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalogue"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
              >
                Découvrir le catalogue
              </Link>
              <Link
                href="/b2b"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg transition-all"
              >
                Solutions B2B
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Gauge className="text-primary" size={24} />
                  <p className="text-3xl font-bold text-white">80 km</p>
                </div>
                <p className="text-white/80 text-sm">Autonomie</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sun className="text-accent" size={24} />
                  <p className="text-3xl font-bold text-white">500 Wc</p>
                </div>
                <p className="text-white/80 text-sm">Solaire</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Battery className="text-primary" size={24} />
                  <p className="text-3xl font-bold text-white">12 kWh</p>
                </div>
                <p className="text-white/80 text-sm">Batterie LFP</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="text-accent" size={24} />
                  <p className="text-3xl font-bold text-white">2 en 1</p>
                </div>
                <p className="text-white/80 text-sm">Passagers & Cargo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Versions Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deux versions pour tous vos besoins
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez entre notre version Standard pour le transport de passagers ou Cargo pour la logistique urbaine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {standardVersion && <ProductCard product={standardVersion} />}
            {cargoVersion && <ProductCard product={cargoVersion} />}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Technologies de pointe
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              IA • Énergie • Sécurité
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une combinaison unique de technologies pour une performance exceptionnelle
            </p>
          </div>

          <FeatureGrid />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explorer notre catalogue
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits et solutions pour la mobilité électrique
            </p>
          </div>

          <CategoryTiles categories={categories} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-4">
              Témoignages clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment ECOMOVE transforme la mobilité pour nos clients
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à passer à l&apos;électrique solaire ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Demandez un devis personnalisé ou contactez notre équipe pour découvrir comment ECOMOVE peut transformer votre mobilité
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                Demander un devis
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/catalogue"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg transition-all"
              >
                Voir le catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
