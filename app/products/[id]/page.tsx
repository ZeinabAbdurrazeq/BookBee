import { fetchSingleProduct, baseURL } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  
  const { id } = await params;
  const product = await fetchSingleProduct(id);

  if (!product) return { title: "Product Not Found" };

return {
  title: `${product.name} - The Archive`,
  description: product.description,

  openGraph: {
    title: product.name,
    description: product.description,
    images: [
      {
        url: `${baseURL}${product.image}`,
        width: 800,
        height: 600,
      },
    ],
  },
};
}

export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string }>;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { color: selectedColor } = await searchParams;

  if (!product) {
    return notFound();
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-12 border-b border-[var(--ink-black)]/10 pb-4">
          <Link href="/products" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--vintage-red)] transition-colors">
            ← Return to Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Column */}
          <div className="lg:col-span-7">
            <div className="newspaper-border">
              <div className="relative h-[600px] w-full bg-[var(--paper-bg)] overflow-hidden">
                <Image
                  src={`${baseURL}${product.image}`}
                  fill
                  className="object-cover vintage-filter"
                  alt={product.name}
                  priority
                />
              </div>
            </div>
            {/* Caption */}
            <p className="mt-4 text-xs italic opacity-60 text-center uppercase tracking-tighter">
              Figure 1.1: The {product.name} in its original form.
            </p>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5">
            <div className="vintage-cutout mb-6">
              <h1 className="text-4xl md:text-5xl mb-2">{product.name}</h1>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-black text-[var(--vintage-red)]">${product.price.toFixed(2)}</span>
              <div className="h-4 w-px bg-[var(--ink-black)]/20" />
              <span className="text-xs uppercase font-bold tracking-widest opacity-60">Authentic Artifact</span>
            </div>

            <div className="prose prose-stone mb-10">
              <p className="text-lg leading-relaxed editorial-column">
                {product.description || "A masterfully crafted piece of history, preserved for the modern connoisseur. This item represents the peak of early century craftsmanship, blending form and utility into a singular aesthetic statement. Each detail has been carefully inspected for historical accuracy."}
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-10 p-6 border-2 border-dashed border-[var(--ink-black)]/20">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Available Finishes</h3>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <Link
                    key={color}
                    href={`/products/${product.id}?color=${color}`}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                      color === selectedColor
                        ? "bg-[var(--ink-black)] text-[var(--paper-bg)] border-[var(--ink-black)]"
                        : "border-[var(--ink-black)]/20 hover:border-[var(--ink-black)]"
                    }`}
                  >
                    {color}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[var(--ink-black)] text-[var(--paper-bg)] font-bold py-5 text-sm uppercase tracking-[0.3em] border-2 border-[var(--ink-black)] hover:bg-transparent hover:text-[var(--ink-black)] transition-all duration-500">
              Request Acquisition
            </button>

            {/* Bottom Note */}
            <div className="mt-8 pt-8 border-t border-[var(--ink-black)]/10">
              <p className="text-[10px] uppercase font-bold tracking-tighter opacity-50 text-center">
                All acquisitions are final. Shipping via trans-atlantic dispatch only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
