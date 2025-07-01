// src/pages/exercises/summary.js
import Layout from '@/components/Layout';
import ExerciseCard from '@/components/exercises/ExerciseCard';
import { exercises } from '@/data/exercises.json'; // 假设在jsconfig.json中配置了路径别名

export default function ExerciseSummaryPage() {
  return (
    <Layout title="Web前端技术课程练习作业汇总">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Web前端技术课程练习作业汇总</h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">以下是本学期所有的课程练习作业展示，涵盖HTML、CSS、JavaScript及现代框架的实战项目，助力全面提升前端技能。</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">进一步阅读推荐</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">React 官方文档</a> - 深入理解React核心概念和最佳实践。</li>
            <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Next.js 官方文档</a> - 掌握Next.js的服务端渲染和静态生成技术。</li>
            <li><a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Tailwind CSS 官方文档</a> - 学习实用的原子化CSS设计方法。</li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">CSS-Tricks Flexbox 指南</a> - 详解Flexbox布局技巧。</li>
            <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">MDN JavaScript 教程</a> - JavaScript语言基础与进阶。</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}