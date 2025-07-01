'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: '首页', href: '/' },
    { name: '课程内容', href: '/courses' },
    { name: '项目练习', href: '/exercises' },
    { name: '学习资源', href: '/resources' },
    { name: 'QAnything', href: '/qanything' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-xl">W</span>
          </div>
          <span className="text-xl font-bold text-gray-800">前端技术课程</span>
        </Link>
        
        {/* 桌面导航 */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`font-medium ${
                    pathname === item.href 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="btn-primary hidden md:block bg-blue-500 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded">
            开始学习
          </button>
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className={`block py-2 font-medium ${
                      pathname === item.href 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-cyan-500'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full mt-4">
              开始学习
            </button>
          </div>
        </div>
      )}
    </header>
  );
}