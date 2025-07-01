import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Web前端技术课程作业汇总</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            探索现代Web开发的精彩世界，掌握前端技术的核心技能
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/exercises" className="btn btn-primary bg-white text-blue-700 hover:bg-blue-50 no-underline">
              浏览作业
            </Link>
            <Link href="/resources" className="btn btn-secondary bg-transparent border-2 border-white hover:bg-white/10 no-underline">
              学习资源
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;