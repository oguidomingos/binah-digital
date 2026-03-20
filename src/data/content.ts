export const CALENDAR_URL = '#agendar'
export const WHATSAPP_NUMBER = '5561999999999'
export const WHATSAPP_MESSAGE = 'Olá! Vi o site da Binah Digital e gostaria de saber mais sobre a assessoria de crescimento com AI.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const SITE_CONFIG = {
  name: 'Binah Digital',
  tagline: 'Assessoria de Crescimento com AI',
  description:
    'Transforme seu negócio com inteligência artificial. Diagnóstico, automações e crescimento acelerado para PMEs.',
  url: 'https://binah.digital',
}

export interface ServiceTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const serviceTiers: ServiceTier[] = [
  {
    name: 'Ignição',
    price: 'R$ 5.000',
    description: 'Para quem quer começar a integrar AI no negócio com resultados rápidos.',
    features: [
      'Diagnóstico completo do negócio',
      'Setup de 1 agente AI (WhatsApp ou atendimento)',
      'Landing page otimizada',
      'Relatório mensal de performance',
      'Suporte via WhatsApp',
    ],
    highlighted: false,
    cta: 'Começar agora',
  },
  {
    name: 'Aceleração',
    price: 'R$ 10.000',
    description: 'Stack completa de AI para empresas que querem escalar rápido.',
    features: [
      'Tudo do plano Ignição',
      'Até 3 agentes AI integrados',
      'Automações de WhatsApp + CRM',
      'Gestão de tráfego pago',
      'Dashboard de métricas em tempo real',
      'Reuniões semanais de estratégia',
    ],
    highlighted: true,
    cta: 'Escalar meu negócio',
  },
  {
    name: 'Domínio Total',
    price: 'R$ 15.000',
    description: 'Operação completa de growth com AI. Para quem quer dominar o mercado.',
    features: [
      'Tudo do plano Aceleração',
      'Agentes AI ilimitados',
      'Desenvolvimento sob demanda (apps, SaaS features)',
      'Prospecção ativa automatizada',
      'Consultoria estratégica 1:1',
      'Acesso prioritário e SLA 24h',
    ],
    highlighted: false,
    cta: 'Dominar o mercado',
  },
]

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: 'search' | 'cog' | 'trending-up'
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    description:
      'Mapeamos seu negócio, identificamos gargalos e oportunidades de crescimento com AI. Análise profunda de dados, concorrência e mercado.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Implementação',
    description:
      'Construímos e integramos agentes AI, automações e sistemas sob medida. Deploy rápido com resultados em dias, não meses.',
    icon: 'cog',
  },
  {
    step: 3,
    title: 'Resultados',
    description:
      'Monitoramos, otimizamos e escalamos. Dashboards em tempo real, reuniões de estratégia e ajustes contínuos para máximo ROI.',
    icon: 'trending-up',
  },
]

export interface Testimonial {
  name: string
  company: string
  text: string
  metric: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Hanna Almeida',
    company: 'Ornato Estudio',
    text: 'A Binah Digital transformou minha presença online. Em poucas semanas, tive um site profissional e um fluxo de agendamentos que funciona no automático.',
    metric: '+200% em agendamentos',
  },
  {
    name: 'Carlos Mendes',
    company: 'Login Logística',
    text: 'Automatizamos toda a qualificação de leads com os agentes AI. O time comercial agora foca só em quem realmente vai fechar. Resultado incrível.',
    metric: '3x mais conversões',
  },
  {
    name: 'Ana Beatriz',
    company: 'E-commerce D2C',
    text: 'O diagnóstico identificou oportunidades que a gente nem sabia que existiam. Em 30 dias, já estávamos implementando automações que reduziram nosso CAC pela metade.',
    metric: '-50% no CAC',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'O que é assessoria de crescimento com AI?',
    answer:
      'É um serviço onde combinamos estratégia de growth marketing com implementação de agentes de inteligência artificial. Automatizamos processos, otimizamos conversões e aceleramos o crescimento do seu negócio usando as ferramentas mais avançadas do mercado.',
  },
  {
    question: 'Para quem é esse serviço?',
    answer:
      'Para PMEs, clínicas, e-commerces e startups que faturam a partir de R$ 50k/mês e querem escalar com inteligência. Se você sente que seu negócio poderia crescer mais rápido com automação e dados, é para você.',
  },
  {
    question: 'Quanto tempo para ver resultados?',
    answer:
      'Nosso compromisso é entregar primeiros resultados em até 48 horas após o diagnóstico. Em 30 dias, você já terá automações rodando e métricas visíveis. Velocidade é nosso diferencial.',
  },
  {
    question: 'Preciso de conhecimento técnico?',
    answer:
      'Não. Cuidamos de toda a parte técnica — desde a configuração dos agentes AI até a integração com suas ferramentas existentes. Você foca no seu negócio, a gente cuida da tecnologia.',
  },
  {
    question: 'Como funciona a call de diagnóstico?',
    answer:
      'É uma reunião de 30-45 minutos onde entendemos seu negócio, mapeamos dores e oportunidades, e apresentamos um plano de ação personalizado. Sem compromisso, sem pressão.',
  },
]
