export const CALENDAR_URL = '#agendar'
export const WHATSAPP_NUMBER = '5561999999999'
export const WHATSAPP_MESSAGE =
  'Olá! Vi o site da Binah Digital e quero agendar minha sessão diagnóstico gratuita.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const SITE_CONFIG = {
  name: 'Binah Digital',
  tagline: 'Assessoria de Crescimento com AI',
  description:
    'Implementamos agentes de AI, automações e growth marketing sob medida para PMEs que querem escalar sem multiplicar custos. Resultados em 30 dias ou trabalhamos de graça.',
  url: 'https://binah.digital',
}

export interface ServiceTier {
  name: string
  price: string
  description: string
  idealFor: string
  features: string[]
  highlighted: boolean
  cta: string
  projection: string
}

export const serviceTiers: ServiceTier[] = [
  {
    name: 'Essencial',
    price: 'R$ 5.000',
    description: 'Para quem está começando a digitalização e quer resultados rápidos com AI.',
    idealFor: 'Negócios até R$50k/mês',
    features: [
      'Diagnóstico estratégico completo',
      '1 agente AI WhatsApp (atendimento)',
      '1 landing page otimizada para conversão',
      '3 fluxos de automação WhatsApp',
      'Gestão de tráfego pago (1 plataforma)',
      'Relatório mensal de performance',
      'Suporte WhatsApp em horário comercial',
    ],
    highlighted: false,
    cta: 'Começar agora',
    projection: '+R$15k–R$25k em receita nos primeiros 90 dias',
  },
  {
    name: 'Crescimento',
    price: 'R$ 10.000',
    description: 'Stack completa de AI para empresas que querem escalar rápido e dominar o mercado.',
    idealFor: 'Negócios R$50k–R$300k/mês',
    features: [
      'Tudo do Essencial +',
      '3 agentes AI (atendimento + qualificação + follow-up)',
      'Site completo + 2 landing pages',
      '8 fluxos de automação + broadcast',
      'Gestão de tráfego Meta + Google Ads',
      '8 criativos/mês para anúncios',
      'Dashboard de métricas em tempo real',
      'CRM básico configurado e integrado',
      'Reuniões quinzenais de estratégia',
      'Suporte prioritário (resposta em até 4h)',
    ],
    highlighted: true,
    cta: 'Escalar meu negócio',
    projection: '+R$30k–R$60k em receita nos primeiros 90 dias',
  },
  {
    name: 'Dominação',
    price: 'R$ 15.000',
    description:
      'Operação completa de growth com AI. Para quem quer dominar o nicho e escalar agressivamente.',
    idealFor: 'Negócios R$300k+/mês',
    features: [
      'Tudo do Crescimento +',
      '5+ agentes AI (stack completo personalizado)',
      'Site completo + 5 landing pages + blog',
      'Automações ilimitadas + integrações avançadas',
      'Multi-plataforma (Meta + Google + TikTok)',
      '15 criativos/mês + vídeos curtos',
      'CRM completo com treinamento',
      'Consultoria estratégica mensal (1h)',
      'Treinamento da equipe (2h/mês)',
      'Reuniões semanais + suporte VIP 7 dias',
    ],
    highlighted: false,
    cta: 'Dominar o mercado',
    projection: '+R$60k–R$120k em receita nos primeiros 90 dias',
  },
]

export interface ProcessStep {
  step: number
  title: string
  duration: string
  description: string
  icon: 'search' | 'cog' | 'trending-up' | 'rocket'
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    duration: 'Semana 1',
    description:
      'Auditoria completa da presença digital, análise de concorrentes, mapeamento da jornada do cliente e identificação de quick wins para receita imediata.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Construção',
    duration: 'Semana 2-3',
    description:
      'Implementação do site, agentes AI, automações de WhatsApp e integrações — tudo sob medida para o seu negócio.',
    icon: 'cog',
  },
  {
    step: 3,
    title: 'Go-Live',
    duration: 'Semana 4',
    description:
      'Ativação de tráfego pago, agentes operando 24h e sistema de captação rodando. Primeiros resultados visíveis.',
    icon: 'rocket',
  },
  {
    step: 4,
    title: 'Escala',
    duration: 'Mês 2+',
    description:
      'Otimização contínua com dados reais, escalada de investimento no que funciona e expansão de automações.',
    icon: 'trending-up',
  },
]

export interface CaseStudy {
  company: string
  segment: string
  problem: string
  solution: string
  result: string
  metric: string
  metricLabel: string
}

