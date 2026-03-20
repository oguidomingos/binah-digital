import { Search, Cog, TrendingUp, Rocket } from 'lucide-react'
import { processSteps } from '@/data/content'

const iconMap = {
  search: Search,
  cog: Cog,
  'trending-up': TrendingUp,
  rocket: Rocket,
} as const

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 sm:py-32"
      aria-labelledby="como-funciona-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-medium text-accent">// processo</span>
          <h2
            id="como-funciona-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Do diagnóstico ao resultado{' '}
            <span className="gradient-text">em tempo recorde</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Onboarding em 1h. Go-live em 4 semanas. Sem burocracia.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon]
            return (
              <div key={step.step} className="relative text-center">
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-accent/40 to-transparent lg:block" />
                )}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5">
                  <Icon className="h-8 w-8 text-accent" />
                </div>

                <div className="mt-2 font-mono text-xs text-accent/60">
                  {String(step.step).padStart(2, '0')}
                </div>

                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-xs font-medium text-accent">{step.duration}</p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
