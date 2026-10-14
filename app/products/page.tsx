import { baseURL, fetchProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-12">
     
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-16 border-b-4 border-double border-[var(--ink-black)] pb-10">
          <h1 className="text-5xl md:text-7xl newspaper-masthead mb-4 text-[var(--ink-black)]">
            The Catalog of Fine Goods
          </h1>
          <div className="flex items-center justify-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Vol. LXXIV</span>
            <div className="h-px w-12 bg-[var(--ink-black)] opacity-30" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">May 1926 Edition</span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="paper-card group flex flex-col p-6 border-2 border-[var(--ink-black)]/10"
            >
              <div className="relative h-72 w-full mb-6 overflow-hidden bg-[var(--paper-bg)] border border-[var(--ink-black)]/5">
                <Image
                  src={`${baseURL}${product.image}`}
                  fill
                  className="object-cover vintage-filter group-hover:scale-110 transition-transform duration-700"
                  alt={product.name}
                />
              </div>

              <div className="flex-1 flex flex-col items-center text-center">
                <div className="vintage-cutout mb-4 w-full text-center">
                  <h3 className="text-2xl mb-1 group-hover:text-[var(--vintage-red)] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-[var(--vintage-red)] font-black text-lg tracking-widest mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm italic opacity-70 mb-6 line-clamp-2">
                  {product.description || "A masterfully crafted piece of history, preserved for the modern connoisseur."}
                </p>
                
                <div className="mt-auto pt-4 border-t border-[var(--ink-black)]/10 w-full">
                  <span className="text-xs font-bold uppercase tracking-widest underline decoration-dotted">
                    Examine Product
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-[var(--ink-black)] opacity-40">
            <p className="text-2xl italic">The archives are currently empty. Please return at a later date.</p>
          </div>
        )}
      </div>
    </div>
  );
}
