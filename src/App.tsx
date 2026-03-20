import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

export default function App() {
  return (
    <>
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
