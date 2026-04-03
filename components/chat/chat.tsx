"use client";

import { useState, useRef, useEffect } from 'react';
import { ChatHeader } from '@/components/chat/chat-header';
import { ChatInput } from '@/components/chat/chat-input';
import { MessageItem } from '@/components/chat/message-item';

export function Chat() {
  const [input, setInput] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      parts: [{ type: 'text', text: input }]
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) throw new Error('API error');

      const assistantMessage = await response.json();
      
      const formattedAssistantMessage = {
        id: assistantMessage.id,
        role: 'assistant',
        parts: [{ type: 'text', text: assistantMessage.content }]
      };

      setMessages([...newMessages, formattedAssistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        <div className="max-w-2xl mx-auto w-full py-4 px-6">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Welcome to Agent.v6</h2>
                <p className="text-muted-foreground">Start a conversation...</p>
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <MessageItem
                key={msg.id}
                id={msg.id}
                role={msg.role}
                parts={msg.parts}
              />
            ))
          )}
          {isLoading && (
            <div className="flex gap-2 py-4 animate-pulse">
              <span className="text-[10px] font-bold text-primary">A</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>

      <ChatInput 
        input={input}
        setInput={setInput}
        files={files}
        setFiles={setFiles}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
