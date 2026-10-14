export default function About() {
  const offers = [
    "Curated book collections",
    "Author mentorship programs",
    "In-depth literary reviews",
    "Publishing guidance",
    "Global reader community"
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="pt-40 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-7xl font-thin mb-6 leading-tight tracking-tight">
          WHO WE ARE
        </h1>
        <p className="text-2xl font-light tracking-wide text-gray-700">
          Where passion meets performance and innovation.
        </p>
      </header>

      {/* Content Section */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        {/* Our Vision */}
        <div className="mb-20">
          <span className="text-xs font-black tracking-widest uppercase block mb-6">
            OUR VISION
          </span>
          <p className="text-lg font-light leading-relaxed text-gray-800 mb-8">
            Welcome to Golden Pages Publishing, your trusted destination for exceptional stories and literary excellence. We are dedicated to discovering, publishing, and championing works that transform minds and move hearts. Our vision is to become the world's most beloved independent publishing house, where every author finds their voice and every reader discovers their next great adventure.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <span className="text-xs font-black tracking-widest uppercase block mb-6">
            WHAT WE OFFER
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-900 pt-8">
            {offers.map((offer, index) => (
              <div key={index} className="pb-6 border-b border-gray-300">
                <p className="font-semibold text-sm tracking-wide uppercase text-gray-900">
                  {offer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Goal */}
        <div className="text-center py-16 border-t border-gray-900 border-b border-gray-900">
          <span className="text-xs font-black tracking-widest uppercase block mb-8">
            OUR GOAL
          </span>
          <p className="text-4xl font-light leading-relaxed text-gray-900 max-w-3xl mx-auto">
            To elevate literature and empower authors, creating a world where meaningful stories connect with passionate readers everywhere.
          </p>
        </div>

        {/* Key Values */}
        <div className="mt-20">
          <span className="text-xs font-black tracking-widest uppercase block mb-8">
            OUR COMMITMENT
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-black tracking-wider uppercase mb-3">Quality</h3>
              <p className="text-sm font-light leading-relaxed text-gray-700">
                Every book is meticulously edited and beautifully presented to the highest standards.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black tracking-wider uppercase mb-3">Integrity</h3>
              <p className="text-sm font-light leading-relaxed text-gray-700">
                We honor authors' visions and maintain unwavering ethical standards in all operations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black tracking-wider uppercase mb-3">Community</h3>
              <p className="text-sm font-light leading-relaxed text-gray-700">
                We build meaningful connections between authors, readers, and literature lovers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-32 pt-16 border-t border-gray-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-thin tracking-tight mb-2">10M+</p>
              <p className="text-xs font-black tracking-widest uppercase text-gray-600">
                Books Published
              </p>
            </div>
            <div>
              <p className="text-3xl font-thin tracking-tight mb-2">25+</p>
              <p className="text-xs font-black tracking-widest uppercase text-gray-600">
                Years Publishing
              </p>
            </div>
            <div>
              <p className="text-3xl font-thin tracking-tight mb-2">150+</p>
              <p className="text-xs font-black tracking-widest uppercase text-gray-600">
                Authors Mentored
              </p>
            </div>
            <div>
              <p className="text-3xl font-thin tracking-tight mb-2">5M+</p>
              <p className="text-xs font-black tracking-widest uppercase text-gray-600">
                Readers Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-32 py-12 border-t border-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-black tracking-widest uppercase mb-8">
            Let's Create Something Extraordinary
          </p>
          <p className="text-sm font-light leading-relaxed text-gray-700 mb-8">
            Whether you're an author with a story to tell or a reader seeking your next favorite book, we invite you to be part of the Golden Pages story.
          </p>
          <button className="border border-gray-900 px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
