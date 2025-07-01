/** @type {import('next').NextConfig} */
const nextConfig = {
    // 启用React严格模式
    reactStrictMode: true,
    
    // 配置页面扩展名
    pageExtensions: ['js', 'jsx'],
    
    // 配置Webpack别名
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };
      return config;
    },
};

export default nextConfig;