"use client";

import { TowerControl as GameController, Gamepad2, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { games } from "@/lib/games";

interface Game {
  id: number | string;
  title: string;
  url: string;
  thumb: string;
  description: string;
  category: string;
  instructions: string;
  tags: string;
  width: string;
  height: string;
}

const leaderboard = [
  { rank: 1, player: "PuzzleMaster", game: "Merge Cats: 2048", score: 4096 },
  { rank: 2, player: "RacingPro", game: "Car Parking Master", score: 9800 },
  { rank: 3, player: "SnipeKing", game: "Range Master Sniper", score: 15000 },
  { rank: 4, player: "PipeMaster", game: "Connect the Pipes", score: 2500 },
  { rank: 5, player: "SpeedRunner", game: "Runner Coaster Race", score: 12400 }
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/90 to-[#4ECDC4]/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1553481187-be93c21490a9?w=1600&auto=format&fit=crop&q=80')"
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-bounce">
            🎮 Fun Games Hub! 🎮
          </h1>
          <p className="text-2xl text-white mb-8 max-w-2xl mx-auto">
            Ready for an Amazing Adventure? Let`s Play! 🚀
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="#games"
              className="bg-[#FFD93D] text-black px-8 py-4 rounded-full font-bold hover:bg-[#FFD93D]/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Play Now! 🎯
            </Link>
            <Link 
              href="/games"
              className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF6B6B]/90 transition-all transform hover:scale-105 shadow-lg"
            >
              More Games! 🎲
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="flex justify-center mb-4">
                <GameController className="h-12 w-12 text-[#FF6B6B]" />
              </div>
              <h3 className="text-3xl font-bold text-[#FF6B6B]">100+</h3>
              <p className="text-purple-600 font-medium">Fun Games!</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-[#1864ab]" />
              </div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-muted-foreground">Players</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-8 w-8 text-[#1864ab]" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Achievements</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Gamepad2 className="h-8 w-8 text-[#1864ab]" />
              </div>
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-muted-foreground">Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          🌟 Amazing Games 🌟
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="game-card bg-white/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedGame(game)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.thumb} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{game.title}</h3>
                  <p className="text-white/250 text-sm truncate">{game.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#4ECDC4] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {game.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF6B6B]">
            🏆 Champions Board 🏆
          </h2>
          <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-purple-200">
                    <th className="text-left py-4 px-4 text-purple-600 text-xl">#</th>
                    <th className="text-left py-4 px-4 text-purple-600 text-xl">Player</th>
                    <th className="text-left py-4 px-4 text-purple-600 text-xl">Game</th>
                    <th className="text-right py-4 px-4 text-purple-600 text-xl">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr key={entry.rank} className="border-b border-purple-100 hover:bg-purple-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                          entry.rank <= 3 
                            ? 'bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] text-white' 
                            : 'bg-purple-100 text-purple-600'
                        } font-bold text-lg`}>
                          {entry.rank}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold text-purple-800">{entry.player}</td>
                      <td className="py-4 px-4 text-purple-600">{entry.game}</td>
                      <td className="py-4 px-4 text-right font-mono font-bold text-[#FF6B6B]">
                        {entry.score.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modal with iframe */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-[#FF6B6B]">{selectedGame.title}</h3>
              <button 
                onClick={() => setSelectedGame(null)}
                className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full hover:bg-[#FF6B6B]/90 transition"
              >
                Close ✖
              </button>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
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
  );
}