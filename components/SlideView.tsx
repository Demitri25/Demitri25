
import React, { useState } from 'react';
import { SlideContent } from '../types';
import { Brain, MessageSquare, Shapes, Zap, HardDrive, Activity, BookOpen, Lightbulb, UserCheck, AlertCircle, PlayCircle, PenTool, Layout, ClipboardCheck } from 'lucide-react';
import RadarProfile from './RadarProfile';
import { generateCaseStudy } from '../services/geminiService';

interface SlideViewProps {
  content: SlideContent;
}

const IconMap = {
  Brain,
  MessageSquare,
  Shapes,
  Zap,
  HardDrive,
  Activity,
  BookOpen
};

const SlideView: React.FC<SlideViewProps> = ({ content }) => {
  const IconComponent = IconMap[content.iconName];
  const [caseStudy, setCaseStudy] = useState<string | null>(null);
  const [loadingCase, setLoadingCase] = useState(false);

  const handleGenerateCase = async () => {
    setLoadingCase(true);
    const study = await generateCaseStudy(content.title);
    setCaseStudy(study);
    setLoadingCase(false);
  };

  return (
    <div className="max-w-6xl mx-auto w-full h-full flex flex-col md:flex-row gap-6 p-4 md:p-8 animate-fade-in">
      
      {/* Left Column: Core Info */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
        <div className="space-y-2">
          <div className={`inline-flex items-center justify-center p-3 rounded-xl ${content.color} text-white shadow-lg`}>
            <IconComponent size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {content.title}
          </h1>
          <h2 className="text-xl text-indigo-600 font-medium">
            {content.subtitle}
          </h2>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-indigo-200 pl-4">
          {content.description}
        </p>

        {/* Dynamic Case Study Generator */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconComponent size={100} className="text-gray-400" />
            </div>
            <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <UserCheck size={16} /> Example Student
                </h3>
                {caseStudy ? (
                    <div className="prose prose-sm text-gray-700 italic bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                        "{caseStudy}"
                    </div>
                ) : (
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-sm text-gray-600">Want to see a real-world example of how this looks in a classroom?</p>
                        <button 
                            onClick={handleGenerateCase}
                            disabled={loadingCase}
                            className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium border border-indigo-100 hover:border-indigo-300 shadow-sm transition-all"
                        >
                            {loadingCase ? <Activity className="animate-spin" size={16}/> : <PlayCircle size={16} />}
                            Generate Case Study
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Visualizer for Index */}
        {content.id !== 'intro' && (
             <div className="md:hidden block bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <RadarProfile highlightIndexId={content.id} />
             </div>
        )}
      </div>

      {/* Right Column: Impacts & Strategies */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        
        {content.id !== 'intro' && (
             <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 p-4 min-h-[200px]">
                <RadarProfile highlightIndexId={content.id} />
             </div>
        )}

        <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-red-100">
                <h3 className="text-red-600 font-semibold flex items-center gap-2 mb-3">
                    <AlertCircle size={20} />
                    Learning Impact
                </h3>
                <ul className="space-y-2">
                    {content.learningImpact.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-700 text-sm">
                            <span className="text-red-400 mt-1 min-w-[6px]">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-100">
                <h3 className="text-orange-600 font-semibold flex items-center gap-2 mb-3">
                    <Activity size={20} />
                    Behavioral Signs
                </h3>
                <ul className="space-y-2">
                    {content.behavioralImpact.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-700 text-sm">
                            <span className="text-orange-400 mt-1 min-w-[6px]">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                <h3 className="text-green-600 font-semibold flex items-center gap-2 mb-4">
                    <Lightbulb size={20} />
                    Evidence-Based Strategies
                </h3>
                
                <div className="space-y-5">
                    {/* Instructional */}
                    <div>
                         <h4 className="flex items-center gap-2 font-medium text-indigo-700 mb-2 text-sm uppercase tracking-wider">
                            <PenTool size={14} /> Instructional
                        </h4>
                        <ul className="space-y-2 bg-green-50/50 p-3 rounded-lg">
                            {content.strategies.instructional.map((item, i) => (
                                <li key={i} className="flex gap-2 text-gray-700 text-sm">
                                    <span className="text-green-500 mt-1 min-w-[6px]">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Environmental */}
                    <div>
                         <h4 className="flex items-center gap-2 font-medium text-indigo-700 mb-2 text-sm uppercase tracking-wider">
                            <Layout size={14} /> Environmental
                        </h4>
                        <ul className="space-y-2 bg-green-50/50 p-3 rounded-lg">
                            {content.strategies.environmental.map((item, i) => (
                                <li key={i} className="flex gap-2 text-gray-700 text-sm">
                                    <span className="text-green-500 mt-1 min-w-[6px]">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Assessment */}
                    <div>
                         <h4 className="flex items-center gap-2 font-medium text-indigo-700 mb-2 text-sm uppercase tracking-wider">
                            <ClipboardCheck size={14} /> Assessment
                        </h4>
                        <ul className="space-y-2 bg-green-50/50 p-3 rounded-lg">
                            {content.strategies.assessment.map((item, i) => (
                                <li key={i} className="flex gap-2 text-gray-700 text-sm">
                                    <span className="text-green-500 mt-1 min-w-[6px]">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SlideView;
