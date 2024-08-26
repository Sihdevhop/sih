// components/Portfolio.js

import { useState } from 'react';

const categories = [
  'All',
  'Video',
  'Web Design',
  'Logo',
  'Graphic Design',
];

const works = [
  { id: 1, category: 'UI/UX', title: 'Chul urina', image: '/image-1.png' },
  { id: 2, category: 'Web Design', title: 'Aura Dione', image: '/image-2.jpg' },
  { id: 3, category: 'Logo', title: 'Chul urina', image: '/image-3.png' },
  { id: 4, category: 'Video', title: 'Chul urina', image: '/image-4.jfif' },
  { id: 5, category: 'UI/UX', title: 'Chul urina', image: '/image-5.webp' },
  { id: 6, category: 'Graphic Design', title: 'Chul urina', image: '/image-6.webp' },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWorks = selectedCategory === 'All' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button 
            key={category} 
            className={`${
              selectedCategory === category ? 'text-pink-500' : 'text-gray-600'
            } font-medium hover:text-pink-500 transition-colors`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map(work => (
          <div 
            key={work.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img 
              src={work.image} 
              alt={work.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{work.category}</p>
              <h3 className="text-lg font-bold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
