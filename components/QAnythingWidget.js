// src/components/QAnythingWidget.js
'use client';

import { useState, useEffect } from 'react';

const QAnythingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    
    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const responses = [
        `关于"${question}"，这是一个很好的问题。在课程中，我们通常会使用...`,
        `"${question}"的实现可以通过几种方式完成。最常见的方法是...`,
        `对于${question}，我建议参考课程第${Math.floor(Math.random() * 8) + 1}章的内容。具体来说...`
      ];
      
      setAnswer(responses[Math.floor(Math.random() * responses.length)]);
    } catch (err) {
      setAnswer('抱歉，处理您的请求时出错。请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  // 关闭问答窗口时清除内容
  useEffect(() => {
    if (!isOpen) {
      setQuestion('');
      setAnswer('');
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl w-80 h-[500px] flex flex-col mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-bold">课程问答助手</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="mb-4">
              <div className="flex items-start mb-3">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="text-white text-sm">Q</span>
                </div>
                <div className="bg-gray-200 rounded-lg p-3">
                  <p className="text-sm">你好！我是课程助手，有什么前端开发相关的问题可以问我？</p>
                </div>
              </div>
              
              {answer && (
                <div className="flex items-start mb-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-white text-sm">Q</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-sm">{answer}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t p-4 bg-white">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="输入您的问题..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm disabled:opacity-50"
                disabled={loading || !question.trim()}
              >
                {loading ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : '发送'}
              </button>
            </form>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105"
        aria-label={isOpen ? "关闭QAnything问答服务" : "打开QAnything问答服务"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default QAnythingWidget;