// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>学习项目展示平台</title>
        <meta name="description" content="展示课程练习与开发统计" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-heading-color mb-4">
            前端开发学习项目展示平台
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            本平台展示了本学期完成的HTML、CSS、JavaScript、React和Next.js课程练习，
            集成了WakaTime编码统计和QAnything问答服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/exercises" className="card hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-heading-color mb-2 text-center">课程练习</h3>
            <p className="text-gray-600 text-center">查看所有完成的课程练习项目</p>
          </Link>

          <Link href="/qanything" className="card hover:shadow-xl transition-shadow">
            <div className="text-green-600 mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-heading-color mb-2 text-center">QAnything问答</h3>
            <p className="text-gray-600 text-center">集成QAnything大语言模型服务</p>
          </Link>

          <div className="card">
            <div className="text-purple-600 mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-heading-color mb-2 text-center">编码统计</h3>
            <p className="text-gray-600 text-center">通过WakaTime API实时统计编码时长</p>
          </div>
        </div>

        <div className="card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-heading-color mb-4 text-center">项目技术栈</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Next.js', 'React', 'Tailwind CSS', 'WakaTime API', 'QAnything'].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}