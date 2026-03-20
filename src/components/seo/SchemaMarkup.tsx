import { SITE_CONFIG } from '@/data/content'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  serviceType: [
    'Consultoria em Inteligência Artificial',
    'Automação de Marketing',
    'Automação de WhatsApp',
    'Agentes de AI',
    'Growth Marketing',
    'Desenvolvimento Web',
    'Gestão de Tráfego Pago',
  ],
  priceRange: 'R$ 5.000 - R$ 15.000/mês',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Binah Growth Engine™',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Essencial',
        price: '5000',
        priceCurrency: 'BRL',
        description: 'Diagnóstico + 1 agente AI + landing page + tráfego pago',
      },
      {
        '@type': 'Offer',
        name: 'Crescimento',
        price: '10000',
        priceCurrency: 'BRL',
        description: '3 agentes AI + site completo + CRM + dashboard em tempo real',
      },
      {
        '@type': 'Offer',
        name: 'Dominação',
        price: '15000',
        priceCurrency: 'BRL',
        description: '5+ agentes AI + operação completa + consultoria estratégica',
      },
    ],
  },
}

export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
