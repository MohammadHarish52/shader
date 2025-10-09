import AnimatedGradient from "./AnimatedGradient";
import Button from "./Button";

export default function ShaderHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatedGradient />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center w-full flex flex-col items-center justify-center">
        {/* Eyebrow text */}
        <div className="mb-10">
          <span
            className="inline-block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-base font-medium text-white/70 tracking-wide"
            style={{ padding: "8px" }}
          >
            ✨ Explore the Infinite
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 text-white whitespace-nowrap">
          Infinity and Beyond
        </h1>

        {/* Subheadline */}
        <h2 className="hero-subheadline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 text-white/60 max-w-4xl">
          Where Creativity Meets Technology
        </h2>

        {/* Description */}
        <p className="hero-description text-base sm:text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
          Experience the future of visual design with stunning shader effects
          that transform your ideas into mesmerizing digital experiences. Push
          boundaries and explore infinite possibilities.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          style={{ marginTop: "10px" }}
        >
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">View Demo</Button>
        </div>
      </div>
    </div>
  );
}
