"use client";

import { useState } from "react";
import { games, categories } from "@/lib/games";
import { Game } from "@/lib/games/types";

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">All Games</h1>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search games..."
            className="w-full md:w-64 px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-[#1864ab]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === "All"
                  ? "bg-[#1864ab] text-white"
                  : "bg-card hover:bg-[#1864ab]/10"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? "bg-[#1864ab] text-white"
                    : "bg-card hover:bg-[#1864ab]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="game-card bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedGame(game as unknown as Game)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.thumb}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{game.title}</h3>
                  <p className="text-white/80 text-sm">
                    {game.description.length > 20
                      ? `${game.description.slice(0, 100)}...`
                      : game.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#1864ab]/10 text-[#1864ab] px-3 py-1 rounded-full text-sm">
                    {game.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{selectedGame.title}</h3>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  Close
                </button>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src={selectedGame.url}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}