import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sovereignty Logistics | Tier-1 Cold Chain Solutions',
  description: 'First Nations-owned logistics company dismantling the freight tax in remote communities. Commercial refrigerated freight services with deep social impact.',
  keywords: 'logistics, cold chain, freight, First Nations, food security, Cape York, Torres Strait',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
