import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard"; // 导入练习卡片组件
import exercises from "../data/exercises.json"; // 导入练习数据

// 页面主组件，建议命名为 HomePage 或类似，以反映其用途
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100"> {/* 使用浅灰色背景以突出卡片 */}
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12"> {/* 增加垂直内边距 */}
        <header className="text-center mb-16"> {/* 增加头部区域的底部外边距 */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"> {/* 调整标题大小和底部外边距 */}
            《Web前端开发》课程作业展示
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"> {/* 调整段落文字大小和最大宽度 */}
            欢迎来到课程作业展示平台。这里汇集了各个阶段的学习成果与练习项目。
          </p>
        </header>



        {/* 课程练习列表区域 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-800 mb-10 text-center"> {/* 增加标题底部外边距 */}
            课程练习列表
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* 响应式网格布局 */}
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
              />
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-800 text-slate-300 text-center p-8 mt-auto"> {/* 增加内边距 */}
        <p>&copy; {new Date().getFullYear()} Web前端开发课程. 版权所有.</p>
        <p className="text-sm mt-1">专业设计，用心呈现</p>
      </footer>
    </div>
  );
}