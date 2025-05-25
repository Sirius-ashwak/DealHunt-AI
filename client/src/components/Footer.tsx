export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-bold mr-2">DealHunt</span>
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">AI</span>
            </div>
            <p className="mb-4">
              Your voice-powered smart reseller agent that finds the best deals for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-all">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-all">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-all">How It Works</a></li>
              <li><a href="#deals" className="hover:text-white transition-all">Deals</a></li>
              <li><a href="#" className="hover:text-white transition-all">Sign Up</a></li>
              <li><a href="#contact" className="hover:text-white transition-all">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-all">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-all">Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-all">Home & Kitchen</a></li>
              <li><a href="#" className="hover:text-white transition-all">Beauty & Personal Care</a></li>
              <li><a href="#" className="hover:text-white transition-all">Sports & Outdoors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-mail-line mr-2 mt-1"></i>
                <span>support@dealhunt.ai</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line mr-2 mt-1"></i>
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-1"></i>
                <span>123 Innovation Street, Tech Hub, Bengaluru 560001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} DealHunt AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
