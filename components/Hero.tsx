'use client'

export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Invisible Infrastructure
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          For 30 years, remote communities paid the freight tax. We're dismantling it by owning the assets.
        </p>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          First Nations-owned. Tier-1 cold-chain logistics. Commercial revenue subsidizing food sovereignty.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="border-l-2 border-white pl-4 text-left">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-white/70">First Nations Owned</div>
          </div>
          <div className="border-l-2 border-white pl-4 text-left">
            <div className="text-4xl font-bold">Tier-1</div>
            <div className="text-sm text-white/70">ESG Rating</div>
          </div>
          <div className="border-l-2 border-white pl-4 text-left">
            <div className="text-4xl font-bold">30yr</div>
            <div className="text-sm text-white/70">Crisis Archive</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-black px-8 py-4 font-semibold hover:bg-white/90 transition-all"
          >
            Commercial Capabilities
          </a>
          <a 
            href="#impact" 
            className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all"
          >
            Our Impact
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-white/50 mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
