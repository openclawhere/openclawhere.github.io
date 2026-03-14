import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ProductCategories from './sections/ProductCategories';
import FeaturedProducts from './sections/FeaturedProducts';
import ProductGuide from './sections/ProductGuide';
// import TechFeatures from './sections/TechFeatures';
import MarketTrends from './sections/MarketTrends';
// import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

// 首页：Hero + TechFeatures + Testimonials
function HomePage() {
  return (
    <>
      <Hero />
      {/* <TechFeatures /> */}
      {/* <Testimonials /> */}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/models" element={<ProductCategories />} />
          <Route path="/products" element={<FeaturedProducts />} />
          <Route path="/ecosystem" element={<ProductGuide />} />
          <Route path="/resources" element={<MarketTrends />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
