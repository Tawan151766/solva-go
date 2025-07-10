'use client';

import { usePathname } from 'next/navigation';

export function useActiveTab() {
  const pathname = usePathname();
  
  // Map pathname to active tab key
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/testimonials')) return 'testimonials';
  if (pathname.startsWith('/contact')) return 'contact';
  
  return '';
}
