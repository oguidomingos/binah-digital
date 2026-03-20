import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { serviceTiers, CALENDAR_URL } from '@/data/content'

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32" aria-labelledby="servicos-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-medium text-accent">// serviços</span>
          <h2
            id="servicos-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Escolha o plano ideal para o{' '}
            <span className="gradient-text">seu crescimento</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Três níveis de serviço, um objetivo: escalar seu negócio com AI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8 transition-all',
                tier.highlighted
                  ? 'border-accent/50 bg-accent/5 shadow-lg shadow-accent/10'
                  : 'border-border bg-card hover:border-accent/30'
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-background">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3" role="list">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDAR_URL}
                className={cn(
                  'block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all',
                  tier.highlighted
                    ? 'bg-accent text-background hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20'
                    : 'border border-border bg-transparent text-foreground hover:border-accent/50 hover:text-accent'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
