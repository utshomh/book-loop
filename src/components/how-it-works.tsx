import { Step } from "@/components/step";

export function HowItWorks() {
  return (
    <section className="bg-background relative overflow-hidden space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
          How the Loop Works
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A simple three-phase journey for both buyers and sellers to meet in
          the middle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-y-8 gap-x-8 relative">
        <div className="flex flex-col gap-8">
          <div className="bg-blue-500/5 py-2 rounded-full text-center font-bold text-blue-600 uppercase tracking-tighter text-xs border border-blue-500/10">
            Phase 1: Discovery
          </div>
          <div className="flex flex-col gap-8">
            <Step
              number="1a"
              iconName="search"
              colorClass="text-blue-500"
              title="Find a Gem"
              desc="Browse unique collections from local readers nearby."
            />
            <Step
              number="1b"
              iconName="camera"
              colorClass="text-emerald-500"
              title="Post a Book"
              desc="Snap a photo, set your price, and list your book instantly."
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-orange-500/5 py-2 rounded-full text-center font-bold text-orange-600 uppercase tracking-tighter text-xs border border-orange-500/10">
            Phase 2: The Handshake
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Step
              number="2"
              iconName="chat"
              colorClass="text-orange-500"
              title="Negotiate & Chat"
              desc="Chat directly to agree on price, condition, and exchange details."
            />
            <div className="mt-6 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-[11px] font-black uppercase tracking-widest animate-pulse border border-orange-200">
              Live Negotiation
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-purple-500/5 py-2 rounded-full text-center font-bold text-purple-600 uppercase tracking-tighter text-xs border border-purple-500/10">
            Phase 3: Completion
          </div>
          <div className="flex flex-col gap-8">
            <Step
              number="3a"
              iconName="check"
              colorClass="text-purple-500"
              title="Pay & Buy"
              desc="Secure payment through the app. Start reading your new book!"
            />
            <Step
              number="3b"
              iconName="earn"
              colorClass="text-yellow-600"
              title="Earn & Recycle"
              desc="Sellers get paid instantly and give books a second life."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
