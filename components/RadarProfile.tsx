import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';

interface RadarProfileProps {
  highlightIndexId: string;
}

const dataBase = [
  { subject: 'VCI', A: 100, fullMark: 150 },
  { subject: 'VSI', A: 100, fullMark: 150 },
  { subject: 'FRI', A: 100, fullMark: 150 },
  { subject: 'WMI', A: 100, fullMark: 150 },
  { subject: 'PSI', A: 100, fullMark: 150 },
];

const RadarProfile: React.FC<RadarProfileProps> = ({ highlightIndexId }) => {
  // Dynamically adjust the chart data to visually highlight the weakness or strength of the current index
  const chartData = dataBase.map(d => {
    let val = 100; // Average
    if (highlightIndexId === 'summary') {
        // Just a random jagged profile for summary
        if (d.subject === 'VCI') val = 115;
        if (d.subject === 'VSI') val = 90;
        if (d.subject === 'FRI') val = 105;
        if (d.subject === 'WMI') val = 85;
        if (d.subject === 'PSI') val = 80;
    } else {
        // Highlight the specific index discussed
        if (d.subject === highlightIndexId.toUpperCase()) val = 80; // Show as a weakness/area of focus
        else val = 100;
    }
    
    return { ...d, A: val };
  });

  return (
    <div className="h-64 w-full flex flex-col items-center justify-center">
      <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">
        {highlightIndexId === 'summary' ? 'Example Uneven Profile' : `Focus: ${highlightIndexId.toUpperCase()} Impact`}
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[60, 140]} tick={false} axisLine={false} />
          <Radar
            name="Student Profile"
            dataKey="A"
            stroke="#4F46E5"
            strokeWidth={2}
            fill="#6366F1"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarProfile;