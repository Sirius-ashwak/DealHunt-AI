export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-6 bg-gradient-to-b from-white to-neutral-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">How DealHunt AI Works</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our AI assistant handles the tedious process of finding the best deals by talking to multiple sellers so you don't have to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mic-line text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Tell Us What You Want</h3>
            <p className="text-neutral-600">
              Use your voice to describe the product, your budget, and delivery preferences.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">AI Contacts Sellers</h3>
            <p className="text-neutral-600">
              Our AI assistant contacts multiple sellers to find available options that match your criteria.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-send-line text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Get Top Deals by Email</h3>
            <p className="text-neutral-600">
              Receive the top 3 offers directly to your email, ranked by price, delivery time, and seller ratings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
