'use client';
import { useState, useRef, useEffect } from 'react';
import { useAppStore } from '@/lib/store';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

export default function Chat() {
  const { userName } = useAppStore();
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Welcome to ADRISHYA Education Planet chat! How can we help you today?', sender: 'other', time: '10:00 AM' },
    { id: '2', text: 'Feel free to ask any questions about courses, study material, or exams.', sender: 'other', time: '10:00 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const msg: Message = {
      id: Date.now().toString(),
      text: newMessage.trim(),
      sender: 'me',
      time,
    };
    setMessages([...messages, msg]);
    setNewMessage('');

    setTimeout(() => {
      const replies = [
        "Thank you for your message! Our team will get back to you shortly.",
        "Great question! Please check the course details section for more information.",
        "You can download the study material from the PDFs section.",
        "Our faculty will address this in the next live session.",
        "For any technical issues, please contact our support team.",
        "Keep up the great work with your exam preparation!",
      ];
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: replies[Math.floor(Math.random() * replies.length)],
        sender: 'other',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] lg:h-[calc(100vh-40px)]">
      {/* Chat Header */}
      <div className="bg-gray-800/50 rounded-t-xl p-4 border border-white/5 border-b-0 flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg">
            🪐
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
        </div>
        <div>
          <h2 className="text-white font-semibold text-sm">ADRISHYA Support</h2>
          <p className="text-green-400 text-xs">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-gray-900/30 overflow-y-auto p-4 space-y-3 border-x border-white/5">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
              msg.sender === 'me'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-md'
                : 'bg-gray-800 text-gray-200 rounded-bl-md'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === 'me' ? 'text-white/60' : 'text-gray-500'}`}>
                {msg.time} {msg.sender === 'me' ? '✓✓' : ''}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-gray-800/50 rounded-b-xl p-3 border border-white/5 border-t-0">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 px-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
