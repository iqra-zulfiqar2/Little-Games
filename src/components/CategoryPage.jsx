import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Sample game data (Replace with API data)
const games = [
  { id: 1, title: "Game A", category: "casual" },
  { id: 2, title: "Game B", category: "2-player" },
  { id: 3, title: "Game C", category: "arena" },
  { id: 4, title: "Game D", category: "casual" },
  { id: 5, title: "Game E", category: "2-player" },
];

const CategoryPage = () => {
  const { category } = useParams();

  // Filter games based on category
  const filteredGames = games.filter((game) => game.category === category);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Games</h1>
      {filteredGames.length > 0 ? (
        <ul className="space-y-2">
          {filteredGames.map((game) => (
            <li key={game.id} className="bg-gray-800 p-4 rounded-md">
              <Link to={`/game/${game.id}`} className="text-blue-400 hover:underline">
                {game.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No games found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;


<iframe src="http://localhost:5173/game/hills-of-steel" width="800" height="600"></iframe>