import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RadioGroup } from "@headlessui/react";

const moods = ["Happy", "Sad", "Anxious", "Excited", "Calm", "Angry"];

function MoodPopup({ isOpen, onClose }) {
  const [selected, setSelected] = useState(moods[0]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="bg-gray-800 bg-opacity-10 text-white rounded-2xl p-6 max-w-md w-full shadow-xl space-y-6">
        <h2 className="text-xl font-semibold">
          What describes your current mood correctly today?
        </h2>

        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-2">
            {moods.map((mood) => (
              <RadioGroup.Option
                as="div"
                key={mood}
                value={mood}
                className={({ active, checked }) =>
                  `cursor-pointer rounded-xl px-4 py-2 flex items-center justify-between border
                   ${
                     checked
                       ? "bg-blue-600 border-blue-400 text-white"
                       : "bg-gray-700 border-gray-600"
                   }
                   ${active ? "ring-2 ring-blue-400" : ""}`
                }
              >
                {({ checked }) => (
                  <>
                    <span>{mood}</span>
                    {checked && (
                      <span className="text-sm text-blue-200">✓</span>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        <div className="flex justify-end">
          <button
            onClick={() => {
              console.log("Selected Mood:", selected);
              onClose();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") || document.body
  );
}

export default MoodPopup;
