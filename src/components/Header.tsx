import Logo from './Logo';
import Button from './Button';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#pricing" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#docs" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Docs
          </a>
        </div>

        <Button variant="secondary">Login</Button>
      </nav>
    </header>
  );
}