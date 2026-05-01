'use client';
import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';

export default function VoiceRoom() {
  const { userName } = useAppStore();
  const [isInRoom, setIsInRoom] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [participants] = useState([
    { name: userName || 'You', isHost: true, isSpeaking: false },
    { name: 'Rahul Sir', isHost: false, isSpeaking: true },
    { name: 'Priya Maam', isHost: false, isSpeaking: false },
    { name: 'Student_2341', isHost: false, isSpeaking: false },
    { name: 'Student_1890', isHost: false, isSpeaking: false },
  ]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    if (isInRoom && !isMuted) {
      const interval = setInterval(() => setIsSpeaking(prev => !prev), 2000);
      return () => clearInterval(interval);
    }
  }, [isInRoom, isMuted]);

  const AnimatedWaves = () => {
    const [bars] = useState(() => Array.from({ length: 20 }, () => Math.random() * 100));
    return (
      <div className="flex items-center justify-center gap-[2px] h-12">
        {bars.map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
            style={{
              height: `${15 + Math.random() * 85}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    );
  };

  if (!isInRoom) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">🎙️ Voice Room</h1>
          <p className="text-gray-400">Join live voice rooms for group discussions and interactive learning</p>
        </div>

        {/* Active Rooms */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Active Rooms</h2>
          {[
            { title: 'UPSC Current Affairs Discussion', host: 'Rahul Sir', participants: 45, topic: 'UPSC' },
            { title: 'SSC Maths Doubt Resolution', host: 'Priya Maam', participants: 32, topic: 'SSC' },
            { title: 'Banking Awareness Live', host: 'Amit Sir', participants: 28, topic: 'Banking' },
            { title: 'GATE CS Technical Discussion', host: 'Vikram Sir', participants: 18, topic: 'GATE' },
          ].map((room, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                      🎙️
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{room.title}</h3>
                    <p className="text-gray-400 text-sm">Hosted by {room.host}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-400 text-xs">● LIVE</span>
                      <span className="text-gray-500 text-xs">👥 {room.participants} listening</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsInRoom(true)}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 text-sm"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Room */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5">
          <h3 className="text-white font-semibold mb-3">Create Your Own Room</h3>
          <p className="text-gray-400 text-sm mb-4">Start a voice room and invite other students to discuss topics together.</p>
          <button
            onClick={() => setIsInRoom(true)}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700"
          >
            + Create Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-xl p-6 border border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-semibold">LIVE</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Group Study Room</h2>
        <p className="text-gray-400 text-sm">Hosted by Rahul Sir • {participants.length} participants</p>

        {/* Wave Animation */}
        <div className="my-6">
          <AnimatedWaves />
        </div>
      </div>

      {/* Participants */}
      <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5">
        <h3 className="text-white font-semibold mb-4 text-sm">Participants ({participants.length})</h3>
        <div className="space-y-2">
          {participants.map((p, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${p.isHost ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                    {p.name.charAt(0)}
                  </div>
                  {p.isSpeaking && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800 animate-pulse" />
                  )}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{p.name}</p>
                  {p.isHost && <span className="text-yellow-400 text-xs">Host</span>}
                </div>
              </div>
              {(p.isSpeaking || isSpeaking) && i === 0 && (
                <div className="flex items-center gap-[2px] h-5">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="w-1 bg-green-400 rounded-full animate-pulse"
                      style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${j * 0.1}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 bg-gray-800/50 rounded-xl p-4 border border-white/5">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all ${
            isMuted ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <button
          onClick={() => setIsInRoom(false)}
          className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-xl text-white hover:bg-red-600 transition-all"
        >
          📞
        </button>
      </div>
    </div>
  );
}
