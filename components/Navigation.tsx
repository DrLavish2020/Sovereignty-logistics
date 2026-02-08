'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            SOVEREIGNTY LOGISTICS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#fleet" className="text-white/90 hover:text-white transition-colors">
              Fleet
            </Link>
            <Link href="#impact" className="text-white/90 hover:text-white transition-colors">
              Impact
            </Link>
            <Link href="#hub" className="text-white/90 hover:text-white transition-colors">
              Hub
            </Link>
            <Link href="#archive" className="text-white/90 hover:text-white transition-colors">
              Archive
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="bg-white text-black px-6 py-2 rounded-none font-semibold hover:bg-white/90 transition-colors"
            >
              Request Capability Statement
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="#fleet" className="block text-white/90 py-2">Fleet</Link>
            <Link href="#impact" className="block text-white/90 py-2">Impact</Link>
            <Link href="#hub" className="block text-white/90 py-2">Hub</Link>
            <Link href="#archive" className="block text-white/90 py-2">Archive</Link>
            <Link href="#contact" className="block bg-white text-black px-6 py-2 text-center font-semibold mt-4">
              Request Capability Statement
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
