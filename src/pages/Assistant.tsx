import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, Maximize2, Phone } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';
import { Message } from '../components/chat/Message';
import { QuickQuestions } from '../components/chat/QuickQuestions';
import { CallModal } from '../components/chat/CallModal';

const SARAH_IMAGE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200";

const questionSuggestions = [
  { id: "1", text: "Tell me about your house models" },
  { id: "2", text: "What are the production timelines?" },
  { id: "3", text: "How much do your houses cost?" },
  { id: "4", text: "What makes your houses sustainable?" },
];

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
}

export function Assistant() {
  const [messages, setMessages] = useState<Message[]>([{
    id: "1",
    type: "assistant",
    content: "👋 Hi! I'm your AI sales assistant. Whether you want to chat about our houses or jump on a quick call, I'm here 24/7 to help you make the perfect choice.",
  }]);
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageText,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setShowSuggestions(false);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Thank you for your message. I'll help you with your inquiry about our houses. Would you like to know more about our models, pricing, or production process?"
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Virtual Sales Assistant</h1>
              <p className="text-xl text-gray-600">
                Get instant answers about our houses
              </p>
            </div>
            <button
              onClick={() => setIsCallModalOpen(true)}
              className="flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition-colors font-medium shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
            isExpanded ? "h-[600px]" : "h-[500px]"
          }`}>
            {/* Header */}
            <div className="px-8 py-6 border-b flex items-center bg-gradient-to-r from-gray-900 to-black text-white">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={SARAH_IMAGE}
                    alt="Sarah"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white" />
                </div>
                <div>
                  <div className="font-medium text-xl">Sarah</div>
                  <div className="text-sm text-gray-300">AI Sales Assistant</div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="h-[calc(100%-10rem)] flex flex-col">
              {showSuggestions && (
                <QuickQuestions
                  questions={questionSuggestions}
                  onSelect={handleSend}
                />
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <Message
                      key={message.id}
                      type={message.type}
                      content={message.content}
                      assistantImage={SARAH_IMAGE}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="h-20 px-8 flex items-center border-t bg-white">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="ml-4 p-3 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCallModalOpen && <CallModal onClose={() => setIsCallModalOpen(false)} />}

      <Newsletter />
    </div>
  );
}