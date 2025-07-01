import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "💻",
      title: "实践导向",
      description: "通过实际项目和练习巩固所学知识，培养实际开发能力"
    },
    {
      icon: "🚀",
      title: "现代技术栈",
      description: "学习当前行业中最流行的前端框架和工具，如React、Next.js和Tailwind CSS"
    },
    {
      icon: "🔍",
      title: "深入浅出",
      description: "从基础概念到高级应用，循序渐进地掌握Web前端开发技术"
    },
    {
      icon: "🌐",
      title: "响应式设计",
      description: "学习如何创建在各种设备上都能完美展示的现代网站"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">课程特色</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-primary">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;