import { useState, useEffect } from 'react';

export default function WakaTimeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/wakatime');
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
        } else {
          setStats(data.data);
        }
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
      <div className="bg-gray-700 rounded-lg p-4 min-w-[250px]">
        <p className="text-gray-300">加载编码统计中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-700 rounded-lg p-4 min-w-[250px]">
        <p className="text-red-300">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-700 rounded-lg p-4 min-w-[250px]">
      <h3 className="text-lg font-semibold mb-2">编码统计</h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-300">总时长:</span>
        <span className="text-yellow-300 font-mono">{stats.human_readable_total}</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-gray-300">日均:</span>
        <span className="text-green-300 font-mono">{stats.human_readable_daily_average}</span>
      </div>
    </div>
  );
}