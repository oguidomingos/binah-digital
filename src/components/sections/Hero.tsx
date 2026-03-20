import { ArrowDown, ArrowRight, Shield, Sparkles, Zap } from 'lucide-react'
import { CALENDAR_URL, WHATSAPP_URL } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Início"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--color-background))]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
            Binah Growth Engine™
          </span>
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Seu negócio cresce.{' '}
          <span className="gradient-text">A operação não acompanha.</span>{' '}
          <span className="text-foreground">A gente resolve com AI.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Implementamos agentes de AI, automações e growth marketing sob medida para PMEs que querem
          escalar — sem aumentar o time. Resultados em 30 dias ou trabalhamos de graça.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={CALENDAR_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-emerald" />
            <span>Resultados em 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-accent" />
            <span>Garantia de 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet" />
            <span>AI sob medida</span>
          </div>
        </div>
      </div>

      <a
        href="#cases"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-accent"
        aria-label="Rolar para cases"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
