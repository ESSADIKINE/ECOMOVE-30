"use client";

import { useState } from "react";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import ProductCard from "@/components/products/product-card";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CataloguePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    // Filter products
    let filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Sort products
    filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "name":
                return a.name.localeCompare(b.name);
            case "price-asc":
                return (a.price || 0) - (b.price || 0);
            case "price-desc":
                return (b.price || 0) - (a.price || 0);
            default:
                return 0;
        }
    });

    // Get packs/kits
    const packs = products.filter(p => p.tags.includes("Kit complet"));

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Catalogue ECOMOVE
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Découvrez notre gamme complète de solutions de mobilité électrique solaire
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-card border-b border-border sticky top-16 z-40 backdrop-blur-lg bg-card/95">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                            <input
                                type="text"
                                placeholder="Rechercher un produit..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 flex-wrap">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === "all"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-background border border-border hover:border-primary"
                                    }`}
                            >
                                Tous
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-background border border-border hover:border-primary"
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal size={20} className="text-muted-foreground" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="name">Nom (A-Z)</option>
                                <option value="price-asc">Prix croissant</option>
                                <option value="price-desc">Prix décroissant</option>
                            </select>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mt-4 text-sm text-muted-foreground">
                        {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-muted-foreground">
                                Aucun produit ne correspond à vos critères
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Packs Section */}
            {packs.length > 0 && (
                <section className="py-16 bg-muted/30">
                    <div className="container max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Kits & Packs complets
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Solutions complètes prêtes à installer
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {packs.map((pack) => (
                                <ProductCard key={pack.id} product={pack} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
