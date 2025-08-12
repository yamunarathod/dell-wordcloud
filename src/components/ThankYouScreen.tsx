import React from 'react';

interface ThankYouScreenProps {
  onRestart: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("./thanks.png")', backgroundColor: '#81C7FA' }}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md text-center p-6">
          {/* Thank You Message */}


          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="group absolute left-1/2 bottom-40 transform -translate-x-1/2 bg-[#81C7FA] text-white font-semibold h-[50px] w-[330px] flex items-center justify-center rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-center font-semibold text-[#062357] text-2xl">
              <span>Submit Another Response</span> {/* Shortened the text */}
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};
