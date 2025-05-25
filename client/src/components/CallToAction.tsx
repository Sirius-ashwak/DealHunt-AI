import { useState } from 'react';
import { UserPreference } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface CallToActionProps {
  onSubmit: (preference: UserPreference) => void;
}

export default function CallToAction({ onSubmit }: CallToActionProps) {
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !product) {
      toast({
        title: "Missing information",
        description: "Please provide both email and product details.",
        variant: "destructive"
      });
      return;
    }
    
    // Parse product input to extract preferences
    const preference: UserPreference = {
      product: product.includes('Nike') ? 'Nike Sneakers' : product,
      budget: product.toLowerCase().includes('under') ? 'Under ₹10,000' : '',
      delivery: '2 days' // Default value
    };
    
    onSubmit(preference);
    
    toast({
      title: "Search started!",
      description: "We're finding the best deals for you.",
    });
    
    // Scroll to deals section
    document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="py-16 px-6 bg-primary/5" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Start Finding Your Perfect Deals Today</h2>
        <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
          Let our AI assistant do the hard work of contacting sellers and negotiating the best prices while you sit back and relax.
        </p>
        
        <div className="glass rounded-xl p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-neutral-800 mb-4">Get Started Now</h3>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1">What are you looking for?</label>
              <input 
                type="text" 
                id="product" 
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="E.g., Nike Air Max, iPhone 13, etc." 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-all flex items-center justify-center"
            >
              <i className="ri-mic-fill mr-2"></i> Start Voice Search
            </button>
            
            <p className="text-neutral-500 text-xs">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
