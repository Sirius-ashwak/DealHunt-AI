import { useState, useEffect } from 'react';
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition';
import VoiceWave from './VoiceWave';
import { UserPreference } from '@/types';

interface VoiceInterfaceProps {
  onSearchComplete: (preference: UserPreference) => void;
}

export default function VoiceInterface({ onSearchComplete }: VoiceInterfaceProps) {
  const [status, setStatus] = useState('Tap the microphone to start');
  const [preference, setPreference] = useState<UserPreference>({
    product: '',
    budget: '',
    delivery: ''
  });
  
  const { isListening, transcript, startListening, stopListening } = useVoiceRecognition({
    onResult: (text) => {
      // Process the transcript to extract preferences
      parsePreferences(text);
    },
    onEnd: () => {
      setStatus('Found 3 deals matching your criteria!');
    }
  });
  
  const parsePreferences = (text: string) => {
    // Simple parsing logic - in a real app, this would be more sophisticated
    let product = '';
    let budget = '';
    let delivery = '';
    
    if (text.toLowerCase().includes('nike')) {
      product = 'Nike Sneakers';
    }
    
    if (text.toLowerCase().includes('10,000') || text.toLowerCase().includes('10k')) {
      budget = 'Under ₹10,000';
    }
    
    if (text.match(/\d+\s+day/)) {
      const match = text.match(/(\d+)\s+day/);
      if (match) {
        delivery = `${match[1]} days`;
      }
    }
    
    setPreference({
      product,
      budget,
      delivery
    });
  };
  
  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      setStatus('Processing stopped');
    } else {
      startListening();
      setStatus('Listening...');
    }
  };
  
  const handleSearch = () => {
    if (preference.product && preference.budget && preference.delivery) {
      onSearchComplete(preference);
    }
  };
  
  return (
    <section id="voice-interface" className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6 text-center">
              Voice Search Assistant
            </h2>
            
            <div className="flex flex-col items-center mb-8">
              <div 
                className={`w-20 h-20 rounded-full ${isListening ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-4 cursor-pointer hover:bg-primary/20 transition-all`}
                onClick={handleMicClick}
              >
                <i className="ri-mic-fill text-3xl text-primary"></i>
              </div>
              
              <VoiceWave isActive={isListening} />
              
              <p className="text-neutral-600 text-center mb-4">
                {status}
              </p>
              
              <div className="bg-white rounded-xl p-4 w-full max-w-xl shadow-sm mb-6 min-h-[5rem] flex items-center justify-center">
                <p className={`${transcript ? 'text-neutral-800' : 'text-neutral-500 italic'} text-center`}>
                  {transcript || "\"I'm looking for Nike sneakers under ₹10,000 with delivery in 2 days\""}
                </p>
              </div>
              
              <div className="flex gap-3">
                <button 
                  className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-300 transition-all"
                  onClick={() => {
                    stopListening();
                    setTranscript('');
                    setStatus('Tap the microphone to start');
                    setPreference({ product: '', budget: '', delivery: '' });
                  }}
                >
                  Cancel
                </button>
                <button 
                  className="bg-primary text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition-all"
                  onClick={handleSearch}
                >
                  Search Deals
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-neutral-700 mb-1">Product</h3>
                <p className="text-primary font-medium">
                  {preference.product || 'Not specified'}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-neutral-700 mb-1">Budget</h3>
                <p className="text-primary font-medium">
                  {preference.budget || 'Not specified'}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-neutral-700 mb-1">Delivery</h3>
                <p className="text-primary font-medium">
                  {preference.delivery || 'Not specified'}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-neutral-500 text-sm">
                Your voice data is processed securely and never stored
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
