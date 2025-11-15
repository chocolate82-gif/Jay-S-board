import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Users from '@/components/sections/Users'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import TechStack from '@/components/sections/TechStack'
import Roadmap from '@/components/sections/Roadmap'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Users />
      <Features />
      <HowItWorks />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  )
}
