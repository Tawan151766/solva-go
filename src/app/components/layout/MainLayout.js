import BottomNav from './BottomNav';

export default function MainLayout({ children, activeTab = '', showBottomNav = true }) {
  return (
    <div className="min-h-screen bg-[#1045a2] font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Conditional Bottom Navigation */}
      {showBottomNav && <BottomNav activeTab={activeTab} />}
    </div>
  );
}
