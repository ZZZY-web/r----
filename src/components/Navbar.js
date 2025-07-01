'use client'; // <--- 添加这一行

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 左侧 Logo 和主要导航 */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-sky-600">
                OurApp
              </a>
            </div>
            {/* 桌面导航链接 */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  文档
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  组件
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  博客
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  社区
                </a>
              </div>
            </div>
          </div>

          {/* 右侧功能区 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 搜索框占位 */}
            <div className="relative">
              <input
                type="text"
                placeholder="搜索文档..."
                className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none focus:bg-white border border-transparent focus:border-sky-500"
              />
              {/* 搜索图标可以放在这里 */}
            </div>
            {/* 主题切换按钮占位 */}
            <button
              aria-label="Toggle theme"
              className="p-2 rounded-md text-gray-500 hover:text-sky-600 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              {/* 月亮/太阳图标 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <a
              href="#"
              className="text-gray-500 hover:text-sky-600"
              aria-label="GitHub"
            >
              {/* GitHub 图标 */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">打开主菜单</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: outline/menu */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: outline/x */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            文档
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            组件
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            博客
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-sky-100 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            社区
          </a>
        </div>
        {/* 移动端菜单中的额外功能 */}
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            {/* 搜索框占位 */}
            <input
              type="text"
              placeholder="搜索文档..."
              className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none focus:bg-white border border-transparent focus:border-sky-500"
            />
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-sky-600 hover:bg-sky-100"
            >
              主题切换 (占位)
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-sky-600 hover:bg-sky-100"
            >
              GitHub (占位)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}