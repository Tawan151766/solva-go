'use client';

export default function BackButton({ onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`text-[#f0c674] hover:text-[#f0c674] transition-all duration-200 p-2 -ml-2 rounded-lg hover:bg-gradient-to-br hover:from-white/20 hover:to-white/5 hover:backdrop-blur-md hover:scale-110 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
      </svg>
    </button>
  );
}
