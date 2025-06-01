import { useState } from "react";
import { BookOpen, PenLine, Smile, Flame, Info } from "lucide-react";

export default function InsightsBar() {
  const [showPopup, setShowPopup] = useState(false);

  const emotions = [
    { type: "Happy", percentage: 40 },
    { type: "Neutral", percentage: 35 },
    { type: "Sad", percentage: 15 },
    { type: "Angry", percentage: 10 },
  ];

  const streakCount = 7;

  const insights = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      value: 2,
      label: "Entries This Year",
    },
    {
      icon: <PenLine className="w-6 h-6 text-green-500" />,
      value: 108,
      label: "Words Written",
    },
    {
      icon: <Smile className="w-6 h-6 text-yellow-500" />,
      value: "Neutral",
      label: "Emotional Health",
      hasInfo: true,
    },
  ];

  return (
    <div className="relative flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl shadow-md w-full max-w-3xl mx-auto">
      {insights.map((insight, index) => (
        <div key={index} className="flex items-center gap-4 flex-1 relative">
          {insight.icon}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-800">
                {insight.value}
              </span>
              {insight.hasInfo && (
                <button
                  onClick={() => setShowPopup(!showPopup)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Info className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="text-xs text-gray-500">{insight.label}</div>
          </div>

          {/* Popup for the third block only */}
          {insight.hasInfo && showPopup && (
            <div className="absolute top-12 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-30 w-72 sm:w-80 bg-white border border-gray-200 rounded-xl shadow-xl p-4">
              <h3 className="text-md font-medium text-gray-700 mb-2">
                Emotion Breakdown
              </h3>
              <ul className="space-y-2">
                {emotions.map((emotion, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-sm text-gray-600"
                  >
                    <span>{emotion.type}</span>
                    <span>{emotion.percentage}%</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-4 text-sm font-medium text-orange-600">
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>Streak</span>
                </div>
                <span>{streakCount} days</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
