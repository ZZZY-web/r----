'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const QAnythingWidget = () => {
  useEffect(() => {
    return () => {
      const widget = document.getElementById('qanything-widget-container');
      if (widget) widget.remove();
    };
  }, []);

  return (
    <>
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
      
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          id="qanything-open-btn"
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition hover:scale-105"
          aria-label="打开QAnything问答服务"
          onClick={() => {
            const iframe = document.querySelector('#qanything-iframe');
            if (iframe && iframe.dataset.agentSrc) {
              window.open(iframe.dataset.agentSrc, '_blank');
            } else {
              console.error('QAnything agent source not found');
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default QAnythingWidget;