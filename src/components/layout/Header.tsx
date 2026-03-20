import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CALENDAR_URL } from '@/data/content'

const navLinks = [
  { href: '#cases', label: 'Cases' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#servicos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
            <span className="font-mono text-sm font-bold text-accent">B</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            binah<span className="text-accent">.digital</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDAR_URL}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Agendar Call
          </a>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-background/98 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-center gap-6 px-4 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-foreground transition-colors hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDAR_URL}
              className="mt-4 rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-background transition-all hover:bg-accent-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Call Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
