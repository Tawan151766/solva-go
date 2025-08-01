'use client';

import BackButton from '../common/BackButton';

export default function PageHeader({ 
  title, 
  showBackButton = true, 
  onBackClick,
  className = '',
  children 
}) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <header className={`sticky top-0 z-10 bg-[#0d1117] border-b border-[#f0c674] ${className}`}>
      <div className="flex items-center justify-between p-4">
        {showBackButton ? (
          <BackButton onClick={handleBackClick} />
        ) : (
          <div className="w-10"></div>
        )}
        
        {title && (
          <h1 className="text-[#f0c674] text-xl font-bold text-center">
            {title}
          </h1>
        )}
        
        {children}
        
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
    </header>
  );
}
