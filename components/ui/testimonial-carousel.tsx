"use client";

import { useState, useEffect } from "react";
import { Testimonial } from "@/lib/types";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Card */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                    <Quote size={80} className="text-primary" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                            {current.useCase}
                        </div>
                    </div>

                    <p className="text-xl text-foreground leading-relaxed mb-8 italic">
                        &quot;{current.content}&quot;
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {current.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-foreground">{current.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {current.role} - {current.company}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full shadow-md transition-all"
                    aria-label="Témoignage précédent"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-border hover:bg-primary/50"
                                }`}
                            aria-label={`Témoignage ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full shadow-md transition-all"
                    aria-label="Témoignage suivant"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
