'use client'

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Road and sea. Refrigerated B-doubles and maritime barge. Tier-1 cold-chain infrastructure connecting Cape York and Torres Strait.
          </p>
        </div>

        {/* Road Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-black text-white px-4 py-2 text-sm font-semibold mb-4">
                ROAD
              </div>
              <h3 className="text-3xl font-bold mb-4">Refrigerated B-Doubles</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our fleet of branded refrigerated B-double trucks delivers fresh food and commercial freight across Cape York. Every delivery is a statement: infrastructure owned by First Nations, for First Nations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Full cold-chain compliance (0-4°C)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">GPS tracking and real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">First Nations driver training program</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Request Route Schedule
              </a>
            </div>
            <div className="bg-gray-100 aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Refrigerated B-Double Image</p>
                <p className="text-xs mt-1">Replace with your truck photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sea Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Maritime Barge Image</p>
                <p className="text-xs mt-1">Replace with your barge photo</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-black text-white px-4 py-2 text-sm font-semibold mb-4">
                SEA
              </div>
              <h3 className="text-3xl font-bold mb-4">Maritime Barge</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Connecting the Torres Strait Islands with refrigerated maritime logistics. Where commercial shipping ends, our barge begins—ensuring fresh food reaches every community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Refrigerated container capacity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Scheduled island-to-island routes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Maritime-certified operators</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
                Maritime Capabilities
              </a>
            </div>
          </div>
        </div>

        {/* Commercial CTA */}
        <div className="mt-20 bg-black text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Commercial Freight Partnerships</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            FMCG companies and retailers: partner with Tier-1 cold-chain logistics that delivers commercial excellence and social impact.
          </p>
          <a href="#contact" className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-white/90 transition-colors">
            Request Capability Statement
          </a>
        </div>
      </div>
    </section>
  )
}
