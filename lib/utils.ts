import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price in MAD with space separator for thousands
 * @param price - Price in MAD
 * @returns Formatted price string (e.g., "70 000 MAD")
 */
export function formatPriceMAD(price: number): string {
  return `${price.toLocaleString('fr-FR').replace(/\s/g, ' ')} MAD`;
}
