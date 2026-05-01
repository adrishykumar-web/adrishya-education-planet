'use client';
import { useState } from 'react';
import { categories } from '@/lib/data';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const testBank: Record<string, Question[]> = {
  default: [
    { question: "India ki rajdhani kya hai?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], correct: 1 },
    { question: "Bharat ka rashtrapati kaun hai (2024)?", options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "Pratibha Patil"], correct: 1 },
    { question: "Ganga nadi ka sanshayasthan kahan hai?", options: ["Uttarakhand", "Himachal Pradesh", "Uttar Pradesh", "Bihar"], correct: 0 },
    { question: "Indian Constitution kab laagu hua?", options: ["1947", "1950", "1952", "1949"], correct: 1 },
    { question: "Bharat ki sabse badi nadi kaun si hai?", options: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"], correct: 2 },
    { question: "Taj Mahal kahan hai?", options: ["Delhi", "Lucknow", "Agra", "Jaipur"], correct: 2 },
    { question: "Independence Day kab manaya jata hai?", options: ["15 August", "26 January", "2 October", "26 November"], correct: 0 },
    { question: "RBI ka mukhyalaya kahan hai?", options: ["Delhi", "Kolkata", "Mumbai", "Chennai"], correct: 2 },
    { question: "India mein kitne rajya hain (2024)?", options: ["28", "29", "30", "27"], correct: 0 },
    { question: "Bharat ka sabse bada park kaun sa hai?", options: ["Kanha", "Jim Corbett", "Ranthambore", "Hemis"], correct: 3 },
  ],
};

export default function Tests() {
  const categories_list = [
    { id: 'default', name: 'General Knowledge', icon: '📖' },
    ...categories.slice(0, 6).map(c => ({ id: c.id, name: c.name, icon: c.icon })),
  ];

  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  const questions = testBank[selectedTest || 'default'] || testBank.default;

  const startTest = (testId: string) => {
    setSelectedTest(testId);
    setTestStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setTimeLeft(600);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setTestStarted(false);
  };

  if (!selectedTest) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">📝 Mock Tests</h1>
          <p className="text-gray-400">Practice with mock tests for competitive exams</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories_list.map(cat => (
            <div key={cat.id} className="bg-gray-800/50 rounded-xl p-6 border border-white/5 hover:border-green-500/30 transition-all cursor-pointer" onClick={() => startTest(cat.id)}>
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="text-white font-semibold mt-3 mb-2">{cat.name}</h3>
              <p className="text-gray-400 text-sm mb-4">10 Questions • 10 Minutes</p>
              <button className="w-full py-2.5 bg-green-600/20 text-green-400 rounded-xl text-sm font-medium hover:bg-green-600/30 transition-all">
                Start Test →
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-8">
        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto text-4xl">
          {percentage >= 70 ? '🎉' : percentage >= 40 ? '👍' : '📚'}
        </div>
        <h2 className="text-3xl font-bold text-white">Test Complete!</h2>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5 space-y-3">
          <p className="text-2xl font-bold text-yellow-400">{score}/{questions.length}</p>
          <p className="text-gray-400">Percentage: <span className="text-white font-bold">{percentage}%</span></p>
          <p className="text-gray-400">Grade: <span className={`font-bold ${percentage >= 70 ? 'text-green-400' : percentage >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
            {percentage >= 70 ? 'Excellent' : percentage >= 40 ? 'Good' : 'Need Improvement'}
          </span></p>
        </div>
        <div className="space-y-2">
          {questions.map((q, i) => (
            <div key={i} className={`p-3 rounded-lg text-sm text-left ${answers[i] === q.correct ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
              <p className="text-white mb-1">{i + 1}. {q.question}</p>
              <p className="text-green-400 text-xs">Correct: {q.options[q.correct]}</p>
            </div>
          ))}
        </div>
        <button onClick={resetTest} className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700">
          Back to Tests
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-yellow-400 font-bold">Score: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
        <h2 className="text-lg font-semibold text-white mb-6">{q.question}</h2>
        <div className="space-y-3">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`w-full text-left p-4 rounded-xl transition-all border ${
                selectedAnswer === index
                  ? 'border-purple-500 bg-purple-500/10 text-white'
                  : 'border-white/5 bg-gray-900/30 text-gray-300 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  selectedAnswer === index ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-sm">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={submitAnswer}
          disabled={selectedAnswer === null}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            selectedAnswer === null
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
          }`}
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Submit Test'}
        </button>
        <button onClick={resetTest} className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl font-medium hover:bg-gray-600">
          Exit
        </button>
      </div>
    </div>
  );
}
