import { SITE_CONFIG, WHATSAPP_URL } from '@/data/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <span className="font-mono text-sm font-bold text-accent">B</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                binah<span className="text-accent">.digital</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">{SITE_CONFIG.tagline}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href="#servicos"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Serviços
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
