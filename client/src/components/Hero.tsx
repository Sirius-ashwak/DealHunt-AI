import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();
  
  const scrollToVoiceInterface = () => {
    const voiceInterface = document.getElementById('voice-interface');
    if (voiceInterface) {
      voiceInterface.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
              Your Voice-Powered <span className="text-primary">Smart Reseller</span> Agent
            </h1>
            <p className="text-neutral-700 text-lg mb-8">
              Tell us what you're looking for, and our AI assistant will contact multiple sellers, compare offers, and deliver the best deals right to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-all flex items-center justify-center"
                onClick={scrollToVoiceInterface}
              >
                <i className="ri-mic-fill mr-2"></i> Start Voice Search
              </button>
              <button 
                className="bg-white text-neutral-800 border border-neutral-300 px-8 py-4 rounded-xl font-medium hover:border-neutral-400 transition-all"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="Shopping assistant with headset" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover" 
            />
            <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <i className="ri-customer-service-2-fill"></i>
                </div>
                <p className="font-medium text-neutral-800">AI Assistant</p>
              </div>
              <p className="text-neutral-700 text-sm">"I found 3 sneaker deals under ₹10,000 with 2-day delivery!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
