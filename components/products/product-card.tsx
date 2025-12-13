"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
                        {product.price.toLocaleString()} MAD
                    </p>
                )}

                {/* CTA */}
                <Link
                    href={`/catalogue/${product.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                    Voir les détails
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}
