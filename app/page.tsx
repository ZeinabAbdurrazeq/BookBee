import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b-4 border-double border-[var(--ink-black)]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover vintage-filter opacity-60"
          >
            <source
              src="https://player.vimeo.com/external/462153549.sd.mp4?s=9e97f54129a0f00c5c643b17c2937516d2673d32&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-[var(--paper-bg)] opacity-30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-block border-y border-[var(--ink-black)] py-2 px-8">
            <span className="text-sm tracking-widest uppercase font-medium">Extraordinary Edition</span>
          </div>
          <h1 className="text-6xl md:text-9xl mb-6 newspaper-masthead leading-tight text-[var(--ink-black)]">
            The Chronicle <br />
            <span className="italic font-serif normal-case text-4xl md:text-6xl block mt-2">& The Archive</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto italic opacity-90">
            "Preserving the elegance of yesterday for the explorers of today."
          </p>
          <button className="px-10 py-4 border-2 border-[var(--ink-black)] hover:bg-[var(--ink-black)] hover:text-white transition-all duration-500 uppercase tracking-[0.2em] font-bold text-sm bg-transparent">
            Enter the Archive
          </button>
        </div>
      </section>

      {/* Featured / Story Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-b-2 border-[var(--ink-black)] pb-4">
          <h2 className="text-4xl">Featured Stories</h2>
          <span className="text-sm uppercase font-bold tracking-tighter">Issue No. 001 — May 1926</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Story Card */}
          <div className="md:col-span-7 group">
            <div className="newspaper-border mb-6">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/Img1.png"
                  alt="Featured Story"
                  fill
                  className="object-cover vintage-filter group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="max-w-xl">
              <div className="vintage-cutout mb-6">
                <h3 className="text-3xl mb-4 group-hover:text-[var(--vintage-red)] transition-colors">The Art of Timeless Design</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-80 mb-6 editorial-column">
                Exploring the origins of geometric modernism and its influence on the aesthetic landscapes of the early century. 
                A journey through form, function, and the beauty of simplicity. Heritage is not a static concept but a living dialogue between the past and the present.
              </p>
              <div className="h-px w-20 bg-[var(--ink-black)] mb-4" />
              <p className="text-xs uppercase tracking-widest font-bold">Read the full account</p>
            </div>
          </div>

          {/* Secondary Story Cards */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <div className="group">
              <div className="newspaper-border mb-4">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/img2.jpg"
                    alt="Story 2"
                    fill
                    className="object-cover vintage-filter group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <h3 className="text-2xl mb-2">Echoes of the Past</h3>
              <p className="text-sm italic opacity-70">A study on architectural resonance.</p>
            </div>

            <div className="group">
              <div className="newspaper-border mb-4">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/img3.jpg"
                    alt="Story 3"
                    fill
                    className="object-cover vintage-filter group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <h3 className="text-2xl mb-2">Modernism Reclaimed</h3>
              <p className="text-sm italic opacity-70">How heritage shapes our future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero / Banner */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden my-12">
        <Image
          src="/hero2.png"
          alt="Vintage Banner"
          fill
          className="object-cover vintage-filter brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="p-8 border border-white/30 backdrop-blur-sm bg-black/10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl mb-4 masthead leading-none font-bold">THE INK NEVER DRIES</h2>
            <p className="text-xl italic opacity-80">A legacy written in stone and steel.</p>
          </div>
        </div>
      </section>

      {/* Best Seller Products Section */}
      <section className="py-24 px-6 md:px-12 bg-white/40 border-y border-[var(--ink-black)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-2">The Curator's Selection</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[var(--ink-black)]" />
              <span className="text-sm uppercase tracking-[0.3em] font-medium">Fine Goods & Essentials</span>
              <div className="h-px w-12 bg-[var(--ink-black)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "/img4.jpg", name: "The Classic Portfolio", price: "$85.00" },
              { img: "/img5.jpg", name: "Archival Ink Set", price: "$42.00" },
              { img: "/img6.jpg", name: "Heritage Timepiece", price: "$210.00" },
            ].map((product, idx) => (
              <div key={idx} className="paper-card group cursor-pointer overflow-hidden p-4">
                <div className="relative h-80 mb-6 overflow-hidden bg-[var(--paper-bg)]">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover vintage-filter group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-1">{product.name}</h4>
                  <p className="text-[var(--vintage-red)] font-bold tracking-widest text-sm">{product.price}</p>
                  <div className="mt-4 pt-4 border-t border-[var(--ink-black)]/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase font-bold tracking-tighter">View Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Ornament */}
      <div className="flex justify-center py-12 opacity-30">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-24 bg-[var(--ink-black)]" />
          <div className="w-2 h-2 rotate-45 bg-[var(--ink-black)]" />
          <div className="h-[1px] w-24 bg-[var(--ink-black)]" />
        </div>
      </div>
    </div>
  );
}
