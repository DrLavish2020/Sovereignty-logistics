'use client'

import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'commercial',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your inquiry. We will be in touch shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Whether you're seeking Tier-1 cold-chain logistics or looking to support food sovereignty, we'd like to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Commercial Inquiries</h3>
                <p className="text-white/70">Freight partnerships, capability statements, route planning</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Philanthropic Partners</h3>
                <p className="text-white/70">Grant applications, impact reporting, strategic partnerships</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                <p className="text-white/70">Delivery schedules, training enrollment, employment opportunities</p>
              </div>
            </div>

            <div className="space-y-3 text-white/70">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@sovereigntylogistics.com.au
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +61 7 XXXX XXXX
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2">I'm interested in *</label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                >
                  <option value="commercial">Commercial freight partnership</option>
                  <option value="philanthropic">Philanthropic partnership</option>
                  <option value="training">Training & employment</option>
                  <option value="schedule">Community delivery schedule</option>
                  <option value="other">Other inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-4 font-semibold hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Archive Section */}
      <div id="archive" className="border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Archive Room</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Thirty years of newsprint documenting the food crisis. This is why we own the infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1990, 2000, 2010, 2020].map((decade) => (
              <div key={decade} className="bg-white/5 p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                <div className="text-3xl font-bold mb-2">{decade}s</div>
                <div className="text-sm text-white/70 mb-4">
                  Articles documenting the freight tax and food insecurity
                </div>
                <div className="text-white/50 text-xs">Click to explore →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2026 Sovereignty Logistics. First Nations-owned. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
