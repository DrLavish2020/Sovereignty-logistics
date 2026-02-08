'use client'

export default function Hub() {
  return (
    <section id="hub" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">The Food Sovereignty Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Land. More than logistics—local food production, training programs, and community employment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Hub Overview */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Growing Local Food Security</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Hub is a production facility where communities can process, package, and distribute locally-grown food. It's infrastructure owned by First Nations, creating jobs and building food sovereignty from the ground up.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-black">Commercial Kitchen</div>
                  <div className="text-sm text-gray-600">Food-grade processing and packaging facility</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-black">Cold Storage</div>
                  <div className="text-sm text-gray-600">Refrigerated warehouse for local produce</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-black">Distribution Center</div>
                  <div className="text-sm text-gray-600">Direct-to-community delivery coordination</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Hub Image Placeholder */}
          <div className="bg-gray-100 aspect-square flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Food Hub Facility Image</p>
              <p className="text-xs mt-1">Replace with facility photo</p>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="bg-gray-50 p-12 mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">Training & Employment</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border-t-4 border-black">
              <h4 className="text-xl font-bold mb-3">Driver Training</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Heavy vehicle licenses (HC/MC), cold-chain certification, and on-road experience with mentorship.
              </p>
              <div className="text-2xl font-bold text-black mb-2">12 weeks</div>
              <div className="text-sm text-gray-600 mb-4">Fully paid training</div>
              <a href="#contact" className="text-black font-semibold underline hover:no-underline text-sm">
                Apply now →
              </a>
            </div>

            <div className="bg-white p-6 border-t-4 border-black">
              <h4 className="text-xl font-bold mb-3">Logistics Operations</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Warehouse management, inventory systems, cold-chain monitoring, and freight coordination.
              </p>
              <div className="text-2xl font-bold text-black mb-2">8 weeks</div>
              <div className="text-sm text-gray-600 mb-4">Certificate III pathway</div>
              <a href="#contact" className="text-black font-semibold underline hover:no-underline text-sm">
                Apply now →
              </a>
            </div>

            <div className="bg-white p-6 border-t-4 border-black">
              <h4 className="text-xl font-bold mb-3">Food Production</h4>
              <p className="text-gray-700 mb-4 text-sm">
                Commercial kitchen skills, food safety, packaging, and local produce handling.
              </p>
              <div className="text-2xl font-bold text-black mb-2">6 weeks</div>
              <div className="text-sm text-gray-600 mb-4">Food safety certified</div>
              <a href="#contact" className="text-black font-semibold underline hover:no-underline text-sm">
                Apply now →
              </a>
            </div>
          </div>
        </div>

        {/* Current Jobs */}
        <div className="bg-black text-white p-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Current Opportunities</h3>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            We're hiring First Nations people across all roles. No experience required for entry positions—we provide full training.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-white/20 p-6">
              <div className="text-sm text-white/60 mb-2">DRIVER ROLE</div>
              <h4 className="text-xl font-bold mb-2">Heavy Vehicle Driver</h4>
              <p className="text-white/80 text-sm mb-4">Cape York routes. Training provided for qualified candidates.</p>
              <a href="#contact" className="text-white underline hover:no-underline font-semibold text-sm">View details →</a>
            </div>

            <div className="border border-white/20 p-6">
              <div className="text-sm text-white/60 mb-2">OPERATIONS ROLE</div>
              <h4 className="text-xl font-bold mb-2">Warehouse Coordinator</h4>
              <p className="text-white/80 text-sm mb-4">Food Hub facility. Cold-chain experience preferred but not required.</p>
              <a href="#contact" className="text-white underline hover:no-underline font-semibold text-sm">View details →</a>
            </div>

            <div className="border border-white/20 p-6">
              <div className="text-sm text-white/60 mb-2">MARITIME ROLE</div>
              <h4 className="text-xl font-bold mb-2">Barge Operator</h4>
              <p className="text-white/80 text-sm mb-4">Torres Strait routes. Maritime certification pathway available.</p>
              <a href="#contact" className="text-white underline hover:no-underline font-semibold text-sm">View details →</a>
            </div>

            <div className="border border-white/20 p-6">
              <div className="text-sm text-white/60 mb-2">PRODUCTION ROLE</div>
              <h4 className="text-xl font-bold mb-2">Food Production Assistant</h4>
              <p className="text-white/80 text-sm mb-4">Commercial kitchen. Food safety training provided.</p>
              <a href="#contact" className="text-white underline hover:no-underline font-semibold text-sm">View details →</a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="inline-block bg-white text-black px-8 py-4 font-semibold hover:bg-white/90 transition-colors">
              View All Opportunities
            </a>
          </div>
        </div>

        {/* Community Schedule */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Community Delivery Schedule</h3>
          <p className="text-gray-600 mb-6">
            Check when fresh food deliveries are coming to your community
          </p>
          <a href="#contact" className="inline-block border-2 border-black text-black px-8 py-3 font-semibold hover:bg-black hover:text-white transition-all">
            View This Week's Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
