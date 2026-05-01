'use client';
import { useState } from 'react';
import { categories } from '@/lib/data';

export default function PDFs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allPdfs = categories.flatMap(cat => [
    { title: `${cat.name} - Study Material (Part 1)`, category: cat.name, pages: 120, size: "5.2 MB", icon: cat.icon },
    { title: `${cat.name} - Important Questions`, category: cat.name, pages: 80, size: "3.1 MB", icon: cat.icon },
    { title: `${cat.name} - Previous Year Papers`, category: cat.name, pages: 150, size: "8.5 MB", icon: cat.icon },
    { title: `${cat.name} - Quick Revision Notes`, category: cat.name, pages: 60, size: "2.4 MB", icon: cat.icon },
  ]);

  const filteredPdfs = allPdfs.filter(pdf => {
    const matchesCategory = selectedCategory === 'all' || pdf.category === selectedCategory;
    const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">📄 Study Material (PDFs)</h1>
        <p className="text-gray-400">Download comprehensive study material for your exam preparation</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search PDFs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all appearance-none cursor-pointer"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      <p className="text-gray-400 text-sm">{filteredPdfs.length} PDFs available</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPdfs.map((pdf, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-5 border border-white/5 hover:border-red-500/30 transition-all group">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {pdf.icon}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm line-clamp-2">{pdf.title}</p>
                <p className="text-gray-500 text-xs mt-1">{pdf.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-xs mb-4">
              <span>📑 {pdf.pages} pages</span>
              <span>💾 {pdf.size}</span>
            </div>
            <button className="w-full py-2.5 bg-red-500/10 text-red-400 rounded-xl text-sm font-medium hover:bg-red-500/20 transition-all">
              📥 Download PDF
            </button>
          </div>
        ))}
      </div>

      {filteredPdfs.length === 0 && (
        <div className="text-center py-12">
          <span className="text-5xl mb-4 block">📄</span>
          <p className="text-gray-400">No PDFs found</p>
        </div>
      )}
    </div>
  );
}
