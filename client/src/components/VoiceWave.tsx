interface VoiceWaveProps {
  isActive: boolean;
}

export default function VoiceWave({ isActive }: VoiceWaveProps) {
  return (
    <div className={`voice-wave mb-6 ${isActive ? 'active' : ''}`}>
      {Array.from({ length: 8 }).map((_, index) => (
        <span 
          key={index} 
          style={{ 
            animationDelay: `${index * 0.1}s`,
            transform: isActive ? 'scaleY(1)' : 'scaleY(1)',
            animation: isActive ? 'wave 1.5s infinite ease-in-out' : 'none' 
          }}
        ></span>
      ))}
    </div>
  );
}
