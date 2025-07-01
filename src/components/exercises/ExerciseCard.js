// src/components/ExerciseCard.js
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ExerciseCard({ exercise }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Link href={`/exercises/exercise${exercise.id}`}>
      <a 
        className={`bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden transform h-full flex flex-col ${
          hovered ? 'shadow-xl -translate-y-1' : ''
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* 卡片顶部渐变区域 */}
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-5xl font-bold opacity-20">#{exercise.id}</div>
          </div>
          <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium shadow-md transition-all duration-300 transform hover:scale-105">
            {exercise.date}
          </div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
          </div>
        </div>

        {/* 卡片内容区域 */}
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-gray-600 mb-4 flex-grow">{exercise.description}</p>

          {/* 标签区域 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {exercise.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 hover:bg-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 底部操作区域 */}
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
              查看详情
            </button>
            <div className="flex items-center text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              预计: {exercise.duration || '4小时'}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}