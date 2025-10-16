import Button from "./Button";

type Tier = {
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  priceCaption: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Explorer",
    description: "Essential tools for individuals experimenting with real-time shader art.",
    price: "Free",
    priceCaption: "Free forever — no credit card required.",
    features: [
      "Access to 5 generative shader templates",
      "Interactive playground with live preview",
      "Export presets for WebGL and Three.js",
      "Community preset library",
      "Email support within 48 hours",
    ],
    cta: "Get started",
  },
  {
    name: "Creator",
    description: "Build immersive shader experiences with collaborative workflows.",
    price: "$29",
    priceSuffix: "/month",
    priceCaption: "Billed monthly. Cancel anytime.",
    features: [
      "Unlimited shader scenes and renders",
      "Collaborative workspaces with roles",
      "Version history and time travel",
      "Render queue with 4K export",
      "Priority support with office hours",
    ],
    cta: "Upgrade now",
    popular: true,
  },
  {
    name: "Visionary",
    description: "Tailored pipelines, security controls, and dedicated support for teams.",
    price: "Custom",
    priceCaption: "Let’s design the perfect pipeline together.",
    features: [
      "Tailored onboarding and shader training",
      "Dedicated GPU render pipelines",
      "SSO, SCIM, and role-based access",
      "Private preset libraries and governance",
      "24/7 support with a solutions engineer",
    ],
    cta: "Contact sales",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-28rem] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.35),_transparent_65%)] blur-[120px]" />
        <div className="absolute bottom-[-18rem] right-[-6rem] h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.25),_transparent_60%)] blur-[140px]" />
        <div className="absolute bottom-[-12rem] left-[-12rem] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),_transparent_60%)] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 md:px-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400" />
          Pricing
        </span>

        <h2 className="hero-headline mt-10 text-center text-4xl sm:text-5xl md:text-6xl text-gradient">
          Choose your shader journey
        </h2>
        <p className="hero-description mt-6 max-w-2xl text-center text-white/60">
          Flexible plans designed to scale from your first shader sketch to enterprise-grade
          interactive experiences.
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="group relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-2xl transition-transform duration-500 group-hover:-translate-y-2 ${
                  tier.popular
                    ? "border-white/40 bg-white/10 shadow-[0_0_80px_rgba(147,51,234,0.35)]"
                    : "shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                }`}
              >
                <div className="flex flex-1 flex-col gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                        {tier.name}
                      </p>
                      <p className="mt-4 text-base font-semibold text-white">
                        {tier.description}
                      </p>
                    </div>

                    {tier.popular && (
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-lg shadow-purple-700/30">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-semibold text-white">{tier.price}</span>
                      {tier.priceSuffix && (
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                          {tier.priceSuffix}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/50">{tier.priceCaption}</p>
                  </div>

                  <ul className="flex flex-1 flex-col gap-3 text-left">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-[0_0_18px_rgba(236,72,153,0.65)]" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <Button variant={tier.popular ? "primary" : "secondary"}>{tier.cta}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="hero-description mt-16 text-center text-sm text-white/45">
          Need a custom workflow? <span className="text-white/80">Let’s craft a shader pipeline that matches your vision.</span>
        </p>
      </div>
    </section>
  );
}
