'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================================
   CONFIGURACIÓN — EDITAR AQUÍ
   ============================================================ */

/**
 * HINT_MODE:
 *  - 'always' : La pista siempre se ve debajo de la palabra
 *  - 'button' : Aparece un botón "Show Hint" para mostrarla/ocultarla
 */
const HINT_MODE: 'always' | 'button' = 'always';

/** Pedir confirmación antes de revelar la respuesta */
const CONFIRM_BEFORE_REVEAL = true;

/* ============================================================
   BANCO DE PALABRAS — AGREGAR / EDITAR AQUÍ
   { word, hint, category, difficulty }

   Niveles de dificultad:
   - 'easy'   : palabras cortas y muy comunes (2-5 letras)
   - 'normal' : palabras medianas (6-7 letras)
   - 'hard'   : palabras largas o menos comunes (8+ letras)
   ============================================================ */
type Difficulty = 'easy' | 'normal' | 'hard';
type WordEntry = { word: string; hint: string; category: string; difficulty: Difficulty };

const WORD_BANK: WordEntry[] = [
  // Future "will"
  { word: 'WILL', hint: "Auxiliary used for future predictions: 'I ___ travel tomorrow.'", category: "Future 'will'", difficulty: 'easy' },
  { word: 'TOMORROW', hint: "Time reference often used with 'will': 'See you ___.'", category: "Future 'will'", difficulty: 'hard' },
  { word: 'PREDICT', hint: 'Verb meaning to say what you think will happen.', category: "Future 'will'", difficulty: 'normal' },
  { word: 'PROMISE', hint: "When you say you will definitely do something: 'I ___ to help.'", category: "Future 'will'", difficulty: 'normal' },

  // Future "going to"
  { word: 'GOING', hint: "Part of '___ to' for planned futures: 'I am ___ to study.'", category: "Future 'going to'", difficulty: 'easy' },
  { word: 'PLAN', hint: 'Noun/verb — when you intend to do something in the future.', category: "Future 'going to'", difficulty: 'easy' },
  { word: 'INTEND', hint: 'Verb meaning to have a plan or purpose.', category: "Future 'going to'", difficulty: 'normal' },

  // Verb to be
  { word: 'AM', hint: "Verb 'to be' for 'I': 'I ___ a student.'", category: 'Verb to be', difficulty: 'easy' },
  { word: 'IS', hint: "Verb 'to be' for he/she/it: 'She ___ happy.'", category: 'Verb to be', difficulty: 'easy' },
  { word: 'ARE', hint: "Verb 'to be' for you/we/they: 'They ___ here.'", category: 'Verb to be', difficulty: 'easy' },
  { word: 'WAS', hint: "Past of 'to be' for I/he/she/it: 'He ___ tired.'", category: 'Verb to be', difficulty: 'easy' },
  { word: 'WERE', hint: "Past of 'to be' for you/we/they: 'They ___ happy.'", category: 'Verb to be', difficulty: 'easy' },

  // Present continuous
  { word: 'PLAYING', hint: "Action happening right now: 'I am ___ a game.'", category: 'Present continuous', difficulty: 'normal' },
  { word: 'STUDYING', hint: "Action in progress: 'She is ___ for an exam.'", category: 'Present continuous', difficulty: 'hard' },
  { word: 'WORKING', hint: "Present action: 'They are ___ on a project.'", category: 'Present continuous', difficulty: 'normal' },
  { word: 'LISTENING', hint: "Using your ears now: 'I am ___ to music.'", category: 'Present continuous', difficulty: 'hard' },
  { word: 'WATCHING', hint: "Looking at something now: 'We are ___ a movie.'", category: 'Present continuous', difficulty: 'hard' },

  // Past simple
  { word: 'YESTERDAY', hint: "Past time word: 'I saw her ___.'", category: 'Past simple', difficulty: 'hard' },
  { word: 'BEFORE', hint: "Means 'earlier than': 'Call me ___ you leave.'", category: 'Past simple', difficulty: 'normal' },
  { word: 'LAST', hint: "Used with night/week/month: 'I went there ___ night.'", category: 'Past simple', difficulty: 'easy' },

  // Present simple
  { word: 'WORK', hint: "Daily routine verb: 'I ___ in technology.'", category: 'Present simple', difficulty: 'easy' },
  { word: 'LIVE', hint: "Where you reside: 'I ___ in Costa Rica.'", category: 'Present simple', difficulty: 'easy' },
  { word: 'LIKE', hint: "Verb to express enjoyment: 'I ___ programming.'", category: 'Present simple', difficulty: 'easy' },
  { word: 'SPEAK', hint: "Use your voice to communicate: 'I ___ Spanish.'", category: 'Present simple', difficulty: 'normal' },

  // Vocabulary
  { word: 'ENGINEER', hint: 'A person who designs systems or software.', category: 'Vocabulary', difficulty: 'hard' },
  { word: 'SOFTWARE', hint: 'Programs that run on a computer.', category: 'Vocabulary', difficulty: 'hard' },
  { word: 'KEYBOARD', hint: 'Device with keys used to type.', category: 'Vocabulary', difficulty: 'hard' },
  { word: 'COMPUTER', hint: 'Electronic device for processing data.', category: 'Vocabulary', difficulty: 'hard' },
  { word: 'INTERNET', hint: 'Global network connecting computers.', category: 'Vocabulary', difficulty: 'hard' },
  { word: 'MUSIC', hint: 'Something you listen to for enjoyment.', category: 'Vocabulary', difficulty: 'easy' },
  { word: 'HOBBY', hint: 'Something you enjoy doing in your free time.', category: 'Vocabulary', difficulty: 'easy' },
  { word: 'FRIEND', hint: 'A person you know well and trust.', category: 'Vocabulary', difficulty: 'normal' },
  { word: 'QUESTION', hint: 'You ask this when you want an answer.', category: 'Vocabulary', difficulty: 'hard' },
];

