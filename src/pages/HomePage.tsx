import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/hero/HeroSection';
import { InfrastructureDiagram } from '../components/infra/InfrastructureDiagram';
import { ProductSpotlight } from '../components/products/ProductSpotlight';
import { ProductsShowcase } from '../components/products/ProductsShowcase';
import { ReleaseTargets } from '../components/releases/ReleaseTargets';

export function HomePage() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <HeroSection />
        <ReleaseTargets />
        <ProductsShowcase />
        <ProductSpotlight productId="parking" />
        <ProductSpotlight productId="compras" />
        <ProductSpotlight productId="banking" />
        <ProductSpotlight productId="biometrics" />
        <ProductSpotlight productId="publish" />
        <ProductSpotlight productId="video" />
        <InfrastructureDiagram />
      </main>
      <Footer />
    </div>
  );
}
