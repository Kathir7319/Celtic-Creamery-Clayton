import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveFlavorBoard from './components/LiveFlavorBoard';
import InstagramGrid from './components/InstagramGrid';
import ShopInfo from './components/ShopInfo';
import CakesAndPies from './components/CakesAndPies';
import Footer from './components/Footer';
import OrderSuccessModal from './components/OrderSuccessModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'cakes-catering'
  const [completedOrder, setCompletedOrder] = useState(null);
  const [preselectedFlavors, setPreselectedFlavors] = useState(null);

  // Scroll to Live Flavor Board on Home page
  const handleScrollToFlavors = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('flavors-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('flavors-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Switch to Page 2 (Cakes & Pies)
  const handleGoToCakes = () => {
    setActiveTab('cakes-catering');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When a user selects a flavor from flavor board to build a cake
  const handleSelectFlavorForCake = (flavor) => {
    setPreselectedFlavors({
      layer1: flavor.name,
      layer2: flavor.isWeeklyFeature ? 'Classic Celtic Vanilla' : 'Irish Cream Dream'
    });
    setActiveTab('cakes-catering');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCakeSuccess = (orderData) => {
    setCompletedOrder(orderData);
  };

  const handleCateringSuccess = (cateringData) => {
    setCompletedOrder(cateringData);
  };

  const handleFooterNav = (tab, targetSection) => {
    setActiveTab(tab);
    if (targetSection === 'flavors') {
      setTimeout(() => {
        const el = document.getElementById('flavors-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-stone-800">
      {/* Global Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            {/* Page 1: Hero */}
            <Hero
              onScrollToFlavors={handleScrollToFlavors}
              onGoToCakes={handleGoToCakes}
            />

            {/* Page 1: Live Flavor Board */}
            <LiveFlavorBoard
              onSelectForCake={handleSelectFlavorForCake}
            />

            {/* Page 1: Instagram Integration Block */}
            <InstagramGrid />

            {/* Page 1: Shop Logistics & Info */}
            <ShopInfo />
          </>
        ) : (
          /* Page 2: Custom Ice Cream Cakes, Pies & Event Catering */
          <CakesAndPies
            initialFlavors={preselectedFlavors}
            onSubmitCakeSuccess={handleOrderCakeSuccess}
            onSubmitCateringSuccess={handleCateringSuccess}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleFooterNav} />

      {/* Order & Catering Success / Confetti Confirmation Modal */}
      <OrderSuccessModal
        orderData={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </div>
  );
}
