import ShaderHero from './components/ShaderHero';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <main className="flex flex-col">
        <ShaderHero />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;