export function AnimatedGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-drift absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#ffd9c2] via-[#ffe4e1] to-transparent opacity-70 blur-3xl" />
    </div>
  );
}