export const caseStudies: CaseStudy[] = [
  {
    company: 'Ornato Estudio',
    segment: 'Estúdio de Design',
    problem:
      'Dezenas de mensagens por dia no WhatsApp. Leads perdidos porque não conseguiam responder rápido. Sem controle do pipeline.',
    solution:
      'Agente AI de qualificação automática que responde em segundos, filtra leads reais e agenda reuniões direto no calendário.',
    result: '+80% de eficiência no atendimento. Zero lead perdido. Agendamentos no automático 24h.',
    metric: '+80%',
    metricLabel: 'eficiência no atendimento',
  },
  {
    company: 'Login Logística',
    segment: 'Logística',
    problem:
      '12 horas por semana gastas em tarefas operacionais repetitivas — conferência, relatórios, follow-ups internos.',
    solution:
      'Automações com agentes AI que eliminaram as tarefas manuais. Time liberado para focar no que gera receita.',
    result: '12h/semana recuperadas. Operação enxuta. Time focado em crescimento.',
    metric: '12h/sem',
    metricLabel: 'recuperadas para o time',
  },
]

export interface Differential {
  title: string
  description: string
}

export const differentials: Differential[] = [
  {
    title: 'AI-first',
    description: 'Seus concorrentes ainda fazem tudo manual. Você terá agentes trabalhando 24h.',
  },
  {
    title: 'Speed over magnitude',
    description: 'Primeiros resultados em 7 dias, não em 3 meses.',
  },
  {
    title: '1:1 personalizado',
    description: 'Nada de template genérico. Tudo construído sob medida para o seu negócio.',
  },
  {
    title: 'Dados em tempo real',
    description: 'Você vê o ROI de cada real investido, quando quiser.',
  },
  {
    title: 'Sem lock-in técnico',
    description: 'Tudo que construímos é seu. Se sair, leva tudo.',
  },
  {
    title: 'Equipe multidisciplinar',
    description: 'Growth + Dev + AI + Design em um único parceiro.',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'O que exatamente é o Binah Growth Engine?',
    answer:
      'É um programa completo de aceleração digital com AI, entregue 1:1, sob medida para o seu negócio. Em 90 dias, você terá um sistema de captação de clientes automatizado, agentes AI no atendimento e qualificação, site profissional otimizado, tráfego pago gerenciado e dashboard de resultados em tempo real.',
  },
  {
    question: 'Para quem é esse serviço?',
    answer:
      'Para PMEs, clínicas, e-commerces e startups que faturam a partir de R$50k/mês e querem escalar com inteligência. Se você sente que perde tempo com tarefas manuais, leads escapam por falta de follow-up ou sua presença digital não converte — é para você.',
  },
  {
    question: 'E se não funcionar? Tem garantia?',
    answer:
      'Sim. Temos a Garantia de Resultado em 30 Dias: se em 30 dias você não tiver pelo menos o dobro do investimento em leads qualificados gerados, nós trabalhamos de graça no mês seguinte até atingir essa marca. Sem letras miúdas.',
  },
  {
    question: 'Já tentei marketing digital e não funcionou. Por que seria diferente?',
    answer:
      'Se o volume de leads era baixo, provavelmente o investimento em mídia ou segmentação estava errado. Se os leads eram ruins, faltava qualificação — nosso agente AI qualifica antes de agendar. Se a agência não entregava, você tem o dashboard: acesso direto, em tempo real. Não precisa pedir relatório.',
  },
  {
    question: 'Preciso de conhecimento técnico?',
    answer:
      'Não. Cuidamos de toda a parte técnica — desde a configuração dos agentes AI até a integração com suas ferramentas existentes. Você foca no seu negócio, a gente cuida da tecnologia.',
  },
  {
    question: 'Vocês têm cases e resultados comprovados?',
    answer:
      'Sim. A Ornato Estudio automatizou 80% do atendimento com nossos agentes AI. A Login Logística recuperou 12h semanais de operação manual. E para quem está avaliando: oferecemos condições especiais e a garantia de 30 dias. Se não funcionar, você não paga.',
  },
  {
    question: 'Quanto tempo até eu ver resultados?',
    answer:
      'Na primeira semana fazemos o diagnóstico completo. Semanas 2-3, construímos tudo. Semana 4, go-live com tráfego ativado. Primeiros resultados em 7-30 dias. Em 90 dias, o sistema estará otimizado e escalando.',
  },
  {
    question: 'Como funciona a sessão diagnóstico gratuita?',
    answer:
      'É uma reunião de 30 minutos onde mapeamos onde está o dinheiro escondido no seu negócio. Analisamos sua presença digital, identificamos gargalos e quick wins, e apresentamos um plano de ação personalizado. Sem compromisso, sem pressão — apenas estratégia.',
  },
]
