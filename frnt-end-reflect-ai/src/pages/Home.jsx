import React, { useState } from "react";
import InsightsBar from "../components/InsightsBar";
import { Plus } from "lucide-react";
import MoodPopup from "./MoodPopup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex flex-col items-center h-screen gap-20">
      <InsightsBar />
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-start items-center gap-4">
          <h1 className="text-3xl">Whats on your mind ?</h1>
          <button
            onClick={() => setShowPopup(true)}
            className="w-full max-w-3xl mx-auto mt-4 px-6 py-4 text-white rounded transition-all duration-200 flex items-center justify-between gap-2 bg-gradient-to-r from-[#00B7FF] to-[#32c5ff] active:from-[#19beff] active:to-[#15bdff] cursor-pointer"
          >
            Add A New Entry
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
      <MoodPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;
