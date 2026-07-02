'use client';

import {
  BarChart3,
  CalendarCheck,
  Camera,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Route,
  Sparkles,
  Waves,
} from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'PATHWAY', href: '#pathway' },
  { label: 'FLOW', href: '#flow' },
  { label: 'BEGIN', href: '#begin' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/' },
  { icon: Mail, href: 'mailto:hello@howlingmune.com' },
  { icon: MapPin, href: '#begin' },
];

const modules = [
  {
    icon: Moon,
    eyebrow: '01 — Listen',
    title: 'Front Door',
    body: 'A calm landing experience that names the work without forcing it into generic wellness language.',
  },
  {
    icon: Waves,
    eyebrow: '02 — Sense',
    title: 'Client Intake',
    body: 'A form that captures readiness, intention, emotional context, and the right pathway into Theo’s work.',
  },
  {
    icon: Route,
    eyebrow: '03 — Route',
    title: 'Pathway Logic',
    body: 'Simple routing between healing, photography, identity work, group containers, and partnership inquiries.',
  },
  {
    icon: MessageCircle,
    eyebrow: '04 — Follow',
    title: 'Close Scripts',
    body: 'Gentle but clear follow-up language so serious clients are held, not chased.',
  },
  {
    icon: CalendarCheck,
    eyebrow: '05 — Book',
    title: 'Session Flow',
    body: 'Booking and confirmation rhythm that protects the depth of the work and reduces scattered conversations.',
  },
  {
    icon: BarChart3,
    eyebrow: '06 — Review',
    title: 'Client Telemetry',
    body: 'A simple view of inquiries, readiness, pathways, and follow-up so the business can breathe.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background hm-mesh-bg">
      <MinimalistHero
        logoText="Howling Mūne"
        navLinks={navLinks}
        mainText="A doorway for people returning to themselves through embodiment, emotional repair, visual identity, and quiet transformation."
        readMoreLink="#work"
        imageSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        imageAlt="A quiet natural sanctuary landscape used as a placeholder for Howling MUNE visual identity."
        overlayText={{ part1: 'return', part2: 'home.' }}
        socialLinks={socialLinks}
        locationText="Bali / New York"
      />

      <section id="work" className="relative border-t border-border/50 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full hm-glass px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-amber-300">
            <Sparkles className="h-4 w-4" />
            Giving you back to you
          </div>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-6xl">
            The medicine exists. The pathway around the medicine now becomes visible.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Howling MUNE does not need a loud funnel. It needs a sacred operating path: a clear front door, a living intake, a client readiness map, and a follow-up rhythm that feels human.
          </p>
        </div>
      </section>

      <section id="pathway" className="border-t border-border/50 bg-card/35 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-300">Client Flow Engine</p>
            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">A clean system for deep work.</h2>
            <p className="mt-5 text-muted-foreground">
              The first version focuses on what Theo needs now: fewer scattered conversations, clearer fit, stronger pathway language, and a traceable client journey.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="hm-tactile-base rounded-3xl p-7 transition duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/40 text-amber-300 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{item.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="flow" className="border-t border-border/50 px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-300">System rhythm</p>
            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">From scattered referrals to a living client pathway.</h2>
            <p className="mt-6 text-muted-foreground">
              The system should feel like a quiet threshold, not a hard sell. People arrive, reflect, reveal what they need, and are routed into the right next conversation.
            </p>
          </div>

          <div className="hm-glass rounded-[2rem] p-6">
            <div className="grid gap-4">
              {['Arrive', 'Reflect', 'Route', 'Book', 'Follow', 'Review'].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl bg-black/25 p-4 ring-1 ring-white/5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-black">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{step}</p>
                    <p className="text-sm text-muted-foreground">{step === 'Arrive' ? 'Landing page / referral link' : step === 'Reflect' ? 'Intake and readiness questions' : step === 'Route' ? 'Offer or conversation pathway' : step === 'Book' ? 'Session invitation and scheduling' : step === 'Follow' ? 'Human follow-up and close path' : 'Performance and pathway review'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="begin" className="border-t border-border/50 px-6 py-28 text-center md:px-12">
        <Camera className="mx-auto mb-8 h-10 w-10 text-amber-300" />
        <h2 className="mx-auto max-w-4xl text-4xl font-light tracking-tight md:text-6xl">Begin with the doorway. Then build the sanctuary behind it.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Stage 1 should deliver the visual front door, intake language, client pathway map, CRM starter layer, and the first version of the follow-up rhythm.
        </p>
        <a href="mailto:hello@howlingmune.com" className="mt-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]">
          Start the client flow
        </a>
      </section>
    </main>
  );
}
