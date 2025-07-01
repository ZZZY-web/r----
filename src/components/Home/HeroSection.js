import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            探索现代 <span className="text-indigo-600">Web 开发</span> 的精彩世界
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            掌握前端技术的核心技能，学习 HTML、CSS、JavaScript、React 和 Next.js 等现代 Web 开发技术。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/courses" className="btn-primary inline-flex items-center justify-center text-center">
              浏览课程内容
            </Link>
            <Link href="/exercises" className="btn-secondary inline-flex items-center justify-center text-center">
              查看项目练习
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}