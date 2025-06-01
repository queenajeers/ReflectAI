import React, { useState } from "react";

const NewEntry = () => {
  const [input, setInput] = useState("");

  return (
    <div className="text-blue-300 p-8 font-light">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Prompt */}
        <div className="border-l-2 border-blue-400 pl-4 text-lg leading-relaxed">
          How do you typically process your emotions? Do you find it easy to
          acknowledge and express them, or do you tend to push them aside?
        </div>

        {/* Textarea */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          autoFocus={true}
          placeholder="Write here.."
          className="w-full bg-transparent resize-none text-blue-100 placeholder-gray-500 focus:outline-none border-blue-400 pl-4"
        />
      </div>
    </div>
  );
};

export default NewEntry;
