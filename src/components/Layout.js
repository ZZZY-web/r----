// src/components/Layout.js
"use client";

import Head from 'next/head';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import QAnythingWidget from './Layout/QAnythingWidget';

export default function Layout({ children, title = "学习项目展示平台" }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <Footer />
      
      <QAnythingWidget />
    </div>
  );
}