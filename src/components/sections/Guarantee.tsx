import { Shield, Zap, Users, BarChart3, Lock, Wrench } from 'lucide-react'
import { differentials } from '@/data/content'

const iconMap: Record<string, typeof Shield> = {
  'AI-first': Zap,
  'Speed over magnitude': Zap,
  '1:1 personalizado': Users,
  'Dados em tempo real': BarChart3,
  'Sem lock-in técnico': Lock,
  'Equipe multidisciplinar': Wrench,
}

export function Guarantee() {
  return (
    <section
      id="garantia"
      className="border-y border-border bg-muted/30 py-24 sm:py-32"
      aria-labelledby="garantia-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-mono text-sm font-medium text-accent">// garantia</span>
          <h2
            id="garantia-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Garantia de resultado{' '}
            <span className="gradient-text">em 30 dias</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Se em 30 dias você não tiver pelo menos{' '}
            <span className="font-semibold text-foreground">
              o dobro do investimento em leads qualificados
            </span>
            , nós trabalhamos de graça no mês seguinte até atingir essa marca. Sem letras miúdas.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-emerald/30 bg-emerald/5 px-8 py-5">
              <Shield className="h-10 w-10 text-emerald" />
              <div>
                <p className="text-lg font-bold text-foreground">Risco zero para você</p>
                <p className="text-sm text-muted-foreground">
                  Se não funcionar, você não paga. Simples assim.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((diff) => {
              const Icon = iconMap[diff.title] ?? Zap
              return (
                <div
                  key={diff.title}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30"
                >
                  <Icon className="mb-3 h-5 w-5 text-accent" />
                  <h3 className="text-sm font-bold text-foreground">{diff.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {diff.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
