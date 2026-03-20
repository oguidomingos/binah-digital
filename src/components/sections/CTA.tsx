import { ArrowRight, MessageCircle } from 'lucide-react'
import { CALENDAR_URL, WHATSAPP_URL } from '@/data/content'

export function CTA() {
  return (
    <section
      id="agendar"
      className="border-t border-border bg-muted/30 py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-accent/20 bg-card p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)]" />

          <div className="relative">
            <span className="font-mono text-sm font-medium text-accent">// próximo passo</span>
            <h2
              id="cta-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Pronto para{' '}
              <span className="gradient-text">escalar com AI?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Agende uma call de diagnóstico gratuita. Em 30 minutos, você terá um plano de ação
              personalizado para o seu negócio.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CALENDAR_URL}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Agendar Call Gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Sem compromisso. Sem pressão. Apenas estratégia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
