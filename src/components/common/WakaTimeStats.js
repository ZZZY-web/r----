// src/components/WakaTimeStats.js
'use client';

import { useState, useEffect } from 'react';

export default function WakaTimeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 模拟API响应
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setStats({
          human_readable_total: "256 hrs 34 mins",
          human_readable_daily_average: "3 hrs 12 mins",
          languages: [
            { name: "JavaScript", percent: 65 },
            { name: "HTML/CSS", percent: 20 },
            { name: "Python", percent: 10 },
            { name: "其他", percent: 5 }
          ]
        });
      } catch (err) {
        setError('无法获取编码统计数据');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white w-full max-w-md">
        <div className="animate-pulse">
          <div className="h-6 bg-blue-400 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-blue-400 rounded w-full mb-2"></div>
          <div className="h-4 bg-blue-400 rounded w-5/6 mb-4"></div>
          <div className="h-6 bg-blue-400 rounded w-1/2 mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-6 text-white w-full max-w-md">
        <p className="text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">编码统计</h3>
        <div className="flex items-center text-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          WakaTime
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-blue-200">总时长:</span>
          <span className="font-bold text-xl">{stats.human_readable_total}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-200">日均:</span>
          <span className="font-bold">{stats.human_readable_daily_average}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-blue-200 text-sm mb-1">
          <span>语言分布</span>
          <span>百分比</span>
        </div>
        {stats.languages.map((lang, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>{lang.name}</span>
              <span>{lang.percent}%</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full" 
                style={{ width: `${lang.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}