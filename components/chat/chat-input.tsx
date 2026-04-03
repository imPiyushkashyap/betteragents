import { Paperclip, ArrowFatUp, X } from '@phosphor-icons/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ input, setInput, files, setFiles, onSubmit }: ChatInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(e.target.files);
  };

  const clearFiles = () => {
    setFiles(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto pb-10 pt-4 px-6">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 p-2 px-3 border border-border/80 focus-within:border-primary transition-colors bg-card"
      >
        {files && files.length > 0 && (
          <div className="flex flex-wrap gap-2 py-1 mb-1 border-b">
            {Array.from(files).map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2 py-0.5 bg-muted text-[10px] uppercase font-bold tracking-tighter">
                <span>{f.name}</span>
                <button type="button" onClick={clearFiles} className="hover:opacity-50"><X size={10} /></button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*,application/pdf"
            className="hidden"
            onChange={handleFileChange}
            multiple
            ref={fileInputRef}
          />
          <button
            type="button"
            className="opacity-40 hover:opacity-100 transition-opacity"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip size={18} />
          </button>
          <Input
            className="bg-transparent border-none focus-visible:ring-0 text-sm font-mono h-8 h-8 px-0 placeholder:text-muted-foreground/30 uppercase tracking-tighter"
            value={input}
            placeholder="PROMPT..."
            onChange={e => setInput(e.target.value)}
          />
          <Button 
              type="submit" 
              size="icon"
              variant="default"
              className="h-7 w-7 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all opacity-80 hover:opacity-100"
              disabled={!input.trim() && (!files || files.length === 0)}
            >
              <ArrowFatUp size={14} weight="fill" />
            </Button>
        </div>
      </form>
    </div>
  );
}
