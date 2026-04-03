import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  IconArrowRight, 
  IconCpu, 
  IconLightning, 
  IconShieldCheck, 
  BackgroundGraphics 
} from '@/components/landing/visual-elements';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <header className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground leading-none">B.A</span>
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase font-mono">BetterAgent</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors opacity-60 hover:opacity-100">Features</Link>
            <Link href="#docs" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors opacity-60 hover:opacity-100">Docs</Link>
          </nav>
          <Link href="/dashboard">
            <Button size="sm" className="rounded-none text-[10px] font-bold uppercase tracking-widest px-6 h-9 transition-all hover:scale-[1.02]">
              Launch App
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 border border-border/40 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">v6.0 RELEASED</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-balance">
                THE NEXT GENERATION OF <span className="text-primary italic">AI AGENTS</span>.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-mono uppercase text-[11px] tracking-tight opacity-70">
                A minimalist, high-performance interface for interacting with advanced AI models. Built on the NanoBot architecture for speed and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-none text-xs font-bold uppercase tracking-widest px-10 h-14 w-full sm:w-auto">
                    Get Started <IconArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-none text-xs font-bold uppercase tracking-widest px-10 h-14 border-border/80 hover:bg-muted/50 w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
          
          <BackgroundGraphics />
        </section>

        {/* Features grid */}
        <section id="features" className="py-24 border-t border-border/20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <IconCpu size={24} className="text-primary" />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Neural Engine</h3>
                <p className="text-[11px] leading-relaxed text-muted-foreground uppercase opacity-70 font-mono tracking-tight">
                  Seamlessly connected to advanced backend models via our proprietary AI Gateway for consistent performance.
                </p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <IconLightning size={24} className="text-primary" />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Instant Response</h3>
                <p className="text-[11px] leading-relaxed text-muted-foreground uppercase opacity-70 font-mono tracking-tight">
                  Optimized for low-latency interactions ensuring that your workflow remains uninterrupted and fluid.
                </p>
              </div>
              <div className="space-y-4 group">
                <div className="w-12 h-12 bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <IconShieldCheck size={24} className="text-primary" />
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest">Secure by Design</h3>
                <p className="text-[11px] leading-relaxed text-muted-foreground uppercase opacity-70 font-mono tracking-tight">
                  End-to-end encryption for all prompts and data ensuring that your sensitive information stays private.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/20 py-12">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-40">
            <span className="text-[10px] font-bold tracking-tighter uppercase font-mono">BetterAgent v6.0</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[9px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Twitter</Link>
            <Link href="#" className="text-[9px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Github</Link>
            <Link href="#" className="text-[9px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Discord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
