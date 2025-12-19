
import React, { useState, useCallback, useEffect } from 'react';
import { 
  CheckCircle, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  Users, 
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

// --- Constants ---

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5575998163205&text=Ol%C3%A1%21+Vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+um+or%C3%A7amento+para+cria%C3%A7%C3%A3o+de+site+profissional+para+minha+cl%C3%ADnica.&type=phone_number&app_absent=0";

const IMAGES = {
  hero: "https://i.imgur.com/krWpAoN.png",
  authority: [
    "https://i.imgur.com/xUUMVUF.png",
    "https://i.imgur.com/yGIW98V.png"
  ],
  gallery: [
    "https://i.imgur.com/SIZOcum.png",
    "https://i.imgur.com/gAerEqv.png",
    "https://i.imgur.com/YL8htdJ.png",
    "https://i.imgur.com/xUUMVUF.png", // Reusing for variety
    "https://i.imgur.com/yGIW98V.png"  // Reusing for variety
  ]
};

// --- Components ---

const WhatsAppButton: React.FC<{ label?: string, className?: string }> = ({ 
  label = "Agendar primeira consulta gratuita no WhatsApp", 
  className = "" 
}) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 text-center"
    >
      <MessageCircle className="w-6 h-6" />
      <span>{label}</span>
    </a>
    <span className="text-sm text-slate-500 font-medium">Resposta rápida • Sem compromisso</span>
  </div>
);

const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div 
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
    onClick={onClose}
  >
    <button 
      className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      onClick={(e) => { e.stopPropagation(); onClose(); }}
    >
      <X size={32} />
    </button>
    <img 
      src={src} 
      alt="Resultado Ampliado" 
      className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
      {children}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`w-20 h-1 mx-auto mt-6 rounded-full ${light ? 'bg-emerald-500' : 'bg-emerald-600'}`}></div>
  </div>
);

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const TrustCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-slate-50 p-6 rounded-xl flex flex-col gap-4 border border-transparent hover:border-emerald-100 transition-all">
    <div className="text-emerald-600">{icon}</div>
    <h4 className="font-bold text-lg">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
  </div>
);

