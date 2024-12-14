import Navigation from '@/components/global/Navigation'
import Hero from '@/components/home/Hero'
import Domains from '@/components/home/Domains'
import ReSections from '@/components/home/ReSections'
import IntroSection from '@/components/home/IntroSection'
import StatementSection from '@/components/home/StatementSection'
import Contact from '@/components/home/Contact'
import EventsGallery from '@/components/home/EventsGallary'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Domains />
      <ReSections />
      <IntroSection />
      <EventsGallery/>
      <StatementSection />
      <Contact />
    </main>
  )
}