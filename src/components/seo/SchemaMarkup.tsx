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
    'Desenvolvimento Web',
    'Growth Marketing',
  ],
  priceRange: 'R$ 5.000 - R$ 15.000/mês',
}

export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
