import React from "react";
import {
  Book,
  Scroll,
  PenTool,
  ShieldCheck,
  Compass,
  Zap,
  Globe,
  History,
  Search,
  ArrowLeft,
  X,
  ChevronRight,
  Clock,
  CheckCircle2,
  Scale,
  Users,
  Flame,
  Eye,
  Infinity,
  Heart,
  Tag,
  Droplets,
  Presentation,
  ExternalLink,
  FileText,
  Star,
} from "lucide-react";
import { ScriptureLink } from "../scriptureData";
import { Lesson } from "../types/study";
import Lesson01Content, {
  frontmatter as lesson01Fm,
} from "../content/lessons/01-divine-revelation.mdx";

import Lesson02Content, {
  frontmatter as lesson02Fm,
} from "../content/lessons/02-the-command-to-record-and-preserve.mdx";
import Lesson03Content, {
  frontmatter as lesson03Fm,
} from "../content/lessons/03-the-composition-and-the-command.mdx";
import Lesson04Content, {
  frontmatter as lesson04Fm,
} from "../content/lessons/04-evidence-of-authenticity-prophecy.mdx";
import Lesson05Content, {
  frontmatter as lesson05Fm,
} from "../content/lessons/05-ancient-insight-modern-discovery.mdx";
import Lesson06Content, {
  frontmatter as lesson06Fm,
} from "../content/lessons/06-the-five-creations-the-new-man.mdx";
import Lesson07Content, {
  frontmatter as lesson07Fm,
} from "../content/lessons/07-the-only-true-god.mdx";
import Lesson08Content, {
  frontmatter as lesson08Fm,
} from "../content/lessons/08-the-nature-of-the-true-god.mdx";
import Lesson09Content, {
  frontmatter as lesson09Fm,
} from "../content/lessons/09-the-attributes-of-god.mdx";
import Lesson10Content, {
  frontmatter as lesson10Fm,
} from "../content/lessons/10-the-character-of-the-true-god.mdx";
import Lesson11Content, {
  frontmatter as lesson11Fm,
} from "../content/lessons/11-the-names-and-titles-of-god.mdx";
import Lesson12Content, {
  frontmatter as lesson12Fm,
} from "../content/lessons/12-the-nature-of-jesus-christ.mdx";
import Lesson13Content, {
  frontmatter as lesson13Fm,
} from "../content/lessons/13-the-pre-existence-of-christ.mdx";
import Lesson14Content, {
  frontmatter as lesson14Fm,
} from "../content/lessons/14-the-virgin-birth-of-christ.mdx";
import Lesson15Content, {
  frontmatter as lesson15Fm,
} from "../content/lessons/15-the-purpose-of-christ-s-coming.mdx";
import Lesson16Content, {
  frontmatter as lesson16Fm,
} from "../content/lessons/16-the-ends-of-the-earth.mdx";
import Lesson17Content, {
  frontmatter as lesson17Fm,
} from "../content/lessons/17-the-authority-to-preach.mdx";
import Lesson18Content, {
  frontmatter as lesson18Fm,
} from "../content/lessons/18-the-messenger-from-the-far-east.mdx";
import Lesson19Content, {
  frontmatter as lesson19Fm,
} from "../content/lessons/19-true-religion.mdx";
import Lesson20Content, {
  frontmatter as lesson20Fm,
} from "../content/lessons/20-the-one-new-man.mdx";
import Lesson21Content, {
  frontmatter as lesson21Fm,
} from "../content/lessons/21-the-last-trumpet.mdx";
import Lesson22Content, {
  frontmatter as lesson22Fm,
} from "../content/lessons/22-the-great-judgment.mdx";
import Lesson23Content, {
  frontmatter as lesson23Fm,
} from "../content/lessons/23-the-book-of-deeds.mdx";
import Lesson25Content, {
  frontmatter as lesson25Fm,
} from "../content/lessons/25-the-holy-supper.mdx";
import Lesson26Content, {
  frontmatter as lesson26Fm,
} from "../content/lessons/26-the-core-paradox.mdx";
import Lesson27Content, {
  frontmatter as lesson27Fm,
} from "../content/lessons/27-the-parable-of-the-weeds.mdx";
import Lesson28Content, {
  frontmatter as lesson28Fm,
} from "../content/lessons/28-the-total-apostasy.mdx";
import Lesson29Content, {
  frontmatter as lesson29Fm,
} from "../content/lessons/29-the-doctrines-of-demons.mdx";
import Lesson30Content, {
  frontmatter as lesson30Fm,
} from "../content/lessons/30-replacing-the-foundation.mdx";
import Lesson31Content, {
  frontmatter as lesson31Fm,
} from "../content/lessons/31-mother-and-daughters.mdx";
import Lesson32Content, {
  frontmatter as lesson32Fm,
} from "../content/lessons/32-the-historical-map.mdx";
import Lesson33Content, {
  frontmatter as lesson33Fm,
} from "../content/lessons/33-the-everlasting-covenant.mdx";
import Lesson34Content, {
  frontmatter as lesson34Fm,
} from "../content/lessons/34-the-one-new-man-the-salvation-paradox-solved.mdx";
import Lesson35Content, {
  frontmatter as lesson35Fm,
} from "../content/lessons/35-the-lineage-of-the-promise-seed-of-abraham.mdx";
import Lesson36Content, {
  frontmatter as lesson36Fm,
} from "../content/lessons/36-the-requirement-to-be-born-again.mdx";
import Lesson37Content, {
  frontmatter as lesson37Fm,
} from "../content/lessons/37-propagation-the-parable-of-the-sower.mdx";
import Lesson38Content, {
  frontmatter as lesson38Fm,
} from "../content/lessons/38-the-legal-necessity-of-the-church.mdx";
import Lesson39Content, {
  frontmatter as lesson39Fm,
} from "../content/lessons/39-the-name-and-the-final-call.mdx";
import Lesson40Content, {
  frontmatter as lesson40Fm,
} from "../content/lessons/40-the-new-covenant-in-his-blood.mdx";
import Lesson41Content, {
  frontmatter as lesson41Fm,
} from "../content/lessons/41-the-elect-of-god.mdx";
import Lesson42Content, {
  frontmatter as lesson42Fm,
} from "../content/lessons/42-the-foreknowledge-of-god.mdx";
import Lesson43Content, {
  frontmatter as lesson43Fm,
} from "../content/lessons/43-the-called-out-assembly.mdx";
import Lesson44Content, {
  frontmatter as lesson44Fm,
} from "../content/lessons/44-the-mystery-of-the-one-new-man.mdx";
import Lesson45Content, {
  frontmatter as lesson45Fm,
} from "../content/lessons/45-christ-the-head-church-the-body.mdx";
import Lesson46Content, {
  frontmatter as lesson46Fm,
} from "../content/lessons/46-the-fullness-of-the-one-new-man.mdx";

