import { useState, useEffect, useCallback } from 'react';

interface UseVoiceRecognitionProps {
  onResult?: (transcript: string) => void;
  onEnd?: () => void;
}

export function useVoiceRecognition({ onResult, onEnd }: UseVoiceRecognitionProps = {}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // Mock voice recognition for demo purposes
  const startListening = useCallback(() => {
    setIsListening(true);
    setTranscript('');
    setError(null);
    
    // Simulate voice input after a delay
    setTimeout(() => {
      const mockTranscript = "I'm looking for Nike sneakers under ₹10,000 with delivery in 2 days";
      setTranscript(mockTranscript);
      if (onResult) onResult(mockTranscript);
      
      // Simulate end of speech recognition
      setTimeout(() => {
        setIsListening(false);
        if (onEnd) onEnd();
      }, 1000);
    }, 2000);
  }, [onResult, onEnd]);
  
  const stopListening = useCallback(() => {
    setIsListening(false);
  }, []);
  
  // In a real implementation, we would use the Web Speech API
  // or a third-party speech recognition service

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening
  };
}
