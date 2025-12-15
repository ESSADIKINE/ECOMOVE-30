"use client";

import { X, Minus, Plus, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { formatPriceMAD } from "@/lib/utils";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col animate-slide-in">
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ShoppingCart size={24} className="text-primary" />
                        <h2 className="text-2xl font-bold">Panier</h2>
                        {itemCount > 0 && (
                            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                                {itemCount}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center py-16">
                            <ShoppingCart size={64} className="text-muted-foreground mx-auto mb-4 opacity-50" />
                            <p className="text-lg text-muted-foreground mb-2">Votre panier est vide</p>
                            <p className="text-sm text-muted-foreground">Ajoutez des produits pour commencer</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-4 p-4 bg-background rounded-xl border border-border"
                                >
                                    {/* Image */}
                                    <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                        {item.product.images[0] && (
                                            <Image
                                                src={item.product.images[0]}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                                            {item.product.name}
                                        </h3>
                                        <p className="text-primary font-bold">
                                            {formatPriceMAD(item.product.price || 0)}
                                        </p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 border-t border-border bg-muted/30">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-2xl font-bold text-primary">
                                {formatPriceMAD(total)}
                            </span>
                        </div>
                        <Link
                            href="/boutique/panier"
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all"
                        >
                            Voir le panier
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
