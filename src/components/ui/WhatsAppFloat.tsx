import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald shadow-lg shadow-emerald/30 transition-all hover:bg-emerald-dark hover:shadow-xl hover:shadow-emerald/40"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  )
}
