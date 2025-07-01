export default async function handler(req, res) {
    // 在实际项目中，这里会调用真正的WakaTime API
    // 使用环境变量 process.env.WAKATIME_API_KEY
    
    // 模拟API响应延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 模拟WakaTime API响应数据
    const mockData = {
      data: {
        human_readable_total: "256 hrs 34 mins",
        human_readable_daily_average: "3 hrs 12 mins",
        total_seconds: 923640,
        daily_average: 11520
      }
    };
    
    // 在实际项目中，错误处理可能如下：
    /*
    try {
      const apiKey = process.env.WAKATIME_API_KEY;
      if (!apiKey) {
        throw new Error('WakaTime API key not configured');
      }
      
      const response = await fetch('https://wakatime.com/api/v1/users/current/stats/all_time', {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`WakaTime API error: ${response.status}`);
      }
      
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error: error.message || 'Failed to fetch WakaTime data'
      });
    }
    */
    
    // 返回模拟数据
    res.status(200).json(mockData);
  }