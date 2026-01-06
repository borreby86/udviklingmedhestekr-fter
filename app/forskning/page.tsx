import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchSection from '@/components/ResearchSection';

export const metadata = {
  title: 'Forskning viser | Christina Borreby',
  description: 'Peer-reviewed forskning om hesteassisteret udvikling, emotionel intelligens og lederskab.',
};

export default function ForskningSide() {
  return (
    <>
      <Navigation />
      <main>
        <ResearchSection />
      </main>
      <Footer />
    </>
  );
}