export const getLessons = (
  lang: "en" | "tl" | "es",
  onHover: (verse: string | null, x: number, y: number) => void,
): Lesson[] => {
  const lz = <T,>(en: T, tl?: T, es?: T): T => {
    if (lang === "es") return es || en;
    if (lang === "tl") return tl || en;
    return en;
  };
  return [
    {
      id: 1,
      category: lesson01Fm.category,
      title: lesson01Fm.title,
      titleTl: lesson01Fm.titleTl,
      titleEs: lesson01Fm.titleEs,
      icon: Zap, // We could map the icon string from frontmatter to the actual lucide component later
      searchKeywords: lesson01Fm.searchKeywords,
      searchKeywordsTl: lesson01Fm.searchKeywordsTl,
      searchKeywordsEs: lesson01Fm.searchKeywordsEs,
      searchContent: lesson01Fm.searchContent,
      searchContentTl: lesson01Fm.searchContentTl,
      searchContentEs: lesson01Fm.searchContentEs,
      content: <Lesson01Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson01Fm.quizTitle, lesson01Fm.quizTitleTl, lesson01Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "How did God physically write the Ten Commandments?",
              "Paano pisikal na isinulat ng Diyos ang Sampung Utos?",
              "¿Cómo escribió Dios físicamente los Diez Mandamientos?",
            ),
            options: lz(
              [
                "Through a scribe",
                "With His 'finger' on stone tablets",
                "By dictating to Moses",
                "Through an angel",
              ],
              [
                "Sa pamamagitan ng isang eskriba",
                "Gamit ang Kaniyang 'daliri' sa mga tapyas na bato",
                "Sa pagdidikta kay Moises",
                "Sa pamamagitan ng isang anghel",
              ],
              [
                "A través de un escriba",
                "Con Su 'dedo' en tablas de piedra",
                "Dictando a Moisés",
                "Por medio de un ángel",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Deuteronomy 9:10 says the tablets were written with the finger of God.",
              "Sinasabi sa Deuteronomio 9:10 na ang mga tapyas ay isinulat ng daliri ng Diyos.",
              "Deuteronomio 9:10 dice que las tablas fueron escritas con el dedo de Dios.",
            ),
          },
          {
            question: lz(
              "Who is the 'Ultimate Messenger' in the Christian era according to Hebrews 1:1-2?",
              "Sino ang 'Pinakadakilang Sugo' sa panahong Kristiyano ayon sa Hebreo 1:1-2?",
              "¿Quién es el 'Mensajero Supremo' en la era cristiana según Hebreos 1:1-2?",
            ),
            options: lz(
              ["Moses", "Jeremiah", "Jesus Christ", "The Apostle Paul"],
              ["Moises", "Jeremias", "Jesucristo", "Ang Apostol Pablo"],
              ["Moisés", "Jeremías", "Jesucristo", "El Apóstol Pablo"],
            ),
            correctIndex: 2,
            explanation: lz(
              "Hebrews 1:1-2 states that in these last days, God has spoken to us by His Son.",
              "Sinasabi sa Hebreo 1:1-2 na sa mga huling araw na ito, ang Diyos ay nagsalita sa atin sa pamamagitan ng Kaniyang Anak.",
              "Hebreos 1:1-2 afirma que en estos últimos días, Dios nos ha hablado por medio de Su Hijo.",
            ),
          },
        ],
      },
    },
    {
      id: 2,
      category: lesson02Fm.category,
      title: lesson02Fm.title,
      titleTl: lesson02Fm.titleTl,
      titleEs: lesson02Fm.titleEs,
      icon: PenTool,
      searchKeywords: lesson02Fm.searchKeywords,
      searchKeywordsTl: lesson02Fm.searchKeywordsTl,
      searchKeywordsEs: lesson02Fm.searchKeywordsEs,
      searchContent: lesson02Fm.searchContent,
      searchContentTl: lesson02Fm.searchContentTl,
      searchContentEs: lesson02Fm.searchContentEs,
      content: <Lesson02Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson02Fm.quizTitle, lesson02Fm.quizTitleTl, lesson02Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What was the purpose of 'sealing' the book in Daniel 12:4?",
              "Ano ang layunin ng 'pagtatatak' sa aklat sa Daniel 12:4?",
              "¿Cuál fue el propósito de 'sellar' el libro en Daniel 12:4?",
            ),
            options: lz(
              [
                "To hide it forever",
                "To safeguard the truth and indicate completion",
                "To make it look official",
                "To prevent anyone from reading it",
              ],
              [
                "Upang itago ito magpakailanman",
                "Upang bantayan ang katotohanan at ipahiwatig ang pagtatapos",
                "Upang magmukha itong opisyal",
                "Upang pigilan ang sinuman sa pagbabasa nito",
              ],
              [
                "Para ocultarlo para siempre",
                "Para salvaguardar la verdad e indicar su finalización",
                "Para que parezca oficial",
                "Para evitar que alguien lo lea",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Sealing indicates that the revelation is complete and must be safeguarded against alteration.",
              "Ang pagtatatak ay nagpapahiwatig na ang pahayag ay tapos na at dapat bantayan laban sa pagbabago.",
              "El sellado indica que la revelación está completa y debe ser protegida contra alteraciones.",
            ),
          },
          {
            question: lz(
              "According to Jeremiah 30:2, where was Jeremiah commanded to write God's words?",
              "Ayon sa Jeremias 30:2, saan inutusan si Jeremias na isulat ang mga salita ng Diyos?",
              "Según Jeremías 30:2, ¿dónde se le ordenó a Jeremías escribir las palabras de Dios?",
            ),
            options: lz(
              [
                "On stone tablets",
                "In a book",
                "On the walls of the temple",
                "In the hearts of the people",
              ],
              [
                "Sa mga tapyas na bato",
                "Sa isang aklat",
                "Sa mga dingding ng templo",
                "Sa mga puso ng mga tao",
              ],
              [
                "En tablas de piedra",
                "En un libro",
                "En las paredes del templo",
                "En los corazones de las personas",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "God said: 'Write all the words that I have spoken to you in a book'.",
              "Sinabi ng Diyos: 'Isulat mo sa isang aklat ang lahat ng mga salita na aking sinalita sa iyo'.",
              "Dios dijo: 'Escribe en un libro todas las palabras que te he hablado'.",
            ),
          },
        ],
      },
    },
    {
      id: 3,
      category: lesson03Fm.category,
      title: lesson03Fm.title,
      titleTl: lesson03Fm.titleTl,
      titleEs: lesson03Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson03Fm.searchKeywords,
      searchKeywordsTl: lesson03Fm.searchKeywordsTl,
      searchKeywordsEs: lesson03Fm.searchKeywordsEs,
      searchContent: lesson03Fm.searchContent,
      searchContentTl: lesson03Fm.searchContentTl,
      searchContentEs: lesson03Fm.searchContentEs,
      content: <Lesson03Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson03Fm.quizTitle, lesson03Fm.quizTitleTl, lesson03Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "How many writers contributed to the Bible?",
              "Ilang manunulat ang nag-ambag sa Biblia?",
              "¿Cuántos escritores contribuyeron a la Biblia?",
            ),
            options: lz(
              ["12", "40", "100", "1"],
              ["12", "40", "100", "1"],
              ["12", "40", "100", "1"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Approximately 40 writers contributed to the 66 books of the Bible.",
              "Humigit-kumulang 40 manunulat ang nag-ambag sa 66 na aklat ng Biblia.",
              "Aproximadamente 40 escritores contribuyeron a los 66 libros de la Biblia.",
            ),
          },
          {
            question: lz(
              "What is the command in 1 Corinthians 4:6 regarding God's Word?",
              "Ano ang utos sa 1 Corinto 4:6 tungkol sa Salita ng Diyos?",
              "¿Cuál es el mandato en 1 Corintios 4:6 con respecto a la Palabra de Dios?",
            ),
            options: lz(
              [
                "Interpret it as you wish",
                "Do not go beyond what is written",
                "Add your own wisdom",
                "Only read the New Testament",
              ],
              [
                "Bigyang-kahulugan ito ayon sa gusto mo",
                "Huwag lumampas sa nasusulat",
                "Idagdag ang iyong sariling karunungan",
                "Basahin lamang ang Bagong Tipan",
              ],
              [
                "Interprétalo como desees",
                "No ir más allá de lo que está escrito",
                "Añade tu propia sabiduría",
                "Solo leer el Nuevo Testamento",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Corinthians 4:6 strictly prohibits going beyond the written Word.",
              "Mahigpit na ipinagbabawal ng 1 Corinto 4:6 ang paglampas sa nasusulat na Salita.",
              "1 Corintios 4:6 prohíbe estrictamente ir más allá de la Palabra escrita.",
            ),
          },
        ],
      },
    },
    {
      id: 4,
      category: lesson04Fm.category,
      title: lesson04Fm.title,
      titleTl: lesson04Fm.titleTl,
      titleEs: lesson04Fm.titleEs,
      icon: History,
      searchKeywords: lesson04Fm.searchKeywords,
      searchKeywordsTl: lesson04Fm.searchKeywordsTl,
      searchKeywordsEs: lesson04Fm.searchKeywordsEs,
      searchContent: lesson04Fm.searchContent,
      searchContentTl: lesson04Fm.searchContentTl,
      searchContentEs: lesson04Fm.searchContentEs,
      content: <Lesson04Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson04Fm.quizTitle, lesson04Fm.quizTitleTl, lesson04Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the 'half hour of silence' in Revelation 8:1 equivalent to in human time?",
              "Ano ang katumbas ng 'kalahating oras na katahimikan' sa Apocalipsis 8:1 sa panahon ng tao?",
              "¿A qué equivale la 'media hora de silencio' en Apocalipsis 8:1 en tiempo humano?",
            ),
            options: lz(
              [
                "30 minutes",
                "Approximately 20 years and 10 months",
                "100 years",
                "1,000 years",
              ],
              [
                "30 minuto",
                "Humigit-kumulang 20 taon at 10 buwan",
                "100 taon",
                "1,000 taon",
              ],
              [
                "30 minutos",
                "Aproximadamente 20 años y 10 meses",
                "100 años",
                "1,000 años",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Using the rule 1 day = 1,000 years (2 Pet 3:8), half an hour calculates to ~20 years and 10 months.",
              "Gamit ang tuntuning 1 araw = 1,000 taon (2 Ped 3:8), ang kalahating oras ay kalkulado bilang ~20 taon at 10 buwan.",
              "Usando la regla 1 día = 1,000 años (2 Ped 3:8), media hora se calcula en ~20 años y 10 meses.",
            ),
          },
          {
            question: lz(
              "Which two global events are separated by this 'half hour of silence'?",
              "Aling dalawang pandaigdigang kaganapan ang pinaghihiwalay ng 'kalahating oras na katahimikan' na ito?",
              "¿Qué dos eventos globales están separados por esta 'media hora de silencio'?",
            ),
            options: lz(
              [
                "Creation and Flood",
                "WWI and WWII",
                "Birth of Christ and His death",
                "The Dark Ages and Reformation",
              ],
              [
                "Paghulog at Baha",
                "WWI at WWII",
                "Kamatayan at Muling Pagkabuhay ni Cristo",
                "Ang Madilim na Panahon at Repormasyon",
              ],
              [
                "Creación y Diluvio",
                "Primera y Segunda Guerra Mundial",
                "Nacimiento de Cristo y Su muerte",
                "La Edad Media y la Reforma",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "The gap between the end of WWI and the start of WWII perfectly aligns with this prophecy.",
              "Ang agwat sa pagitan ng pagtatapos ng WWI at simula ng WWII ay perpektong tumutugma sa hulang ito.",
              "La brecha entre el final de la Primera Guerra Mundial y el comienzo de la Segunda Guerra Mundial se alinea perfectamente con esta profecía.",
            ),
          },
        ],
      },
    },
    {
      id: 5,
      category: lesson05Fm.category,
      title: lesson05Fm.title,
      titleTl: lesson05Fm.titleTl,
      titleEs: lesson05Fm.titleEs,
      icon: Globe,
      searchKeywords: lesson05Fm.searchKeywords,
      searchKeywordsTl: lesson05Fm.searchKeywordsTl,
      searchKeywordsEs: lesson05Fm.searchKeywordsEs,
      searchContent: lesson05Fm.searchContent,
      searchContentTl: lesson05Fm.searchContentTl,
      searchContentEs: lesson05Fm.searchContentEs,
      content: <Lesson05Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson05Fm.quizTitle, lesson05Fm.quizTitleTl, lesson05Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What did Jeremiah 33:22 declare when ancient astronomers believed there were only ~3,000 stars?",
              "Ano ang idineklara ng Jeremias 33:22 noong naniniwala ang mga sinaunang astronomo na mayroon lamang ~3,000 bituin?",
              "¿Qué declaró Jeremías 33:22 cuando los antiguos astrónomos creían que solo había ~3,000 estrellas?",
            ),
            options: lz(
              [
                "The stars are countable",
                "The stars are innumerable",
                "The stars are made of fire",
                "The stars are falling",
              ],
              [
                "Ang mga bituin ay mabibilang",
                "Ang mga bituin ay hindi mabibilang",
                "Ang mga bituin ay gawa sa apoy",
                "Ang mga bituin ay nahuhulog",
              ],
              [
                "Las estrellas son contables",
                "Las estrellas son innumerables",
                "Las estrellas están hechas de fuego",
                "Las estrellas están cayendo",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Jeremiah 33:22 correctly stated that the host of heaven cannot be numbered.",
              "Tumpak na sinabi ng Jeremias 33:22 na ang hukbo ng langit ay hindi mabibilang.",
              "Jeremías 33:22 declaró correctamente que el ejército del cielo no puede ser contado.",
            ),
          },
          {
            question: lz(
              "Biblical claim about earth's foundation in Job 26:7?",
              "Makahulang pahayag tungkol sa pundasyon ng lupa sa Job 26:7?",
              "¿Declaración bíblica sobre los cimientos de la tierra en Job 26:7?",
            ),
            options: lz(
              [
                "Rests on pillars",
                "On the shoulders of Atlas",
                "Suspended on nothing",
                "Floating on water",
              ],
              [
                "Nakasandig sa mga haligi",
                "Sa mga balikat ni Atlas",
                "Nakalaylay sa wala",
                "Lumulutang sa tubig",
              ],
              [
                "Descansa sobre pilares",
                "Sobre los hombros de Atlas",
                "Suspendida sobre la nada",
                "Flotando sobre el agua",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Job 26:7 accurately describes the Earth suspended in space.",
              "Tumpak na inilalarawan ng Job 26:7 ang Lupa na nakabitin sa kalawakan.",
              "Job 26:7 describe con precisión la Tierra suspendida en el espacio.",
            ),
          },
        ],
      },
    },
    {
      id: 6,
      category: lesson06Fm.category,
      title: lesson06Fm.title,
      titleTl: lesson06Fm.titleTl,
      titleEs: lesson06Fm.titleEs,
      icon: Users,
      searchKeywords: lesson06Fm.searchKeywords,
      searchKeywordsTl: lesson06Fm.searchKeywordsTl,
      searchKeywordsEs: lesson06Fm.searchKeywordsEs,
      searchContent: lesson06Fm.searchContent,
      searchContentTl: lesson06Fm.searchContentTl,
      searchContentEs: lesson06Fm.searchContentEs,
      content: <Lesson06Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson06Fm.quizTitle, lesson06Fm.quizTitleTl, lesson06Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the 5th creation according to the lesson?",
              "Ano ang huling paglikha ayon sa aralin?",
              "¿Cuál es la quinta creación según la lección?",
            ),
            options: lz(
              [
                "The Angels",
                "The New Man (Born Again)",
                "The Animals",
                "The Stars",
              ],
              [
                "Ang mga Anghel",
                "Ang Isang Bagong Tao (Muling Pagkapanganak)",
                "Ang mga Hayop",
                "Ang mga Bituin",
              ],
              [
                "Los Ángeles",
                "El Solo y Nuevo Hombre (Nacer de Nuevo)",
                "Los Animales",
                "Las Estrellas",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "The 5th creation is the 'New Man', which is the spiritual union of Christ (Head) and the Church (Body).",
              "Ang ika-5 na paglikha ay ang 'Bagong Tao', ang espirituwal na pagkakaisa ni Cristo (Ulo) at ng Iglesia (Katawan).",
              "La quinta creación es el 'Solo y Nuevo Hombre', que es la unión espiritual de Cristo (Cabeza) y la Iglesia (Cuerpo).",
            ),
          },
          {
            question: lz(
              "How does the 'One New Man' satisfy the legal requirement of Deuteronomy 24:16?",
              "Paano tinutupad ng 'Isang Bagong Tao' ang legal na kinakailangan sa Deuteronomio 24:16?",
              "¿Cómo satisface el 'Solo y Nuevo Hombre' el requisito legal de Deuteronomio 24:16?",
            ),
            options: lz(
              [
                "By ignoring the law",
                "By Christ paying the debt for His members (His Body)",
                "By everyone being perfect",
                "By abolishing the Old Testament",
              ],
              [
                "Sa pamamagitan ng pagbalewala sa batas",
                "Sa pamamagitan ng pagbabayad ni Cristo sa utang para sa Kaniyang mga kaanib (Katawan)",
                "Sa pamamagitan ng pagiging perpekto ng lahat",
                "Sa pamamagitan ng pagbuwag sa Lumang Tipan",
              ],
              [
                "Ignorando la ley",
                "Cristo pagando la deuda por Sus miembros (Su Cuerpo)",
                "Siendo todos perfectos",
                "Aboliendo el Antiguo Testamento",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              <>
                Since the Church is the Body of Christ, when Christ died, He
                legally paid for the sins of His members, satisfying the law (
                <ScriptureLink verse="Deuteronomy 24:16" onHover={onHover}>
                  Deut. 24:16
                </ScriptureLink>
                ) that each must die for their own sin.
              </>,
              <>
                Dahil ang Iglesia ay ang Katawan ni Cristo, nang mamatay si
                Cristo, legal Niyang binayaran ang mga kasalanan ng Kaniyang mga
                kaanib, na tumutupad sa batas (
                <ScriptureLink verse="Deuteronomy 24:16" onHover={onHover}>
                  Deut. 24:16
                </ScriptureLink>
                ) na ang bawat isa ay dapat mamatay para sa sariling kasalanan.
              </>,
              <>
                Puesto que la Iglesia es el Cuerpo de Cristo, cuando Cristo
                murió, pagó legalmente por los pecados de Sus miembros,
                satisfaciendo la ley (
                <ScriptureLink verse="Deuteronomy 24:16" onHover={onHover}>
                  Deut. 24:16
                </ScriptureLink>
                ) de que cada uno debe morir por su propio pecado.
              </>,
            ),
          },
        ],
      },
    },
    {
      id: 7,
      category: lesson07Fm.category,
      title: lesson07Fm.title,
      titleTl: lesson07Fm.titleTl,
      titleEs: lesson07Fm.titleEs,
      icon: Flame,
      searchKeywords: lesson07Fm.searchKeywords,
      searchKeywordsTl: lesson07Fm.searchKeywordsTl,
      searchKeywordsEs: lesson07Fm.searchKeywordsEs,
      searchContent: lesson07Fm.searchContent,
      searchContentTl: lesson07Fm.searchContentTl,
      searchContentEs: lesson07Fm.searchContentEs,
      content: <Lesson07Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson07Fm.quizTitle, lesson07Fm.quizTitleTl, lesson07Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Who did Jesus identify as the 'only true God' in John 17:3?",
              "Sino ang kinilala ni Jesus bilang 'iisang tunay na Diyos' sa Juan 17:3?",
              "¿A quién identificó Jesús como el 'único Dios verdadero' en Juan 17:3?",
            ),
            options: lz(
              ["The Trinity", "Himself", "The Father", "The Holy Spirit"],
              [
                "Ang Trinidad",
                "Ang Kaniyang Sarili",
                "Ang Ama",
                "Ang Espiritu Santo",
              ],
              ["La Trinidad", "A Sí mismo", "Al Padre", "Al Espíritu Santo"],
            ),
            correctIndex: 2,
            explanation: lz(
              "In John 17:3, Jesus addressed the Father as the only true God.",
              "Sa Juan 17:3, tinawag ni Jesus ang Ama bilang iisang tunay na Diyos.",
              "En Juan 17:3, Jesús se dirigió al Padre como el único Dios verdadero.",
            ),
          },
          {
            question: lz(
              "According to 1 Corinthians 8:6, how many Gods are there for true Christians?",
              "Ayon sa 1 Corinto 8:6, ilan ang Diyos para sa mga tunay na Kristiyano?",
              "Según 1 Corintios 8:6, ¿cuántos Dioses hay para los verdaderos cristianos?",
            ),
            options: lz(
              ["Three", "One (The Father)", "Two", "Many"],
              ["Tatlo", "Isa (Ang Ama)", "Dalawa", "Marami"],
              ["Tres", "Uno (El Padre)", "Dos", "Muchos"],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Corinthians 8:6 explicitly states 'to us there is but one God, the Father'.",
              "Malinaw na sinasabi sa 1 Corinto 8:6 na 'sa ganang atin ay may isa lamang Dios, ang Ama'.",
              "1 Corintios 8:6 afirma explícitamente 'para nosotros, sin embargo, solo hay un Dios, el Padre'.",
            ),
          },
        ],
      },
    },
    {
      id: 8,
      category: lesson08Fm.category,
      title: lesson08Fm.title,
      titleTl: lesson08Fm.titleTl,
      titleEs: lesson08Fm.titleEs,
      icon: Eye,
      searchKeywords: lesson08Fm.searchKeywords,
      searchKeywordsTl: lesson08Fm.searchKeywordsTl,
      searchKeywordsEs: lesson08Fm.searchKeywordsEs,
      searchContent: lesson08Fm.searchContent,
      searchContentTl: lesson08Fm.searchContentTl,
      searchContentEs: lesson08Fm.searchContentEs,
      content: <Lesson08Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson08Fm.quizTitle, lesson08Fm.quizTitleTl, lesson08Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the nature of God according to John 4:24?",
              "Ano ang kalikasan ng Diyos ayon sa Juan 4:24?",
              "¿Cuál es la naturaleza de Dios según Juan 4:24?",
            ),
            options: lz(
              [
                "He is a man",
                "He is Spirit",
                "He is an energy force",
                "He is a statue",
              ],
              [
                "Siya ay tao",
                "Siya ay Espiritu",
                "Siya ay puwersa ng enerhiya",
                "Siya ay estatwa",
              ],
              [
                "Él es un hombre",
                "Él es Espíritu",
                "Él es una fuerza de energía",
                "Él es una estatua",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "John 4:24 states: 'God is a Spirit'.",
              "Sinasabi sa Juan 4:24: 'Ang Dios ay Espiritu'.",
              "Juan 4:24 afirma: 'Dios es Espíritu'.",
            ),
          },
          {
            question: lz(
              "Does God have flesh and bones like humans?",
              "Ang Diyos ba ay may laman at mga buto gaya ng mga tao?",
              "¿Tiene Dios carne y huesos como los humanos?",
            ),
            options: lz(
              [
                "Yes",
                "No, for a spirit hath not flesh and bones",
                "Only in the Old Testament",
                "The Bible doesn't say",
              ],
              [
                "Oo",
                "Hindi, sapagkat ang isang espiritu ay walang laman at mga buto",
                "Sa Matandang Tipan lamang",
                "Hindi sinasabi ng Biblia",
              ],
              [
                "Sí",
                "No, porque un espíritu no tiene carne ni huesos",
                "Solo en el Antiguo Testamento",
                "La Biblia no lo dice",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Luke 24:39 clarifies that a spirit does not have flesh and bones.",
              "Nililinaw ng Lucas 24:39 na ang isang espiritu ay walang laman at mga buto.",
              "Lucas 24:39 aclara que un espíritu no tiene carne ni huesos.",
            ),
          },
          {
            question: lz(
              "What does Hosea 11:9 say about God's identity?",
              "Ano ang sinasabi ng Hosea 11:9 tungkol sa pagkakakilanlan ng Diyos?",
              "¿Qué dice Oseas 11:9 sobre la identidad de Dios?",
            ),
            options: lz(
              [
                "He is a man",
                "He is not a man",
                "He is an angel",
                "He is a king",
              ],
              [
                "Siya ay tao",
                "Siya ay hindi tao",
                "Siya ay anghel",
                "Siya ay hari",
              ],
              [
                "Él es un hombre",
                "Él no es hombre",
                "Él es un ángel",
                "Él es un rey",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Hosea 11:9 states: 'for I am God, and not man'.",
              "Sinasabi sa Hosea 11:9: 'sapagka't ako'y Dios, at hindi tao'.",
              "Oseas 11:9 afirma: 'porque Dios soy, y no hombre'.",
            ),
          },
        ],
      },
    },
    {
      id: 9,
      category: lesson09Fm.category,
      title: lesson09Fm.title,
      titleTl: lesson09Fm.titleTl,
      titleEs: lesson09Fm.titleEs,
      icon: Infinity,
      searchKeywords: lesson09Fm.searchKeywords,
      searchKeywordsTl: lesson09Fm.searchKeywordsTl,
      searchKeywordsEs: lesson09Fm.searchKeywordsEs,
      searchContent: lesson09Fm.searchContent,
      searchContentTl: lesson09Fm.searchContentTl,
      searchContentEs: lesson09Fm.searchContentEs,
      content: <Lesson09Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson09Fm.quizTitle, lesson09Fm.quizTitleTl, lesson09Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What does Psalm 90:2 declare about God's existence?",
              "Ano ang ipinahahayag ng Awit 90:2 tungkol sa pag-iral ng Diyos?",
              "¿Qué declara el Salmo 90:2 sobre la existencia de Dios?",
            ),
            options: lz(
              [
                "He was created",
                "He has a beginning",
                "He is from everlasting to everlasting",
                "He is temporary",
              ],
              [
                "Siya ay nilikha",
                "Siya ay may simula",
                "Siya ay mula sa walang hanggan hanggang sa walang hanggan",
                "Siya ay pansamantala",
              ],
              [
                "Él fue creado",
                "Él tiene un principio",
                "Él es desde el siglo y hasta el siglo",
                "Él es temporal",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Psalm 90:2 says God is from everlasting to everlasting, meaning He is eternal.",
              "Sinasabi sa Awit 90:2 na ang Diyos ay mula sa walang hanggan hanggang sa walang hanggan.",
              "El Salmo 90:2 dice que Dios es desde el siglo y hasta el siglo, lo que significa que es eterno.",
            ),
          },
          {
            question: lz(
              "How did God identify Himself to Abraham in Genesis 17:1?",
              "Paano ipinakilala ng Diyos ang Kaniyang sarili kay Abraham sa Genesis 17:1?",
              "¿Cómo se identificó Dios ante Abraham en Génesis 17:1?",
            ),
            options: lz(
              [
                "I am a man",
                "I am the Almighty God",
                "I am an angel",
                "I am a prophet",
              ],
              [
                "Ako ay tao",
                "Ako ang Makapangyarihang Diyos",
                "Ako ay anghel",
                "Ako ay propeta",
              ],
              [
                "Yo soy un hombre",
                "Yo soy el Dios Todopoderoso",
                "Yo soy un ángel",
                "Yo soy un profeta",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "In Genesis 17:1, God said: 'I am the Almighty God'.",
              "Sa Genesis 17:1, sinabi ng Diyos: 'Ako ang Dios na Makapangyarihan sa lahat'.",
              "En Génesis 17:1, Dios dijo: 'Yo soy el Dios Todopoderoso'.",
            ),
          },
        ],
      },
    },
    {
      id: 10,
      category: lesson10Fm.category,
      title: lesson10Fm.title,
      titleTl: lesson10Fm.titleTl,
      titleEs: lesson10Fm.titleEs,
      icon: Heart,
      searchKeywords: lesson10Fm.searchKeywords,
      searchKeywordsTl: lesson10Fm.searchKeywordsTl,
      searchKeywordsEs: lesson10Fm.searchKeywordsEs,
      searchContent: lesson10Fm.searchContent,
      searchContentTl: lesson10Fm.searchContentTl,
      searchContentEs: lesson10Fm.searchContentEs,
      content: <Lesson10Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson10Fm.quizTitle, lesson10Fm.quizTitleTl, lesson10Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the defining character of God according to 1 John 4:8?",
              "Ano ang nagbibigay-kahulugan sa katangian ng Diyos ayon sa 1 Juan 4:8?",
              "¿Cuál es el carácter que define a Dios según 1 Juan 4:8?",
            ),
            options: lz(
              ["Anger", "Indifference", "Love", "Confusion"],
              ["Galit", "Walang pakialam", "Pag-ibig", "Kalituhan"],
              ["Ira", "Indiferencia", "Amor", "Confusión"],
            ),
            correctIndex: 2,
            explanation: lz(
              "1 John 4:8 explicitly states that 'God is love'.",
              "Malinaw na sinasabi sa 1 Juan 4:8 na 'ang Dios ay pag-ibig'.",
              "1 Juan 4:8 afirma explícitamente que 'Dios es amor'.",
            ),
          },
          {
            question: lz(
              "How does Deuteronomy 32:4 describe God's justice?",
              "Paano inilalarawan ng Deuteronomio 32:4 ang katarungan ng Diyos?",
              "¿Cómo describe Deuteronomio 32:4 la justicia de Dios?",
            ),
            options: lz(
              ["Unfair", "Just and right", "Changing", "Weak"],
              ["Hindi patas", "Matuwid at tumpak", "Nagbabago", "Mahina"],
              ["Injusto", "Justo y recto", "Cambiante", "Débil"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Deuteronomy 32:4 says God is 'just and right'.",
              "Sinasabi sa Deuteronomio 32:4 na ang Diyos ay 'matuwid at tumpak'.",
              "Deuteronomio 32:4 dice que Dios es 'justo y recto'.",
            ),
          },
        ],
      },
    },
    {
      id: 11,
      category: lesson11Fm.category,
      title: lesson11Fm.title,
      titleTl: lesson11Fm.titleTl,
      titleEs: lesson11Fm.titleEs,
      icon: Tag,
      searchKeywords: lesson11Fm.searchKeywords,
      searchKeywordsTl: lesson11Fm.searchKeywordsTl,
      searchKeywordsEs: lesson11Fm.searchKeywordsEs,
      searchContent: lesson11Fm.searchContent,
      searchContentTl: lesson11Fm.searchContentTl,
      searchContentEs: lesson11Fm.searchContentEs,
      content: <Lesson11Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson11Fm.quizTitle, lesson11Fm.quizTitleTl, lesson11Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What title did Jesus teach us to use when addressing God in prayer?",
              "Anong titulo ang itinuro ni Jesus na gamitin natin kapag nananalangin sa Diyos?",
              "¿Qué título nos enseñó Jesús a usar cuando nos dirigimos a Dios en oración?",
            ),
            options: lz(
              ["King", "Judge", "Father", "Master"],
              ["Hari", "Hukom", "Ama", "Panginoon"],
              ["Rey", "Juez", "Padre", "Maestro"],
            ),
            correctIndex: 2,
            explanation: lz(
              "In Matthew 6:9, Jesus taught us to pray: 'Our Father which art in heaven'.",
              "Sa Mateo 6:9, itinuro ni Jesus na manalangin: 'Ama namin na nasa langit'.",
              "En Mateo 6:9, Jesús nos enseñó a orar: 'Padre nuestro que estás en los cielos'.",
            ),
          },
          {
            question: lz(
              "According to Isaiah 40:28, who is the 'everlasting God'?",
              "Ayon sa Isaias 40:28, sino ang 'walang hanggang Dios'?",
              "Según Isaías 40:28, ¿quién es el 'Dios eterno'?",
            ),
            options: lz(
              ["The Creator", "An Angel", "A Prophet", "A King"],
              ["Ang Maylalang", "Isang Anghel", "Isang Propeta", "Isang Hari"],
              ["El Creador", "Un Ángel", "Un Profeta", "Un Rey"],
            ),
            correctIndex: 0,
            explanation: lz(
              "Isaiah 40:28 identifies the Lord as the Creator of the ends of the earth.",
              "Kinikilala ng Isaias 40:28 ang Panginoon bilang Maylalang ng mga dulo ng lupa.",
              "Isaías 40:28 identifica al Señor como el Creador de los confines de la tierra.",
            ),
          },
        ],
      },
    },
    {
      id: 12,
      category: lesson12Fm.category,
      title: lesson12Fm.title,
      titleTl: lesson12Fm.titleTl,
      titleEs: lesson12Fm.titleEs,
      icon: Users,
      searchKeywords: lesson12Fm.searchKeywords,
      searchKeywordsTl: lesson12Fm.searchKeywordsTl,
      searchKeywordsEs: lesson12Fm.searchKeywordsEs,
      searchContent: lesson12Fm.searchContent,
      searchContentTl: lesson12Fm.searchContentTl,
      searchContentEs: lesson12Fm.searchContentEs,
      content: <Lesson12Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson12Fm.quizTitle, lesson12Fm.quizTitleTl, lesson12Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "How does 1 Timothy 2:5 describe Jesus Christ?",
              "Paano inilalarawan ng 1 Timoteo 2:5 si Jesucristo?",
              "¿Cómo describe 1 Timoteo 2:5 a Jesucristo?",
            ),
            options: lz(
              [
                "As God the Son",
                "As the man Christ Jesus",
                "As an angel",
                "As a spirit",
              ],
              [
                "Bilang Diyos Anak",
                "Bilang ang taong si Cristo Jesus",
                "Bilang isang anghel",
                "Bilang isang espiritu",
              ],
              [
                "Como Dios el Hijo",
                "Como el hombre Cristo Jesús",
                "Como un ángel",
                "Como un espíritu",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Timothy 2:5 explicitly calls Him 'the man Christ Jesus'.",
              "Malinaw na tinatawag Siya ng 1 Timoteo 2:5 na 'ang taong si Cristo Jesus'.",
              "1 Timoteo 2:5 lo llama explícitamente 'el hombre Cristo Jesús'.",
            ),
          },
          {
            question: lz(
              "What physical characteristic did Jesus mention in Luke 24:39 to prove He is not a spirit?",
              "Anong pisikal na katangian ang binanggit ni Jesus sa Lucas 24:39 upang patunayan na hindi Siya espiritu?",
              "¿Qué característica física mencionó Jesús en Lucas 24:39 para demostrar que no es un espíritu?",
            ),
            options: lz(
              ["Wings", "Invisibility", "Flesh and bones", "Light"],
              ["Mga pakpak", "Hindi nakikita", "Laman at mga buto", "Liwanag"],
              ["Alas", "Invisibilidad", "Carne y huesos", "Luz"],
            ),
            correctIndex: 2,
            explanation: lz(
              "Jesus said, 'a spirit hath not flesh and bones, as ye see me have'.",
              "Sinabi ni Jesus, 'ang isang espiritu'y walang laman at mga buto, na gaya ng inyong nakikita na nasa akin'.",
              "Jesús dijo: 'un espíritu no tiene carne ni huesos, como veis que yo tengo'.",
            ),
          },
        ],
      },
    },
    {
      id: 13,
      category: lesson13Fm.category,
      title: lesson13Fm.title,
      titleTl: lesson13Fm.titleTl,
      titleEs: lesson13Fm.titleEs,
      icon: History,
      searchKeywords: lesson13Fm.searchKeywords,
      searchKeywordsTl: lesson13Fm.searchKeywordsTl,
      searchKeywordsEs: lesson13Fm.searchKeywordsEs,
      searchContent: lesson13Fm.searchContent,
      searchContentTl: lesson13Fm.searchContentTl,
      searchContentEs: lesson13Fm.searchContentEs,
      content: <Lesson13Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson13Fm.quizTitle, lesson13Fm.quizTitleTl, lesson13Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to 1 Peter 1:20, when was Christ foreordained?",
              "Ayon sa 1 Pedro 1:20, kailan itinalaga si Cristo?",
              "Según 1 Pedro 1:20, ¿cuándo fue Cristo preordenado?",
            ),
            options: lz(
              [
                "After the fall of man",
                "Before the foundation of the world",
                "When He was born in Bethlehem",
                "During His baptism",
              ],
              [
                "Pagkatapos ng pagkahulog ng tao",
                "Bago pa ang pagtatatag ng mundo",
                "Nang Isilang Siya sa Betlehem",
                "Noong Siya ay binyagan",
              ],
              [
                "Después de la caída del hombre",
                "Antes de la fundación del mundo",
                "Cuando nació en Belén",
                "Durante Su bautismo",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Peter 1:20 states He was foreordained before the foundation of the world.",
              "Sinasabi sa 1 Pedro 1:20 na Siya ay itinalaga na bago pa ang pagtatatag ng mundo.",
              "1 Pedro 1:20 afirma que fue preordenado antes de la fundación del mundo.",
            ),
          },
          {
            question: lz(
              "What does the 'glory' in John 17:5 refer to?",
              "Ano ang tinutukoy ng 'kaluwalhatian' sa Juan 17:5?",
              "¿A qué se refiere la 'gloria' en Juan 17:5?",
            ),
            options: lz(
              [
                "His literal existence as a spirit",
                "His status in God's plan",
                "His physical beauty",
                "His earthly riches",
              ],
              [
                "Ang Kaniyang literal na pag-iral bilang espiritu",
                "Ang Kaniyang kalagayan sa plano ng Diyos",
                "Ang Kaniyang pisikal na kagandahan",
                "Ang Kaniyang makalupang kayamanan",
              ],
              [
                "Su existencia literal como espíritu",
                "Su estatus en el plan de Dios",
                "Su belleza física",
                "Sus riquezas terrenales",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "The glory refers to His foreordained role in God's plan before the world began.",
              "Ang kaluwalhatian ay tumutukoy sa Kaniyang itinalagang tungkulin sa plano ng Diyos bago pa ang mundo.",
              "La gloria se refiere a Su papel preordenado en el plan de Dios antes de que el mundo comenzara.",
            ),
          },
        ],
      },
    },
    {
      id: 14,
      category: lesson14Fm.category,
      title: lesson14Fm.title,
      titleTl: lesson14Fm.titleTl,
      titleEs: lesson14Fm.titleEs,
      icon: Star,
      searchKeywords: lesson14Fm.searchKeywords,
      searchKeywordsTl: lesson14Fm.searchKeywordsTl,
      searchKeywordsEs: lesson14Fm.searchKeywordsEs,
      searchContent: lesson14Fm.searchContent,
      searchContentTl: lesson14Fm.searchContentTl,
      searchContentEs: lesson14Fm.searchContentEs,
      content: <Lesson14Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson14Fm.quizTitle, lesson14Fm.quizTitleTl, lesson14Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Who was the mother of Jesus?",
              "Sino ang ina ni Jesus?",
              "¿Quién fue la madre de Jesús?",
            ),
            options: lz(
              ["Elizabeth", "Mary", "Martha", "Sarah"],
              ["Elisabet", "Maria", "Marta", "Sara"],
              ["Isabel", "María", "Marta", "Sara"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Mary was the virgin mother of Jesus Christ.",
              "Si Maria ang birheng ina ni Jesucristo.",
              "María fue la madre virgen de Jesucristo.",
            ),
          },
          {
            question: lz(
              "By what power was Jesus conceived in Mary's womb?",
              "Sa pamamagitan ng anong kapangyarihan ipinaglihi si Jesus sa sinapupunan ni Maria?",
              "¿Por qué poder fue concebido Jesús en el vientre de María?",
            ),
            options: lz(
              [
                "Human power",
                "The power of the Holy Spirit",
                "Natural laws",
                "Angelic power",
              ],
              [
                "Kapangyarihan ng tao",
                "Ang kapangyarihan ng Espiritu Santo",
                "Likas na mga batas",
                "Kapangyarihan ng anghel",
              ],
              [
                "Poder humano",
                "El poder del Espíritu Santo",
                "Leyes naturales",
                "Poder angélico",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Matthew 1:20 explains that He was conceived by the Holy Spirit.",
              "Ipinaliliwanag ng Mateo 1:20 na Siya ay ipinaglihi sa pamamagitan ng Espiritu Santo.",
              "Mateo 1:20 explica que fue concebido por el Espíritu Santo.",
            ),
          },
        ],
      },
    },
    {
      id: 15,
      category: lesson15Fm.category,
      title: lesson15Fm.title,
      titleTl: lesson15Fm.titleTl,
      titleEs: lesson15Fm.titleEs,
      icon: Zap,
      searchKeywords: lesson15Fm.searchKeywords,
      searchKeywordsTl: lesson15Fm.searchKeywordsTl,
      searchKeywordsEs: lesson15Fm.searchKeywordsEs,
      searchContent: lesson15Fm.searchContent,
      searchContentTl: lesson15Fm.searchContentTl,
      searchContentEs: lesson15Fm.searchContentEs,
      content: <Lesson15Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz("The Purpose of Christ's Coming", "Ang Layunin ng Pagparito ni Cristo", "El Propósito de la Venida de Cristo"),
        questions: [
          {
            question: lz(
              "What does the name 'Jesus' mean in the context of His mission?",
              "Ano ang ibig sabihin ng pangalang 'Jesus' sa konteksto ng Kaniyang misyon?",
              "¿Qué significa el nombre 'Jesús' en el contexto de Su misión?",
            ),
            options: lz(
              [
                "King",
                "Teacher",
                "He shall save His people from their sins",
                "The Anointed One",
              ],
              [
                "Hari",
                "Guro",
                "Ililigtas Niya ang Kaniyang bayan sa kanilang mga kasalanan",
                "Ang Pinahiran",
              ],
              [
                "Rey",
                "Maestro",
                "Él salvará a Su pueblo de sus pecados",
                "El Ungido",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Matthew 1:21 explains that He was named Jesus because He would save His people from their sins.",
              "Ipinaliliwanag ng Mateo 1:21 na Siya ay pinanganalang Jesus dahil ililigtas Niya ang Kaniyang bayan sa kanilang mga kasalanan.",
              "Mateo 1:21 explica que se llamó Jesús porque salvaría a Su pueblo de sus pecados.",
            ),
          },
          {
            question: lz(
              "According to Luke 19:10, what did the Son of Man come to do?",
              "Ayon sa Lucas 19:10, ano ang naparito upang gawin ng Anak ng Tao?",
              "Según Lucas 19:10, ¿qué vino a hacer el Hijo del Hombre?",
            ),
            options: lz(
              [
                "To judge the world",
                "To seek and save the lost",
                "To build a kingdom on earth",
                "To show His power",
              ],
              [
                "Upang hatulan ang mundo",
                "Upang hanapin at iligtas ang nawawala",
                "Upang magtayo ng kaharian sa lupa",
                "Upang ipakita ang Kaniyang kapangyarihan",
              ],
              [
                "Para juzgar al mundo",
                "Para buscar y salvar lo que se había perdido",
                "Para construir un reino en la tierra",
                "Para mostrar Su poder",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Luke 19:10 states that the Son of man came to seek and save that which was lost.",
              "Sinasabi sa Lucas 19:10 na ang Anak ng tao ay naparito upang hanapin at iligtas ang nawawala.",
              "Lucas 19:10 afirma que el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.",
            ),
          },
        ],
      },
    },
    {
      id: 16,
      category: lesson16Fm.category,
      title: lesson16Fm.title,
      titleTl: lesson16Fm.titleTl,
      titleEs: lesson16Fm.titleEs,
      icon: Clock,
      searchKeywords: lesson16Fm.searchKeywords,
      searchKeywordsTl: lesson16Fm.searchKeywordsTl,
      searchKeywordsEs: lesson16Fm.searchKeywordsEs,
      searchContent: lesson16Fm.searchContent,
      searchContentTl: lesson16Fm.searchContentTl,
      searchContentEs: lesson16Fm.searchContentEs,
      content: <Lesson16Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson16Fm.quizTitle, lesson16Fm.quizTitleTl, lesson16Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What historical event marks the beginning of the 'ends of the earth'?",
              "Anong makasaysayang kaganapan ang nagmamarka sa simula ng 'mga wakas ng lupa'?",
            ),
            options: [
              "The French Revolution",
              "World War I",
              "The Great Depression",
              "The Industrial Revolution",
            ],
            correctIndex: 1,
            explanation: lz(
              "World War I, starting on July 27, 1914, is the sign given by Jesus in Matthew 24:6-7.",
              "Ang Unang Digmaang Pandaigdig, na nagsimula noong Hulyo 27, 1914, ang tandang ibinigay ni Jesus sa Mateo 24:6-7.",
            ),
          },
          {
            question: lz(
              "According to Isaiah 43:5-6, where will God bring His children from in the last days?",
              "Ayon sa Isaias 43:5-6, saan dadalhin ng Diyos ang Kaniyang mga anak sa mga huling araw?",
            ),
            options: [
              "Only from Israel",
              "From the east and the west",
              "Only from the north",
              "From the moon",
            ],
            correctIndex: 1,
            explanation: lz(
              "Isaiah 43:5-6 says God will bring His seed from the east and gather them from the west.",
              "Sinasabi sa Isaias 43:5-6 na dadalhin ng Diyos ang Kaniyang lahi mula sa silangan at titipunin sila mula sa kanluran.",
            ),
          },
        ],
      },
    },
    {
      id: 17,
      category: lesson17Fm.category,
      title: lesson17Fm.title,
      titleTl: lesson17Fm.titleTl,
      titleEs: lesson17Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson17Fm.searchKeywords,
      searchKeywordsTl: lesson17Fm.searchKeywordsTl,
      searchKeywordsEs: lesson17Fm.searchKeywordsEs,
      searchContent: lesson17Fm.searchContent,
      searchContentTl: lesson17Fm.searchContentTl,
      searchContentEs: lesson17Fm.searchContentEs,
      content: <Lesson17Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson17Fm.quizTitle, lesson17Fm.quizTitleTl, lesson17Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to Romans 10:15, what is required for someone to preach correctly?",
              "Ayon sa Roma 10:15, ano ang kinakailangan para sa isang tao upang mangaral nang tama?",
            ),
            options: [
              "A college degree",
              "They must be sent by God",
              "They must have a loud voice",
              "They must be famous",
            ],
            correctIndex: 1,
            explanation: lz(
              "Romans 10:15 asks: 'And how shall they preach, except they be sent?'",
              "Ang Roma 10:15 ay nagtatanong: 'At paano sila mangangaral, kung hindi sila mga sinugo?'",
            ),
          },
          {
            question: lz(
              "To whom is the 'secret of the kingdom of God' given according to Mark 4:11?",
              "Kanino ibinigay ang 'lihim ng kaharian ng Diyos' ayon sa Marcos 4:11?",
            ),
            options: [
              "To everyone who reads the Bible",
              "Only to those sent by God",
              "To the wise and learned",
              "To no one",
            ],
            correctIndex: 1,
            explanation: lz(
              "Mark 4:11 states that the mystery of the kingdom is given to those chosen/sent.",
              "Sinasabi sa Marcos 4:11 na ang hiwaga ng kaharian ay ibinibigay sa mga pinili/sinugo.",
            ),
          },
        ],
      },
    },
    {
      id: 18,
      category: lesson18Fm.category,
      title: lesson18Fm.title,
      titleTl: lesson18Fm.titleTl,
      titleEs: lesson18Fm.titleEs,
      icon: Compass,
      searchKeywords: lesson18Fm.searchKeywords,
      searchKeywordsTl: lesson18Fm.searchKeywordsTl,
      searchKeywordsEs: lesson18Fm.searchKeywordsEs,
      searchContent: lesson18Fm.searchContent,
      searchContentTl: lesson18Fm.searchContentTl,
      searchContentEs: lesson18Fm.searchContentEs,
      content: <Lesson18Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson18Fm.quizTitle, lesson18Fm.quizTitleTl, lesson18Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Where does prophecy say the messenger would come from in the last days?",
              "Saan sinasabi ng hula na magmumula ang sugo sa mga huling araw?",
              "¿De dónde dice la profecía que vendría el mensajero en los últimos días?",
            ),
            options: lz(
              ["The West", "The Far East", "The North", "The South"],
              ["Kanluran", "Malayong Silangan", "Hilaga", "Timog"],
              ["El Occidente", "El Lejano Oriente", "El Norte", "El Sur"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Isaiah 46:11 and Isaiah 41:9 point to the 'East' or 'Far East' as the origin of the messenger.",
              "Ang Isaias 46:11 at Isaias 41:9 ay tumutukoy sa 'Silangan' o 'Malayong Silangan'.",
              "Isaías 46:11 e Isaías 41:9 señalan al 'Oriente' o 'Lejano Oriente' como el origen del mensajero.",
            ),
          },
          {
            question: lz(
              "Who fulfilled the prophecy of the messenger from the Far East starting in 1914?",
              "Sino ang tumupad sa hula ng sugo mula sa Malayong Silangan simula noong 1914?",
              "¿Quién cumplió la profecía del mensajero del Lejano Oriente a partir de 1914?",
            ),
            options: lz(
              [
                "Martin Luther",
                "Brother Felix Y. Manalo",
                "John Wesley",
                "The Pope",
              ],
              [
                "Martin Luther",
                "Kapatid na Felix Y. Manalo",
                "John Wesley",
                "Ang Papa",
              ],
              [
                "Martín Lutero",
                "Hermano Félix Y. Manalo",
                "John Wesley",
                "El Papa",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Brother Felix Y. Manalo began preaching the Iglesia ni Cristo in the Philippines (Far East) in 1914.",
              "Nagsimulang mangaral ang Kapatid na Felix Y. Manalo ng Iglesia ni Cristo sa Pilipinas (Malayong Silangan) noong 1914.",
              "El Hermano Félix Y. Manalo comenzó a predicar la Iglesia de Cristo en Filipinas (Lejano Oriente) en 1914.",
            ),
          },
        ],
      },
    },
    {
      id: 19,
      category: lesson19Fm.category,
      title: lesson19Fm.title,
      titleTl: lesson19Fm.titleTl,
      titleEs: lesson19Fm.titleEs,
      icon: Scale,
      searchKeywords: lesson19Fm.searchKeywords,
      searchKeywordsTl: lesson19Fm.searchKeywordsTl,
      searchKeywordsEs: lesson19Fm.searchKeywordsEs,
      searchContent: lesson19Fm.searchContent,
      searchContentTl: lesson19Fm.searchContentTl,
      searchContentEs: lesson19Fm.searchContentEs,
      content: <Lesson19Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson19Fm.quizTitle, lesson19Fm.quizTitleTl, lesson19Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the 'whole duty of man' according to Ecclesiastes 12:13?",
              "Ano ang 'buong katungkulan ng tao' ayon sa Eclesiastes 12:13?",
              "¿Cuál es el 'todo del hombre' según Eclesiastés 12:13?",
            ),
            options: lz(
              [
                "To be successful",
                "To fear God and keep His commandments",
                "To travel the world",
                "To gain knowledge",
              ],
              [
                "Maging matagumpay",
                "Matakot sa Diyos at sundin ang Kaniyang mga utos",
                "Maglakbay sa buong mundo",
                "Magkaroon ng kaalaman",
              ],
              [
                "Tener éxito",
                "Temer a Dios y guardar Sus mandamientos",
                "Viajar por el mundo",
                "Obtener conocimiento",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Ecclesiastes 12:13 states: 'Fear God, and keep his commandments: for this is the whole duty of man.'",
              "Sinasabi sa Eclesiastes 12:13: 'Matakot ka sa Dios, at sundin mo ang kaniyang mga utos; sapagka't ito ang buong katungkulan ng tao.'",
              "Eclesiastés 12:13 afirma: 'Teme a Dios, y guarda sus mandamientos; porque esto es el todo del hombre.'",
            ),
          },
          {
            question: lz(
              "What destroyed the true essence of man and his relationship with God?",
              "Ano ang sumira sa tunay na esensya ng tao at sa kaniyang relasyon sa Diyos?",
              "¿Qué destruyó la verdadera esencia del hombre y su relación con Dios?",
            ),
            options: lz(
              ["Lack of education", "Sin", "Poverty", "Time"],
              ["Kulang sa edukasyon", "Kasalanan", "Kahirapan", "Panahon"],
              ["Falta de educación", "El Pecado", "Pobreza", "Tiempo"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Sin separated man from God and destroyed his original purpose, requiring a return to true religion.",
              "Ang kasalanan ang naghiwalay sa tao sa Diyos at sumira sa kaniyang orihinal na layunin.",
              "El pecado separó al hombre de Dios y destruyó su propósito original, requiriendo un regreso a la religión verdadera.",
            ),
          },
        ],
      },
    },
    {
      id: 20,
      category: lesson20Fm.category,
      title: lesson20Fm.title,
      titleTl: lesson20Fm.titleTl,
      titleEs: lesson20Fm.titleEs,
      icon: Users,
      searchKeywords: lesson20Fm.searchKeywords,
      searchKeywordsTl: lesson20Fm.searchKeywordsTl,
      searchKeywordsEs: lesson20Fm.searchKeywordsEs,
      searchContent: lesson20Fm.searchContent,
      searchContentTl: lesson20Fm.searchContentTl,
      searchContentEs: lesson20Fm.searchContentEs,
      content: <Lesson20Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson20Fm.quizTitle, lesson20Fm.quizTitleTl, lesson20Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What two parts form the 'One New Man' according to Ephesians 2:15?",
              "Anong dalawang bahagi ang bumubuo sa 'Isang Bagong Tao' ayon sa Efeso 2:15?",
              "¿Qué dos partes forman el 'Solo y Nuevo Hombre' según Efesios 2:15?",
            ),
            options: lz(
              [
                "Faith and Works",
                "Christ (Head) and Church (Body)",
                "Old Testament and New Testament",
                "Jew and Gentile",
              ],
              [
                "Pananampalataya at mga Gawa",
                "Cristo (Ulo) at Iglesia (Katawan)",
                "Lumang Tipan at Bagong Tipan",
                "Hudio at Gentil",
              ],
              [
                "Fe y Obras",
                "Cristo (Cabeza) y la Iglesia (Cuerpo)",
                "Antiguo Testamento y Nuevo Testamento",
                "Judío y Gentil",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Ephesians 2:15 explains that Christ created in Himself 'one new man' by joining the Head and the Body.",
              "Ipinaliliwanag sa Efeso 2:15 na nilalang ni Cristo sa Kaniyang sarili ang 'isang bagong tao'.",
              "Efesios 2:15 explica que Cristo creó en Sí mismo 'un solo y nuevo hombre' al unir la Cabeza y el Cuerpo.",
            ),
          },
          {
            question: lz(
              "What is the 'wages of sin' according to Romans 6:23?",
              "Ano ang 'kabayaran ng kasalanan' ayon sa Roma 6:23?",
              "¿Cuál es la 'paga del pecado' según Romanos 6:23?",
            ),
            options: lz(
              ["Life", "Wealth", "Death", "Fame"],
              ["Buhay", "Kayamanan", "Kamatayan", "Katanyagan"],
              ["Vida", "Riqueza", "Muerte", "Fama"],
            ),
            correctIndex: 2,
            explanation: lz(
              "Romans 6:23 states: 'For the wages of sin is death...'",
              "Sinasabi sa Roma 6:23: 'Sapagka't ang kabayaran ng kasalanan ay kamatayan...'",
              "Romanos 6:23 afirma: 'Porque la paga del pecado es muerte...'",
            ),
          },
        ],
      },
    },
    {
      id: 21,
      category: lesson21Fm.category,
      title: lesson21Fm.title,
      titleTl: lesson21Fm.titleTl,
      titleEs: lesson21Fm.titleEs,
      icon: Zap,
      searchKeywords: lesson21Fm.searchKeywords,
      searchKeywordsTl: lesson21Fm.searchKeywordsTl,
      searchKeywordsEs: lesson21Fm.searchKeywordsEs,
      searchContent: lesson21Fm.searchContent,
      searchContentTl: lesson21Fm.searchContentTl,
      searchContentEs: lesson21Fm.searchContentEs,
      content: <Lesson21Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson21Fm.quizTitle, lesson21Fm.quizTitleTl, lesson21Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What marks the beginning of Judgment Day according to 1 Thessalonians 4:16?",
              "Ano ang nagmamarka sa simula ng Araw ng Paghuhukom ayon sa 1 Tesalonica 4:16?",
              "¿Qué marca el comienzo del Día del Juicio según 1 Tesalonicenses 4:16?",
            ),
            options: lz(
              [
                "A solar eclipse",
                "The sounding of the last trumpet",
                "A great earthquake",
                "The end of a war",
              ],
              [
                "Isang eklipse",
                "Ang pagtunog ng huling pakakak",
                "Isang malakas na lindol",
                "Ang pagtatapos ng giyera",
              ],
              [
                "Un eclipse solar",
                "El sonido de la última trompeta",
                "Un gran terremoto",
                "El fin de una guerra",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Thessalonians 4:16 says the Lord will descend with a shout and the trumpet of God.",
              "Sinasabi sa 1 Tesalonica 4:16 na ang Panginoon ay bababa na may sigaw at may pakakak ng Diyos.",
              "1 Tesalonicenses 4:16 dice que el Señor descenderá con voz de mando y trompeta de Dios.",
            ),
          },
          {
            question: lz(
              "Who will rise first when the last trumpet sounds?",
              "Sino ang unang mangabubuhay na maguli kapag tumunog ang huling pakakak?",
              "¿Quién resucitará primero cuando suene la última trompeta?",
            ),
            options: lz(
              [
                "All people",
                "The dead in Christ",
                "Only the prophets",
                "No one",
              ],
              [
                "Lahat ng tao",
                "Ang mga nangamatay kay Cristo",
                "Ang mga propeta lamang",
                "Wala",
              ],
              [
                "Toda la gente",
                "Los muertos en Cristo",
                "Solo los profetas",
                "Nadie",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Thessalonians 4:16 states that 'the dead in Christ shall rise first'.",
              "Sinasabi sa 1 Tesalonica 4:16 na 'ang mga nangamatay kay Cristo ay unang mangabubuhay na maguli'.",
              "1 Tesalonicenses 4:16 afirma que 'los muertos en Cristo resucitarán primero'.",
            ),
          },
        ],
      },
    },
    {
      id: 22,
      category: lesson22Fm.category,
      title: lesson22Fm.title,
      titleTl: lesson22Fm.titleTl,
      titleEs: lesson22Fm.titleEs,
      icon: Scale,
      searchKeywords: lesson22Fm.searchKeywords,
      searchKeywordsTl: lesson22Fm.searchKeywordsTl,
      searchKeywordsEs: lesson22Fm.searchKeywordsEs,
      searchContent: lesson22Fm.searchContent,
      searchContentTl: lesson22Fm.searchContentTl,
      searchContentEs: lesson22Fm.searchContentEs,
      content: <Lesson22Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson22Fm.quizTitle, lesson22Fm.quizTitleTl, lesson22Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              <>What will be the basis for judgment on the Day of Judgment?</>,
              <>
                Ano ang magiging batayan ng paghuhukom sa Araw ng Paghuhukom?
              </>,
              <>¿Cuál será la base del juicio en el Día del Juicio?</>,
            ),
            options: lz(
              [
                "Personal opinions",
                "The Gospel/Bible and deeds",
                "Wealth and status",
                "Luck",
              ],
              [
                "Sariling mga opinyon",
                "Ang Ebanghelyo/Biblia at mga gawa",
                "Kayamanan at katayuan",
                "Suwerte",
              ],
              [
                "Opiniones personales",
                "El Evangelio/Biblia y las obras",
                "Riqueza y estatus",
                "Suerte",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              <>
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Revelation 20:12
                </ScriptureLink>{" "}
                and{" "}
                <ScriptureLink verse="Romans 2:16" onHover={onHover}>
                  Romans 2:16
                </ScriptureLink>{" "}
                indicate that judgment is based on deeds and the gospel.
              </>,
              <>
                Ang{" "}
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Apocalipsis 20:12
                </ScriptureLink>{" "}
                at{" "}
                <ScriptureLink verse="Romans 2:16" onHover={onHover}>
                  Roma 2:16
                </ScriptureLink>{" "}
                ay nagpapahiwatig na ang paghuhukom ay batay sa mga gawa at sa
                ebanghelyo.
              </>,
              <>
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Apocalipsis 20:12
                </ScriptureLink>{" "}
                y{" "}
                <ScriptureLink verse="Romans 2:16" onHover={onHover}>
                  Romanos 2:16
                </ScriptureLink>{" "}
                indican que el juicio se basa en las obras y el evangelio.
              </>,
            ),
          },
          {
            question: lz(
              <>Who will be judged on that day?</>,
              <>Sino ang hahatulan sa araw na iyon?</>,
              <>¿Quién será juzgado en aquel día?</>,
            ),
            options: lz(
              [
                "Only the wicked",
                "Only the righteous",
                "All men, small and great",
                "Only those who are alive",
              ],
              [
                "Ang mga masama lamang",
                "Ang mga matuwid lamang",
                "Lahat ng mga tao, maliliit at malalaki",
                "Ang mga buhay lamang",
              ],
              [
                "Solo los malvados",
                "Solo los justos",
                "Todos los hombres, grandes y pequeños",
                "Solo los que están vivos",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              <>
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Revelation 20:12
                </ScriptureLink>{" "}
                says: 'And I saw the dead, small and great, stand before God'.
              </>,
              <>
                Sinasabi sa{" "}
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Apocalipsis 20:12
                </ScriptureLink>
                : 'At nakita ko ang mga patay, malalaki at maliliit, na
                nangakatayo sa harapan ng luklukan'.
              </>,
              <>
                <ScriptureLink verse="Revelation 20:12" onHover={onHover}>
                  Apocalipsis 20:12
                </ScriptureLink>{" "}
                dice: 'Y vi a los muertos, grandes y pequeños, de pie ante Dios'.
              </>,
            ),
          },
        ],
      },
    },
    {
      id: 23,
      category: lesson23Fm.category,
      title: lesson23Fm.title,
      titleTl: lesson23Fm.titleTl,
      titleEs: lesson23Fm.titleEs,
      icon: Scroll,
      searchKeywords: lesson23Fm.searchKeywords,
      searchKeywordsTl: lesson23Fm.searchKeywordsTl,
      searchKeywordsEs: lesson23Fm.searchKeywordsEs,
      searchContent: lesson23Fm.searchContent,
      searchContentTl: lesson23Fm.searchContentTl,
      searchContentEs: lesson23Fm.searchContentEs,
      content: <Lesson23Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson23Fm.quizTitle, lesson23Fm.quizTitleTl, lesson23Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              <>Is anything hidden from God's sight on Judgment Day?</>,
              <>
                Mayroon bang natatago sa paningin ng Diyos sa Araw ng
                Paghuhukom?
              </>,
              <>¿Hay algo oculto a la vista de Dios en el Día del Juicio?</>,
            ),
            options: lz(
              [
                "Yes, our private thoughts",
                "No, even hidden works will be revealed",
                "Only things we tell others",
                "Only big sins",
              ],
              [
                "Oo, ang ating mga nakatagong iniisip",
                "Wala, kahit ang mga nakatagong gawa ay ihahayag",
                "Yung mga sinasabi lang natin sa iba",
                "Yung malalaking kasalanan lang",
              ],
              [
                "Sí, nuestros pensamientos privados",
                "No, incluso las obras ocultas serán reveladas",
                "Solo las cosas que decimos a otros",
                "Solo los pecados grandes",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              <>
                <ScriptureLink verse="Ecclesiastes 12:14" onHover={onHover}>
                  Ecclesiastes 12:14
                </ScriptureLink>{" "}
                says God shall bring every work into judgment, with every secret
                thing.
              </>,
              <>
                Sinasabi sa{" "}
                <ScriptureLink verse="Eclesiastes 12:14" onHover={onHover}>
                  Eclesiastes 12:14
                </ScriptureLink>{" "}
                na dadalhin ng Dios ang bawat gawa sa paghuhukom, pati ang bawat
                lihim na bagay.
              </>,
              <>
                <ScriptureLink verse="Ecclesiastes 12:14" onHover={onHover}>
                  Eclesiastés 12:14
                </ScriptureLink>{" "}
                dice que Dios traerá toda obra a juicio, junto con toda cosa
                secreta.
              </>,
            ),
          },
          {
            question: lz(
              <>How will those who never heard the gospel be judged?</>,
              <>
                Paano hahatulan ang mga hindi kailanman nakarinig ng ebanghelyo?
              </>,
              <>¿Cómo serán juzgados los que nunca escucharon el evangelio?</>,
            ),
            options: lz(
              [
                "They won't be judged",
                "They are automatically saved",
                "Based on the law written in their hearts and conscience",
                "They are automatically condemned",
              ],
              [
                "Hindi sila hahatulan",
                "Awtomatiko silang maliligtas",
                "Batay sa kautusang nakasulat sa kanilang puso at budhi",
                "Awtomatiko silang parurusahan",
              ],
              [
                "No serán juzgados",
                "Son salvos automáticamente",
                "Basado en la ley escrita en sus corazones y conciencia",
                "Son condenados automáticamente",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              <>
                <ScriptureLink verse="Romans 2:14" onHover={onHover}>
                  Romans 2:14-15
                </ScriptureLink>{" "}
                explains that those without the law have the law written in
                their hearts, their conscience bearing witness.
              </>,
              <>
                Ipinaliliwanag sa{" "}
                <ScriptureLink verse="Roma 2:14" onHover={onHover}>
                  Roma 2:14-15
                </ScriptureLink>{" "}
                na ang mga walang kautusan ay may kautusang nakasulat sa
                kanilang mga puso.
              </>,
              <>
                <ScriptureLink verse="Romans 2:14" onHover={onHover}>
                  Romanos 2:14-15
                </ScriptureLink>{" "}
                explica que los que no tienen la ley, tienen la ley escrita en
                sus corazones, dando testimonio su conciencia.
              </>,
            ),
          },
        ],
      },
    },
    {
      id: 25,
      category: lesson25Fm.category,
      title: lesson25Fm.title,
      titleTl: lesson25Fm.titleTl,
      titleEs: lesson25Fm.titleEs,
      icon: Droplets,
      searchKeywords: lesson25Fm.searchKeywords,
      searchKeywordsTl: lesson25Fm.searchKeywordsTl,
      searchKeywordsEs: lesson25Fm.searchKeywordsEs,
      searchContent: lesson25Fm.searchContent,
      searchContentTl: lesson25Fm.searchContentTl,
      searchContentEs: lesson25Fm.searchContentEs,
      content: <Lesson25Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson25Fm.quizTitle, lesson25Fm.quizTitleTl, lesson25Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              <>
                Where does judgment begin according to{" "}
                <ScriptureLink verse="1 Peter 4:17" onHover={onHover}>
                  1 Peter 4:17
                </ScriptureLink>
                ?
              </>,
              <>
                Saan nagsisimula ang paghuhukom ayon sa{" "}
                <ScriptureLink verse="1 Pedro 4:17" onHover={onHover}>
                  1 Pedro 4:17
                </ScriptureLink>
                ?
              </>,
              <>
                ¿Dónde comienza el juicio según{" "}
                <ScriptureLink verse="1 Peter 4:17" onHover={onHover}>
                  1 Pedro 4:17
                </ScriptureLink>
                ?
              </>,
            ),
            options: lz(
              [
                "In the world",
                "In the house of God",
                "In the government",
                "In the schools",
              ],
              [
                "Sa sanlibutan",
                "Sa bahay ng Diyos",
                "Sa gobyerno",
                "Sa mga paaralan",
              ],
              [
                "En el mundo",
                "En la casa de Dios",
                "En el gobierno",
                "En las escuelas",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              <>
                <ScriptureLink verse="1 Peter 4:17" onHover={onHover}>
                  1 Peter 4:17
                </ScriptureLink>{" "}
                states: 'For the time is come that judgment must begin at the
                house of God'.
              </>,
              <>
                Sinasabi sa{" "}
                <ScriptureLink verse="1 Pedro 4:17" onHover={onHover}>
                  1 Pedro 4:17
                </ScriptureLink>
                : 'Sapagka't dumating na ang panahon na ang paghuhukom ay dapat
                magpasimula sa bahay ng Dios'.
              </>,
              <>
                <ScriptureLink verse="1 Peter 4:17" onHover={onHover}>
                  1 Pedro 4:17
                </ScriptureLink>{" "}
                afirma: 'Porque es tiempo de que el juicio comience por la casa
                de Dios'.
              </>,
            ),
          },
          {
            question: lz(
              <>
                What is the purpose of self-examination before the Holy Supper?
              </>,
              <>
                Ano ang layunin ng pagsisiyasat sa sarili bago ang Banal na
                Hapunan?
              </>,
              <>
                ¿Cuál es el propósito del autoexamen antes de la Santa Cena?
              </>,
            ),
            options: lz(
              [
                "To see if we are rich",
                "To avoid being judged with the world",
                "To show off to others",
                "To check our health",
              ],
              [
                "Para malaman kung tayo ay mayaman",
                "Upang maiwasang mahatulan kasama ng sanlibutan",
                "Upang magpasikat sa iba",
                "Upang suriin ang ating kalusugan",
              ],
              [
                "Para ver si somos ricos",
                "Para evitar ser juzgados con el mundo",
                "Para presumir ante los demás",
                "Para revisar nuestra salud",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              <>
                <ScriptureLink verse="1 Corinthians 11:31" onHover={onHover}>
                  1 Corinthians 11:31-32
                </ScriptureLink>{" "}
                explains that if we judge ourselves, we should not be judged,
                avoiding condemnation with the world.
              </>,
              <>
                Ipinaliliwanag sa{" "}
                <ScriptureLink verse="1 Corinto 11:31" onHover={onHover}>
                  1 Corinto 11:31-32
                </ScriptureLink>{" "}
                na kung sisisiyasatin natin ang ating sarili, ay hindi tayo
                hahatulan.
              </>,
              <>
                <ScriptureLink verse="1 Corinthians 11:31" onHover={onHover}>
                  1 Corintios 11:31-32
                </ScriptureLink>{" "}
                explica que si nos juzgáramos a nosotros mismos, no seríamos
                juzgados, evitando la condenación con el mundo.
              </>,
            ),
          },
        ],
      },
    },
    {
      id: 26,
      category: lesson26Fm.category,
      title: lesson26Fm.title,
      titleTl: lesson26Fm.titleTl,
      titleEs: lesson26Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson26Fm.searchKeywords,
      searchKeywordsTl: lesson26Fm.searchKeywordsTl,
      searchKeywordsEs: lesson26Fm.searchKeywordsEs,
      searchContent: lesson26Fm.searchContent,
      searchContentTl: lesson26Fm.searchContentTl,
      searchContentEs: lesson26Fm.searchContentEs,
      content: <Lesson26Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson26Fm.quizTitle, lesson26Fm.quizTitleTl, lesson26Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "How many churches did Christ promise to build in Matthew 16:18?",
              "Ilang iglesia ang ipinangako ni Cristo na itatayo sa Mateo 16:18?",
              "¿Cuántas iglesias prometió edificar Cristo en Mateo 16:18?",
            ),
            options: lz(
              [
                "Many denominations",
                "One Church",
                "Three branches",
                "Seven groups",
              ],
              [
                "Maraming denominasyon",
                "Iisang Iglesia",
                "Tatlong sangay",
                "Pitong grupo",
              ],
              [
                "Muchas denominaciones",
                "Una Iglesia",
                "Tres ramas",
                "Siete grupos",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Christ used the singular 'church', indicating a single, unified body.",
              "Ginamit ni Cristo ang isahang salitang 'iglesia', na nagpapahiwatig ng iisang nagkakaisang katawan.",
              "Cristo usó el singular 'iglesia', indicando un solo cuerpo unificado.",
            ),
          },
        ],
      },
    },
    {
      id: 27,
      category: lesson27Fm.category,
      title: lesson27Fm.title,
      titleTl: lesson27Fm.titleTl,
      titleEs: lesson27Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson27Fm.searchKeywords,
      searchKeywordsTl: lesson27Fm.searchKeywordsTl,
      searchKeywordsEs: lesson27Fm.searchKeywordsEs,
      searchContent: lesson27Fm.searchContent,
      searchContentTl: lesson27Fm.searchContentTl,
      searchContentEs: lesson27Fm.searchContentEs,
      content: <Lesson27Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson27Fm.quizTitle, lesson27Fm.quizTitleTl, lesson27Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "When did the enemy sow the weeds?",
              "Kailan naghasik ang kaaway ng mga pangsirang damo?",
              "¿Cuándo sembró el enemigo la cizaña?",
            ),
            options: lz(
              [
                "During the day",
                "While men slept",
                "After the harvest",
                "Before the planting",
              ],
              [
                "Sa araw",
                "Habang ang mga tao ay nangatutulog",
                "Pagkatapos ng ani",
                "Bago ang pagtatanim",
              ],
              [
                "Durante el día",
                "Mientras los hombres dormían",
                "Después de la cosecha",
                "Antes de la siembra",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Matthew 13:25 states it happened 'while men slept', signifying a time of spiritual lack of vigilance.",
              "Sinasabi sa Mateo 13:25 na nangyari ito 'samantalang nangatutulog ang mga tao', na nagpapahiwatig ng panahon ng kawalan ng espirituwal na pagbabantay.",
              "Mateo 13:25 afirma que sucedió 'mientras dormían los hombres', significando un tiempo de falta de vigilancia espiritual.",
            ),
          },
        ],
      },
    },
    {
      id: 28,
      category: lesson28Fm.category,
      title: lesson28Fm.title,
      titleTl: lesson28Fm.titleTl,
      titleEs: lesson28Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson28Fm.searchKeywords,
      searchKeywordsTl: lesson28Fm.searchKeywordsTl,
      searchKeywordsEs: lesson28Fm.searchKeywordsEs,
      searchContent: lesson28Fm.searchContent,
      searchContentTl: lesson28Fm.searchContentTl,
      searchContentEs: lesson28Fm.searchContentEs,
      content: <Lesson28Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson28Fm.quizTitle, lesson28Fm.quizTitleTl, lesson28Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What did the Apostles warn would enter the flock after their departure?",
              "Ano ang ibinabala ng mga Apostol na papasok sa kawan pagkatapos ng kanilang pag-alis?",
              "¿Qué advirtieron los Apóstoles que entraría en el rebaño después de su partida?",
            ),
            options: lz(
              [
                "Gentle lambs",
                "Grievous wolves",
                "New prophets",
                "Angels",
              ],
              [
                "Maamong mga tupa",
                "Mga ganid na lobo",
                "Bagong mga propeta",
                "Mga anghel",
              ],
              [
                "Gentiles corderos",
                "Lobos rapaces",
                "Nuevos profetas",
                "Ángeles",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Acts 20:29 warns that 'grievous wolves' would enter, not sparing the flock.",
              "Nagbabala ang Gawa 20:29 na papasok ang mga 'ganid na lobo', na hindi patawad sa kawan.",
              "Hechos 20:29 advierte que entrarían 'lobos rapaces', no perdonando al rebaño.",
            ),
          },
        ],
      },
    },
    {
      id: 29,
      category: lesson29Fm.category,
      title: lesson29Fm.title,
      titleTl: lesson29Fm.titleTl,
      titleEs: lesson29Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson29Fm.searchKeywords,
      searchKeywordsTl: lesson29Fm.searchKeywordsTl,
      searchKeywordsEs: lesson29Fm.searchKeywordsEs,
      searchContent: lesson29Fm.searchContent,
      searchContentTl: lesson29Fm.searchContentTl,
      searchContentEs: lesson29Fm.searchContentEs,
      content: <Lesson29Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson29Fm.quizTitle, lesson29Fm.quizTitleTl, lesson29Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Which scripture warns about forbidding marriage as a sign of apostasy?",
              "Aling kasulatan ang nagbabala tungkol sa pagbabawal sa pag-aasawa bilang tanda ng pagtalikod?",
              "¿Qué escritura advierte sobre prohibir el matrimonio como señal de apostasía?",
            ),
            options: lz(
              [
                "John 3:16",
                "1 Timothy 4:1-3",
                "Psalm 23",
                "Genesis 1:1",
              ],
              [
                "Juan 3:16",
                "1 Timoteo 4:1-3",
                "Awit 23",
                "Genesis 1:1",
              ],
              [
                "Juan 3:16",
                "1 Timoteo 4:1-3",
                "Salmo 23",
                "Génesis 1:1",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "1 Timothy 4:1-3 explicitly lists forbidding to marry as a doctrine of demons.",
              "Malinaw na itinala sa 1 Timoteo 4:1-3 ang pagbabawal sa pag-aasawa bilang isang aral ng mga demonyo.",
              "1 Timoteo 4:1-3 enumera explícitamente el prohibir casarse como una doctrina de demonios.",
            ),
          },
        ],
      },
    },
    {
      id: 30,
      category: lesson30Fm.category,
      title: lesson30Fm.title,
      titleTl: lesson30Fm.titleTl,
      titleEs: lesson30Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson30Fm.searchKeywords,
      searchKeywordsTl: lesson30Fm.searchKeywordsTl,
      searchKeywordsEs: lesson30Fm.searchKeywordsEs,
      searchContent: lesson30Fm.searchContent,
      searchContentTl: lesson30Fm.searchContentTl,
      searchContentEs: lesson30Fm.searchContentEs,
      content: <Lesson30Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson30Fm.quizTitle, lesson30Fm.quizTitleTl, lesson30Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Who was the original foundation stone of the Church?",
              "Sino ang orihinal na batong saligan ng Iglesia?",
              "¿Quién fue la piedra angular original de la Iglesia?",
            ),
            options: lz(
              ["The Pope", "The Apostles", "Jesus Christ", "The Kings"],
              ["Ang Papa", "Ang mga Apostol", "Jesucristo", "Ang mga Hari"],
              ["El Papa", "Los Apóstoles", "Jesucristo", "Los Reyes"],
            ),
            correctIndex: 2,
            explanation: lz(
              "Christ is the only true foundation (1 Cor 3:11, Matt 16:18).",
              "Si Cristo ang tanging tunay na saligan (1 Cor 3:11, Mat 16:18).",
              "Cristo es el único fundamento verdadero (1 Cor 3:11, Matt 16:18).",
            ),
          },
        ],
      },
    },
    {
      id: 31,
      category: lesson31Fm.category,
      title: lesson31Fm.title,
      titleTl: lesson31Fm.titleTl,
      titleEs: lesson31Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson31Fm.searchKeywords,
      searchKeywordsTl: lesson31Fm.searchKeywordsTl,
      searchKeywordsEs: lesson31Fm.searchKeywordsEs,
      searchContent: lesson31Fm.searchContent,
      searchContentTl: lesson31Fm.searchContentTl,
      searchContentEs: lesson31Fm.searchContentEs,
      content: <Lesson31Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson31Fm.quizTitle, lesson31Fm.quizTitleTl, lesson31Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What does the 'Mother of Prostitutes' represent in Revelation 17:5?",
              "Ano ang kinakatawan ng 'Ina ng mga Patutot' sa Apocalipsis 17:5?",
              "¿Qué representa la 'Madre de las Rameras' en Apocalipsis 17:5?",
            ),
            options: lz(
              [
                "A literal city",
                "The apostate mother church",
                "A political alliance",
                "A family tree",
              ],
              [
                "Isang literal na siyudad",
                "Ang tumalikod na inang iglesia",
                "Isang alyansang politikal",
                "Isang family tree",
              ],
              [
                "Una ciudad literal",
                "La iglesia madre apóstata",
                "Una alianza política",
                "Un árbol genealógico",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "It represents the central apostate organization from which other false sects emerged.",
              "Kinakatawan nito ang sentral na tumalikod na organisasyon kung saan nagmula ang iba pang mga di-tunay na sekta.",
              "Representa la organización apóstata central de la cual surgieron otras sectas falsas.",
            ),
          },
        ],
      },
    },
    {
      id: 32,
      category: lesson32Fm.category,
      title: lesson32Fm.title,
      titleTl: lesson32Fm.titleTl,
      titleEs: lesson32Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson32Fm.searchKeywords,
      searchKeywordsTl: lesson32Fm.searchKeywordsTl,
      searchKeywordsEs: lesson32Fm.searchKeywordsEs,
      searchContent: lesson32Fm.searchContent,
      searchContentTl: lesson32Fm.searchContentTl,
      searchContentEs: lesson32Fm.searchContentEs,
      content: <Lesson32Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson32Fm.quizTitle, lesson32Fm.quizTitleTl, lesson32Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the final stage in the historical map of faith?",
              "Ano ang huling yugto sa mapang pangkasaysayan ng pananampalataya?",
              "¿Cuál es la etapa final en el mapa histórico de la fe?",
            ),
            options: lz(
              [
                "The Great Apostasy",
                "The Branching Sects",
                "The Restored Flock",
                "The Original Foundation",
              ],
              [
                "Ang Dakilang Pagtalikod",
                "Ang mga Sangay na Sekta",
                "Ang Ipinanumbalik na Kawan",
                "Ang Orihinal na Saligan",
              ],
              [
                "La Gran Apostasía",
                "Las Sectas Ramificadas",
                "El Rebaño Restaurado",
                "El Fundamento Original",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "The restored flock is the final call to salvation through the true Church of Christ.",
              "Ang ipinanumbalik na kawan ay ang huling tawag sa kaligtasan sa pamamagitan ng tunay na Iglesia ni Cristo.",
              "El rebaño restaurado es el último llamado a la salvación a través de la verdadera Iglesia de Cristo.",
            ),
          },
        ],
      },
    },
    {
      id: 33,
      category: lesson33Fm.category,
      title: lesson33Fm.title,
      titleTl: lesson33Fm.titleTl,
      titleEs: lesson33Fm.titleEs,
      icon: Infinity,
      searchKeywords: lesson33Fm.searchKeywords,
      searchKeywordsTl: lesson33Fm.searchKeywordsTl,
      searchKeywordsEs: lesson33Fm.searchKeywordsEs,
      searchContent: lesson33Fm.searchContent,
      searchContentTl: lesson33Fm.searchContentTl,
      searchContentEs: lesson33Fm.searchContentEs,
      content: <Lesson33Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson33Fm.quizTitle, lesson33Fm.quizTitleTl, lesson33Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Through what was the everlasting covenant established according to Hebrews 13:20?",
              "Sa pamamagitan ng ano itinatag ang walang hanggang tipan ayon sa Hebreo 13:20?",
              "¿A través de qué se estableció el pacto eterno según Hebreos 13:20?",
            ),
            options: lz(
              [
                "The blood of the covenant",
                "The laws of man",
                "The wisdom of the world",
                "The works of the flesh",
              ],
              [
                "Ang dugo ng tipan",
                "Ang mga batas ng tao",
                "Ang karunungan ng sanlibutan",
                "Ang mga gawa ng laman",
              ],
              [
                "La sangre del pacto",
                "Las leyes del hombre",
                "La sabiduría del mundo",
                "Las obras de la carne",
              ],
            ),
            correctIndex: 0,
            explanation: lz(
              "Hebrews 13:20 mentions the blood of the everlasting covenant as the foundation of this relationship.",
              "Binabanggit sa Hebreo 13:20 ang dugo ng walang hanggang tipan bilang pundasyon ng relasyong ito.",
              "Hebreos 13:20 menciona la sangre del pacto eterno como el fundamento de esta relación.",
            ),
          },
        ],
      },
    },
    {
      id: 34,
      category: lesson34Fm.category,
      title: lesson34Fm.title,
      titleTl: lesson34Fm.titleTl,
      titleEs: lesson34Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson34Fm.searchKeywords,
      searchKeywordsTl: lesson34Fm.searchKeywordsTl,
      searchKeywordsEs: lesson34Fm.searchKeywordsEs,
      searchContent: lesson34Fm.searchContent,
      searchContentTl: lesson34Fm.searchContentTl,
      searchContentEs: lesson34Fm.searchContentEs,
      content: <Lesson34Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson34Fm.quizTitle, lesson34Fm.quizTitleTl, lesson34Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What does Deuteronomy 24:16 state about personal accountability?",
              "Ano ang sinasabi ng Deuteronomio 24:16 tungkol sa personal na pananagutan?",
              "¿Qué dice Deuteronomio 24:16 sobre la responsabilidad personal?",
            ),
            options: lz(
              [
                "Fathers can die for children",
                "Children can die for fathers",
                "A person shall be put to death for his own sin",
                "Mainstream religions are correct",
              ],
              [
                "Ang mga ama ay maaaring mamatay para sa mga anak",
                "Ang mga anak ay maaaring mamatay para sa mga ama",
                "Ang bawat tao ay papatayin dahil sa kaniyang sariling kasalanan",
                "Ang mga pangunahing relihiyon ay tama",
              ],
              [
                "Los padres pueden morir por los hijos",
                "Los hijos pueden morir por los padres",
                "Cada uno morirá por su propio pecado",
                "Las religiones mayoritarias tienen razón",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Deuteronomy 24:16 strictly forbids proxy death for sins.",
              "Mahigpit na ipinagbabawal ng Deuteronomio 24:16 ang proxy death para sa mga kasalanan.",
              "Deuteronomio 24:16 prohíbe estrictamente la muerte por poder para los pecados.",
            ),
          },
          {
            question: lz(
              "How did Christ fulfill the law while saving mankind?",
              "Paano tinupad ni Cristo ang kautusan habang inililigtas ang sangkatauhan?",
              "¿Cómo cumplió Cristo la ley mientras salvaba a la humanidad?",
            ),
            options: lz(
              [
                "By breaking the law",
                "By ignoring the law",
                "By creating the One New Man",
                "By dying for strangers",
              ],
              [
                "Sa pagsira ng batas",
                "Sa pag-balewala sa batas",
                "Sa pamamagitan ng paglikha ng Isang Taong Bago",
                "Sa pagkamatay para sa mga hindi kakilala",
              ],
              [
                "Rompiendo la ley",
                "Ignorando la ley",
                "Creando al Solo y Nuevo Hombre",
                "Muriendo por extraños",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "By creating the One New Man, Christ legally died for His own Body (the Church).",
              "Sa paglikha ng Isang Taong Bago, legal na namatay si Cristo para sa Kaniyang sariling Katawan (ang Iglesia).",
              "Al crear al Solo y Nuevo Hombre, Cristo murió legalmente por Su propio Cuerpo (la Iglesia).",
            ),
          },
          {
            question: lz(
              "In the 'One New Man', what is the role of the Church?",
              "Sa 'Isang Taong Bago', ano ang papel ng Iglesia?",
              "En el 'Solo y Nuevo Hombre', ¿cuál es el papel de la Iglesia?",
            ),
            options: lz(
              ["The Head", "The Body", "The Foundation", "The Spirit"],
              ["Ang Ulo", "Ang Katawan", "Ang Saligan", "Ang Espiritu"],
              ["La Cabeza", "el Cuerpo", "El Fundamento", "El Espíritu"],
            ),
            correctIndex: 1,
            explanation: lz(
              "Colossians 1:18 and Ephesians 1:22-23 identify the Church as the Body of Christ.",
              "Kinikilala ng Colosas 1:18 at Efeso 1:22-23 ang Iglesia bilang Katawan ni Cristo.",
              "Colosenses 1:18 y Efesios 1:22-23 identifican a la Iglesia como el Cuerpo de Cristo.",
            ),
          },
        ],
      },
    },
    {
      id: 35,
      category: lesson35Fm.category,
      title: lesson35Fm.title,
      titleTl: lesson35Fm.titleTl,
      titleEs: lesson35Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson35Fm.searchKeywords,
      searchKeywordsTl: lesson35Fm.searchKeywordsTl,
      searchKeywordsEs: lesson35Fm.searchKeywordsEs,
      searchContent: lesson35Fm.searchContent,
      searchContentTl: lesson35Fm.searchContentTl,
      searchContentEs: lesson35Fm.searchContentEs,
      content: <Lesson35Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson35Fm.quizTitle, lesson35Fm.quizTitleTl, lesson35Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Who is the singular 'Seed' mentioned in Galatians 3:16?",
              "Sino ang iisang 'Binhi' na binabanggit sa Galacia 3:16?",
              "¿Quién es la 'Simiente' singular mencionada en Gálatas 3:16?",
            ),
            options: lz(
              [
                "The nation of Israel",
                "The Apostles",
                "Jesus Christ",
                "The Prophets",
              ],
              [
                "Ang bansang Israel",
                "Ang mga Apostol",
                "Jesucristo",
                "Ang mga Propeta",
              ],
              [
                "La nación de Israel",
                "Los Apóstoles",
                "Jesucristo",
                "Los Profetas",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Galatians 3:16 explicitly states that the Seed is Christ.",
              "Eksplicitong sinasabi sa Galacia 3:16 na ang Binhi ay si Cristo.",
              "Gálatas 3:16 afirma explícitamente que la Simiente es Cristo.",
            ),
          },
          {
            question: lz(
              "How do we become Abraham's seed according to Galatians 3:29?",
              "Paano tayo nagiging binhi ni Abraham ayon sa Galacia 3:29?",
              "¿Cómo llegamos a ser la simiente de Abraham según Gálatas 3:29?",
            ),
            options: lz(
              [
                "By physical birth",
                "By belonging to Christ",
                "By living in Canaan",
                "By following the law of Moses",
              ],
              [
                "Sa pamamagitan ng pisikal na pagkasilang",
                "Sa pamamagitan ng pagiging kay Cristo",
                "Sa pamamagitan ng pagtira sa Canaan",
                "Sa pagsunod sa kautusan ni Moises",
              ],
              [
                "Por nacimiento físico",
                "Por pertenecer a Cristo",
                "Por vivir en Canaán",
                "Por seguir la ley de Moisés",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Galatians 3:29 says if we are Christ's, then we are Abraham's seed.",
              "Sinasabi sa Galacia 3:29 na kung tayo ay kay Cristo, tayo nga ay binhi ni Abraham.",
              "Gálatas 3:29 dice que si somos de Cristo, entonces somos la simiente de Abraham.",
            ),
          },
        ],
      },
    },
    {
      id: 36,
      category: lesson36Fm.category,
      title: lesson36Fm.title,
      titleTl: lesson36Fm.titleTl,
      titleEs: lesson36Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson36Fm.searchKeywords,
      searchKeywordsTl: lesson36Fm.searchKeywordsTl,
      searchKeywordsEs: lesson36Fm.searchKeywordsEs,
      searchContent: lesson36Fm.searchContent,
      searchContentTl: lesson36Fm.searchContentTl,
      searchContentEs: lesson36Fm.searchContentEs,
      content: <Lesson36Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson36Fm.quizTitle, lesson36Fm.quizTitleTl, lesson36Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What are the two requirements to enter the kingdom of God according to John 3:5?",
              "Ano ang dalawang kinakailangan upang makapasok sa kaharian ng Diyos ayon sa Juan 3:5?",
              "¿Cuáles son los dos requisitos para entrar al reino de Dios según Juan 3:5?",
            ),
            options: lz(
              [
                "Faith and works",
                "Water and Spirit",
                "Prayer and fasting",
                "Gold and silver",
              ],
              [
                "Pananampalataya at mga gawa",
                "Tubig at Espiritu",
                "Panalangin at pag-aayuno",
                "Ginto at pilak",
              ],
              [
                "Fe y obras",
                "Agua y Espíritu",
                "Oración y ayuno",
                "Oro y plata",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "John 3:5 specifies being born of water and the Spirit.",
              "Tinukoy sa Juan 3:5 ang maipanganak sa tubig at sa Espiritu.",
              "Juan 3:5 especifica el nacer de agua y del Espíritu.",
            ),
          },
          {
            question: lz(
              "What happens to a person who is in Christ according to 2 Corinthians 5:17?",
              "Ano ang nangyayari sa isang taong nasa kay Cristo ayon sa 2 Corinto 5:17?",
              "¿Qué le sucede a una persona que está en Cristo según 2 Corintios 5:17?",
            ),
            options: lz(
              [
                "They stay the same",
                "They become a new creation",
                "They lose their faith",
                "They become a prophet",
              ],
              [
                "Nanatili silang pareho",
                "Sila ay nagiging bagong nilalang",
                "Nawawala ang kanilang pananampalataya",
                "Sila ay nagiging propeta",
              ],
              [
                "Siguen siendo los mismos",
                "Se convierten en una nueva creación",
                "Pierden su fe",
                "Se convierten en profetas",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "2 Corinthians 5:17 says if anyone is in Christ, he is a new creation.",
              "Sinasabi sa 2 Corinto 5:17 na kung ang sinoman ay nasa kay Cristo, siya ay bagong nilalang.",
              "2 Corintios 5:17 dice que si alguno está en Cristo, nueva criatura es.",
            ),
          },
        ],
      },
    },
    {
      id: 37,
      category: lesson37Fm.category,
      title: lesson37Fm.title,
      titleTl: lesson37Fm.titleTl,
      titleEs: lesson37Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson37Fm.searchKeywords,
      searchKeywordsTl: lesson37Fm.searchKeywordsTl,
      searchKeywordsEs: lesson37Fm.searchKeywordsEs,
      searchContent: lesson37Fm.searchContent,
      searchContentTl: lesson37Fm.searchContentTl,
      searchContentEs: lesson37Fm.searchContentEs,
      content: <Lesson37Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson37Fm.quizTitle, lesson37Fm.quizTitleTl, lesson37Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the 'seed' in the Parable of the Sower?",
              "Ano ang 'binhi' sa Parabula ng Tagapaghasik?",
              "¿Qué es la 'semilla' en la parábola del sembrador?",
            ),
            options: lz(
              [
                "Money",
                "The Word of God",
                "The Church building",
                "The people",
              ],
              [
                "Pera",
                "Ang Salita ng Diyos",
                "Ang gusali ng Iglesia",
                "Ang mga tao",
              ],
              [
                "Dinero",
                "La Palabra de Dios",
                "El edificio de la Iglesia",
                "La gente",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Luke 8:11 states that the seed is the word of God.",
              "Sinasabi sa Lucas 8:11 na ang binhi ay ang salita ng Diyos.",
              "Lucas 8:11 afirma que la semilla es la palabra de Dios.",
            ),
          },
          {
            question: lz(
              "Who gives the 'increase' in the work of propagation according to 1 Corinthians 3:6?",
              "Sino ang nagbibigay ng 'paglago' sa gawain ng pagpapalaganap ayon sa 1 Corinto 3:6?",
              "¿Quién da el 'crecimiento' en la obra de propagación según 1 Corintios 3:6?",
            ),
            options: lz(
              ["The Minister", "The Members", "God", "The Government"],
              ["Ang Ministro", "Ang mga Kaanib", "Ang Diyos", "Ang Gobyerno"],
              ["El Ministro", "Los Miembros", "Dios", "El Gobierno"],
            ),
            correctIndex: 2,
            explanation: lz(
              "1 Corinthians 3:6 says God gives the increase.",
              "Sinasabi sa 1 Corinto 3:6 na ang Diyos ang nagbibigay ng paglago.",
              "1 Corintios 3:6 dice que Dios da el crecimiento.",
            ),
          },
        ],
      },
    },
    {
      id: 38,
      category: lesson38Fm.category,
      title: lesson38Fm.title,
      titleTl: lesson38Fm.titleTl,
      titleEs: lesson38Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson38Fm.searchKeywords,
      searchKeywordsTl: lesson38Fm.searchKeywordsTl,
      searchKeywordsEs: lesson38Fm.searchKeywordsEs,
      searchContent: lesson38Fm.searchContent,
      searchContentTl: lesson38Fm.searchContentTl,
      searchContentEs: lesson38Fm.searchContentEs,
      content: <Lesson38Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson38Fm.quizTitle, lesson38Fm.quizTitleTl, lesson38Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to the Lamsa translation of Acts 20:28, what did Christ purchase with His blood?",
              "Ayon sa Lamsa translation ng Gawa 20:28, ano ang binili ni Cristo ng Kaniyang dugo?",
              "Según la traducción Lamsa de Hechos 20:28, ¿qué compró Cristo con Su sangre?",
            ),
            options: lz(
              [
                "The whole world",
                "The church of Christ",
                "The temple in Jerusalem",
                "The souls in purgatory",
              ],
              [
                "Ang buong sanlibutan",
                "Ang iglesia ni Cristo",
                "Ang templo sa Jerusalem",
                "Ang mga kaluluwa sa purgatoryo",
              ],
              [
                "Todo el mundo",
                "La iglesia de Cristo",
                "El templo en Jerusalén",
                "Las almas en el purgatorio",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Acts 20:28 Lamsa specifies the 'church of Christ'.",
              "Tinukoy sa Gawa 20:28 Lamsa ang 'iglesia ni Cristo'.",
              "Hechos 20:28 Lamsa especifica la 'iglesia de Cristo'.",
            ),
          },
          {
            question: lz(
              "Why is a 'generic sacrifice' for all mankind legally problematic?",
              "Bakit ang isang 'pangkalahatang sakripisyo' para sa buong sangkatauhan ay legal na problemado?",
              "¿Por qué un 'sacrificio genérico' para toda la humanidad es legalmente problemático?",
            ),
            options: lz(
              [
                "It is too expensive",
                "It violates personal accountability (Deut 24:16)",
                "It is not mentioned in the Bible",
                "It is too simple",
              ],
              [
                "Ito ay masyadong mahal",
                "Nilalabag nito ang personal na pananagutan (Deut 24:16)",
                "Hindi ito binanggit sa Biblia",
                "Ito ay masyadong simple",
              ],
              [
                "Es demasiado caro",
                "Viola la responsabilidad personal (Deut 24:16)",
                "No se menciona en la Biblia",
                "Es demasiado simple",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Deuteronomy 24:16 requires every man to die for his own sin; Christ can only die for His own Body.",
              "Hinihingi ng Deuteronomio 24:16 na ang bawat tao ay mamatay para sa sarili niyang kasalanan; si Cristo ay maaari lamang mamatay para sa Kaniyang sariling Katawan.",
              "Deuteronomio 24:16 requiere que cada hombre muera por su propio pecado; Cristo solo puede morir por Su propio Cuerpo.",
            ),
          },
        ],
      },
    },
    {
      id: 39,
      category: lesson39Fm.category,
      title: lesson39Fm.title,
      titleTl: lesson39Fm.titleTl,
      titleEs: lesson39Fm.titleEs,
      icon: ShieldCheck,
      searchKeywords: lesson39Fm.searchKeywords,
      searchKeywordsTl: lesson39Fm.searchKeywordsTl,
      searchKeywordsEs: lesson39Fm.searchKeywordsEs,
      searchContent: lesson39Fm.searchContent,
      searchContentTl: lesson39Fm.searchContentTl,
      searchContentEs: lesson39Fm.searchContentEs,
      content: <Lesson39Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson39Fm.quizTitle, lesson39Fm.quizTitleTl, lesson39Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What is the name of the Church mentioned in Romans 16:16?",
              "Ano ang pangalan ng Iglesia na binabanggit sa Roma 16:16?",
              "¿Cuál es el nombre de la Iglesia mencionada en Romanos 16:16?",
            ),
            options: lz(
              [
                "Churches of the world",
                "Church of Christ",
                "Church of the people",
                "Church of the prophets",
              ],
              [
                "Mga iglesia ng sanlibutan",
                "Iglesia ni Cristo",
                "Iglesia ng mga tao",
                "Iglesia ng mga propeta",
              ],
              [
                "Iglesias del mundo",
                "Iglesia de Cristo",
                "Iglesia de la gente",
                "Iglesia de los profetas",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Romans 16:16 mentions the 'churches of Christ'.",
              "Binabanggit sa Roma 16:16 ang 'mga iglesia ni Cristo'.",
              "Romanos 16:16 menciona las 'iglesias de Cristo'.",
            ),
          },
          {
            question: lz(
              "According to Ecclesiastes 12:13, what is the whole duty of man?",
              "Ayon sa Eclesiastes 12:13, ano ang buong tungkulin ng tao?",
              "Según Eclesiastés 12:13, ¿cuál es el todo del hombre?",
            ),
            options: lz(
              [
                "To be rich",
                "To be famous",
                "To fear God and keep His commandments",
                "To live for oneself",
              ],
              [
                "Maging mayaman",
                "Maging sikat",
                "Matakot sa Diyos at sundin ang Kaniyang mga utos",
                "Mabuhay para sa sarili",
              ],
              [
                "Ser rico",
                "Ser famoso",
                "Temer a Dios y guardar Sus mandamientos",
                "Vivir para sí mismo",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Ecclesiastes 12:13 says the whole duty of man is to fear God and keep His commandments.",
              "Sinasabi sa Eclesiastes 12:13 na ang buong tungkulin ng tao ay matakot sa Diyos at sundin ang Kaniyang mga utos.",
              "Eclesiastés 12:13 dice que el todo del hombre es temer a Dios y guardar Sus mandamientos.",
            ),
          },
        ],
      },
    },
    {
      id: 40,
      category: lesson40Fm.category,
      title: lesson40Fm.title,
      titleTl: lesson40Fm.titleTl,
      titleEs: lesson40Fm.titleEs,
      icon: Droplets,
      searchKeywords: lesson40Fm.searchKeywords,
      searchKeywordsTl: lesson40Fm.searchKeywordsTl,
      searchKeywordsEs: lesson40Fm.searchKeywordsEs,
      searchContent: lesson40Fm.searchContent,
      searchContentTl: lesson40Fm.searchContentTl,
      searchContentEs: lesson40Fm.searchContentEs,
      content: <Lesson40Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson40Fm.quizTitle, lesson40Fm.quizTitleTl, lesson40Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "Through what was the New Covenant established according to Luke 22:20?",
              "Sa pamamagitan ng ano itinatag ang Bagong Tipan ayon sa Lucas 22:20?",
              "¿A través de qué se estableció el Nuevo Pacto según Lucas 22:20?",
            ),
            options: lz(
              [
                "The laws of Moses",
                "The blood of Christ",
                "The words of the prophets",
                "The sacrifice of animals",
              ],
              [
                "Ang mga kautusan ni Moises",
                "Ang dugo ni Cristo",
                "Ang mga salita ng mga propeta",
                "Ang sakripisyo ng mga hayop",
              ],
              [
                "Las leyes de Moisés",
                "La sangre de Cristo",
                "Las palabras de los profetas",
                "El sacrificio de animales",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Luke 22:20 states that the cup is the new testament in Christ's blood.",
              "Sinasabi sa Lucas 22:20 na ang kopa ay ang bagong tipan sa dugo ni Cristo.",
              "Lucas 22:20 afirma que la copa es el nuevo pacto en la sangre de Cristo.",
            ),
          },
          {
            question: lz(
              "What does the New Covenant represent?",
              "Ano ang kinakatawan ng Bagong Tipan?",
              "¿Qué representa el Nuevo Pacto?",
            ),
            options: lz(
              [
                "Eternal damnation",
                "Forgiveness of sins and a new relationship with God",
                "The end of all laws",
                "A temporary agreement",
              ],
              [
                "Walang hanggang kapahamakan",
                "Kapatawaran ng mga kasalanan at isang bagong relasyon sa Diyos",
                "Ang wakas ng lahat ng kautusan",
                "Isang pansamantalang kasunduan",
              ],
              [
                "Condenación eterna",
                "Perdón de los pecados y una nueva relación con Dios",
                "El fin de todas las leyes",
                "Un acuerdo temporal",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "The New Covenant signifies the forgiveness of sins and a renewed relationship with God through Christ's sacrifice.",
              "Ang Bagong Tipan ay nangangahulugan ng kapatawaran ng mga kasalanan at isang bagong relasyon sa Diyos sa pamamagitan ng sakripisyo ni Cristo.",
              "El Nuevo Pacto significa el perdón de los pecados y una relación renovada con Dios a través del sacrificio de Cristo.",
            ),
          },
        ],
      },
    },
    {
      id: 41,
      category: lesson41Fm.category,
      title: lesson41Fm.title,
      titleTl: lesson41Fm.titleTl,
      titleEs: lesson41Fm.titleEs,
      icon: Star,
      searchKeywords: lesson41Fm.searchKeywords,
      searchKeywordsTl: lesson41Fm.searchKeywordsTl,
      searchKeywordsEs: lesson41Fm.searchKeywordsEs,
      searchContent: lesson41Fm.searchContent,
      searchContentTl: lesson41Fm.searchContentTl,
      searchContentEs: lesson41Fm.searchContentEs,
      content: <Lesson41Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson41Fm.quizTitle, lesson41Fm.quizTitleTl, lesson41Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to Matthew 22:14, how are the called and chosen compared?",
              "Ayon sa Mateo 22:14, paano inihambing ang mga tinawag at mga hinirang?",
              "Según Mateo 22:14, ¿cómo se comparan los llamados y los elegidos?",
            ),
            options: [
              lz(
                "Many are called, and all are chosen",
                "Marami ang tinawag, at lahat ay hinirang",
                "Muchos son llamados, y todos son elegidos",
              ),
              lz(
                "Few are called, and many are chosen",
                "Kakaunti ang tinawag, at marami ang hinirang",
                "Pocos son llamados, y muchos son elegidos",
              ),
              lz(
                "Many are called, but few are chosen",
                "Marami ang tinawag, ngunit kakaunti ang hinirang",
                "Muchos son llamados, mas pocos escogidos",
              ),
              lz(
                "None are called or chosen",
                "Walang tinawag o hinirang",
                "Ninguno es llamado ni elegido",
              ),
            ],
            correctIndex: 2,
            explanation: lz(
              "Matthew 22:14 states: 'For many are called, but few are chosen.' This shows that election is specific and purposeful.",
              "Sinasabi sa Mateo 22:14: 'Sapagka't marami ang mga tinawag, datapuwa't kakaunti ang mga hinirang.' Ipinapakita nito na ang pagpili ay tiyak at may layunin.",
              "Mateo 22:14 declara: 'Porque muchos son llamados, mas pocos escogidos.' Esto muestra que la elección es específica y tiene un propósito.",
            ),
          },
          {
            question: lz(
              "What does 1 Peter 2:9 call the people of God?",
              "Ano ang itinawag ng 1 Pedro 2:9 sa bayan ng Diyos?",
              "¿Cómo llama 1 Pedro 2:9 al pueblo de Dios?",
            ),
            options: [
              lz(
                "A random group of people",
                "Isang random na grupo ng mga tao",
                "Un grupo aleatorio de personas",
              ),
              lz(
                "A chosen generation, a royal priesthood, a holy nation",
                "Isang hinirang na lahi, isang maharlikang pagkasaserdote, isang banal na bansa",
                "Linaje escogido, real sacerdocio, nación santa",
              ),
              lz(
                "A sinful and lost people",
                "Isang makasalanan at nawawalang bayan",
                "Un pueblo pecador y perdido",
              ),
              lz(
                "An ordinary gathering of neighbors",
                "Isang ordinaryong pagtitipon ng mga kapitbahay",
                "Una reunión ordinaria de vecinos",
              ),
            ],
            correctIndex: 1,
            explanation: lz(
              "1 Peter 2:9 calls them 'a chosen generation, a royal priesthood, an holy nation, a peculiar people.'",
              "Tinatawag sila ng 1 Pedro 2:9 na 'isang hinirang na lahi, isang maharlikang pagkasaserdote, isang banal na bansa, isang natatanging bayan.'",
              "1 Pedro 2:9 los llama 'linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios.'",
            ),
          },
        ],
      },
    },
    {
      id: 42,
      category: lesson42Fm.category,
      title: lesson42Fm.title,
      titleTl: lesson42Fm.titleTl,
      titleEs: lesson42Fm.titleEs,
      icon: Eye,
      searchKeywords: lesson42Fm.searchKeywords,
      searchKeywordsTl: lesson42Fm.searchKeywordsTl,
      searchKeywordsEs: lesson42Fm.searchKeywordsEs,
      searchContent: lesson42Fm.searchContent,
      searchContentTl: lesson42Fm.searchContentTl,
      searchContentEs: lesson42Fm.searchContentEs,
      content: <Lesson42Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson42Fm.quizTitle, lesson42Fm.quizTitleTl, lesson42Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to Romans 8:29-30 what is the first step in the chain of salvation?",
              "Ayon sa Roma 8:29-30 ano ang unang hakbang sa kadena ng kaligtasan?",
              "Según Romanos 8:29-30, ¿cuál es el primer paso en la cadena de la salvación?",
            ),
            options: lz(
              [
                "Justification",
                "Glorification",
                "Foreknowledge",
                "Being called",
              ],
              [
                "Pag-aaring-ganap",
                "Pagpaparangal",
                "Paunang kaalaman",
                "Pagtawag",
              ],
              [
                "Justificación",
                "Glorificación",
                "Preconocimiento",
                "Ser llamado",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Romans 8:29-30 shows the chain begins with God's foreknowledge (foreknown → predestined → called → justified → glorified).",
              "Ipinapakita ng Roma 8:29-30 na nagsisimula ang kadena sa pagkaalam ng Diyos nang maaga (nakilala bago → nagtakda → tinawag → pinawalang-sala → niluwalhati).",
              "Romanos 8:29-30 muestra que la cadena comienza con el preconocimiento de Dios (conocidos → predestinados → llamados → justificados → glorificados).",
            ),
          },
          {
            question: lz(
              "Is God's election based on foreseen human merit according to 2 Timothy 1:9?",
              "Batay ba ang pagpili ng Diyos sa nakita nang maaga na merito ng tao ayon sa 2 Timoteo 1:9?",
              "¿Se basa la elección de Dios en el mérito humano previsto según 2 Timoteo 1:9?",
            ),
            options: lz(
              [
                "Yes, God chose those He knew would be good",
                "No, it is based solely on His own purpose and grace",
                "It depends on the person's free will",
                "God has no plan for salvation",
              ],
              [
                "Oo, pinili ng Diyos ang mga alam Niyang magiging mabuti",
                "Hindi, ito ay batay lamang sa Kaniyang sariling layunin at biyaya",
                "Nakasalalay ito sa malayang kalooban ng tao",
                "Ang Diyos ay walang plano para sa kaligtasan",
              ],
              [
                "Sí, Dios eligió a quienes sabía que serían buenos",
                "No, se basa únicamente en Su propio propósito y gracia",
                "Depende del libre albedrío de la persona",
                "Dios no tiene plan de salvación",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "2 Timothy 1:9 states that God saved us 'not according to our works, but according to His own purpose and grace.'",
              "Sinasabi ng 2 Timoteo 1:9 na iniligtas tayo ng Diyos 'hindi ayon sa ating mga gawa, kundi ayon sa Kaniyang sariling layunin at biyaya.'",
              "2 Timoteo 1:9 afirma que Dios nos salvó 'no conforme a nuestras obras, sino según el propósito suyo y la gracia'.",
            ),
          },
        ],
      },
    },
    {
      id: 43,
      category: lesson43Fm.category,
      title: lesson43Fm.title,
      titleTl: lesson43Fm.titleTl,
      titleEs: lesson43Fm.titleEs,
      icon: Users,
      searchKeywords: lesson43Fm.searchKeywords,
      searchKeywordsTl: lesson43Fm.searchKeywordsTl,
      searchKeywordsEs: lesson43Fm.searchKeywordsEs,
      searchContent: lesson43Fm.searchContent,
      searchContentTl: lesson43Fm.searchContentTl,
      searchContentEs: lesson43Fm.searchContentEs,
      content: <Lesson43Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson43Fm.quizTitle, lesson43Fm.quizTitleTl, lesson43Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What does the Greek word 'ekklesia' (Church) literally mean?",
              "Ano ang literal na ibig sabihin ng salitang Griyego na 'ekklesia' (Iglesia)?",
              "¿Qué significa literalmente la palabra griega 'ekklesia' (Iglesia)?",
            ),
            options: lz(
              [
                "A building for worship",
                "The called-out assembly",
                "A group of friends",
                "A religious ceremony",
              ],
              [
                "Isang gusali para sa pagsamba",
                "Ang tinawag na kapulungan",
                "Isang grupo ng mga kaibigan",
                "Isang relihiyosong seremonya",
              ],
              [
                "Un edificio para la adoración",
                "La asamblea llamada",
                "Un grupo de amigos",
                "Una ceremonia religiosa",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "The Greek 'ekklesia' literally means 'the called-out ones' or 'called-out assembly' — pointing to those elected and gathered by God.",
              "Ang Griyegong 'ekklesia' ay literal na nangangahulugang 'ang mga tinawag na palabas' o 'tinawag na kapulungan' — tumutukoy sa mga hinirang at tinipon ng Diyos.",
              "El griego 'ekklesia' significa literalmente 'los llamados fuera' o 'asamblea llamada', refiriéndose a los elegidos y reunidos por Dios.",
            ),
          },
          {
            question: lz(
              "According to John 15:16, who made the choice in the relationship between Christ and His disciples?",
              "Ayon sa Juan 15:16, sino ang pumili sa relasyon sa pagitan ni Cristo at ng Kaniyang mga alagad?",
              "Según Juan 15:16, ¿quién tomó la decisión en la relación entre Cristo y Sus discípulos?",
            ),
            options: lz(
              [
                "The disciples chose Christ",
                "It was a mutual choice",
                "Christ chose His disciples",
                "Neither chose the other",
              ],
              [
                "Pinili ng mga alagad si Cristo",
                "Ito ay isang mutual na pagpili",
                "Pinili ni Cristo ang Kaniyang mga alagad",
                "Wala sa kanila ang pumili sa isa",
              ],
              [
                "Los discípulos eligieron a Cristo",
                "Fue una elección mutua",
                "Cristo eligió a Sus discípulos",
                "Ninguno eligió al otro",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "John 15:16 says: 'Ye have not chosen me, but I have chosen you' — making clear that it is Christ, not man, who initiates election.",
              "Sinasabi sa Juan 15:16: 'Hindi kayo ang pumili sa akin, kundi ako ang pumili sa inyo' — malinaw na nagpapakita na si Cristo, hindi ang tao, ang nagpasimula ng pagpili.",
              "Juan 15:16 dice: 'No me elegisteis vosotros a mí, sino que yo os elegí a vosotros', dejando claro que es Cristo, no el hombre, quien inicia la elección.",
            ),
          },
        ],
      },
    },
    {
      id: 44,
      category: lesson44Fm.category,
      title: lesson44Fm.title,
      titleTl: lesson44Fm.titleTl,
      titleEs: lesson44Fm.titleEs,
      icon: Users,
      searchKeywords: lesson44Fm.searchKeywords,
      searchKeywordsTl: lesson44Fm.searchKeywordsTl,
      searchKeywordsEs: lesson44Fm.searchKeywordsEs,
      searchContent: lesson44Fm.searchContent,
      searchContentTl: lesson44Fm.searchContentTl,
      searchContentEs: lesson44Fm.searchContentEs,
      content: <Lesson44Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson44Fm.quizTitle, lesson44Fm.quizTitleTl, lesson44Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "What does Ephesians 2:14 say Christ broke down?",
              "Ano ang sinabi ng Efeso 2:14 na winasak ni Cristo?",
              "¿Qué dice Efesios 2:14 que Cristo derribó?",
            ),
            options: lz(
              [
                "The temple of Jerusalem",
                "The middle wall of partition between God and men",
                "The power of Satan",
                "The laws of Rome",
              ],
              [
                "Ang templo ng Jerusalem",
                "Ang harang na pader sa pagitan ng Diyos at mga tao",
                "Ang kapangyarihan ni Satanas",
                "Ang mga batas ng Roma",
              ],
              [
                "El templo de Jerusalén",
                "La pared intermedia de separación entre Dios y los hombres",
                "El poder de Satanás",
                "Las leyes de Roma",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Ephesians 2:14 says Christ 'hath broken down the middle wall of partition between us,' referring to the separation between God and men.",
              "Sinasabi ng Efeso 2:14 na si Cristo ay 'bumasak ng harang na pader sa pagitan natin,' na tumutukoy sa paghihiwalay sa pagitan ng Diyos at mga tao.",
              "Efesios 2:14 dice que Cristo 'derribó la pared intermedia de separación entre nosotros', refiriéndose a la separación entre Dios y los hombres.",
            ),
          },
          {
            question: lz(
              "What did Christ create from the two (Christ and Church) according to Ephesians 2:15?",
              "Ano ang nilikha ni Cristo mula sa dalawa (Cristo at Iglesia) ayon sa Efeso 2:15?",
              "¿Qué creó Cristo de los dos (Cristo e Iglesia) según Efesios 2:15?",
            ),
            options: lz(
              [
                "A compromise agreement",
                "Two separate but equal churches",
                "One New Man",
                "A new law and commandment",
              ],
              [
                "Isang kompromisong kasunduan",
                "Dalawang hiwalay ngunit pantay na iglesia",
                "Isang Bagong Tao",
                "Isang bagong batas at utos",
              ],
              [
                "Un acuerdo de compromiso",
                "Dos iglesias separadas pero iguales",
                "Un Solo y Nuevo Hombre",
                "Una nueva ley y mandamiento",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Ephesians 2:15 says Christ created 'one new man' from the two, making peace — not a blend of two groups but a brand new creation.",
              "Sinasabi ng Efeso 2:15 na nilikha ni Cristo ang 'isang bagong tao' mula sa dalawa, gumagawa ng kapayapaan — hindi isang halo ng dalawang grupo kundi isang bagong nilikha.",
              "Efesios 2:15 dice que Cristo creó 'un solo y nuevo hombre' de los dos, haciendo la paz; no una mezcla de dos grupos, sino una creación nueva.",
            ),
          },
        ],
      },
    },
    {
      id: 45,
      category: lesson45Fm.category,
      title: lesson45Fm.title,
      titleTl: lesson45Fm.titleTl,
      titleEs: lesson45Fm.titleEs,
      icon: Heart,
      searchKeywords: lesson45Fm.searchKeywords,
      searchKeywordsTl: lesson45Fm.searchKeywordsTl,
      searchKeywordsEs: lesson45Fm.searchKeywordsEs,
      searchContent: lesson45Fm.searchContent,
      searchContentTl: lesson45Fm.searchContentTl,
      searchContentEs: lesson45Fm.searchContentEs,
      content: <Lesson45Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson45Fm.quizTitle, lesson45Fm.quizTitleTl, lesson45Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to Ephesians 1:22-23, what is the Church in relation to Christ?",
              "Ayon sa Efeso 1:22-23, ano ang Iglesia kaugnay kay Cristo?",
              "Según Efesios 1:22-23, ¿qué es la Iglesia en relación con Cristo?",
            ),
            options: lz(
              [
                "His servant",
                "His body",
                "His house",
                "His army",
              ],
              [
                "Kaniyang alipin",
                "Kaniyang katawan",
                "Kaniyang tahanan",
                "Kaniyang hukbo",
              ],
              [
                "Su siervo",
                "Su cuerpo",
                "Su casa",
                "Su ejército",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Ephesians 1:22-23 states the Church is 'his body, the fullness of him that filleth all in all.' The Church is His body, not merely His organization.",
              "Sinasabi ng Efeso 1:22-23 na ang Iglesia ay 'kaniyang katawan, ang kapunuan niyaong nagpupuno ng lahat sa lahat.' Ang Iglesia ay Kaniyang katawan, hindi lamang Kaniyang organisasyon.",
              "Efesios 1:22-23 afirma que la Iglesia es 'su cuerpo, la plenitud de Aquel que todo lo llena en todo'. La Iglesia es Su cuerpo, no meramente Su organización.",
            ),
          },
          {
            question: lz(
              "According to Ephesians 5:23, what is Christ the Saviour of?",
              "Ayon sa Efeso 5:23, Tagapagligtas ng ano si Cristo?",
              "Según Efesios 5:23, ¿de qué es Cristo el Salvador?",
            ),
            options: lz(
              [
                "The world",
                "Israel",
                "The body (the Church)",
                "All individuals personally",
              ],
              [
                "Ng mundo",
                "Ng Israel",
                "Ng katawan (ang Iglesia)",
                "Ng lahat ng indibidwal nang personal",
              ],
              [
                "Del mundo",
                "De Israel",
                "Del cuerpo (la Iglesia)",
                "De todos los individuos personalmente",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Ephesians 5:23 specifically says Christ 'is the saviour of the body.' Salvation flows from the Head to the Body — the Church.",
              "Sinasabi ng Efeso 5:23 na si Cristo ay 'ang Tagapagligtas ng katawan.' Ang kaligtasan ay dumadaloy mula sa Ulo patungo sa Katawan — ang Iglesia.",
              "Efesios 5:23 dice específicamente que Cristo 'es el salvador del cuerpo'. La salvación fluye desde la Cabeza hacia el Cuerpo: la Iglesia.",
            ),
          },
        ],
      },
    },
    {
      id: 46,
      category: lesson46Fm.category,
      title: lesson46Fm.title,
      titleTl: lesson46Fm.titleTl,
      titleEs: lesson46Fm.titleEs,
      icon: Infinity,
      searchKeywords: lesson46Fm.searchKeywords,
      searchKeywordsTl: lesson46Fm.searchKeywordsTl,
      searchKeywordsEs: lesson46Fm.searchKeywordsEs,
      searchContent: lesson46Fm.searchContent,
      searchContentTl: lesson46Fm.searchContentTl,
      searchContentEs: lesson46Fm.searchContentEs,
      content: <Lesson46Content lang={lang} onHover={onHover} />,
      quiz: {
        title: lz(lesson46Fm.quizTitle, lesson46Fm.quizTitleTl, lesson46Fm.quizTitleEs),
        questions: [
          {
            question: lz(
              "According to Ephesians 4:13, what is the goal of the growth of the Body?",
              "Ayon sa Efeso 4:13, ano ang layunin ng paglago ng Katawan?",
              "Según Efesios 4:13, ¿cuál es la meta del crecimiento del Cuerpo?",
            ),
            options: lz(
              [
                "To have the largest number of members",
                "The measure of the stature of the fullness of Christ",
                "To build the biggest church buildings",
                "To follow all the laws of Moses",
              ],
              [
                "Ang magkaroon ng pinakamaraming kasapi",
                "Ang sukat ng pangangatawan ng kabusugan ni Cristo",
                "Ang magtayo ng pinakamalaking gusali",
                "Ang sundin ang lahat ng kautusan ni Moises",
              ],
              [
                "Tener el mayor número de miembros",
                "La medida de la estatura de la plenitud de Cristo",
                "Construir los edificios más grandes",
                "Seguir todas las leyes de Moisés",
              ],
            ),
            correctIndex: 1,
            explanation: lz(
              "Ephesians 4:13 says the Body grows 'unto the measure of the stature of the fullness of Christ' — maturity, unity, and completeness in Christ.",
              "Sinasabi ng Efeso 4:13 na lumalaki ang Katawan 'hanggang sa sukatan ng tayog ng kabuuan ni Cristo' — kapanahunan, pagkakaisa, at pagkakumpleto kay Cristo.",
              "Efesios 4:13 dice que el Cuerpo crece 'a la medida de la estatura de la plenitud de Cristo': madurez, unidad y plenitud en Cristo.",
            ),
          },
          {
            question: lz(
              "According to Colossians 2:10, where does completeness come from?",
              "Ayon sa Colosas 2:10, saan nagmumula ang pagkakumpleto?",
              "Según Colosenses 2:10, ¿de dónde viene la plenitud?",
            ),
            options: lz(
              [
                "From personal discipline and prayer",
                "From following religious traditions",
                "From being complete in Christ, the Head",
                "From studying the Old Testament laws",
              ],
              [
                "Mula sa personal na disiplina at panalangin",
                "Mula sa pagsunod sa mga relihiyosong tradisyon",
                "Mula sa pagiging sakdal sa kaniya, ang Ulo",
                "Mula sa pag-aaral ng mga kautusan sa Matandang Tipan",
              ],
              [
                "De la disciplina personal y la oración",
                "De seguir tradiciones religiosas",
                "De estar completos en Él, la Cabeza",
                "De estudiar las leyes del Antiguo Testamento",
              ],
            ),
            correctIndex: 2,
            explanation: lz(
              "Colossians 2:10 says 'ye are complete in him' — completeness comes from union with Christ the Head, not from any human effort or tradition.",
              "Sinasabi ng Colosas 2:10 na 'kayo ay kumpleto sa kaniya' — ang pagkakumpleto ay nagmumula sa pagkakaisa kay Cristo ang Ulo, hindi mula sa anumang pagsisikap ng tao o tradisyon.",
              "Colosenses 2:10 dice 'vosotros estáis completos en él'; la plenitud proviene de la unión con Cristo, la Cabeza, no de ningún esfuerzo humano o tradición.",
            ),
          },
        ],
      },
    },
  ];
};
