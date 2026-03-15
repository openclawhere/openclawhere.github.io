import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WarningGuide from './sections/WarningGuide';
import SelectionGuide from './sections/SelectionGuide';
import ConfigurationGuide from './sections/ConfigurationGuide';
import SkillGuide from './sections/SkillGuide';
import ModelsPage from './sections/ModelsPage';
import FeaturedProducts from './sections/FeaturedProducts';
import ProductGuide from './sections/ProductGuide';
// import TechFeatures from './sections/TechFeatures';
import MarketTrends from './sections/MarketTrends';
// import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

// 首页：Hero + 4 个 Guide 组件
function HomePage() {
  return (
    <>
      <Hero />
      <WarningGuide />
      <SelectionGuide />
      <ConfigurationGuide />
      <SkillGuide />
      {/* <TechFeatures />
      <Testimonials /> */}
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
          <Route path="/models" element={<ModelsPage />} />
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
