import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section id="cases" className="py-24 sm:py-32" aria-labelledby="cases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm font-medium text-accent">// cases</span>
          <h2
            id="cases-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Quem trabalha com a gente,{' '}
            <span className="gradient-text">cresce</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Resultados reais de empresas que já transformaram seus negócios com AI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/30" />

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="rounded-lg bg-emerald/10 px-3 py-1">
                    <span className="text-xs font-semibold text-emerald">{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
