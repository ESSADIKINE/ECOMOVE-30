import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types"

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

/**
 * Format range with battery base + solar gain if applicable
 * @param product - Product with range data
 * @returns Formatted range string (e.g., "80 km + 20–25 km (Solaire)")
 */
export function formatRange(product: Product): string {
  if (!product.rangeKmBase) {
    return "";
  }

  let result = `${product.rangeKmBase} km`;

  if (product.rangeKmSolarMin && product.rangeKmSolarMax) {
    result += ` + ${product.rangeKmSolarMin}–${product.rangeKmSolarMax} km (Solaire)`;
  }

  return result;
}

/**
 * Format range for compact display (badges/KPI)
 * @param product - Product with range data
 * @returns Short formatted range string (e.g., "80 km + 20–25 km")
 */
export function formatRangeCompact(product: Product): string {
  if (!product.rangeKmBase) {
    return "";
  }

  let result = `${product.rangeKmBase} km`;

  if (product.rangeKmSolarMin && product.rangeKmSolarMax) {
    result += ` + ${product.rangeKmSolarMin}–${product.rangeKmSolarMax} km`;
  }

  return result;
}
