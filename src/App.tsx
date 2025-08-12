import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { MessageScreen } from './components/MessageScreen';
import { ThankYouScreen } from './components/ThankYouScreen';
import { saveSurveyResponse } from './lib/supabase';

type Screen = 'start' | 'message' | 'thankyou';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = () => {
    setCurrentScreen('message');
  };

  const handleSubmit = async (selectedOptions: string[]) => {
    setIsSubmitting(true);
    
    try {
      const result = await saveSurveyResponse(selectedOptions);
      
      if (result.success) {
        setCurrentScreen('thankyou');
      } else {
        // Handle error - for now, still proceed to thank you screen
        console.error('Failed to save response:', result.error);
        setCurrentScreen('thankyou');
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Still proceed to thank you screen for better UX
      setCurrentScreen('thankyou');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRestart = () => {
    setCurrentScreen('start');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'message':
        return <MessageScreen onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      case 'thankyou':
        return <ThankYouScreen onRestart={handleRestart} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="font-sans">
      {renderScreen()}
    </div>
  );
}

export default App;