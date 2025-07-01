import React from 'react';

export default function HomePage() {
  return (
    <main>
      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web前端技术课程</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            探索现代Web开发的精彩世界，掌握前端技术的核心技能
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#exercises" className="btn btn-primary bg-white text-blue-700 hover:bg-blue-50">
              浏览作业
            </a>
            <a href="#resources" className="btn btn-secondary bg-transparent border-2 border-white hover:bg-white/10">
              学习资源
            </a>
          </div>
        </div>
      </section>
      
      {/* 其他内容区域 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">欢迎来到Web前端技术课程</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            这是一个使用 Next.js 和 Tailwind CSS 构建的示例页面，展示了现代前端开发的最佳实践。
          </p>
        </div>
      </section>
    </main>
  );
}