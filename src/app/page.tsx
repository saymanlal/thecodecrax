import { HeroSingle } from '@/components/sections/HeroSingle';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { ProofOfWorkSection } from '@/components/sections/ProofOfWorkSection';

export default function HomePage() {
  return (
    <>
      <HeroSingle />
      <HighlightsSection />
      <ProofOfWorkSection />
    </>
  );
}
