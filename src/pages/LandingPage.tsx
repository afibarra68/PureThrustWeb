import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/hero/HeroSection';

export function LandingPage() {
  return (
    <div className="page page--presale">
      <Header variant="landing" />
      <main className="page__main page__main--presale">
        <HeroSection />
      </main>
      <Footer variant="landing" />
    </div>
  );
}
