export default function StatsSection() {
    const stats = [
      { value: '50+', label: '课程模块' },
      { value: '100+', label: '实践练习' },
      { value: '10,000+', label: '学生参与' },
      { value: '24/7', label: '学习支持' }
    ];
  
    return (
      <div className="py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }