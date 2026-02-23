/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  LineChart as LineChartIcon,
  PieChart,
  Cpu,
  Globe,
  DollarSign
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  YAxis, 
  XAxis, 
  Tooltip,
  AreaChart,
  Area
} from 'recharts';

const ibovespaData = [
  { name: 'Jan', value: 110000 },
  { name: 'Fev', value: 115000 },
  { name: 'Mar', value: 112000 },
  { name: 'Abr', value: 118000 },
  { name: 'Mai', value: 122000 },
  { name: 'Jun', value: 119000 },
  { name: 'Jul', value: 125000 },
  { name: 'Ago', value: 128000 },
  { name: 'Set', value: 126000 },
  { name: 'Out', value: 130000 },
  { name: 'Nov', value: 132000 },
  { name: 'Dez', value: 135000 },
];

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" fill="currentColor" />
                <path d="M12 7V17M12 7L9 10M12 7L15 10M12 17L9 14M12 17L15 14" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">Data Maple AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#problem" className="hover:text-black transition-colors">O Problema</a>
            <a href="#solution" className="hover:text-black transition-colors">Solução</a>
            <a href="#market" className="hover:text-black transition-colors">Mercado</a>
            <a href="#roadmap" className="hover:text-black transition-colors">Roadmap</a>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors">
            Falar com Fundadores
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 pb-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Target className="w-3 h-3" />
              Captação Pré-Seed: R$ 300.000
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              Transformando investidores em <span className="text-zinc-400 italic">operadores sistemáticos.</span>
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-xl">
              Fintech brasileira focada em automação quantitativa e gestão de risco para investidores pessoa física. Performance real acima de marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all group">
                Ver Pitch Deck <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-zinc-200 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all">
                Nossos Resultados
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-50 rounded-3xl border border-zinc-100 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Performance Real</p>
                  <h3 className="text-3xl font-bold tracking-tight">+24.8% <span className="text-emerald-500 text-sm font-medium">YTD</span></h3>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <LineChartIcon className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ibovespaData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f4f4f5', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white rounded-2xl border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Sharpe Ratio</p>
                  <p className="text-xl font-bold">1.82</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Drawdown Máx</p>
                  <p className="text-xl font-bold text-rose-500">-4.2%</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-zinc-100 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="bg-zinc-50">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">O Problema</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">O investidor PF da B3 está <span className="italic">desamparado.</span></h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <AlertCircle className="w-10 h-10 text-rose-500 mb-6" />
            <h4 className="text-xl font-bold mb-4">Operação Emocional</h4>
            <p className="text-zinc-500 leading-relaxed">
              Decisões baseadas em medo e ganância levam a perdas consistentes no longo prazo.
            </p>
          </Card>
          <Card>
            <ShieldCheck className="w-10 h-10 text-rose-500 mb-6" />
            <h4 className="text-xl font-bold mb-4">Falta de Gestão de Risco</h4>
            <p className="text-zinc-500 leading-relaxed">
              Investidores operam sem stop estruturado ou dimensionamento de posição adequado.
            </p>
          </Card>
          <Card>
            <Users className="w-10 h-10 text-rose-500 mb-6" />
            <h4 className="text-xl font-bold mb-4">Gurus sem Auditoria</h4>
            <p className="text-zinc-500 leading-relaxed">
              O mercado é inundado por promessas vazias e robôs vendidos sem transparência de performance real.
            </p>
          </Card>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">A Solução</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Tecnologia quantitativa <span className="text-zinc-400">democratizada.</span></h3>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Opera Trader (Produto 1)</h4>
                  <p className="text-zinc-500 mb-4">Plataforma SaaS com estratégias validadas, backtests públicos e controle automático de risco.</p>
                  <ul className="space-y-2">
                    {['Backtests documentados', 'Logs operacionais auditáveis', 'Dashboard em tempo real'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">InvestSocial (Fase 2)</h4>
                  <p className="text-zinc-500 mb-4">Comunidade baseada em dados reais. Perfis com rentabilidade auditada e ranking por Sharpe Ratio.</p>
                  <ul className="space-y-2">
                    {['Ranking de performance real', 'Copy trading estruturado', 'Transparência absoluta'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <Cpu className="w-12 h-12 text-zinc-500 mb-8" />
              <h4 className="text-2xl font-bold mb-4">Diferencial Tecnológico</h4>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Motor proprietário de análise de risco com IA aplicada à volatilidade e alocação dinâmica. Nossa stack utiliza Python para o engine quantitativo e React para uma experiência de usuário fluida.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Infra</p>
                  <p className="font-medium">AWS / GCP</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Arquitetura</p>
                  <p className="font-medium">Modular API</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </Section>

      {/* Market Section */}
      <Section id="market" className="bg-zinc-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Mercado</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Um oceano azul na <span className="italic">B3.</span></h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold tracking-tighter">+5M</div>
                <div className="text-zinc-500 font-medium leading-tight">CPFs ativos na B3 com crescimento consistente pós-2019.</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold tracking-tighter">R$ 12B</div>
                <div className="text-zinc-500 font-medium leading-tight">TAM Brasil estimado (SaaS trading + educação + robôs).</div>
              </div>
              <p className="text-zinc-500 leading-relaxed">
                Nossa segmentação inicial foca em 25.000 potenciais early adopters (0,5% do mercado), investidores ativos com capital entre R$ 10k e R$ 100k.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <Globe className="w-8 h-8 text-black mb-4" />
              <h4 className="font-bold mb-2">Expansão</h4>
              <p className="text-sm text-zinc-500">Estratégia futura para Forex, EUA e Crypto.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm mt-12">
              <BarChart3 className="w-8 h-8 text-black mb-4" />
              <h4 className="font-bold mb-2">Escalabilidade</h4>
              <p className="text-sm text-zinc-500">Modelo SaaS com margens elevadas e baixo custo marginal.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Business Model */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Modelo de Negócio</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Receita recorrente e <span className="text-zinc-400">escalável.</span></h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase mb-4">Plano Base</p>
              <h4 className="text-4xl font-bold mb-6">R$ 500<span className="text-lg text-zinc-400 font-normal">/mês</span></h4>
              <ul className="space-y-3 mb-8">
                {['SaaS Recorrente', 'Upsell para Premium', 'Revenue Share Futuro', 'Treinamentos Técnicos'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Card className="border border-zinc-100 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase mb-4">Meta Ano 1</p>
              <h4 className="text-4xl font-bold mb-6 text-zinc-900">100 <span className="text-lg text-zinc-400 font-normal">Assinantes</span></h4>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold mb-1">Receita Mensal</p>
                  <p className="text-2xl font-bold text-zinc-900">R$ 50.000</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold mb-1">ARR (Anual)</p>
                  <p className="text-2xl font-bold text-zinc-900">R$ 600.000</p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase mb-4">Ponto de Equilíbrio</p>
              <h4 className="text-4xl font-bold mb-6">70 <span className="text-lg text-zinc-400 font-normal">Assinantes</span></h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Com um custo médio estimado de R$ 35k/mês, atingimos o break-even com apenas 70 assinantes pagantes.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Roadmap */}
      <Section id="roadmap" className="bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4 text-center">Roadmap</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-16 text-center">Os próximos 12 meses.</h3>
          <div className="space-y-12">
            {[
              { period: '0-3 meses', title: 'Fundação', items: ['MVP funcional', '1 robô validado', 'Captação de leads', 'Grupo fechado beta'] },
              { period: '4-6 meses', title: 'Tração', items: ['30 primeiros pagantes', 'Ajuste de produto', 'Documentação regulatória'] },
              { period: '7-12 meses', title: 'Escala', items: ['100 pagantes ativos', 'Expansão de features', 'Início da camada social', 'Estratégia de autoridade'] }
            ].map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex-shrink-0 w-24 text-sm font-bold text-zinc-400 uppercase pt-1">{step.period}</div>
                <div className="flex-grow pb-12 border-l border-zinc-200 pl-8 relative">
                  <div className="absolute w-3 h-3 bg-black rounded-full -left-[6.5px] top-2" />
                  <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.items.map(item => (
                      <li key={item} className="text-zinc-500 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-zinc-300 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Ask */}
      <Section className="bg-black text-white text-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-6">Oportunidade de Investimento</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">R$ 300.000 <span className="text-zinc-600">Pré-Seed</span></h3>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Estamos buscando parceiros estratégicos para acelerar o desenvolvimento do motor de IA e expandir nossa base de usuários inicial.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all">
              Solicitar Deck Completo
            </button>
            <button className="border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Agendar Call
            </button>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" fill="currentColor" />
                <path d="M12 7V17M12 7L9 10M12 7L15 10M12 17L9 14M12 17L15 14" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-bold">Data Maple AI</span>
          </div>
          <p className="text-zinc-400 text-sm">© 2024 Data Maple AI. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="https://www.datamapleai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Website</a>
            <a href="https://www.linkedin.com/company/data-maple-ai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://x.com/Datamapleai" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
