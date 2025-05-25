import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full py-4 px-6 glass sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary text-2xl font-bold mr-2">DealHunt</span>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">AI</span>
        </div>
        
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 left-0 md:top-0 flex-col md:flex-row w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 px-6 md:px-0 items-start md:items-center gap-4 md:gap-6 shadow-md md:shadow-none z-50 transition-all`}>
          <a href="#" className="text-neutral-700 hover:text-primary transition-all">Home</a>
          <a href="#how-it-works" className="text-neutral-700 hover:text-primary transition-all">How It Works</a>
          <a href="#deals" className="text-neutral-700 hover:text-primary transition-all">Deals</a>
          <a href="#contact" className="text-neutral-700 hover:text-primary transition-all">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-neutral-800 text-white px-4 py-2 rounded-full text-sm hover:bg-neutral-900 transition-all">
            Sign In
          </button>
          <button 
            className="md:hidden text-neutral-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
