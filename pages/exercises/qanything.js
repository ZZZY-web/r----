import { useState } from 'react';
import Layout from '../components/Layout';

export default function QAnythingPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);
    
    try {
      // 实际项目中这里会调用QAnything API
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟QAnything的响应
      const responses = [
        `QAnything: 关于"${question}"，我可以告诉你这是一个很好的学习主题。在实际项目中，我们会通过API调用获取实时响应。`,
        `QAnything: 您的问题"${question}"涉及多个方面。通常，我们会使用自然语言处理技术来分析问题并生成相关回答。`,
        `QAnything: 感谢您的提问！"${question}"是一个常见问题。在集成中，我们会将问题发送到QAnything服务并展示返回的答案。`
      ];
      
      setAnswer(responses[Math.floor(Math.random() * responses.length)]);
    } catch (error) {
      setAnswer('抱歉，处理您的请求时出错。请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="QAnything问答服务">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">QAnything问答服务</h1>
        <p className="text-gray-600 mb-8">集成QAnything大语言模型，解答编程和学习相关问题</p>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-start mb-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">关于QAnything集成</h2>
              <p className="text-gray-600 mt-2">
                本页面展示了如何将QAnything问答服务集成到Next.js应用中。在实际部署中，
                您可以通过iframe嵌入官方提供的问答页面，或使用API直接与QAnything服务交互。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">集成方式选择</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">iframe嵌入</span> - 简单快速，适合快速集成现有问答页面
                </li>
                <li>
                  <span className="font-medium">API调用</span> - 更灵活，可自定义UI和交互逻辑
                </li>
                <li>
                  <span className="font-medium">混合模式</span> - 结合两种方式，根据需求灵活选择
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">集成步骤</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>获取QAnything服务访问权限</li>
                <li>选择集成方式（iframe或API）</li>
                <li>在前端实现问答界面</li>
                <li>处理认证和安全问题</li>
                <li>测试和优化用户体验</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">问答演示</h2>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="输入您的问题..."
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium disabled:opacity-50"
                disabled={loading || !question.trim()}
              >
                {loading ? '处理中...' : '提问'}
              </button>
            </div>
          </form>
          
          {answer && (
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">QAnything回答:</p>
                  <p className="mt-2 text-gray-700">{answer}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold text-lg mb-3">iframe集成示例</h3>
            <div className="bg-gray-100 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
              <p className="text-gray-500">QAnything问答界面将在此处显示</p>
            </div>
            <p className="text-gray-600 mt-2 text-center">
              实际项目中，此处将嵌入QAnything官方提供的iframe
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}