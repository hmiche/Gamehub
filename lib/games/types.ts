export interface Game {
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
  highScore: number;
}

export interface LeaderboardEntry {
  rank: number;
  player: string;
  game: string;
  score: number;
}
