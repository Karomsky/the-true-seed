import React from 'react';
import {
  Droplets,
  UserPlus,
  BookOpen,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Waves,
  Anchor,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';
import { ScriptureLink } from './scriptureData';

export default function BaptismPage({ onBack, lang, onHover }: { onBack: (targetId?: string) => void, lang: 'en' | 'tl' | 'es', onHover: (verse: string | null, x: number, y: number) => void }) {
  const steps = [
    {
      id: 1,
      title: lang === 'en' ? "Hear the Word" : (lang === 'es' ? "Escuchar la Palabra" : "Pakinggan ang Salita"),
      desc: lang === 'en' ? "Complete 30 fundamental lessons taught by a Minister." : (lang === 'es' ? "Completar 30 lecciones fundamentales enseñadas por un Ministro." : "Tapusin ang 30 pangunahing leksiyon na itinuturo ng Ministro."),
      icon: BookOpen
    },
    {
      id: 2,
      title: lang === 'en' ? "Probation Period" : (lang === 'es' ? "Período de Prueba" : "Panahon ng Pagsubok"),
      desc: lang === 'en' ? "A 4-month period with 15 seminar-workshops to learn church activities." : (lang === 'es' ? "Un período de 4 meses con 15 seminarios-talleres para aprender las actividades de la iglesia." : "4 na buwang pagsubok na may 15 seminar-workshops para matutunan ang mga gawain."),
      icon: Clock
    },
    {
      id: 3,
      title: lang === 'en' ? "Final Screening" : (lang === 'es' ? "Evaluación Final" : "Huling Pagsusuri"),
      desc: lang === 'en' ? "A Minister evaluates your understanding and belief in the gospel." : (lang === 'es' ? "Un Ministro evalúa su comprensión y creencia en el evangelio." : "Susuriin ng Ministro ang iyong pagkaunawa at pananampalataya sa ebangelio."),
      icon: ShieldCheck
    },
    {
      id: 4,
      title: lang === 'en' ? "True Baptism" : (lang === 'es' ? "Verdadero Bautismo" : "Tunay na Bautismo"),
      desc: lang === 'en' ? "Immersion in water, symbolizing the burial of the old sinful self." : (lang === 'es' ? "Inmersión en agua, que simboliza el entierro del viejo yo pecaminoso." : "Paglulubog sa tubig, sumasagisag sa paglilibing ng lumang pagkatao."),
      icon: Waves
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Droplets className="w-full h-full scale-150 -rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onBack()}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs font-bold">{lang === 'es' ? 'Volver a Inicio' : 'Back to Home'}</span>
          </button>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-serif">
              {lang === 'en' ? "The True Baptism" : (lang === 'es' ? "El Verdadero Bautismo" : "Ang Tunay na Bautismo")}
            </h1>
            <p className="text-brand-gold text-xl font-medium tracking-wide">
              {lang === 'en' ? "Buried with Christ, Raised to New Life" : (lang === 'es' ? "Sepultados con Cristo, Resucitados a una Nueva Vida" : "Inilibing kasama ni Cristo, Binuhay sa Bagong Buhay")}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Doctrine */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-brand-blue mb-6 flex items-center gap-3 font-serif">
                <Anchor className="text-brand-gold" />
                {lang === 'en' ? "Born of Water and Spirit" : (lang === 'es' ? "Nacido del Agua y del Espíritu" : "Ipinanganak ng Tubig at Espiritu")}
              </h2>
              <div className="prose prose-slate prose-lg">
                <p>
                  {lang === 'en'
                    ? "Jesus answered, 'Unless people are born again and have a new life from God, they cannot even see the place where God rules.' Being born naturally is not enough; one must be born spiritually."
                    : (lang === 'es' 
                      ? "Jesús respondió: 'A menos que las personas nazcan de nuevo y tengan una vida nueva de parte de Dios, ni siquiera pueden ver el lugar donde Dios gobierna'. Nacer naturalmente no es suficiente; uno debe nacer espiritualmente."
                      : "Sumagot si Jesus, 'Maliban na ang tao'y ipanganak ng tubig at ng Espiritu, ay hindi siya makapapasok sa kaharian ng Dios.' Hindi sapat ang natural na kapanganakan.")}
                </p>
                <blockquote className="border-l-4 border-brand-gold bg-white p-6 rounded-r-xl shadow-sm italic text-sm">
                  {lang === 'en'
                    ? "Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."
                    : (lang === 'es'
                      ? "El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios."
                      : "Maliban na ang tao'y ipanganak ng tubig at ng Espiritu, ay hindi siya makapapasok sa kaharian ng Dios.")}
                  <cite className="block mt-2 font-bold not-italic text-brand-blue">— <ScriptureLink verse="John 3:5" onHover={onHover}>{lang === 'es' ? 'Juan 3:5' : 'John 3:5'}</ScriptureLink></cite>
                </blockquote>
              </div>
            </section>

            <section className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10">
              <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">
                {lang === 'en' ? "The 5th Creation" : (lang === 'es' ? "La 5ª Creación" : "Ang Ika-5 Paglalang")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? "In the history of humanity, there are five stages of creation. The first was Adam, the second Eve, the third natural birth, the fourth Christ, and the fifth is the 'Born Again'—the creation of the One New Man. This is the only way to satisfy the law and escape the lake of fire."
                  : (lang === 'es' 
                    ? "En la historia de la humanidad, hay cinco etapas de creación. La primera fue Adán, la segunda Eva, la tercera el nacimiento natural, la cuarta Cristo, y la quinta es el 'Nacer de Nuevo'—la creación del Un Solo y Nuevo Hombre. Esta es la única manera de satisfacer la ley y escapar del lago de fuego."
                    : "Sa kasaysayan ng tao, may 5 paglalang. Ang una ay si Adan, pangalawa si Eva, pangatlo ang natural na birth, pang-apat si Cristo, at ang pang-lima ay ang 'Born Again'—ang paglalang sa Isang Taong Bago.")}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-3 font-serif">
                <Waves className="text-brand-gold" />
                {lang === 'en' ? "What is True Baptism?" : (lang === 'es' ? "¿Qué es el Verdadero Bautismo?" : "Ano ang Tunay na Bautismo?")}
              </h3>
              <div className="prose prose-slate prose-lg">
                <p>
                  {lang === 'en'
                    ? "The true baptism is baptism into death. It is the burial of the old sinful self. By being immersed in water, we signify our union with Christ in His death and resurrection."
                    : (lang === 'es'
                      ? "El verdadero bautismo es el bautismo en la muerte. Es el entierro del viejo yo pecaminoso. Al ser sumergidos en agua, significamos nuestra unión con Cristo en Su muerte y resurrección."
                      : "Ang tunay na bautismo ay bautismo sa kamatayan. Ito ang paglilibing sa dating makasalanang pagkatao.")}
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">
                {lang === 'en' ? "No Longer Enslaved" : (lang === 'es' ? "Ya No Esclavizados" : "Hindi na Alipin")}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {lang === 'en'
                  ? "Those baptized should no longer live the old man (their old self), but should live with Christ as one new man. By accepting Christ as our head, we become members of His body, the Church of Christ."
                  : (lang === 'es'
                    ? "Los bautizados ya no deben vivir según el viejo hombre (su antiguo yo), sino que deben vivir con Cristo como un solo y nuevo hombre. Al aceptar a Cristo como nuestra cabeza, nos convertimos en miembros de Su cuerpo, la Iglesia de Cristo."
                    : "Ang mga nabautismuhan ay hindi na dapat mamuhay sa lumang pagkatao, kundi dapat mamuhay kasama ni Cristo bilang isang taong bago. Sa pagtanggap kay Cristo bilang ulo, tayo ay nagiging bahagi ng Kaniyang katawan.")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-brand-gold font-bold">
                  <CheckCircle className="h-6 w-6" />
                  <span>{lang === 'en' ? "Legally freed from the Lake of Fire" : (lang === 'es' ? "Legalmente liberado del Lago de Fuego" : "Legal na pinalaya mula sa Dagat-dagatang Apoy")}</span>
                </div>
                <div className="flex items-center gap-4 text-brand-blue font-bold">
                  <CheckCircle className="h-6 w-6 text-brand-gold" />
                  <span>{lang === 'en' ? "Part of the One New Man" : (lang === 'es' ? "Parte del Un Solo y Nuevo Hombre" : "Bahagi ng Isang Taong Bago")}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-3 font-serif">
                <UserPlus className="text-brand-gold" />
                {lang === 'en' ? "The Mind of Christ" : (lang === 'es' ? "La Mente de Cristo" : "Ang Isipan ni Cristo")}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {lang === 'en'
                  ? "To live in Christ is to let the mind of Christ rule in our lives. This means living by His teachings and examples, resulting in a distinguishable character."
                  : (lang === 'es'
                    ? "Vivir en Cristo es dejar que la mente de Cristo gobierne nuestras vidas. Esto significa vivir según Sus enseñanzas y ejemplos, resultando en un carácter distinguible."
                    : "Ang mabuhay kay Cristo ay ang pagpapahintulot sa isipan ni Cristo na maghari sa ating buhay. Nangangahulugan ito ng pamumuhay ayon sa Kaniyang mga aral at halimbawa.")}
              </p>
              <div className="bg-brand-blue/5 p-4 rounded-xl border-l-4 border-brand-blue italic text-sm">
                {lang === 'en'
                  ? "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me..."
                  : (lang === 'es'
                    ? "Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí..."
                    : "Ako'y napako sa krus na kasama ni Cristo; at hindi na ako ang nabubuhay, kundi si Cristo ang nabubuhay sa akin...")}
                <span className="block mt-1 font-bold not-italic">— <ScriptureLink verse="Galatians 2:20" onHover={onHover}>{lang === 'es' ? 'Gálatas 2:20' : 'Galatians 2:20'}</ScriptureLink></span>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-3 font-serif">
                <Waves className="text-brand-gold" />
                {lang === 'en' ? "Entering the Flock" : (lang === 'es' ? "Entrando en el Rebaño" : "Pagpasok sa Kawan")}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {lang === 'en'
                  ? "Membership in the Church of Christ through baptism is necessary for salvation. Christ Himself said that whoever enters the flock through Him will be saved."
                  : (lang === 'es'
                    ? "La membresía en la Iglesia de Cristo a través del bautismo es necesaria para la salvación. Cristo mismo dijo que cualquiera que entre en el rebaño a través de Él será salvo."
                    : "Ang pagiging kaanib sa Iglesia ni Cristo sa pamamagitan ng bautismo ay kailangan para sa kaligtasan. Sinabi ni Cristo na ang sinumang pumasok sa kawan sa pamamagitan Niya ay maliligtas.")}
              </p>
              <div className="bg-brand-gold/10 p-6 rounded-2xl border border-brand-gold/20">
                <div className="flex items-center gap-2 text-brand-blue font-bold mb-2">
                  <CheckCircle size={18} />
                  <span>{lang === 'en' ? "The Promise of Salvation" : (lang === 'es' ? "La Promesa de Salvación" : "Ang Pangako ng Kaligtasan")}</span>
                </div>
                <p className="text-sm italic text-slate-700">
                  {lang === 'en'
                    ? "I am the door: by me if any man enter in, he shall be saved... and there shall be one flock, and one shepherd."
                    : (lang === 'es'
                      ? "Yo soy la puerta; el que por mí entrare, será salvo... y habrá un rebaño, y un pastor."
                      : "Ako ang pintuan: ang sinumang pumasok sa pamamagitan ko ay maliligtas... at magkakaroon ng isang kawan, at isang pastor.")}
                  <span className="block mt-1 font-bold not-italic">— <ScriptureLink verse="John 10:9" onHover={onHover}>{lang === 'es' ? 'Juan 10:9, 16' : 'John 10:9, 16'}</ScriptureLink></span>
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Process */}
          <div className="bg-brand-dark text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <UserPlus size={120} />
            </div>

            <h2 className="text-3xl font-bold mb-10 relative z-10 font-serif">
              {lang === 'en' ? "The Path to Membership" : (lang === 'es' ? "El Camino a la Membresía" : "Ang Daan sa Pagsapi")}
            </h2>

            <div className="space-y-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-gold mb-1">{step.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold mb-1">{lang === 'en' ? "Find a Local Congregation" : (lang === 'es' ? "Encontrar una Congregación Local" : "Maghanap ng Lokal na Kongregasyon")}</h5>
                  <p className="text-xs text-slate-400">
                    {lang === 'en'
                      ? "Look for the Church of Christ seal on chapels in your area. A Minister is always available to assist you."
                      : (lang === 'es'
                        ? "Busque el sello de la Iglesia de Cristo en las capillas de su área. Un Ministro siempre está disponible para asistirle."
                        : "Hanapin ang selyo ng Iglesia ni Cristo sa mga kapilya sa inyong lugar. May Ministro na laging handang tumulong.")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer CTA */}
      <section className="bg-slate-100 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-6 font-serif">
            {lang === 'en' ? "Ready to Walk in Newness of Life?" : (lang === 'es' ? "¿Listo para Caminar en Nueva Vida?" : "Handa ka na bang lumakad sa panibagong buhay?")}
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            {lang === 'en'
              ? "The journey to salvation begins with a single step. Join the flock and secure your name in the Book of Life."
              : (lang === 'es'
                ? "El viaje a la salvación comienza con un solo paso. Únete al rebaño y asegura tu nombre en el Libro de la Vida."
                : "Ang paglalakbay sa kaligtasan ay nagsisimula sa isang hakbang. Pumasok sa kawan at isiguro ang iyong pangalan sa Aklat ng Buhay.")}
          </p>
          <button
            onClick={() => onBack('mission')}
            className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg hover:-translate-y-1 btn-glow"
          >
            {lang === 'en' ? "Contact a Minister" : (lang === 'es' ? "Contactar a un Ministro" : "Makipag-ugnayan sa Ministro")}
          </button>
        </div>
      </section>
    </div>
  );
}
