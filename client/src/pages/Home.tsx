import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VoiceInterface from "@/components/VoiceInterface";
import HowItWorks from "@/components/HowItWorks";
import DealComparison from "@/components/DealComparison";
import EmailPreview from "@/components/EmailPreview";
import DataVisualization from "@/components/DataVisualization";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { useState } from "react";
import { UserPreference, Reseller } from "@/types";
import { resellers } from "@/data/resellers";

export default function Home() {
  const [userPreference, setUserPreference] = useState<UserPreference>({
    product: "",
    budget: "",
    delivery: "",
  });
  
  const [processedDeals, setProcessedDeals] = useState<Reseller[]>([]);
  const [showDeals, setShowDeals] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  // Handle search completion
  const handleSearchComplete = (preference: UserPreference) => {
    setUserPreference(preference);
    setProcessedDeals(resellers);
    setShowDeals(true);
  };
  
  // Handle email submission
  const handleEmailSubmit = (email: string) => {
    // In a real app, this would trigger the email API
    setEmailSubmitted(true);
  };
  
  return (
    <div className="bg-gradient-to-tr from-neutral-100 to-neutral-200 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <VoiceInterface onSearchComplete={handleSearchComplete} />
        
        {showDeals && (
          <>
            <DealComparison 
              deals={processedDeals} 
              userPreference={userPreference} 
              onEmailRequest={handleEmailSubmit} 
            />
            <EmailPreview deals={processedDeals.slice(0, 3)} />
            <DataVisualization deals={processedDeals} />
          </>
        )}
        
        <HowItWorks />
        <CallToAction onSubmit={handleSearchComplete} />
      </main>
      <Footer />
    </div>
  );
}
