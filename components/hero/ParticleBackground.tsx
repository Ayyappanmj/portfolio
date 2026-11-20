"use client";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
      <div 
        className="h-full w-full"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
    </div>
  );
}
