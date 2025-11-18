import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SpecialOffers } from './components/SpecialOffers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategoryCards />
        <FeaturedProducts />
        <SpecialOffers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
