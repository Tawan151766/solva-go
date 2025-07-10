'use client';

import { useState } from 'react';

const filters = ['All', 'Popular', 'New'];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-3 p-3 overflow-x-hidden">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl pl-4 pr-4 transition-colors ${
            activeFilter === filter
              ? 'bg-[#1d180c] text-white'
              : 'bg-[#f4f0e6] text-[#1d180c] hover:bg-[#e8e2d3]'
          }`}
        >
          <p className="text-sm font-medium leading-normal">{filter}</p>
        </button>
      ))}
    </div>
  );
}
