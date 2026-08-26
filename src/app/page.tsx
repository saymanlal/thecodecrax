import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Initiatives } from '@/components/sections/Initiatives';
import { FeaturedEvents } from '@/components/sections/FeaturedEvents';
import { Presence } from '@/components/sections/Presence';
import { JoinCTA } from '@/components/sections/JoinCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Initiatives />
      <FeaturedEvents />
      <Presence />
      <JoinCTA />
    </>
  );
}
