export default function Header() {
  return (
    <header className="flex items-center bg-[#fcfbf8] p-4 pb-2 justify-between">
      <h2 className="text-[#1d180c] text-lg font-bold text-center flex-1 pl-12">SolvaGo</h2>
      <div className="flex w-12 items-center justify-end">
        <button className="flex h-12 items-center justify-center rounded-lg bg-transparent text-[#1d180c]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}