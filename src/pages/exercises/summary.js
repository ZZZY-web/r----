// src/pages/exercises/summary.js
import Head from 'next/head';
import Layout from '@/components/Layout';
import ExerciseCard from '@/components/ExerciseCard';
import WakaTimeStats from '@/components/WakaTimeStats';
import QAnythingWidget from '@/components/QAnythingWidget';
import { useState } from 'react';

// 练习数据
const exercises = [
  {
    id: 1,
    title: "HTML/CSS 响应式布局",
    description: "使用纯HTML和CSS创建响应式网页布局，实现媒体查询和弹性布局",
    tags: ["HTML", "CSS", "响应式"],
    date: "2025-03-15"
  },
  {
    id: 2,
    title: "JavaScript 购物车",
    description: "实现交互式购物车功能，包含商品添加、删除、数量修改和总价计算",
    tags: ["JavaScript", "DOM操作"],
    date: "2025-04-02"
  },
  {
    id: 3,
    title: "React Todo应用",
    description: "使用React构建任务管理应用，实现任务增删改查和状态管理",
    tags: ["React", "状态管理"],
    date: "2025-04-18"
  },
  {
    id: 4,
    title: "Next.js博客系统",
    description: "基于Next.js的静态博客生成器，支持Markdown内容渲染和SSG生成",
    tags: ["Next.js", "SSG"],
    date: "2025-05-05"
  },
  {
    id: 5,
    title: "Tailwind CSS 主题切换",
    description: "实现深色/浅色主题切换功能，使用Tailwind CSS配置和CSS变量",
    tags: ["Tailwind CSS", "主题切换"],
    date: "2025-05-22"
  },
  {
    id: 6,
    title: "API数据可视化",
    description: "使用Chart.js实现数据可视化，从API获取数据并展示为图表",
    tags: ["API", "数据可视化"],
    date: "2025-06-10"
  }
];

export default function ExercisesSummaryPage() {
  const [sortOption, setSortOption] = useState('最新');

  // 根据排序选项对练习数据进行排序
  const sortedExercises = [...exercises].sort((a, b) => {
    if (sortOption === '最新') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === '最旧') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  return (
    <Layout title="Web前端技术 - 课程练习汇总">
      <Head>
        <title>Web前端技术 - 课程练习汇总</title>
        <meta name="description" content="本学期所有Web前端技术课程的练习作业汇总" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        {/* 顶部横幅 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web前端技术课程练习汇总</h1>
            <p className="text-xl max-w-3xl mx-auto">
              探索现代Web开发的精彩世界，掌握前端技术的核心技能
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* 统计信息卡片 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">编码统计</h2>
                <p className="text-gray-600">跟踪你的学习进度和编码时长</p>
              </div>
              <WakaTimeStats />
            </div>
          </div>

          {/* 作业网格 */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">所有练习作业</h2>
              <div className="flex items-center">
                <span className="text-gray-600 mr-3">排序:</span>
                <select
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option>最新</option>
                  <option>最旧</option>
                  <option>标签</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </div>

          {/* QAnything服务区 */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">课程问答助手</h2>
                <p className="text-gray-600 mb-4">
                  遇到问题？使用QAnything获取即时帮助，解答编程和学习相关问题
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    在线
                  </div>
                  <span className="ml-2 text-gray-600">24/7 可用</span>
                </div>
              </div>

              <div className="md:w-2/3 md:pl-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">QAnything 助手</h3>
                      <p className="text-gray-600 text-sm">课程AI助手</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-100 rounded-lg p-4 max-w-md">
                      <p>你好！我是课程助手，有什么前端开发相关的问题可以问我？</p>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-gray-100 rounded-lg p-4 max-w-md">
                        <p>如何实现响应式网格布局？</p>
                      </div>
                    </div>

                    <div className="bg-blue-100 rounded-lg p-4 max-w-md">
                      <p>响应式网格布局可以使用CSS Grid实现。首先定义容器：<code className="bg-blue-200 px-1 rounded">display: grid;</code>，然后使用<code className="bg-blue-200 px-1 rounded">grid-template-columns</code>设置列...</p>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <input
                      type="text"
                      placeholder="输入你的问题..."
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium">
                      发送
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 技术栈展示 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">项目技术栈</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Next.js", color: "text-gray-800" },
                { name: "React", color: "text-blue-500" },
                { name: "Tailwind CSS", color: "text-teal-500" },
                { name: "WakaTime API", color: "text-purple-500" },
                { name: "QAnything", color: "text-indigo-600" },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-3 shadow-inner">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <span className={`font-bold text-lg ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QAnything悬浮按钮 */}
      <QAnythingWidget />
    </Layout>
  );
}