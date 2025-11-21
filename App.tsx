import React, { useState } from 'react';
import { SLIDES } from './constants';
import SlideView from './components/SlideView';
import ChatInterface from './components/ChatInterface';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  const nextSlide = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-900 font-sans">
      
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">W</div>
            <span className="font-semibold text-lg hidden sm:block">WISC-V Insight</span>
        </div>
        <div className="text-sm text-gray-500 font-medium">
            Slide {currentSlideIndex + 1} of {SLIDES.length}
        </div>
        <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${isChatOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
        >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Ask AI Psychologist</span>
        </button>
      </header>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-200">
        <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
            <SlideView content={currentSlide} />
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 flex justify-between items-center z-30">
        <button 
            onClick={prevSlide} 
            disabled={currentSlideIndex === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-700"
        >
            <ChevronLeft size={20} />
            Previous
        </button>

        <div className="hidden md:flex gap-1">
            {SLIDES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlideIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300 hover:bg-indigo-400'}`}
                />
            ))}
        </div>

        <button 
            onClick={nextSlide} 
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg"
        >
            Next
            <ChevronRight size={20} />
        </button>
      </footer>

      {/* Chat Overlay */}
      <ChatInterface 
        contextTitle={currentSlide.title} 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

    </div>
  );
};

export default App;