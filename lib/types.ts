export interface Product {
    id: string;
    name: string;
    slug: string;
    category: "tricycles" | "batteries" | "motors" | "solar" | "accessories";
    shortDesc: string;
    longDesc: string;
    images: string[];
    specs: Array<{ label: string; value: string }>;
    tags: string[];
    price?: number;
    featured?: boolean;
    rangeKmBase?: number;
    rangeKmSolarMin?: number;
    rangeKmSolarMax?: number;
    rangeLabel?: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
    useCase: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}
