"use client";

const buFilters = ["All", "คลินิก", "อสังหา", "ร้านขายของ"];

export default function FilterBar({
  activeBu,
  onBuChange,
  activeTheme,
  onThemeChange,
}) {
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex gap-3">
        {buFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => onBuChange(filter)}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-4 transition-colors ${
              activeBu === filter
                ? "bg-[#f0c674] text-[#0d1117]"
                : "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md text-[#f0c674] hover:bg-gradient-to-br hover:from-white/30 hover:to-white/10"
            }`}
          >
            <p className="text-sm font-medium leading-normal">{filter}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