/** Configuración visual y de mecánica por dificultad */
const DIFFICULTY_CONFIG: Record<Difficulty, { label: string; emoji: string; color: string; description: string }> = {
  easy:   { label: 'Easy',   emoji: '🟢', color: '#22C55E', description: 'Short, common words' },
  normal: { label: 'Normal', emoji: '🟡', color: '#F59E0B', description: 'Medium difficulty' },
  hard:   { label: 'Hard',   emoji: '🔴', color: '#EF4444', description: 'Long or uncommon words' },
};

const MAX_WRONG = 6;

/* ============================================================
   HANGMAN FIGURE con gradiente de marca
   ============================================================ */
function HangmanFigure({ wrongGuesses }: { wrongGuesses: number }) {
  const part = (idx: number) => (wrongGuesses >= idx ? 1 : 0);
  return (
    <svg width="220" height="260" viewBox="0 0 200 250" className="mx-auto drop-shadow-sm">
      <defs>
        <linearGradient id="hangman-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3A86FF" />
          <stop offset="100%" stopColor="#7C5CFC" />
        </linearGradient>
        <linearGradient id="gallows-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Cabeza */}
      <motion.circle
        cx="100" cy="35" r="25"
        fill="none" stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: part(6), scale: part(6) ? 1 : 0.6 }}
        transition={{ duration: 0.35, type: 'spring' }}
      />
      {/* Cuerpo */}
      <motion.line
        x1="100" y1="60" x2="100" y2="130"
        stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: part(5) }} transition={{ duration: 0.35 }}
      />
      {/* Brazo izq */}
      <motion.line
        x1="100" y1="80" x2="60" y2="110"
        stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: part(4), opacity: part(4) }}
        transition={{ duration: 0.35 }}
      />
      {/* Brazo der */}
      <motion.line
        x1="100" y1="80" x2="140" y2="110"
        stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: part(3), opacity: part(3) }}
        transition={{ duration: 0.35 }}
      />
      {/* Pierna izq */}
      <motion.line
        x1="100" y1="130" x2="70" y2="180"
        stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: part(2), opacity: part(2) }}
        transition={{ duration: 0.35 }}
      />
      {/* Pierna der */}
      <motion.line
        x1="100" y1="130" x2="130" y2="180"
        stroke="url(#hangman-grad)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: part(1), opacity: part(1) }}
        transition={{ duration: 0.35 }}
      />

      {/* Horca */}
      <line x1="40" y1="230" x2="160" y2="230" stroke="url(#gallows-grad)" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="230" x2="60" y2="20" stroke="url(#gallows-grad)" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="20" x2="120" y2="20" stroke="url(#gallows-grad)" strokeWidth="5" strokeLinecap="round" />
      <line x1="120" y1="20" x2="120" y2="40" stroke="url(#gallows-grad)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function HangmanPage() {
  const [entry, setEntry] = useState<WordEntry | null>(null);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState({ wins: 0, losses: 0, streak: 0 });
  const [surrendered, setSurrendered] = useState(false);
  const [hintShown, setHintShown] = useState(HINT_MODE === 'always');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');

  const word = entry?.word ?? '';
  const wrongGuesses = useMemo(
    () => guessedLetters.filter((l) => !word.includes(l)).length,
    [guessedLetters, word]
  );
  const isWinner = !!word && word.split('').every((l) => l === ' ' || guessedLetters.includes(l));
  const isLoser = wrongGuesses >= MAX_WRONG;
  const livesLeft = MAX_WRONG - wrongGuesses;

  useEffect(() => {
    if (gameState !== 'playing') return;
    if (isWinner) {
      setGameState('won');
      setScore((s) => ({ wins: s.wins + 1, losses: s.losses, streak: s.streak + 1 }));
    } else if (isLoser) {
      setGameState('lost');
      setScore((s) => ({ wins: s.wins, losses: s.losses + 1, streak: 0 }));
    }
  }, [isWinner, isLoser, gameState]);

  const startNewGame = (forcedDifficulty?: Difficulty) => {
    const useDiff = forcedDifficulty ?? difficulty;
    // Filtra por dificultad seleccionada; si no hay palabras, cae al banco completo
    const pool = WORD_BANK.filter((w) => w.difficulty === useDiff);
    const source = pool.length > 0 ? pool : WORD_BANK;
    const next = source[Math.floor(Math.random() * source.length)];
    setEntry(next);
    setGuessedLetters([]);
    setGameState('playing');
    setSurrendered(false);
    setHintShown(HINT_MODE === 'always');
  };

  /** Cambia dificultad y arranca una nueva ronda con el nuevo nivel */
  const handleDifficultyChange = (d: Difficulty) => {
    if (d === difficulty) return;
    setDifficulty(d);
    startNewGame(d);
  };

  useEffect(() => {
    startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Soporte de teclado físico
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      if (/^[A-Z]$/.test(k)) handleGuess(k);
      if (e.key === 'Enter' && gameState !== 'playing') startNewGame();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, guessedLetters, word]);

  const handleGuess = (letter: string) => {
    if (gameState !== 'playing' || guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
  };

  const handleShowAnswer = () => {
    if (gameState !== 'playing') return;
    if (CONFIRM_BEFORE_REVEAL) {
      const ok = window.confirm('Are you sure you want to reveal the answer? This will count as a loss.');
      if (!ok) return;
    }
    setSurrendered(true);
    setGameState('lost');
    setScore((s) => ({ wins: s.wins, losses: s.losses + 1, streak: 0 }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ============= MESH GRADIENT BLOBS DE FONDO ============= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #3A86FF 0%, transparent 70%)' }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 -right-32 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #7C5CFC 0%, transparent 70%)' }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle at center, #22B8CF 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* ============= HEADER ============= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <span className="eyebrow mb-4">✦ English Practice</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
            <span className="gradient-text">Hangman</span>
          </h1>
          <p className="text-[var(--ink-soft)] max-w-md mx-auto">
            Guess the word before the figure is complete. Each round has a hint in English.
          </p>
        </motion.div>

        {/* ============= DIFFICULTY SELECTOR ============= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex flex-col items-center mb-8"
        >
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] mb-3 font-semibold">
            Difficulty
          </p>
          <div
            className="relative inline-flex p-1.5 rounded-2xl bg-white border border-[var(--border)]"
            style={{ boxShadow: 'var(--shadow-sm)' }}
            role="tablist"
            aria-label="Select difficulty"
          >
            {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((d) => {
              const cfg = DIFFICULTY_CONFIG[d];
              const isActive = difficulty === d;
              return (
                <button
                  key={d}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleDifficultyChange(d)}
                  className="relative z-10 px-4 md:px-6 py-2 rounded-xl text-sm font-semibold transition-colors"
                  style={{
                    color: isActive ? '#fff' : 'var(--ink-soft)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="difficulty-pill"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.color}dd 100%)`,
                        boxShadow: `0 8px 22px -8px ${cfg.color}88`,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    <span className="text-xs">{cfg.emoji}</span>
                    {cfg.label}
                  </span>
                </button>
              );
            })}
          </div>
          <motion.p
            key={difficulty}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono text-[11px] text-[var(--muted)] mt-2"
          >
            {DIFFICULTY_CONFIG[difficulty].description}
          </motion.p>
        </motion.div>

        {/* ============= SCOREBOARD ============= */}
        <motion.div
          className="flex justify-center gap-4 md:gap-6 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ScoreCard label="Wins" value={score.wins} color="#3A86FF" />
          <ScoreCard label="Losses" value={score.losses} color="#EF4444" />
          <ScoreCard label="Streak" value={score.streak} color="#22B8CF" icon="🔥" />
        </motion.div>

        {/* ============= MAIN CARD ============= */}
        <motion.div
          key={word}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="panel-soft p-8 md:p-10 mb-8 relative overflow-hidden"
        >
          {/* Sheen sutil */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top, rgba(58, 134, 255, 0.06), transparent 60%)' }}
          />

          <div className="relative">
            {/* Category badge + lives */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              {entry && (
                <motion.span
                  key={entry.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="chip chip-brand mono"
                >
                  {entry.category}
                </motion.span>
              )}

              {/* Vidas como corazones */}
              <div className="flex items-center gap-1.5" aria-label={`${livesLeft} lives remaining`}>
                <span className="mono text-xs text-[var(--muted)] mr-2 uppercase tracking-wider">Lives</span>
                {Array.from({ length: MAX_WRONG }).map((_, i) => {
                  const lost = i >= livesLeft;
                  return (
                    <motion.span
                      key={i}
                      initial={false}
                      animate={{ scale: lost ? 0.85 : 1, opacity: lost ? 0.25 : 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-lg"
                      style={{ filter: lost ? 'grayscale(1)' : 'none' }}
                    >
                      ❤️
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* Hangman figure */}
            <HangmanFigure wrongGuesses={wrongGuesses} />

            {/* Word display */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 mb-2">
              {word.split('').map((char, i) => {
                if (char === ' ') return <span key={i} className="w-4 md:w-6" />;
                const revealed = gameState !== 'playing' || guessedLetters.includes(char);
                const isAnswerReveal = surrendered && !guessedLetters.includes(char);
                return (
                  <motion.div
                    key={i}
                    layout
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="relative w-10 h-14 md:w-12 md:h-16 flex items-center justify-center"
                  >
                    <span
                      className="absolute bottom-0 left-1 right-1 h-[3px] rounded-full"
                      style={{
                        background: revealed
                          ? isAnswerReveal
                            ? 'linear-gradient(90deg, #EF4444, #F97316)'
                            : 'var(--grad-brand)'
                          : 'var(--border)',
                      }}
                    />
                    <AnimatePresence mode="wait">
                      {revealed && (
                        <motion.span
                          key={`${i}-${char}`}
                          initial={{ scale: 0.4, opacity: 0, y: 8 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          exit={{ scale: 0.4, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                          className="text-3xl md:text-4xl font-extrabold tracking-tight"
                          style={{
                            color: isAnswerReveal ? '#EF4444' : 'var(--ink)',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          {char}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Hint section */}
            {entry && (
              <div className="mt-8 max-w-xl mx-auto">
                {HINT_MODE === 'button' && gameState === 'playing' && (
                  <div className="flex justify-center mb-3">
                    <motion.button
                      onClick={() => setHintShown((v) => !v)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-ghost mono text-xs"
                    >
                      {hintShown ? '🙈 Hide Hint' : '💡 Show Hint'}
                    </motion.button>
                  </div>
                )}

                <AnimatePresence>
                  {hintShown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="glass rounded-2xl px-5 py-4 border-l-[3px]"
                      style={{ borderLeftColor: '#3A86FF', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-base"
                          style={{ background: 'var(--grad-brand)', boxShadow: 'var(--shadow-glow)' }}
                        >
                          💡
                        </div>
                        <div>
                          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand)] mb-1 font-semibold">
                            Hint
                          </p>
                          <p className="text-[var(--ink)] italic leading-relaxed">{entry.hint}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Give up button */}
            {gameState === 'playing' && (
              <div className="flex justify-center mt-7">
                <motion.button
                  onClick={handleShowAnswer}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white border border-[#FFD0D0] text-[#EF4444] hover:bg-[#FFF5F5] hover:border-[#EF4444] transition-all"
                  style={{ boxShadow: '0 4px 12px -4px rgba(239, 68, 68, 0.2)' }}
                >
                  🏳️ Show Answer
                </motion.button>
              </div>
            )}

            {/* End-of-game message */}
            <AnimatePresence>
              {gameState !== 'playing' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center mt-8"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`inline-block px-6 py-3 rounded-2xl mb-4 ${
                      gameState === 'won'
                        ? 'bg-gradient-to-r from-[#3A86FF] to-[#5B63F0] text-white'
                        : 'bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white'
                    }`}
                    style={{
                      boxShadow:
                        gameState === 'won'
                          ? '0 18px 40px -16px rgba(58, 134, 255, 0.6)'
                          : '0 18px 40px -16px rgba(239, 68, 68, 0.5)',
                    }}
                  >
                    <p className="text-lg md:text-xl font-bold">
                      {gameState === 'won'
                        ? '🎉 You Won!'
                        : surrendered
                        ? `🏳️ Answer: ${word}`
                        : `💀 Game over — the word was: ${word}`}
                    </p>
                  </motion.div>
                  <div>
                    <motion.button
                      onClick={() => startNewGame()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary"
                    >
                      ↻ Play Again
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ============= KEYBOARD ============= */}
        <motion.div
          className="grid grid-cols-7 md:grid-cols-9 gap-2 md:gap-2.5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
            const isGuessed = guessedLetters.includes(letter);
            const isWrong = isGuessed && !word.includes(letter);
            const isCorrect = isGuessed && word.includes(letter);
            const disabled = isGuessed || gameState !== 'playing';

            return (
              <motion.button
                key={letter}
                onClick={() => handleGuess(letter)}
                disabled={disabled}
                whileHover={!disabled ? { y: -3, scale: 1.05 } : {}}
                whileTap={!disabled ? { scale: 0.95 } : {}}
                className={`
                  relative h-12 md:h-14 rounded-xl font-extrabold text-base md:text-lg
                  transition-all duration-200
                  ${isCorrect ? 'text-white' : ''}
                  ${isWrong ? 'text-white' : ''}
                  ${!isGuessed ? 'bg-white text-[var(--ink)] border border-[var(--border)] hover:border-[var(--brand)] hover:shadow-md' : ''}
                  ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
                style={
                  isCorrect
                    ? {
                        background: 'var(--grad-brand)',
                        boxShadow: 'var(--shadow-glow)',
                      }
                    : isWrong
                    ? {
                        background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)',
                        opacity: 0.85,
                        boxShadow: '0 8px 18px -8px rgba(239, 68, 68, 0.45)',
                      }
                    : { boxShadow: 'var(--shadow-xs)' }
                }
              >
                {letter}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ============= FOOTER HINT ============= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="mono text-xs text-[var(--muted)]">
            Tip: use your physical keyboard — press <span className="text-[var(--ink)]">A–Z</span> to guess,{' '}
            <span className="text-[var(--ink)]">Enter</span> to start a new round
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   Subcomponente — Score card con gradiente
   ============================================================ */
function ScoreCard({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: number;
  color: string;
  icon?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="glass rounded-2xl px-5 py-3 min-w-[100px] text-center"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-1 font-semibold">
        {label}
      </p>
      <p className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color }}>
        {icon && <span className="mr-1">{icon}</span>}
        {value}
      </p>
    </motion.div>
  );
}