// --- Main Page ---

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = useCallback((src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-10 pb-20 md:py-0">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative z-10 space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Referência em Harmonização e Implantes</span>
            </div>
            <h1 className="text-5xl md:text-7xl leading-tight">
              Eu sou <span className="text-emerald-700 font-serif italic">Pedro</span>, Dentista e Especialista em Transformações.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Transforme sua autoestima com segurança, tecnologia e um atendimento humanizado focado em resultados naturais e duradouros.
            </p>
            <WhatsAppButton className="!items-start" />
          </div>
          <div className="order-1 md:order-2 relative animate-fadeInRight">
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
              <img 
                src={IMAGES.hero} 
                alt="Dr. Pedro" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={IMAGES.authority[0]} 
                alt="Dr. Pedro Atendimento" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <p className="font-serif italic text-emerald-700 text-lg mb-2">"Minha missão é devolver o prazer de sorrir e a confiança de cada paciente."</p>
                <p className="text-slate-500 font-bold text-sm">— Dr. Pedro</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif">Autoridade e Experiência ao seu Alcance</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Minha trajetória é marcada pelo compromisso com a excelência técnica e o acolhimento. Acredito que cada sorriso é único e merece um planejamento personalizado, aliando saúde bucal à estética facial.
              </p>
              <ul className="space-y-4">
                {[
                  "Especialista em Implantes e Reabilitação Oral",
                  "✨ Referência em Lentes de Contato em Resina",
                  "Especialista em Sisos e Cirurgia Oral avançada",
                  "Certificação em Harmonização Orofacial de alto nível"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <p className="text-slate-600 italic">"Não é apenas sobre dentes, é sobre a pessoa que sorri por trás deles."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section (Gallery) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="Conheça algumas das transformações que realizei e entenda por que sou a escolha de tantos pacientes."
          >
            Resultados Reais
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group cursor-zoom-in aspect-square overflow-hidden rounded-xl shadow-sm border border-white"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    Ver resultado <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-slate-400 mt-8 italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
          </p>
        </div>
      </section>

      {/* Why Trust Me Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Por que confiar em mim?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <TrustCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Avaliação Honesta"
              text="Eu prezo pela transparência total. Só recomendo o que realmente trará benefícios para sua saúde e estética."
            />
            <TrustCard 
              icon={<Users className="w-8 h-8" />}
              title="Atendimento Comigo"
              text="Você não será apenas 'mais um' na clínica. Eu acompanho cada etapa do seu tratamento pessoalmente."
            />
            <TrustCard 
              icon={<Star className="w-8 h-8" />}
              title="Clareza nos Processos"
              text="Explico cada detalhe técnico de forma simples, para que você tenha segurança em todas as suas decisões."
            />
            <TrustCard 
              icon={<Sparkles className="w-8 h-8" />}
              title="Materiais de Elite"
              text="Utilizo apenas os melhores materiais e tecnologias disponíveis no mercado odontológico mundial."
            />
            <TrustCard 
              icon={<Clock className="w-8 h-8" />}
              title="Puntualidade e Conforto"
              text="Sua agenda é respeitada. Oferecemos um ambiente acolhedor para que sua consulta seja um momento de relaxamento."
            />
            <TrustCard 
              icon={<CheckCircle className="w-8 h-8" />}
              title="Pós-procedimento Ativo"
              text="O cuidado não termina quando você sai da cadeira. Minha equipe e eu monitoramos sua recuperação de perto."
            />
          </div>

          <div className="mt-20 p-12 bg-emerald-900 rounded-3xl text-center space-y-6">
            <h3 className="text-3xl font-serif text-white">Pronto para dar o primeiro passo rumo ao seu novo sorriso?</h3>
            <p className="text-emerald-100 max-w-xl mx-auto">
              Chega de dúvidas ou inseguranças. Vamos conversar e traçar o melhor plano para você, sem compromisso inicial.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Como funciona a primeira consulta?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard 
              number="01"
              title="Clique no WhatsApp"
              description="Você será atendido rapidamente pela nossa equipe para tirar dúvidas iniciais."
            />
            <StepCard 
              number="02"
              title="Agendamento Fácil"
              description="Escolha o melhor horário para você. Nossa agenda é flexível para sua comodidade."
            />
            <StepCard 
              number="03"
              title="Avaliação Gratuita"
              description="Uma análise clínica completa e sem compromisso para diagnosticar sua necessidade real."
            />
          </div>
          <div className="mt-12 text-center text-slate-500 font-medium">
            Reforçamos: A primeira avaliação é <span className="text-emerald-600 font-bold underline">totalmente gratuita</span>.
          </div>
        </div>
      </section>

      {/* More Proof Section (Carousel Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Dê uma olhada nos bastidores do nosso atendimento personalizado.">
            Excelência em Cada Detalhe
          </SectionTitle>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar">
            {IMAGES.authority.map((img, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[450px] snap-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[350px]">
                  <img src={img} alt="Expert" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm border border-white">
                    <p className="font-bold text-slate-800 text-sm">
                      {idx === 0 ? "Atendimento personalizado" : "Equipamentos de última geração"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-white font-serif max-w-4xl mx-auto leading-tight">
            Sua transformação começa com uma decisão. Não deixe seu sorriso para amanhã.
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Agende hoje sua primeira consulta gratuita e descubra o que a odontologia moderna pode fazer por você.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton label="Garantir minha avaliação gratuita no WhatsApp" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-emerald-900">Dr. Pedro</h3>
              <p className="text-slate-500 max-w-xs">
                Especialista em Sorrisos e Harmonização Facial. Elevando sua beleza e saúde bucal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>📍 Localização, xxxxxx</span>
                </p>
                <p className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600 opacity-0" />
                  <span>📌 Endereço: xxxxxx</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Segunda a Sexta-feira</span>
                </p>
                <p className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600 opacity-0" />
                  <span>Das 09:00 às 17:00</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" className="p-3 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-50 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Dr. Pedro | Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox src={selectedImage} onClose={closeLightbox} />
      )}

      {/* Floating WhatsApp on Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          className="whatsapp-float bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default App;
