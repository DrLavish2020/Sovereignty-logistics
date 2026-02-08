'use client'

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Impact Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every commercial delivery subsidizes food sovereignty. Here's how we're dismantling the freight tax.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1 */}
          <div className="bg-white p-8 border-l-4 border-black">
            <div className="text-5xl font-bold text-black mb-2">2,450</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Tonnes Fresh Food Delivered</div>
            <div className="text-sm text-gray-600">
              Fresh produce, meat, and dairy delivered to remote communities at subsidized rates
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-8 border-l-4 border-black">
            <div className="text-5xl font-bold text-black mb-2">$1.8M</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Freight Tax Saved</div>
            <div className="text-sm text-gray-600">
              Estimated savings for communities by eliminating markup on essential goods
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-8 border-l-4 border-black">
            <div className="text-5xl font-bold text-black mb-2">47</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Local Apprentices Trained</div>
            <div className="text-sm text-gray-600">
              First Nations drivers and logistics operators currently in training
            </div>
          </div>
        </div>

        {/* Social ROI Breakdown */}
        <div className="bg-white p-12 mb-16">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">The Model: Commercial Revenue → Social Impact</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Commercial Operations
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                We secure high-value commercial freight contracts with FMCG companies and retailers. Tier-1 service standards generate sustainable revenue.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Premium cold-chain services
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reliable delivery schedules
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ESG partnership value
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Community Subsidy
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Revenue from commercial operations subsidizes affordable fresh food delivery to remote communities, eliminating the freight tax.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  At-cost community delivery
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Food Hub local production
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Employment & training
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Archive Teaser */}
        <div className="bg-black text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">30 Years of the Freight Tax</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Three decades of newsprint documenting the crisis. We've digitized the archive to show why owning the infrastructure matters.
          </p>
          <a href="#archive" className="inline-block border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all">
            View Archive Room
          </a>
        </div>
      </div>
    </section>
  )
}
