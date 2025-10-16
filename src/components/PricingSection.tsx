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
    priceCaption: "Let's design the perfect pipeline together.",
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-center py-24">
        <div className="mb-10">
          <span
            className="inline-block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-base font-medium text-white/70 tracking-wide"
            style={{ padding: "8px" }}
          >
            💎 Pricing
          </span>
        </div>

        <h2 className="hero-headline text-4xl sm:text-5xl md:text-6xl mb-8 text-white text-center">
          Choose your shader journey
        </h2>
        
        <p className="hero-description text-base sm:text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed text-center mb-16">
          Flexible plans designed to scale from your first shader sketch to enterprise-grade
          interactive experiences.
        </p>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                tier.popular
                  ? "border-white/20 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 text-xs font-medium text-white/90 tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col p-8 gap-8 flex-1">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tier.name}
                  </h3>
                  <p className="hero-description text-sm text-white/60 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="text-center border-y border-white/10 py-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    {tier.priceSuffix && (
                      <span className="text-base text-white/60">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>
                  <p className="hero-description text-sm text-white/50 mt-3">
                    {tier.priceCaption}
                  </p>
                </div>

                <ul className="flex flex-col gap-4 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" />
                      <span className="hero-description leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Button variant={tier.popular ? "primary" : "secondary"}>{tier.cta}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="hero-description text-center text-base text-white/50 max-w-2xl leading-relaxed mt-16">
          Need a custom workflow? <span className="text-white/70">Let's craft a shader pipeline that matches your vision.</span>
        </p>
      </div>
    </section>
  );
}
