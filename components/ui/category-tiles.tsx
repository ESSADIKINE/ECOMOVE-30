"use client";

import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface CategoryTilesProps {
    categories: Category[];
}

export default function CategoryTiles({ categories }: CategoryTilesProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/catalogue?category=${category.id}`}
                    className="group relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-primary/80 group-hover:via-primary/50 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-end">
                        <div className="mb-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg w-fit">
                            <div className="w-8 h-8 bg-white/30 rounded" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2 group-hover:translate-x-1 transition-transform">
                            {category.name}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2">
                            {category.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                            Explorer
                            <ArrowRight size={18} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
