"use client"

import Image from 'next/image'
import { Section, FadeIn, CountUp, ScrollArrow, CardReveal, StepReveal } from '@/components/sections'
import {
  HeroBackground,
  DataFlowBackground,
  DecisionLogBackground,
  PipelineBackground,
  ScaleBackground,
  WorkflowComparisonBackground,
  ClosingBackground,
} from '@/components/backgrounds'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="bg-background">
      {/* Floating Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40 py-4 px-6 md:px-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <Image 
              src="/leaselock-logo.png" 
              alt="LeaseLock Logo" 
              width={140} 
              height={35} 
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </div>

          {/* Navigation Links on the right */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#starting-point" className="hover:text-primary transition-colors">Phase One</a>
            <a href="#decision-log" className="hover:text-primary transition-colors">Decision Log</a>
            <a href="#the-shift" className="hover:text-primary transition-colors">AI Shift</a>
            <a href="#scale" className="hover:text-primary transition-colors">Scale</a>
            <a href="#perspective" className="hover:text-primary transition-colors">Perspective</a>
            <a href="#closing" className="hover:text-primary transition-colors">Closing</a>
          </nav>

          {/* Contact / Quick Link on mobile/tablet */}
          <div className="text-xs text-muted-foreground font-medium md:hidden">
            Product Ops Vision
          </div>
        </div>
      </header>

      {/* Section 1 — Hero */}
      <Section className="relative bg-background">
        <HeroBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Most people see a ticket queue.
            </h1>
          </FadeIn>
          <FadeIn delay={600}>
            <h2 className="mt-6 text-2xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
              I see a data system waiting to be built.
            </h2>
          </FadeIn>
          <FadeIn delay={1200}>
            <p className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              "A vision for Product Operations at LeaseLock" <span className="font-semibold text-foreground"> - Nivas Verelli</span>
            </p>
          </FadeIn>
          <FadeIn delay={1800}>
            <div className="mt-16">
              <ScrollArrow />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Section 2 — The Starting Point */}
      <Section className="bg-secondary/30" id="starting-point">
        <DataFlowBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Phase One
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              My First Few Months Won&apos;t Look Like What You&apos;d Expect
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              I&apos;m not walking in with a plan. I&apos;m walking in with a question: what does this data actually look like when it breaks?
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Yardi sends a field one way. RealPage sends it another. A tenant changes units and something slips. I want to see every version of that manually, up close before I touch any automation.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-12 p-6 bg-accent rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                The documentation tells you how it&apos;s supposed to work. 
                The exceptions tell you how it{" "}
                <span className="font-semibold text-foreground">actually</span>{" "}
                works. I want to spend few months in the exceptions.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Section 3 — The Decision Log */}
      <Section className="bg-background" id="decision-log">
        <DecisionLogBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Foundation
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Capturing What Was Always Getting Lost
            </h2>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <CardReveal delay={200}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Log Every Decision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every time I resolve a certificate, I log what broke, why, and how I fixed it. Five extra minutes. After Few months that&apos;s your knowledge base.
                </p>
              </div>
            </CardReveal>

            <CardReveal delay={400}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Surface Every Pattern</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The same failure type showing up from the same Yardi property every week? You&apos;ll see it in a dashboard before it becomes a support ticket.
                </p>
              </div>
            </CardReveal>

            <CardReveal delay={600}>
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Feed Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Instead of engineering guessing what to automate I hand them a ranked list. Here&apos;s what&apos;s breaking most. Build the fix for that one first.
                </p>
              </div>
            </CardReveal>
          </div>
        </div>
      </Section>

      {/* Section 4 — The Shift */}
      <Section className="bg-secondary/30" id="the-shift">
        <PipelineBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Transformation
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              From Manual to Intelligent
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-6">
            <StepReveal step={1}>
              <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FEE2E2] border-2 border-[#EF4444] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#EF4444]">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Certificate Flagged</h4>
                  <p className="text-muted-foreground">Something didn&apos;t match. The system caught it and flagged it for review.</p>
                </div>
              </div>
            </StepReveal>

            <StepReveal step={2}>
              <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">AI Classifier Receives It</h4>
                  <p className="text-muted-foreground">Instead of a human investigating from scratch the classifier looks at it first. What type of failure is this? How confident is it?</p>
                </div>
              </div>
            </StepReveal>

            <StepReveal step={3}>
              <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DCFCE7] border-2 border-[#22C55E] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#22C55E]">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">High Confidence → Auto-Resolved</h4>
                  <p className="text-muted-foreground">Name format mismatch from the same Yardi property for the 40th time? Handled. Nobody needs to touch that.</p>
                </div>
              </div>
            </StepReveal>

            <StepReveal step={4}>
              <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FEF3C7] border-2 border-[#F59E0B] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#92400E]">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Low Confidence → Human Confirms in 30 Seconds</h4>
                  <p className="text-muted-foreground">The ambiguous ones still come to me. But I&apos;m confirming a pre-filled answer not starting from zero.</p>
                </div>
              </div>
            </StepReveal>

            <StepReveal step={5}>
              <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Decision Feeds Back → Classifier Improves</h4>
                  <p className="text-muted-foreground">Every time I confirm or override that&apos;s a new data point. The classifier gets better. The queue gets smaller.</p>
                </div>
              </div>
            </StepReveal>
          </div>

          <FadeIn delay={1200}>
            <div className="mt-12 p-6 bg-accent rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                You&apos;re already on Databricks. The infrastructure to build this exists right now. The only thing missing is someone who spends few months generating the right labeled data to train it.{" "}
                <span className="font-semibold text-foreground">That&apos;s what this role becomes.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Section 5 — The Math */}
      <Section className="bg-background" id="scale">
        <ScaleBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="text-3xl sm:text-6xl lg:text-8xl font-bold text-primary mb-8 flex items-center justify-center flex-wrap gap-y-2">
              <CountUp end={2.5} duration={2000} suffix="M" />
              <span className="mx-1 sm:mx-4 text-muted-foreground">→</span>
              <CountUp end={5} duration={2500} suffix="M" />
              <span className="mx-1 sm:mx-4 text-muted-foreground">→</span>
              <span>∞</span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Scale Is the Problem. Leverage Is the Answer.
            </h2>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Every property we onboard is a win. It&apos;s also a new source of exceptions, edge cases, and human decisions. The portfolio scales fast. The team can&apos;t scale at the same rate. That gap is exactly where I want to focus.
            </p>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="mt-8 p-6 sm:p-8 bg-accent rounded-xl max-w-2xl mx-auto">
              <p className="text-base sm:text-xl font-medium text-primary text-balance">
                {'"'}LeaseLock Shield predicts risk before it happens on the insurance side. The same logic applies to operations.{'"'}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Section 6 — The Gen Z Take */}
      <Section className="bg-secondary/30" id="perspective">
        <WorkflowComparisonBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Perspective
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              I Grew Up During The Shift
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every tool I need to build what I&apos;m describing it&apos;s all accessible right now. Free, open source, documented. That&apos;s not the hard part anymore. The hard part is knowing your data well enough to use any of it correctly. That&apos;s why I&apos;m starting in the queue.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-8 p-6 sm:p-8 bg-accent rounded-xl border-l-4 border-primary">
              <p className="text-base sm:text-xl font-medium text-foreground leading-relaxed">
                Anyone can spin up a Databricks cluster.
              </p>
              <p className="text-base sm:text-xl font-medium text-primary mt-2">
                Not everyone knows why a Yardi unit transfer creates a duplicate certificate.
              </p>
              <p className="text-sm sm:text-lg text-muted-foreground mt-4">
                That&apos;s the difference. That&apos;s what I&apos;m going to learn.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Section 7 — Closing */}
      <Section className="bg-background" id="closing">
        <ClosingBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Not a deck. Not a promise.
            </h2>
            <p className="mt-3 text-xl sm:text-4xl font-bold text-primary">
              A direction.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              The role starts operational. That&apos;s exactly where I want to start.
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <a href="https://linkedin.com/in/nivasverelli" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="mailto:nivasverelli@gmail.com">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="mt-20 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Nivas Verelli</span> - Data & AI Professional, MS Business Analytics, UT Dallas
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Disclaimer */}
      <div className="bg-background py-12">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="border-t border-border/50 mb-8" />
          <p className="text-[13px] leading-relaxed text-muted-foreground/70">
            Quick note — I built this on my own time, based on public information and conversations with people I trust. I don&apos;t know your internal systems. I might be wrong about some of this. But I&apos;d rather show up with a point of view and be corrected than show up with nothing and learn on the job.
          </p>
        </div>
      </div>
    </main>
  )
}
