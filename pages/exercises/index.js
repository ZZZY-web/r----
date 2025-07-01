import Layout from '../../src/components/Layout';
import ExerciseCard from '../../src/app/ExerciseCard';

const exercises = [
  {
    id: 1,
    title: "HTML/CSS 响应式布局",
    description: "使用纯HTML和CSS创建响应式网页布局，适配不同设备尺寸",
    date: "2023-09-15",
    tags: ["HTML", "CSS", "响应式设计"]
  },
  {
    id: 2,
    title: "JavaScript 购物车",
    description: "实现一个交互式购物车，支持商品添加、删除和总价计算",
    date: "2023-10-05",
    tags: ["JavaScript", "DOM操作"]
  },
  {
    id: 3,
    title: "React Todo应用",
    description: "使用React构建的任务管理应用，支持任务增删改查和状态过滤",
    date: "2023-10-20",
    tags: ["React", "状态管理"]
  },
  {
    id: 4,
    title: "Next.js博客系统",
    description: "基于Next.js的静态博客生成器，支持Markdown内容渲染",
    date: "2023-11-10",
    tags: ["Next.js", "SSG", "Markdown"]
  },
  {
    id: 5,
    title: "API集成项目",
    description: "整合多个第三方API的数据展示面板",
    date: "2023-11-25",
    tags: ["API", "数据可视化"]
  },
  {
    id: 6,
    title: "动画效果实践",
    description: "使用CSS和JavaScript实现各种网页动画效果",
    date: "2023-12-05",
    tags: ["CSS动画", "JavaScript动画"]
  }
];

export default function ExercisesPage() {
  return (
    <Layout title="课程练习">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">课程练习项目汇总</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">本学期所有练习项目的详细展示，助力学习与复习</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </Layout>
  );
}