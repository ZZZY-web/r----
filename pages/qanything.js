import Layout from '../src/components/Layout';
import Script from 'next/script';

const QAnythingPage = () => {
  return (
    <Layout title="QAnything问答服务">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">QAnything问答服务</h1>
        <p className="text-gray-600 mb-8">集成QAnything大语言模型，解答编程和学习相关问题</p>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 rounded-xl p-4 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">关于QAnything集成</h2>
              <p className="text-gray-600 mt-2">
                本页面展示了如何将QAnything问答服务集成到Next.js应用中。我们使用官方提供的嵌入脚本，
                通过iframe方式无缝集成QAnything服务。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">集成优势</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>官方提供的标准化集成方案</li>
                <li>无需处理复杂的API认证</li>
                <li>保持与官方一致的UI体验</li>
                <li>自动接收功能更新和优化</li>
                <li>高度安全的沙盒环境</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">使用指南</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>点击页面右下角的QAnything按钮</li>
                <li>在弹出的窗口中输入您的问题</li>
                <li>QAnything将为您提供专业解答</li>
                <li>可随时最小化或关闭问答窗口</li>
                <li>支持多轮对话和上下文理解</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">问答演示</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-blue-800">示例问题:</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 mb-1">用户:</p>
                <p>如何在Next.js中安全地使用环境变量？</p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                <p className="font-medium text-blue-800 mb-1">QAnything:</p>
                <p>在Next.js中安全使用环境变量：</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>创建 <code className="bg-blue-200 px-1 rounded">.env.local</code> 文件</li>
                  <li>添加环境变量，前缀为 <code className="bg-blue-200 px-1 rounded">NEXT_PUBLIC_</code> 表示客户端可访问</li>
                  <li>在代码中通过 <code className="bg-blue-200 px-1 rounded">process.env.NEXT_PUBLIC_XXX</code> 访问</li>
                  <li>确保 <code className="bg-blue-200 px-1 rounded">.env.local</code> 在 <code className="bg-blue-200 px-1 rounded">.gitignore</code> 中</li>
                  <li>对于敏感密钥，使用服务器端环境变量</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold text-lg mb-3">iframe集成展示</h3>
            <div className="aspect-video bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center">
              <div className="text-center p-6 max-w-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">QAnything问答服务</h4>
                <p className="text-gray-600 mb-4">
                  在实际应用中，此处将嵌入QAnything官方提供的问答界面，
                  您可以通过右下角按钮访问完整功能。
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  打开QAnything
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 加载QAnything脚本 */}
      <Script
        src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
        id="qanything-iframe"
        strategy="afterInteractive"
        data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/3E5C3E196D884E76/share"
        data-default-open={false}
        data-drag={false}
        data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
        onLoad={() => {
          console.log('QAnything script loaded successfully');
        }}
        onError={(e) => {
          console.error('QAnything script failed to load', e);
        }}
      />
    </Layout>
  );
};

export default QAnythingPage;