"use client";

import { ArrowRight, Cpu, Lightning, ShieldCheck, X } from '@phosphor-icons/react';

export const IconArrowRight = ArrowRight;
export const IconCpu = Cpu;
export const IconLightning = Lightning;
export const IconShieldCheck = ShieldCheck;
export const IconX = X;

export function BackgroundGraphics() {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-10 pointer-events-none overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rotate-45 animate-slow-spin" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 -rotate-12" />
    </div>
  );
}
