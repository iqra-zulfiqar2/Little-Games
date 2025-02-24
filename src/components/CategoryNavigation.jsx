import React from 'react'
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryNavigation = ({ paths = [] }) => {
    const navigate = useNavigate();

    return (
      <div className="flex items-center gap-2 text-sm mb-4">
        {paths.map((path, index) => (
          <React.Fragment key={path.name}>
            <span
              className={`${
                path.link ? 'text-purple-400 hover:text-purple-300 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => path.link && navigate(path.link)}
            >
              {path.name}
            </span>
            {index < paths.length - 1 && (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  // Category Tag Component
  const CategoryTag = ({ name, count, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
      >
        <span className="text-white">{name}</span>
        <span className="text-purple-400 ml-2">{count}</span>
      </div>
    );
  };
  
  // Updated GameStats Component
  const GameStats = ({ gameTitle = "Ragdoll Archers" }) => {
    const navigate = useNavigate();
    
    const stats = {
      developer: "Ericetto",
      rating: 9.2,
      votes: "1,265,130",
      released: "August 2023",
      lastUpdated: "July 2024",
      technology: "HTML5",
      platforms: "Browser (desktop, mobile, tablet), App Store(Android)"
    };
  
    const categories = [
      { name: "Casual", count: "1,067", path: "/games/casual" },
      { name: "2 Player", count: "204", path: "/games/2-player" },
      { name: "Arena", count: "193", path: "/games/arena" },
      { name: "Physics", count: "298", path: "/games/physics" },
      { name: "Co-op", count: "24", path: "/games/co-op" },
      { name: "Stickman", count: "175", path: "/games/stickman" },
      { name: "Archery", count: "40", path: "/games/archery" },
      { name: "Ragdoll", count: "45", path: "/games/ragdoll" },
      { name: "Arcade", count: "334", path: "/games/arcade" }
    ];
  
    const breadcrumbPaths = [
      { name: "Games", link: "/games" },
      { name: "Casual", link: "/games/casual" },
      { name: "Shooting", link: "/games/shooting" },
      { name: "Archery", link: null }
    ];
  
    const handleCategoryClick = (path) => {
      navigate(path);
    };
  
    return (
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <Breadcrumbs paths={breadcrumbPaths} />
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{gameTitle}</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
              <Share size={20} />
              Share
            </button>
            <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
              <Code size={20} />
              Embed
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-400">Developer:</p>
            <p className="text-purple-400">{stats.developer}</p>
          </div>
          <div>
            <p className="text-gray-400">Rating:</p>
            <p className="flex items-center gap-2">
              <span className="text-white font-bold">{stats.rating}</span>
              <span className="text-gray-400">({stats.votes} votes)</span>
            </p>
          </div>
          <div>
            <p className="text-gray-400">Released:</p>
            <p>{stats.released}</p>
          </div>
          <div>
            <p className="text-gray-400">Last Updated:</p>
            <p>{stats.lastUpdated}</p>
          </div>
          <div>
            <p className="text-gray-400">Technology:</p>
            <p>{stats.technology}</p>
          </div>
          <div>
            <p className="text-gray-400">Platforms:</p>
            <p>{stats.platforms}</p>
          </div>
        </div>
  
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <CategoryTag
              key={category.name}
              name={category.name}
              count={category.count}
              onClick={() => handleCategoryClick(category.path)}
            />
          ))}
        </div>
  
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <p className="text-gray-300 text-lg mb-4">Line up your shots carefully, and fire!</p>
          <p className="text-gray-300">
            Starting with the basic arrows and baseline stats, you will be faced with various enemies. 
            Some of these enemies are trickier than others to beat due to armor, position, and other factors. 
            Every now and then, you will face a giant enemy. This is like a mini-boss challenge that will 
            test your skills and upgraded abilities!
          </p>
        </div>
      </div>
    );
};

export default CategoryNavigation;