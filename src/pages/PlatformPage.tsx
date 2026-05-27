import { isProductVisible } from '../config/visibleProducts';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { PlatformHeroSection } from '../components/hero/PlatformHeroSection';
import { InfrastructureDiagram } from '../components/infra/InfrastructureDiagram';
import { ProductSpotlight } from '../components/products/ProductSpotlight';
import { ProductsShowcase } from '../components/products/ProductsShowcase';
import { ReleaseTargets } from '../components/releases/ReleaseTargets';

export function PlatformPage() {
  return (
    <div className="page page--platform">
      <Header variant="platform" />
      <main className="page__main">
        <PlatformHeroSection />
        <InfrastructureDiagram />
        <ReleaseTargets />
        <ProductsShowcase />
        <ProductSpotlight productId="parking" />
        {isProductVisible('compras') ? <ProductSpotlight productId="compras" /> : null}
        <ProductSpotlight productId="banking" />
        <ProductSpotlight productId="biometrics" />
        <ProductSpotlight productId="publish" />
        {isProductVisible('video') ? <ProductSpotlight productId="video" /> : null}
      </main>
      <Footer variant="platform" />
    </div>
  );
}
