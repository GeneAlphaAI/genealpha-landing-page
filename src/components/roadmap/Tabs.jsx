import React from "react";

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex bg-white/10 rounded-full border-[0.5px] border-white/10 p-[5px] lg:-[10px] space-x-2">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`px-2 lg:px-5 py-2 rounded-full text-xs lg:text-sm font-medium transition-colors duration-300 ${
            activeTab === index
              ? "bg-white/10 text-dull-white border-[0.5px] border-white/10 "
              : "bg-transparent text-dull-white hover:text-white/80 transition-colors"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
