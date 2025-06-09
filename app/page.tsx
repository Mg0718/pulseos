import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-darkBackground text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sidebarHighlight to-wine-400 bg-clip-text text-transparent">
          PulseOS
        </h1>
        <p className="text-gray-300 mb-8">
          Next.js 15 migration complete! Ready for the new architecture.
        </p>
        <div className="bg-sidebarBackground/50 border border-sidebarHighlight/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Migration Status</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>✅ Next.js 15 with App Router</li>
            <li>✅ TailwindCSS configured</li>
            <li>✅ TypeScript setup</li>
            <li>✅ Framer Motion ready</li>
            <li>✅ Lucide React icons</li>
          </ul>
        </div>
      </div>
    </div>
  );
}