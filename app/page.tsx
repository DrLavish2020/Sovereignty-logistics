import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Fleet from '@/components/Fleet'
import Impact from '@/components/Impact'
import Hub from '@/components/Hub'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Fleet />
      <Impact />
      <Hub />
      <Footer />
    </main>
  )
}
