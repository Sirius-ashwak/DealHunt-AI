import { Reseller } from '@/types';

interface EmailPreviewProps {
  deals: Reseller[];
}

export default function EmailPreview({ deals }: EmailPreviewProps) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-neutral-100 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Your Deal Summary</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Get a clean summary of your top deals sent directly to your inbox
          </p>
        </div>
        
        <div className="glass rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="border-b border-neutral-200 pb-4 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <i className="ri-mail-fill"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">Deal Summary from DealHunt AI</h3>
                  <p className="text-neutral-500 text-sm">to: you@example.com</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900">🎉 Top 3 Nike Sneaker Deals Just for You!</h4>
            </div>
            
            <div className="mb-6">
              <p className="text-neutral-700 mb-4">Hi there,</p>
              <p className="text-neutral-700 mb-4">
                Here are the top 3 sneaker deals we found based on your preferences:
              </p>
              
              <div className="border border-neutral-200 rounded-lg mb-4">
                {deals.map((deal, index) => (
                  <div key={deal.id} className={`${index < deals.length - 1 ? 'border-b border-neutral-200' : ''} p-4`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-bold">{index === 0 ? '1️⃣' : index === 1 ? '2️⃣' : '3️⃣'}</span>
                      <h5 className="font-semibold text-neutral-800">{deal.seller} – ₹{deal.price.toLocaleString()}</h5>
                    </div>
                    <p className="text-neutral-600 pl-7">{deal.delivery_days}-Day Delivery • {deal.rating} ⭐</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-700 font-medium">
                  <i className="ri-information-line mr-1"></i> Our Recommendation
                </p>
                <p className="text-neutral-700 mt-2">
                  Based on your preference for fast delivery under ₹10,000, we recommend <strong>{deals[0]?.seller || 'SneakerZone'}</strong> for the best balance of price and delivery time.
                </p>
              </div>
              
              <p className="text-neutral-700">
                Happy shopping!<br />
                – DealHunt AI 🤖
              </p>
            </div>
            
            <div className="text-center">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
