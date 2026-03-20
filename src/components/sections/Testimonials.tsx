import { ArrowRight, Building2 } from 'lucide-react'
import { caseStudies, CALENDAR_URL } from '@/data/content'

export function Testimonials() {
  return (
    <section id="cases" className="border-y border-border bg-muted/30 py-24 sm:py-32" aria-labelledby="cases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-medium text-accent">// resultados reais</span>
          <h2
            id="cases-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Quem trabalha com a gente,{' '}
            <span className="gradient-text">cresce</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Cases reais de empresas que transformaram operações com AI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{cs.company}</p>
                    <p className="text-xs text-muted-foreground">{cs.segment}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-emerald/10 px-3 py-2 text-center">
                  <span className="block text-xl font-extrabold text-emerald">{cs.metric}</span>
                  <span className="text-[10px] leading-tight text-emerald/80">{cs.metricLabel}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Problema
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cs.problem}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Solução
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cs.solution}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent/60">
                    Resultado
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-foreground">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CALENDAR_URL}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
          >
            Quero resultados assim no meu negócio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
