import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqItems } from '@/data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-mono text-sm font-medium text-accent">// dúvidas</span>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-6">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-semibold text-foreground sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                      isOpen && 'rotate-180 text-accent'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
