import { Reseller } from '@/types';

interface DataVisualizationProps {
  deals: Reseller[];
}

export default function DataVisualization({ deals }: DataVisualizationProps) {
  // Calculate percentages for the metrics
  const maxPrice = Math.max(...deals.map(d => d.price));
  const minDelivery = Math.min(...deals.map(d => d.delivery_days));
  const maxRating = Math.max(...deals.map(d => d.rating));
  
  // Calculate metrics for each deal
  const priceMetric = 100 - ((deals[0]?.price / maxPrice) * 100);
  const deliveryMetric = 100 - ((minDelivery / deals[0]?.delivery_days) * 100);
  const ratingMetric = (deals[0]?.rating / 5) * 100;
  
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Visualize Your Options</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Compare all aspects of your deals with our interactive visualization tools
          </p>
        </div>
        
        <div className="glass rounded-xl p-8 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Deal Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-700 font-medium">Price</span>
                    <span className="text-neutral-500 text-sm">vs. Market Average</span>
                  </div>
                  <div className="bg-neutral-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${priceMetric}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span className="text-neutral-600">Save up to ₹1,500</span>
                    <span className="text-neutral-600">{Math.round(priceMetric)}% cheaper</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-700 font-medium">Delivery Speed</span>
                    <span className="text-neutral-500 text-sm">vs. Standard</span>
                  </div>
                  <div className="bg-neutral-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-secondary h-full" style={{ width: `${85}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span className="text-neutral-600">As fast as {minDelivery} day</span>
                    <span className="text-neutral-600">85% faster</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-neutral-700 font-medium">Seller Rating</span>
                    <span className="text-neutral-500 text-sm">vs. Category Avg</span>
                  </div>
                  <div className="bg-neutral-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-accent h-full" style={{ width: `${ratingMetric}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span className="text-neutral-600">{maxRating}/5.0 average</span>
                    <span className="text-neutral-600">Top 8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Price vs. Delivery Time</h3>
              
              <div className="bg-white rounded-lg p-4 h-64 flex items-center justify-center relative">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute left-0 bottom-0 w-full h-full flex flex-col justify-end">
                    {/* X and Y axis */}
                    <div className="border-t border-neutral-300 relative">
                      <div className="absolute -top-6 -left-2 text-xs text-neutral-500">₹0</div>
                      <div className="absolute -top-6 right-0 text-xs text-neutral-500">₹12,000</div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-0 h-full border-r border-neutral-300">
                    <div className="absolute -left-16 top-0 text-xs text-neutral-500">5 days</div>
                    <div className="absolute -left-16 bottom-0 text-xs text-neutral-500">0 days</div>
                  </div>
                  
                  {/* Data points */}
                  {deals.map((deal, index) => {
                    // Calculate position based on price and delivery time
                    const xPos = (deal.price / 12000) * 100; // 12000 is max price on chart
                    const yPos = (deal.delivery_days / 5) * 100; // 5 days is max on chart
                    
                    const colors = [
                      { bg: 'bg-primary/10', border: 'border-primary', label: 'SZ' },
                      { bg: 'bg-blue-100', border: 'border-blue-500', label: 'HH' },
                      { bg: 'bg-amber-100', border: 'border-amber-500', label: 'KE' }
                    ];
                    
                    return (
                      <div 
                        key={deal.id}
                        className={`absolute w-12 h-12 ${colors[index].bg} rounded-full flex items-center justify-center border-2 ${colors[index].border}`}
                        style={{ 
                          left: `${xPos}%`, 
                          bottom: `${100 - yPos}%` 
                        }}
                        title={deal.seller}
                      >
                        <span className="text-xs font-medium">{colors[index].label}</span>
                      </div>
                    );
                  })}
                  
                  {/* Chart labels */}
                  <div className="absolute right-4 top-4 flex flex-col gap-2">
                    {deals.map((deal, index) => {
                      const colors = [
                        'bg-primary',
                        'bg-blue-500',
                        'bg-amber-500'
                      ];
                      
                      return (
                        <div key={deal.id} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${colors[index]}`}></div>
                          <span className="text-xs text-neutral-700">{deal.seller}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 text-sm mt-4">
                This chart shows the relationship between price and delivery time. The ideal position is toward the bottom left (lower price, faster delivery).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
