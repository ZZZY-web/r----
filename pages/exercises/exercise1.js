import Layout from '../../../components/Layout';

export default function Exercise1() {
  return (
    <Layout title="HTML/CSS 响应式布局">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-8" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">HTML/CSS 响应式布局</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>2023-09-15</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <span>HTML, CSS</span>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">项目描述</h2>
          <p className="text-gray-700 mb-6">
            本练习项目使用纯HTML和CSS创建了一个响应式网页布局，能够适配从手机到桌面电脑的各种设备尺寸。
            项目实现了灵活的网格布局、媒体查询和响应式图片，确保在各种设备上都有良好的用户体验。
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">实现功能</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>使用CSS Grid和Flexbox创建灵活的布局结构</li>
            <li>通过媒体查询实现移动端优先的响应式设计</li>
            <li>响应式图片处理，根据设备加载不同尺寸图片</li>
            <li>导航栏在移动设备上的折叠效果</li>
            <li>使用相对单位确保元素尺寸的灵活性</li>
          </ul>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">学习收获</h3>
            <p className="text-blue-700">
              通过本项目，掌握了响应式设计的基本原则和实现技术，理解了移动优先的设计理念，
              学会了使用现代CSS布局技术创建灵活、自适应的网页界面。
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <p className="text-gray-600 text-center">桌面端布局效果</p>
          </div>
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <p className="text-gray-600 text-center">移动端布局效果</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}