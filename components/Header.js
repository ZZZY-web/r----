import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <span className="text-xl font-bold text-gray-800">学习项目平台</span>
          </a>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">
                <a className="text-gray-600 hover:text-blue-600 font-medium">首页</a>
              </Link>
            </li>
            <li>
              <Link href="/exercises">
                <a className="text-gray-600 hover:text-blue-600 font-medium">课程练习</a>
              </Link>
            </li>
            <li>
              <Link href="/qanything">
                <a className="text-gray-600 hover:text-blue-600 font-medium">QAnything</a>
              </Link>
            </li>
          </ul>
        </nav>
        
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}