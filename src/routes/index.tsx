import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Globe2, Handshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "5D Group — Pharmaceutical & Nutraceutical Distribution" },
    { name: "description", content: "Exclusive VITY Vitamins & Supplements representation and B2B distribution across the EAEU." },
    { property: "og:title", content: "5D Group — VITY Distribution Across the EAEU" },
    { property: "og:description", content: "Connecting trusted British-quality supplements with professional partners across the EAEU." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b bg-surface soft-grid">
        <div className="section-shell grid min-h-[calc(100vh-76px)] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-2 text-xs font-bold text-primary">
              <span className="size-2 rounded-full bg-teal" /> Exclusive VITY partner across the EAEU
            </div>
            <p className="eyebrow">5D Group · Pharmaceutical & Nutraceutical Distribution</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Connecting trusted supplement brands with the EAEU market.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Exclusive EAEU representation and distribution of VITY Vitamins & Supplements from the United Kingdom.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/products">Explore VITY Products <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/partnership">Become a Partner</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:pl-8">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 p-2 shadow-2xl backdrop-blur">
              <img
                src="/vity-lineup.png"
                alt="VITY Vitamins & Supplements Lineup"
                className="h-auto w-full max-w-md rounded-xl object-contain lg:max-w-lg"
              />
              <div className="absolute bottom-5 right-5 rounded-md border bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">United Kingdom → EAEU</p>
                <p className="mt-1 text-sm text-muted-foreground">Professional B2B distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="About 5D Group" title="A focused partner for regulated, professional markets" text="5D Group is a pharmaceutical and nutraceutical distribution company bringing high-quality dietary supplements to the EAEU market through long-term professional partnerships." />
            <p className="text-base leading-8 text-muted-foreground lg:pt-8">
              We work with pharmaceutical distributors, pharmacy chains, marketplaces and other professional partners. As the exclusive representative of VITY Vitamins & Supplements throughout the EAEU, our role is to develop the brand through clear positioning and disciplined B2B cooperation.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[[Globe2,"EAEU Market","Distribution across the Eurasian Economic Union"],[ShieldCheck,"Exclusive Brand","VITY Vitamins & Supplements"],[Handshake,"B2B Focus","Professional distribution and partnerships"],[Building2,"Quality Focus","International quality framework"]].map(([Icon,title,text]) => { const I = Icon as typeof Globe2; return <div key={title as string} className="bg-card p-6"><I className="size-6 text-teal"/><h3 className="mt-5 font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></div>;})}
          </div>
        </div>
      </section>

      <section className="section-pad border-y bg-surface">
        <div className="section-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="VITY Vitamins & Supplements" title="Explore the VITY portfolio" text="A carefully presented selection from the official B2B catalog." />
            <Button asChild variant="outline">
              <Link to="/products">View full catalog <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.slice(0,4).map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-lg border bg-primary p-8 text-primary-foreground sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground/70">Exclusive representation</p>
            <h2 className="mt-4 text-3xl font-semibold">VITY across the EAEU</h2>
            <div className="mt-8 flex items-center justify-between gap-3 text-center text-xs font-bold">
              <span>UNITED KINGDOM<br/><b className="font-normal opacity-70">VITY</b></span>
              <ArrowRight/>
              <span>5D GROUP</span>
              <ArrowRight/>
              <span>EAEU<br/><b className="font-normal opacity-70">5 markets</b></span>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Distribution" title="A clear route to professional partners" text="5D Group represents VITY throughout Armenia, Belarus, Kazakhstan, Kyrgyzstan and Russia, supporting professional distribution across the EAEU market."/>
            <Button asChild className="mt-7" variant="outline">
              <Link to="/eaeu-distribution">Explore distribution <ArrowRight/></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t bg-surface">
        <div className="section-shell flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">B2B cooperation</p>
            <h2 className="mt-2 text-3xl font-semibold">Build the VITY market with 5D Group.</h2>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">Start a conversation <ArrowRight/></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
