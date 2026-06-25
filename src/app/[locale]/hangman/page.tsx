'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
  'PROGRAMMING', 'DEVELOPER', 'COMPUTER', 'KEYBOARD', 'ALGORITHM',
  'DATABASE', 'NETWORK', 'SOFTWARE', 'HARDWARE', 'INTERNET',
  'BROWSER', 'WEBSITE', 'APPLICATION', 'FUNCTION', 'VARIABLE',
  'ARRAY', 'LOOP', 'CODE', 'DEBUG', 'COMPILE'
];

const HANGMAN_PARTS = [
  { id: 6, part: 'head' },
  { id: 5, part: 'body' },
  { id: 4, part: 'leftArm' },
  { id: 3, part: 'rightArm' },
  { id: 2, part: 'leftLeg' },
  { id: 1, part: 'rightLeg' },
];

const KEYBOARD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function HangmanFigure({ wrongGuesses }: { wrongGuesses: number }) {
  return (
    <svg width="200" height="250" viewBox="0 0 200 250" className="mx-auto">
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: wrongGuesses >= 6 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <circle cx="100" cy="35" r="25" fill="none" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <motion.g
        initial={{ pathLength: 0 }}
        animate={{ pathLength: wrongGuesses >= 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <line x1="100" y1="60" x2="100" y2="130" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: wrongGuesses >= 4 ? 1 : 0, opacity: wrongGuesses >= 4 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <line x1="100" y1="80" x2="60" y2="110" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: wrongGuesses >= 3 ? 1 : 0, opacity: wrongGuesses >= 3 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <line x1="100" y1="80" x2="140" y2="110" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: wrongGuesses >= 2 ? 1 : 0, opacity: wrongGuesses >= 2 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <line x1="100" y1="130" x2="70" y2="180" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: wrongGuesses >= 1 ? 1 : 0, opacity: wrongGuesses >= 1 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <line x1="100" y1="130" x2="130" y2="180" stroke="#3a86ff" strokeWidth="4" />
      </motion.g>

      <line x1="40" y1="230" x2="160" y2="230" stroke="#555" strokeWidth="4" />
      <line x1="60" y1="230" x2="60" y2="20" stroke="#555" strokeWidth="4" />
      <line x1="60" y1="20" x2="120" y2="20" stroke="#555" strokeWidth="4" />
      <line x1="120" y1="20" x2="120" y2="40" stroke="#555" strokeWidth="4" />
    </svg>
  );
}

export default function HangmanPage() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState({ wins: 0, losses: 0 });

  const wrongGuesses = guessedLetters.filter(l => !word.includes(l)).length;
  const isWinner = word && word.split('').every(l => guessedLetters.includes(l));
  const isLoser = wrongGuesses >= 6;

  useEffect(() => {
    if (isWinner) setGameState('won');
    else if (isLoser) setGameState('lost');
  }, [isWinner, isLoser]);

  const startNewGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
    setGameState('playing');
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleGuess = (letter: string) => {
    if (gameState !== 'playing' || guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
  };

  const handlePlayAgain = () => {
    if (gameState === 'won') setScore(s => ({ ...s, wins: s.wins + 1 }));
    if (gameState === 'lost') setScore(s => ({ ...s, losses: s.losses + 1 }));
    startNewGame();
  };

  const maskedWord = word.split('').map(l => guessedLetters.includes(l) ? l : '_').join(' ');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-2">Hangman</h1>
          <p className="text-[#6b7280]">Guess the word before the figure is complete</p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-[#fafafa] rounded-xl p-4 border border-[#f0f0f5]">
            <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-1">Wins</p>
            <p className="text-2xl font-bold text-[#3a86ff]">{score.wins}</p>
          </div>
          <div className="bg-[#fafafa] rounded-xl p-4 border border-[#f0f0f5]">
            <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-1">Losses</p>
            <p className="text-2xl font-bold text-[#ff6b6b]">{score.losses}</p>
          </div>
        </div>

        <motion.div
          key={word}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#fafafa] rounded-2xl p-8 mb-8 border border-[#f0f0f5]"
        >
          <HangmanFigure wrongGuesses={wrongGuesses} />

          <motion.div
            className="text-4xl font-bold tracking-[0.3em] text-center mt-8 text-[#1a1a2e]"
            layout
          >
            {maskedWord}
          </motion.div>

          <AnimatePresence>
            {gameState !== 'playing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center mt-6"
              >
                <p className={`text-xl font-bold mb-4 ${gameState === 'won' ? 'text-[#3a86ff]' : 'text-[#ff6b6b]'}`}>
                  {gameState === 'won' ? '🎉 You Won!' : `😢 Game Over! The word was: ${word}`}
                </p>
                <motion.button
                  onClick={handlePlayAgain}
                  className="px-6 py-3 bg-[#3a86ff] text-white font-semibold rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Play Again
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="grid grid-cols-9 gap-2 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {KEYBOARD.map(letter => {
            const isGuessed = guessedLetters.includes(letter);
            const isWrong = isGuessed && !word.includes(letter);
            const isCorrect = isGuessed && word.includes(letter);

            return (
              <motion.button
                key={letter}
                onClick={() => handleGuess(letter)}
                disabled={isGuessed || gameState !== 'playing'}
                className={`p-3 text-lg font-bold rounded-lg border-2 transition-colors ${
                  isCorrect
                    ? 'bg-[#dbeafe] border-[#3a86ff] text-[#3a86ff] cursor-default'
                    : isWrong
                    ? 'bg-[#fee2e2] border-[#ff6b6b] text-[#ff6b6b] cursor-default'
                    : 'bg-white border-[#e5e5ea] text-[#555] hover:bg-[#f0f0f5] hover:border-[#3a86ff]'
                }`}
                whileHover={!isGuessed && gameState === 'playing' ? { scale: 1.1 } : {}}
                whileTap={!isGuessed && gameState === 'playing' ? { scale: 0.95 } : {}}
              >
                {letter}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-[#aaa]">Wrong guesses: {wrongGuesses} / 6</p>
        </motion.div>
      </div>
    </div>
  );
}