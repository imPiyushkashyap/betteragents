export function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md border-b/10 px-8 py-3 flex items-center justify-between">
      <h1 className="text-[10px] font-bold font-mono tracking-widest uppercase opacity-30 select-none">
        Agent.v6
      </h1>
      <div className="flex items-center space-x-1.5 opacity-20 hover:opacity-100 transition-opacity">
        <span className="size-1.5 bg-green-500 rounded-full" />
        <span className="text-[10px] uppercase font-mono tracking-tighter">Live</span>
      </div>
    </header>
  );
}
