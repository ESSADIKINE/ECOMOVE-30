"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPriceMAD } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    showAddToCart?: boolean;
}

export default function ProductCard({ product, showAddToCart = false }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 hover:-translate-y-1">
            {/* Image */}
            <div className="relative h-64 bg-muted overflow-hidden">
                {product.images && product.images[0] ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground">{product.name}</p>
                        </div>
                    </div>
                )}

                {/* Badge */}
                {product.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        NOUVEAU
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.shortDesc}
                </p>

                {/* Price */}
                {product.price && (
                    <p className="text-2xl font-bold text-foreground mb-4">
                        {formatPriceMAD(product.price)}
                    </p>
                )}

                {/* CTA */}
                <div className="flex gap-2">
                    <Link
                        href={`/catalogue/${product.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all border border-primary rounded-lg px-4 py-2 hover:bg-primary/10"
                    >
                        Détails
                        <ArrowRight size={18} />
                    </Link>
                    {showAddToCart && product.price && (
                        <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all flex items-center gap-2"
                            title="Ajouter au panier"
                        >
                            <ShoppingCart size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
