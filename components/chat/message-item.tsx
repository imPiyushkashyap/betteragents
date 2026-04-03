import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MessageItemProps {
  role: string;
  parts: any[];
  id: string;
}

export function MessageItem({ role, parts, id }: MessageItemProps) {
  const isUser = role === 'user';
  
  return (
    <div className="flex flex-col gap-2 py-4 animate-in fade-in slide-in-from-bottom-1 duration-300">
      <div className="flex items-baseline gap-4">
        <span className={cn(
          "text-[10px] font-bold w-4 shrink-0",
          isUser ? "text-muted-foreground" : "text-primary"
        )}>
          {isUser ? 'U' : 'A'}
        </span>
        
        <div className="flex-1 space-y-4">
          {parts.map((part, index) => {
            if (part.type === 'text') {
              return (
                <div key={`${id}-text-${index}`} className="text-sm font-mono leading-relaxed whitespace-pre-wrap selection:bg-primary selection:text-primary-foreground">
                  {part.text}
                </div>
              );
            }
            
            if (part.type === 'file' && part.mediaType?.startsWith('image/')) {
              return (
                <div key={`${id}-image-${index}`} className="relative border p-1 bg-muted/50 max-w-sm">
                  <Image
                    src={part.url}
                    width={600}
                    height={400}
                    alt="attachment"
                    className="w-full h-auto"
                  />
                </div>
              );
            }
            
            if (part.type === 'file' && part.mediaType === 'application/pdf') {
              return (
                <div key={`${id}-pdf-${index}`} className="text-[10px] border px-2 py-1 inline-block uppercase font-bold tracking-tighter">
                  [PDF_ATTACHED_VIEW_DATA]
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
