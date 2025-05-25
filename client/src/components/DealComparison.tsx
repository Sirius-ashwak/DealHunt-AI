import { useState } from 'react';
import { Reseller, UserPreference, SortMethod } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface DealComparisonProps {
  deals: Reseller[];
  userPreference: UserPreference;
  onEmailRequest: (email: string) => void;
}

export default function DealComparison({ deals, userPreference, onEmailRequest }: DealComparisonProps) {
  const [sortMethod, setSortMethod] = useState<SortMethod>('best-match');
  const { toast } = useToast();
  
  const sortDeals = (method: SortMethod) => {
    setSortMethod(method);
  };
  
  const getSortedDeals = () => {
    switch (sortMethod) {
      case 'price-low-high':
        return [...deals].sort((a, b) => a.price - b.price);
      case 'fastest-delivery':
        return [...deals].sort((a, b) => a.delivery_days - b.delivery_days);
      case 'highest-rated':
        return [...deals].sort((a, b) => b.rating - a.rating);
      default: // best-match
        return deals;
    }
  };
  
  const handleEmailDeals = () => {
    toast({
      title: "Deals sent!",
      description: "We've sent the top deals to your email.",
    });
    onEmailRequest("user@example.com");
  };
  
  return (
    <section id="deals" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Compare Your Deals</h2>
        
        <div className="mb-8">
          <div className="glass p-6 rounded-xl shadow-md mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                <i className="ri-shopping-bag-line text-xl text-neutral-700"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-neutral-800">Your Search Results</h3>
                <p className="text-neutral-600 text-sm">
                  {userPreference.product} {userPreference.budget}, {userPreference.delivery}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {userPreference.product && (
                <span className="bg-neutral-200 text-neutral-700 text-xs px-3 py-1 rounded-full">
                  {userPreference.product}
                </span>
              )}
              {userPreference.budget && (
                <span className="bg-neutral-200 text-neutral-700 text-xs px-3 py-1 rounded-full">
                  {userPreference.budget}
                </span>
              )}
              {userPreference.delivery && (
                <span className="bg-neutral-200 text-neutral-700 text-xs px-3 py-1 rounded-full">
                  {userPreference.delivery}
                </span>
              )}
            </div>
            
            <div className="bg-neutral-100 p-3 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                <span className="text-neutral-600">Sort by:</span>
                <div className="flex gap-2 flex-wrap">
                  <button 
                    className={`${sortMethod === 'best-match' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-200'} px-3 py-1 rounded-full text-xs font-medium transition-all`}
                    onClick={() => sortDeals('best-match')}
                  >
                    Best Match
                  </button>
                  <button 
                    className={`${sortMethod === 'price-low-high' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-200'} px-3 py-1 rounded-full text-xs font-medium transition-all`}
                    onClick={() => sortDeals('price-low-high')}
                  >
                    Price: Low to High
                  </button>
                  <button 
                    className={`${sortMethod === 'fastest-delivery' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-200'} px-3 py-1 rounded-full text-xs font-medium transition-all`}
                    onClick={() => sortDeals('fastest-delivery')}
                  >
                    Fastest Delivery
                  </button>
                  <button 
                    className={`${sortMethod === 'highest-rated' ? 'bg-primary text-white' : 'bg-white text-neutral-700 hover:bg-neutral-200'} px-3 py-1 rounded-full text-xs font-medium transition-all`}
                    onClick={() => sortDeals('highest-rated')}
                  >
                    Highest Rated
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {getSortedDeals().map((deal) => (
            <div key={deal.id} className="glass rounded-xl overflow-hidden shadow-md mb-4 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 p-4 flex items-center justify-center bg-white">
                  <img 
                    src={deal.image} 
                    alt={deal.product} 
                    className="h-32 w-auto object-contain" 
                  />
                </div>
                
                <div className="md:w-3/4 p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-neutral-800">{deal.seller}</h3>
                        {deal.tags && (
                          <span className={`
                            ${deal.tags.type === 'top-pick' ? 'bg-green-100 text-green-600' : 
                              deal.tags.type === 'best-price' ? 'bg-blue-100 text-blue-600' : 
                              'bg-amber-100 text-amber-600'} 
                            text-xs px-2 py-0.5 rounded-full font-medium
                          `}>
                            {deal.tags.label}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-neutral-600 mb-2">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        <span>{deal.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{deal.reviews}+ reviews</span>
                      </div>
                      <p className="text-neutral-600 text-sm">{deal.product}</p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-neutral-900">₹{deal.price.toLocaleString()}</span>
                      <div className="flex items-center text-sm mt-1">
                        <i className="ri-truck-line mr-1 text-secondary"></i>
                        <span className={`${deal.delivery_days <= 2 ? 'text-secondary font-medium' : 'text-neutral-600'}`}>
                          {deal.delivery_days}-day delivery
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all">
                      View Deal
                    </button>
                    <button className="bg-white text-neutral-700 border border-neutral-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-all">
                      Contact Seller
                    </button>
                    <button className="bg-white text-neutral-700 border border-neutral-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-all md:ml-auto">
                      <i className="ri-heart-line mr-1"></i> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-all"
            onClick={handleEmailDeals}
          >
            Email Me These Deals
          </button>
        </div>
      </div>
    </section>
  );
}
