"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden group">
                <Image
                    src={images[currentIndex]}
                    alt={`${productName} - Image ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Image précédente"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Image suivante"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? "border-primary ring-2 ring-primary/30"
                                    : "border-border hover:border-primary/50"
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`${productName} - Miniature ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
