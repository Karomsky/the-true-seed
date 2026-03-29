import React from 'react';
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
  Star
} from 'lucide-react';
import { ScriptureLink } from '../scriptureData';
import { Lesson } from '../types/study';
import Lesson01Content, { frontmatter as lesson01Fm } from '../content/lessons/01-divine-revelation.mdx';

import Lesson02Content, { frontmatter as lesson02Fm } from '../content/lessons/02-the-command-to-record-and-preserve.mdx';
import Lesson03Content, { frontmatter as lesson03Fm } from '../content/lessons/03-the-composition-and-the-command.mdx';
import Lesson04Content, { frontmatter as lesson04Fm } from '../content/lessons/04-evidence-of-authenticity-prophecy.mdx';
import Lesson05Content, { frontmatter as lesson05Fm } from '../content/lessons/05-ancient-insight-modern-discovery.mdx';
import Lesson06Content, { frontmatter as lesson06Fm } from '../content/lessons/06-the-five-creations-the-new-man.mdx';
import Lesson07Content, { frontmatter as lesson07Fm } from '../content/lessons/07-the-only-true-god.mdx';
import Lesson08Content, { frontmatter as lesson08Fm } from '../content/lessons/08-the-nature-of-the-true-god.mdx';
import Lesson09Content, { frontmatter as lesson09Fm } from '../content/lessons/09-the-attributes-of-god.mdx';
import Lesson10Content, { frontmatter as lesson10Fm } from '../content/lessons/10-the-character-of-the-true-god.mdx';
import Lesson11Content, { frontmatter as lesson11Fm } from '../content/lessons/11-the-names-and-titles-of-god.mdx';
import Lesson12Content, { frontmatter as lesson12Fm } from '../content/lessons/12-the-nature-of-jesus-christ.mdx';
import Lesson13Content, { frontmatter as lesson13Fm } from '../content/lessons/13-the-pre-existence-of-christ.mdx';
import Lesson14Content, { frontmatter as lesson14Fm } from '../content/lessons/14-the-virgin-birth-of-christ.mdx';
import Lesson15Content, { frontmatter as lesson15Fm } from '../content/lessons/15-the-purpose-of-christ-s-coming.mdx';
import Lesson16Content, { frontmatter as lesson16Fm } from '../content/lessons/16-the-ends-of-the-earth.mdx';
import Lesson17Content, { frontmatter as lesson17Fm } from '../content/lessons/17-the-authority-to-preach.mdx';
import Lesson18Content, { frontmatter as lesson18Fm } from '../content/lessons/18-the-messenger-from-the-far-east.mdx';
import Lesson19Content, { frontmatter as lesson19Fm } from '../content/lessons/19-true-religion.mdx';
import Lesson20Content, { frontmatter as lesson20Fm } from '../content/lessons/20-the-one-new-man.mdx';
import Lesson21Content, { frontmatter as lesson21Fm } from '../content/lessons/21-the-last-trumpet.mdx';
import Lesson22Content, { frontmatter as lesson22Fm } from '../content/lessons/22-the-great-judgment.mdx';
import Lesson23Content, { frontmatter as lesson23Fm } from '../content/lessons/23-the-book-of-deeds.mdx';
import Lesson25Content, { frontmatter as lesson25Fm } from '../content/lessons/25-the-holy-supper.mdx';
import Lesson26Content, { frontmatter as lesson26Fm } from '../content/lessons/26-the-core-paradox.mdx';
import Lesson27Content, { frontmatter as lesson27Fm } from '../content/lessons/27-the-parable-of-the-weeds.mdx';
import Lesson28Content, { frontmatter as lesson28Fm } from '../content/lessons/28-the-total-apostasy.mdx';
import Lesson29Content, { frontmatter as lesson29Fm } from '../content/lessons/29-the-doctrines-of-demons.mdx';
import Lesson30Content, { frontmatter as lesson30Fm } from '../content/lessons/30-replacing-the-foundation.mdx';
import Lesson31Content, { frontmatter as lesson31Fm } from '../content/lessons/31-mother-and-daughters.mdx';
import Lesson32Content, { frontmatter as lesson32Fm } from '../content/lessons/32-the-historical-map.mdx';
import Lesson33Content, { frontmatter as lesson33Fm } from '../content/lessons/33-the-everlasting-covenant.mdx';
import Lesson34Content, { frontmatter as lesson34Fm } from '../content/lessons/34-the-one-new-man-the-salvation-paradox-solved.mdx';
import Lesson35Content, { frontmatter as lesson35Fm } from '../content/lessons/35-the-lineage-of-the-promise-seed-of-abraham.mdx';
import Lesson36Content, { frontmatter as lesson36Fm } from '../content/lessons/36-the-requirement-to-be-born-again.mdx';
import Lesson37Content, { frontmatter as lesson37Fm } from '../content/lessons/37-propagation-the-parable-of-the-sower.mdx';
import Lesson38Content, { frontmatter as lesson38Fm } from '../content/lessons/38-the-legal-necessity-of-the-church.mdx';
import Lesson39Content, { frontmatter as lesson39Fm } from '../content/lessons/39-the-name-and-the-final-call.mdx';
import Lesson40Content, { frontmatter as lesson40Fm } from '../content/lessons/40-the-new-covenant-in-his-blood.mdx';
import Lesson41Content, { frontmatter as lesson41Fm } from '../content/lessons/41-the-elect-of-god.mdx';
import Lesson42Content, { frontmatter as lesson42Fm } from '../content/lessons/42-the-foreknowledge-of-god.mdx';
import Lesson43Content, { frontmatter as lesson43Fm } from '../content/lessons/43-the-called-out-assembly.mdx';

export const getLessons = (lang: 'en' | 'tl', onHover: (verse: string | null, x: number, y: number) => void): Lesson[] => {
return [
    {
      id: 1,
      category: lesson01Fm.category,
      title: lesson01Fm.title,
      titleTl: lesson01Fm.titleTl,
      icon: Zap, // We could map the icon string from frontmatter to the actual lucide component later
      searchKeywords: lesson01Fm.searchKeywords,
      searchKeywordsTl: lesson01Fm.searchKeywordsTl,
      searchContent: lesson01Fm.searchContent,
      searchContentTl: lesson01Fm.searchContentTl,
      content: <Lesson01Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Revelation",
        questions: [
          {
            question: lang === 'en' ? "How did God physically write the Ten Commandments?" : "Paano pisikal na isinulat ng Diyos ang Sampung Utos?",
            options: ["Through a scribe", "With His 'finger' on stone tablets", "By dictating to Moses", "Through an angel"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Deuteronomy 9:10 says the tablets were written with the finger of God." : "Sinasabi sa Deuteronomio 9:10 na ang mga tapyas ay isinulat ng daliri ng Diyos."
          },
          {
            question: lang === 'en' ? "Who is the 'Ultimate Messenger' in the Christian era according to Hebrews 1:1-2?" : "Sino ang 'Pinakadakilang Sugo' sa panahong Kristiyano ayon sa Hebreo 1:1-2?",
            options: ["Moses", "Jeremiah", "Jesus Christ", "The Apostle Paul"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Hebrews 1:1-2 states that in these last days, God has spoken to us by His Son." : "Sinasabi sa Hebreo 1:1-2 na sa mga huling araw na ito, ang Diyos ay nagsalita sa atin sa pamamagitan ng Kaniyang Anak."
          }
        ]
      }
    },
    {
      id: 2,
      category: lesson02Fm.category,
      title: lesson02Fm.title,
      titleTl: lesson02Fm.titleTl,
      icon: PenTool,
      searchKeywords: lesson02Fm.searchKeywords,
      searchKeywordsTl: lesson02Fm.searchKeywordsTl,
      searchContent: lesson02Fm.searchContent,
      searchContentTl: lesson02Fm.searchContentTl,
      content: <Lesson02Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Recording and Sealing",
        questions: [
          {
            question: lang === 'en' ? "What was the purpose of 'sealing' the book in Daniel 12:4?" : "Ano ang layunin ng 'pagtatatak' sa aklat sa Daniel 12:4?",
            options: ["To hide it forever", "To safeguard the truth and indicate completion", "To make it look official", "To prevent anyone from reading it"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Sealing indicates that the revelation is complete and must be safeguarded against alteration." : "Ang pagtatatak ay nagpapahiwatig na ang pahayag ay tapos na at dapat bantayan laban sa pagbabago."
          },
          {
            question: lang === 'en' ? "According to Jeremiah 30:2, where was Jeremiah commanded to write God's words?" : "Ayon sa Jeremias 30:2, saan inutusan si Jeremias na isulat ang mga salita ng Diyos?",
            options: ["On stone tablets", "In a book", "On the walls of the temple", "In the hearts of the people"],
            correctIndex: 1,
            explanation: lang === 'en' ? "God said: 'Write all the words that I have spoken to you in a book'." : "Sinabi ng Diyos: 'Isulat mo sa isang aklat ang lahat ng mga salita na aking sinalita sa iyo'."
          }
        ]
      }
    },
    {
      id: 3,
      category: lesson03Fm.category,
      title: lesson03Fm.title,
      titleTl: lesson03Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson03Fm.searchKeywords,
      searchKeywordsTl: lesson03Fm.searchKeywordsTl,
      searchContent: lesson03Fm.searchContent,
      searchContentTl: lesson03Fm.searchContentTl,
      content: <Lesson03Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Composition and Authority",
        questions: [
          {
            question: lang === 'en' ? "How many writers contributed to the Bible?" : "Ilang manunulat ang nag-ambag sa Biblia?",
            options: ["12", "40", "100", "1"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Approximately 40 writers contributed to the 66 books of the Bible." : "Humigit-kumulang 40 manunulat ang nag-ambag sa 66 na aklat ng Biblia."
          },
          {
            question: lang === 'en' ? "What is the command in 1 Corinthians 4:6 regarding God's Word?" : "Ano ang utos sa 1 Corinto 4:6 tungkol sa Salita ng Diyos?",
            options: ["Interpret it as you wish", "Do not go beyond what is written", "Add your own wisdom", "Only read the New Testament"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Corinthians 4:6 strictly prohibits going beyond the written Word." : "Mahigpit na ipinagbabawal ng 1 Corinto 4:6 ang paglampas sa nasusulat na Salita."
          }
        ]
      }
    },
    {
      id: 4,
      category: lesson04Fm.category,
      title: lesson04Fm.title,
      titleTl: lesson04Fm.titleTl,
      icon: History,
      searchKeywords: lesson04Fm.searchKeywords,
      searchKeywordsTl: lesson04Fm.searchKeywordsTl,
      searchContent: lesson04Fm.searchContent,
      searchContentTl: lesson04Fm.searchContentTl,
      content: <Lesson04Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Prophetic Precision",
        questions: [
          {
            question: lang === 'en' ? "What is the 'half hour of silence' in Revelation 8:1 equivalent to in human time?" : "Ano ang katumbas ng 'kalahating oras na katahimikan' sa Apocalipsis 8:1 sa panahon ng tao?",
            options: ["30 minutes", "Approximately 20 years and 10 months", "100 years", "1,000 years"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Using the rule 1 day = 1,000 years (2 Pet 3:8), half an hour calculates to ~20 years and 10 months." : "Gamit ang tuntuning 1 araw = 1,000 taon (2 Ped 3:8), ang kalahating oras ay kalkulado bilang ~20 taon at 10 buwan."
          },
          {
            question: lang === 'en' ? "Which two global events are separated by this 'half hour of silence'?" : "Aling dalawang pandaigdigang kaganapan ang pinaghihiwalay ng 'kalahating oras na katahimikan' na ito?",
            options: ["Creation and Flood", "WWI and WWII", "Birth of Christ and His death", "The Dark Ages and Reformation"],
            correctIndex: 1,
            explanation: lang === 'en' ? "The gap between the end of WWI and the start of WWII perfectly aligns with this prophecy." : "Ang agwat sa pagitan ng pagtatapos ng WWI at simula ng WWII ay perpektong tumutugma sa hulang ito."
          }
        ]
      }
    },
    {
      id: 5,
      category: lesson05Fm.category,
      title: lesson05Fm.title,
      titleTl: lesson05Fm.titleTl,
      icon: Globe,
      searchKeywords: lesson05Fm.searchKeywords,
      searchKeywordsTl: lesson05Fm.searchKeywordsTl,
      searchContent: lesson05Fm.searchContent,
      searchContentTl: lesson05Fm.searchContentTl,
      content: <Lesson05Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Bible and Science",
        questions: [
          {
            question: lang === 'en' ? "What did Jeremiah 33:22 declare when ancient astronomers believed there were only ~3,000 stars?" : "Ano ang idineklara ng Jeremias 33:22 noong naniniwala ang mga sinaunang astronomo na mayroon lamang ~3,000 bituin?",
            options: ["The stars are countable", "The stars are innumerable", "The stars are made of fire", "The stars are falling"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Jeremiah 33:22 correctly stated that the host of heaven cannot be numbered." : "Tumpak na sinabi ng Jeremias 33:22 na ang hukbo ng langit ay hindi mabibilang."
          },
          {
            question: lang === 'en' ? "Biblical claim about earth's foundation in Job 26:7?" : "Makahulang pahayag tungkol sa pundasyon ng lupa sa Job 26:7?",
            options: ["Rests on pillars", "On the shoulders of Atlas", "Suspended on nothing", "Floating on water"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Job 26:7 accurately describes the Earth suspended in space." : "Tumpak na inilalarawan ng Job 26:7 ang Lupa na nakabitin sa kalawakan."
          }
        ]
      }
    },
    {
      id: 6,
      category: lesson06Fm.category,
      title: lesson06Fm.title,
      titleTl: lesson06Fm.titleTl,
      icon: Users,
      searchKeywords: lesson06Fm.searchKeywords,
      searchKeywordsTl: lesson06Fm.searchKeywordsTl,
      searchContent: lesson06Fm.searchContent,
      searchContentTl: lesson06Fm.searchContentTl,
      content: <Lesson06Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Five Creations & The New Man",
        questions: [
          {
            question: "What is the 5th creation according to the lesson?",
            options: ["The Angels", "The New Man (Born Again)", "The Animals", "The Stars"],
            correctIndex: 1,
            explanation: "The 5th creation is the 'New Man', which is the spiritual union of Christ (Head) and the Church (Body)."
          },
          {
            question: "How does the 'One New Man' satisfy the legal requirement of Deuteronomy 24:16?",
            options: ["By ignoring the law", "By Christ paying the debt for His members (His Body)", "By everyone being perfect", "By abolishing the Old Testament"],
            correctIndex: 1,
            explanation: lang === 'en' ? <>Since the Church is the Body of Christ, when Christ died, He legally paid for the sins of His members, satisfying the law (<ScriptureLink verse="Deuteronomy 24:16" onHover={onHover}>Deut. 24:16</ScriptureLink>) that each must die for their own sin.</> : <>Dahil ang Iglesia ay ang Katawan ni Cristo, nang mamatay si Cristo, legal Niyang binayaran ang mga kasalanan ng Kaniyang mga kaanib, na tumutupad sa batas (<ScriptureLink verse="Deuteronomy 24:16" onHover={onHover}>Deut. 24:16</ScriptureLink>) na ang bawat isa ay dapat mamatay para sa sariling kasalanan.</>
          }
        ]
      }
    },
    {
      id: 7,
      category: lesson07Fm.category,
      title: lesson07Fm.title,
      titleTl: lesson07Fm.titleTl,
      icon: Flame,
      searchKeywords: lesson07Fm.searchKeywords,
      searchKeywordsTl: lesson07Fm.searchKeywordsTl,
      searchContent: lesson07Fm.searchContent,
      searchContentTl: lesson07Fm.searchContentTl,
      content: <Lesson07Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Only True God",
        questions: [
          {
            question: lang === 'en' ? "Who did Jesus identify as the 'only true God' in John 17:3?" : "Sino ang kinilala ni Jesus bilang 'iisang tunay na Diyos' sa Juan 17:3?",
            options: ["The Trinity", "Himself", "The Father", "The Holy Spirit"],
            correctIndex: 2,
            explanation: lang === 'en' ? "In John 17:3, Jesus addressed the Father as the only true God." : "Sa Juan 17:3, tinawag ni Jesus ang Ama bilang iisang tunay na Diyos."
          },
          {
            question: lang === 'en' ? "According to 1 Corinthians 8:6, how many Gods are there for true Christians?" : "Ayon sa 1 Corinto 8:6, ilan ang Diyos para sa mga tunay na Kristiyano?",
            options: ["Three", "One (The Father)", "Two", "Many"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Corinthians 8:6 explicitly states 'to us there is but one God, the Father'." : "Malinaw na sinasabi sa 1 Corinto 8:6 na 'sa ganang atin ay may isa lamang Dios, ang Ama'."
          }
        ]
      }
    },
    {
      id: 8,
      category: lesson08Fm.category,
      title: lesson08Fm.title,
      titleTl: lesson08Fm.titleTl,
      icon: Eye,
      searchKeywords: lesson08Fm.searchKeywords,
      searchKeywordsTl: lesson08Fm.searchKeywordsTl,
      searchContent: lesson08Fm.searchContent,
      searchContentTl: lesson08Fm.searchContentTl,
      content: <Lesson08Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Nature of the True God",
        questions: [
          {
            question: lang === 'en' ? "What is the nature of God according to John 4:24?" : "Ano ang kalikasan ng Diyos ayon sa Juan 4:24?",
            options: ["He is a man", "He is Spirit", "He is an energy force", "He is a statue"],
            correctIndex: 1,
            explanation: lang === 'en' ? "John 4:24 states: 'God is a Spirit'." : "Sinasabi sa Juan 4:24: 'Ang Dios ay Espiritu'."
          },
          {
            question: lang === 'en' ? "Does God have flesh and bones like humans?" : "Ang Diyos ba ay may laman at mga buto gaya ng mga tao?",
            options: ["Yes", "No, for a spirit hath not flesh and bones", "Only in the Old Testament", "The Bible doesn't say"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Luke 24:39 clarifies that a spirit does not have flesh and bones." : "Nililinaw ng Lucas 24:39 na ang isang espiritu ay walang laman at mga buto."
          },
          {
            question: lang === 'en' ? "What does Hosea 11:9 say about God's identity?" : "Ano ang sinasabi ng Hosea 11:9 tungkol sa pagkakakilanlan ng Diyos?",
            options: ["He is a man", "He is not a man", "He is an angel", "He is a king"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Hosea 11:9 states: 'for I am God, and not man'." : "Sinasabi sa Hosea 11:9: 'sapagka't ako'y Dios, at hindi tao'."
          }
        ]
      }
    },
    {
      id: 9,
      category: lesson09Fm.category,
      title: lesson09Fm.title,
      titleTl: lesson09Fm.titleTl,
      icon: Infinity,
      searchKeywords: lesson09Fm.searchKeywords,
      searchKeywordsTl: lesson09Fm.searchKeywordsTl,
      searchContent: lesson09Fm.searchContent,
      searchContentTl: lesson09Fm.searchContentTl,
      content: <Lesson09Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Attributes of God",
        questions: [
          {
            question: lang === 'en' ? "What does Psalm 90:2 declare about God's existence?" : "Ano ang ipinahahayag ng Awit 90:2 tungkol sa pag-iral ng Diyos?",
            options: ["He was created", "He has a beginning", "He is from everlasting to everlasting", "He is temporary"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Psalm 90:2 says God is from everlasting to everlasting, meaning He is eternal." : "Sinasabi sa Awit 90:2 na ang Diyos ay mula sa walang hanggan hanggang sa walang hanggan."
          },
          {
            question: lang === 'en' ? "How did God identify Himself to Abraham in Genesis 17:1?" : "Paano ipinakilala ng Diyos ang Kaniyang sarili kay Abraham sa Genesis 17:1?",
            options: ["I am a man", "I am the Almighty God", "I am an angel", "I am a prophet"],
            correctIndex: 1,
            explanation: lang === 'en' ? "In Genesis 17:1, God said: 'I am the Almighty God'." : "Sa Genesis 17:1, sinabi ng Diyos: 'Ako ang Dios na Makapangyarihan sa lahat'."
          }
        ]
      }
    },
    {
      id: 10,
      category: lesson10Fm.category,
      title: lesson10Fm.title,
      titleTl: lesson10Fm.titleTl,
      icon: Heart,
      searchKeywords: lesson10Fm.searchKeywords,
      searchKeywordsTl: lesson10Fm.searchKeywordsTl,
      searchContent: lesson10Fm.searchContent,
      searchContentTl: lesson10Fm.searchContentTl,
      content: <Lesson10Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Character of God",
        questions: [
          {
            question: lang === 'en' ? "What is the defining character of God according to 1 John 4:8?" : "Ano ang nagbibigay-kahulugan sa katangian ng Diyos ayon sa 1 Juan 4:8?",
            options: ["Anger", "Indifference", "Love", "Confusion"],
            correctIndex: 2,
            explanation: lang === 'en' ? "1 John 4:8 explicitly states that 'God is love'." : "Malinaw na sinasabi sa 1 Juan 4:8 na 'ang Dios ay pag-ibig'."
          },
          {
            question: lang === 'en' ? "How does Deuteronomy 32:4 describe God's justice?" : "Paano inilalarawan ng Deuteronomio 32:4 ang katarungan ng Diyos?",
            options: ["Unfair", "Just and right", "Changing", "Weak"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Deuteronomy 32:4 says God is 'just and right'." : "Sinasabi sa Deuteronomio 32:4 na ang Diyos ay 'matuwid at tumpak'."
          }
        ]
      }
    },
    {
      id: 11,
      category: lesson11Fm.category,
      title: lesson11Fm.title,
      titleTl: lesson11Fm.titleTl,
      icon: Tag,
      searchKeywords: lesson11Fm.searchKeywords,
      searchKeywordsTl: lesson11Fm.searchKeywordsTl,
      searchContent: lesson11Fm.searchContent,
      searchContentTl: lesson11Fm.searchContentTl,
      content: <Lesson11Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Names and Titles of God",
        questions: [
          {
            question: lang === 'en' ? "What title did Jesus teach us to use when addressing God in prayer?" : "Anong titulo ang itinuro ni Jesus na gamitin natin kapag nananalangin sa Diyos?",
            options: ["King", "Judge", "Father", "Master"],
            correctIndex: 2,
            explanation: lang === 'en' ? "In Matthew 6:9, Jesus taught us to pray: 'Our Father which art in heaven'." : "Sa Mateo 6:9, itinuro ni Jesus na manalangin: 'Ama namin na nasa langit'."
          },
          {
            question: lang === 'en' ? "According to Isaiah 40:28, who is the 'everlasting God'?" : "Ayon sa Isaias 40:28, sino ang 'walang hanggang Dios'?",
            options: ["The Creator", "An Angel", "A Prophet", "A King"],
            correctIndex: 0,
            explanation: lang === 'en' ? "Isaiah 40:28 identifies the Lord as the Creator of the ends of the earth." : "Kinikilala ng Isaias 40:28 ang Panginoon bilang Maylalang ng mga dulo ng lupa."
          }
        ]
      }
    },
    {
      id: 12,
      category: lesson12Fm.category,
      title: lesson12Fm.title,
      titleTl: lesson12Fm.titleTl,
      icon: Users,
      searchKeywords: lesson12Fm.searchKeywords,
      searchKeywordsTl: lesson12Fm.searchKeywordsTl,
      searchContent: lesson12Fm.searchContent,
      searchContentTl: lesson12Fm.searchContentTl,
      content: <Lesson12Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Nature of Jesus Christ",
        questions: [
          {
            question: lang === 'en' ? "How does 1 Timothy 2:5 describe Jesus Christ?" : "Paano inilalarawan ng 1 Timoteo 2:5 si Jesucristo?",
            options: ["As God the Son", "As the man Christ Jesus", "As an angel", "As a spirit"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Timothy 2:5 explicitly calls Him 'the man Christ Jesus'." : "Malinaw na tinatawag Siya ng 1 Timoteo 2:5 na 'ang taong si Cristo Jesus'."
          },
          {
            question: lang === 'en' ? "What physical characteristic did Jesus mention in Luke 24:39 to prove He is not a spirit?" : "Anong pisikal na katangian ang binanggit ni Jesus sa Lucas 24:39 upang patunayan na hindi Siya espiritu?",
            options: ["Wings", "Invisibility", "Flesh and bones", "Light"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Jesus said, 'a spirit hath not flesh and bones, as ye see me have'." : "Sinabi ni Jesus, 'ang isang espiritu'y walang laman at mga buto, na gaya ng inyong nakikita na nasa akin'."
          }
        ]
      }
    },
    {
      id: 13,
      category: lesson13Fm.category,
      title: lesson13Fm.title,
      titleTl: lesson13Fm.titleTl,
      icon: History,
      searchKeywords: lesson13Fm.searchKeywords,
      searchKeywordsTl: lesson13Fm.searchKeywordsTl,
      searchContent: lesson13Fm.searchContent,
      searchContentTl: lesson13Fm.searchContentTl,
      content: <Lesson13Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Pre-existence of Christ",
        questions: [
          {
            question: lang === 'en' ? "According to 1 Peter 1:20, when was Christ foreordained?" : "Ayon sa 1 Pedro 1:20, kailan itinalaga si Cristo?",
            options: ["After the fall of man", "Before the foundation of the world", "When He was born in Bethlehem", "During His baptism"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Peter 1:20 states He was foreordained before the foundation of the world." : "Sinasabi sa 1 Pedro 1:20 na Siya ay itinalaga na bago pa ang pagtatatag ng mundo."
          },
          {
            question: lang === 'en' ? "What does the 'glory' in John 17:5 refer to?" : "Ano ang tinutukoy ng 'kaluwalhatian' sa Juan 17:5?",
            options: ["His literal existence as a spirit", "His status in God's plan", "His physical beauty", "His earthly riches"],
            correctIndex: 1,
            explanation: lang === 'en' ? "The glory refers to His foreordained role in God's plan before the world began." : "Ang kaluwalhatian ay tumutukoy sa Kaniyang itinalagang tungkulin sa plano ng Diyos bago pa ang mundo."
          }
        ]
      }
    },
    {
      id: 14,
      category: lesson14Fm.category,
      title: lesson14Fm.title,
      titleTl: lesson14Fm.titleTl,
      icon: Star,
      searchKeywords: lesson14Fm.searchKeywords,
      searchKeywordsTl: lesson14Fm.searchKeywordsTl,
      searchContent: lesson14Fm.searchContent,
      searchContentTl: lesson14Fm.searchContentTl,
      content: <Lesson14Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Virgin Birth of Christ",
        questions: [
          {
            question: lang === 'en' ? "Who was the mother of Jesus?" : "Sino ang ina ni Jesus?",
            options: ["Elizabeth", "Mary", "Martha", "Sarah"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Mary was the virgin mother of Jesus Christ." : "Si Maria ang birheng ina ni Jesucristo."
          },
          {
            question: lang === 'en' ? "By what power was Jesus conceived in Mary's womb?" : "Sa pamamagitan ng anong kapangyarihan ipinaglihi si Jesus sa sinapupunan ni Maria?",
            options: ["Human power", "The power of the Holy Spirit", "Natural laws", "Angelic power"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Matthew 1:20 explains that He was conceived by the Holy Spirit." : "Ipinaliliwanag ng Mateo 1:20 na Siya ay ipinaglihi sa pamamagitan ng Espiritu Santo."
          }
        ]
      }
    },
    {
      id: 15,
      category: lesson15Fm.category,
      title: lesson15Fm.title,
      titleTl: lesson15Fm.titleTl,
      icon: Zap,
      searchKeywords: lesson15Fm.searchKeywords,
      searchKeywordsTl: lesson15Fm.searchKeywordsTl,
      searchContent: lesson15Fm.searchContent,
      searchContentTl: lesson15Fm.searchContentTl,
      content: <Lesson15Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Purpose of Christ's Coming",
        questions: [
          {
            question: lang === 'en' ? "What does the name 'Jesus' mean in the context of His mission?" : "Ano ang ibig sabihin ng pangalang 'Jesus' sa konteksto ng Kaniyang misyon?",
            options: ["King", "Teacher", "He shall save His people from their sins", "The Anointed One"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Matthew 1:21 explains that He was named Jesus because He would save His people from their sins." : "Ipinaliliwanag ng Mateo 1:21 na Siya ay pinanganalang Jesus dahil ililigtas Niya ang Kaniyang bayan sa kanilang mga kasalanan."
          },
          {
            question: lang === 'en' ? "According to Luke 19:10, what did the Son of Man come to do?" : "Ayon sa Lucas 19:10, ano ang naparito upang gawin ng Anak ng Tao?",
            options: ["To judge the world", "To seek and save the lost", "To build a kingdom on earth", "To show His power"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Luke 19:10 states that the Son of man came to seek and save that which was lost." : "Sinasabi sa Lucas 19:10 na ang Anak ng tao ay naparito upang hanapin at iligtas ang nawawala."
          }
        ]
      }
    },
    {
      id: 16,
      category: lesson16Fm.category,
      title: lesson16Fm.title,
      titleTl: lesson16Fm.titleTl,
      icon: Clock,
      searchKeywords: lesson16Fm.searchKeywords,
      searchKeywordsTl: lesson16Fm.searchKeywordsTl,
      searchContent: lesson16Fm.searchContent,
      searchContentTl: lesson16Fm.searchContentTl,
      content: <Lesson16Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Ends of the Earth",
        questions: [
          {
            question: lang === 'en' ? "What historical event marks the beginning of the 'ends of the earth'?" : "Anong makasaysayang kaganapan ang nagmamarka sa simula ng 'mga wakas ng lupa'?",
            options: ["The French Revolution", "World War I", "The Great Depression", "The Industrial Revolution"],
            correctIndex: 1,
            explanation: lang === 'en' ? "World War I, starting on July 27, 1914, is the sign given by Jesus in Matthew 24:6-7." : "Ang Unang Digmaang Pandaigdig, na nagsimula noong Hulyo 27, 1914, ang tandang ibinigay ni Jesus sa Mateo 24:6-7."
          },
          {
            question: lang === 'en' ? "According to Isaiah 43:5-6, where will God bring His children from in the last days?" : "Ayon sa Isaias 43:5-6, saan dadalhin ng Diyos ang Kaniyang mga anak sa mga huling araw?",
            options: ["Only from Israel", "From the east and the west", "Only from the north", "From the moon"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Isaiah 43:5-6 says God will bring His seed from the east and gather them from the west." : "Sinasabi sa Isaias 43:5-6 na dadalhin ng Diyos ang Kaniyang lahi mula sa silangan at titipunin sila mula sa kanluran."
          }
        ]
      }
    },
    {
      id: 17,
      category: lesson17Fm.category,
      title: lesson17Fm.title,
      titleTl: lesson17Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson17Fm.searchKeywords,
      searchKeywordsTl: lesson17Fm.searchKeywordsTl,
      searchContent: lesson17Fm.searchContent,
      searchContentTl: lesson17Fm.searchContentTl,
      content: <Lesson17Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Authority to Preach",
        questions: [
          {
            question: lang === 'en' ? "According to Romans 10:15, what is required for someone to preach correctly?" : "Ayon sa Roma 10:15, ano ang kinakailangan para sa isang tao upang mangaral nang tama?",
            options: ["A college degree", "They must be sent by God", "They must have a loud voice", "They must be famous"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Romans 10:15 asks: 'And how shall they preach, except they be sent?'" : "Ang Roma 10:15 ay nagtatanong: 'At paano sila mangangaral, kung hindi sila mga sinugo?'"
          },
          {
            question: lang === 'en' ? "To whom is the 'secret of the kingdom of God' given according to Mark 4:11?" : "Kanino ibinigay ang 'lihim ng kaharian ng Diyos' ayon sa Marcos 4:11?",
            options: ["To everyone who reads the Bible", "Only to those sent by God", "To the wise and learned", "To no one"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Mark 4:11 states that the mystery of the kingdom is given to those chosen/sent." : "Sinasabi sa Marcos 4:11 na ang hiwaga ng kaharian ay ibinibigay sa mga pinili/sinugo."
          }
        ]
      }
    },
    {
      id: 18,
      category: lesson18Fm.category,
      title: lesson18Fm.title,
      titleTl: lesson18Fm.titleTl,
      icon: Compass,
      searchKeywords: lesson18Fm.searchKeywords,
      searchKeywordsTl: lesson18Fm.searchKeywordsTl,
      searchContent: lesson18Fm.searchContent,
      searchContentTl: lesson18Fm.searchContentTl,
      content: <Lesson18Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Messenger from the Far East",
        questions: [
          {
            question: lang === 'en' ? "Where does prophecy say the messenger would come from in the last days?" : "Saan sinasabi ng hula na magmumula ang sugo sa mga huling araw?",
            options: ["The West", "The Far East", "The North", "The South"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Isaiah 46:11 and Isaiah 41:9 point to the 'East' or 'Far East' as the origin of the messenger." : "Ang Isaias 46:11 at Isaias 41:9 ay tumutukoy sa 'Silangan' o 'Malayong Silangan'."
          },
          {
            question: lang === 'en' ? "Who fulfilled the prophecy of the messenger from the Far East starting in 1914?" : "Sino ang tumupad sa hula ng sugo mula sa Malayong Silangan simula noong 1914?",
            options: ["Martin Luther", "Brother Felix Y. Manalo", "John Wesley", "The Pope"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Brother Felix Y. Manalo began preaching the Iglesia ni Cristo in the Philippines (Far East) in 1914." : "Nagsimulang mangaral ang Kapatid na Felix Y. Manalo ng Iglesia ni Cristo sa Pilipinas (Malayong Silangan) noong 1914."
          }
        ]
      }
    },
    {
      id: 19,
      category: lesson19Fm.category,
      title: lesson19Fm.title,
      titleTl: lesson19Fm.titleTl,
      icon: Scale,
      searchKeywords: lesson19Fm.searchKeywords,
      searchKeywordsTl: lesson19Fm.searchKeywordsTl,
      searchContent: lesson19Fm.searchContent,
      searchContentTl: lesson19Fm.searchContentTl,
      content: <Lesson19Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "True Religion",
        questions: [
          {
            question: lang === 'en' ? "What is the 'whole duty of man' according to Ecclesiastes 12:13?" : "Ano ang 'buong katungkulan ng tao' ayon sa Eclesiastes 12:13?",
            options: ["To be successful", "To fear God and keep His commandments", "To travel the world", "To gain knowledge"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Ecclesiastes 12:13 states: 'Fear God, and keep his commandments: for this is the whole duty of man.'" : "Sinasabi sa Eclesiastes 12:13: 'Matakot ka sa Dios, at sundin mo ang kaniyang mga utos; sapagka't ito ang buong katungkulan ng tao.'"
          },
          {
            question: lang === 'en' ? "What destroyed the true essence of man and his relationship with God?" : "Ano ang sumira sa tunay na esensya ng tao at sa kaniyang relasyon sa Diyos?",
            options: ["Lack of education", "Sin", "Poverty", "Time"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Sin separated man from God and destroyed his original purpose, requiring a return to true religion." : "Ang kasalanan ang naghiwalay sa tao sa Diyos at sumira sa kaniyang orihinal na layunin."
          }
        ]
      }
    },
    {
      id: 20,
      category: lesson20Fm.category,
      title: lesson20Fm.title,
      titleTl: lesson20Fm.titleTl,
      icon: Users,
      searchKeywords: lesson20Fm.searchKeywords,
      searchKeywordsTl: lesson20Fm.searchKeywordsTl,
      searchContent: lesson20Fm.searchContent,
      searchContentTl: lesson20Fm.searchContentTl,
      content: <Lesson20Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The One New Man",
        questions: [
          {
            question: lang === 'en' ? "What two parts form the 'One New Man' according to Ephesians 2:15?" : "Anong dalawang bahagi ang bumubuo sa 'Isang Bagong Tao' ayon sa Efeso 2:15?",
            options: ["Faith and Works", "Christ (Head) and Church (Body)", "Old Testament and New Testament", "Jew and Gentile"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Ephesians 2:15 explains that Christ created in Himself 'one new man' by joining the Head and the Body." : "Ipinaliliwanag sa Efeso 2:15 na nilalang ni Cristo sa Kaniyang sarili ang 'isang bagong tao'."
          },
          {
            question: lang === 'en' ? "What is the 'wages of sin' according to Romans 6:23?" : "Ano ang 'kabayaran ng kasalanan' ayon sa Roma 6:23?",
            options: ["Life", "Wealth", "Death", "Fame"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Romans 6:23 states: 'For the wages of sin is death...'" : "Sinasabi sa Roma 6:23: 'Sapagka't ang kabayaran ng kasalanan ay kamatayan...'"
          }
        ]
      }
    },
    {
      id: 21,
      category: lesson21Fm.category,
      title: lesson21Fm.title,
      titleTl: lesson21Fm.titleTl,
      icon: Zap,
      searchKeywords: lesson21Fm.searchKeywords,
      searchKeywordsTl: lesson21Fm.searchKeywordsTl,
      searchContent: lesson21Fm.searchContent,
      searchContentTl: lesson21Fm.searchContentTl,
      content: <Lesson21Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Last Trumpet",
        questions: [
          {
            question: lang === 'en' ? "What marks the beginning of Judgment Day according to 1 Thessalonians 4:16?" : "Ano ang nagmamarka sa simula ng Araw ng Paghuhukom ayon sa 1 Tesalonica 4:16?",
            options: ["A solar eclipse", "The sounding of the last trumpet", "A great earthquake", "The end of a war"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Thessalonians 4:16 says the Lord will descend with a shout and the trumpet of God." : "Sinasabi sa 1 Tesalonica 4:16 na ang Panginoon ay bababa na may sigaw at may pakakak ng Diyos."
          },
          {
            question: lang === 'en' ? "Who will rise first when the last trumpet sounds?" : "Sino ang unang mangabubuhay na maguli kapag tumunog ang huling pakakak?",
            options: ["All people", "The dead in Christ", "Only the prophets", "No one"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Thessalonians 4:16 states that 'the dead in Christ shall rise first'." : "Sinasabi sa 1 Tesalonica 4:16 na 'ang mga nangamatay kay Cristo ay unang mangabubuhay na maguli'."
          }
        ]
      }
    },
    {
      id: 22,
      category: lesson22Fm.category,
      title: lesson22Fm.title,
      titleTl: lesson22Fm.titleTl,
      icon: Scale,
      searchKeywords: lesson22Fm.searchKeywords,
      searchKeywordsTl: lesson22Fm.searchKeywordsTl,
      searchContent: lesson22Fm.searchContent,
      searchContentTl: lesson22Fm.searchContentTl,
      content: <Lesson22Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Great Judgment",
        questions: [
          {
            question: lang === 'en' ? <>What will be the basis for judgment on the Day of Judgment?</> : <>Ano ang magiging batayan ng paghuhukom sa Araw ng Paghuhukom?</>,
            options: ["Personal opinions", "The Gospel/Bible and deeds", "Wealth and status", "Luck"],
            correctIndex: 1,
            explanation: lang === 'en' ? <><ScriptureLink verse="Revelation 20:12" onHover={onHover}>Revelation 20:12</ScriptureLink> and <ScriptureLink verse="Romans 2:16" onHover={onHover}>Romans 2:16</ScriptureLink> indicate that judgment is based on deeds and the gospel.</> : <>Ang <ScriptureLink verse="Revelation 20:12" onHover={onHover}>Apocalipsis 20:12</ScriptureLink> at <ScriptureLink verse="Romans 2:16" onHover={onHover}>Roma 2:16</ScriptureLink> ay nagpapahiwatig na ang paghuhukom ay batay sa mga gawa at sa ebanghelyo.</>
          },
          {
            question: lang === 'en' ? <>Who will be judged on that day?</> : <>Sino ang hahatulan sa araw na iyon?</>,
            options: ["Only the wicked", "Only the righteous", "All men, small and great", "Only those who are alive"],
            correctIndex: 2,
            explanation: lang === 'en' ? <><ScriptureLink verse="Revelation 20:12" onHover={onHover}>Revelation 20:12</ScriptureLink> says: 'And I saw the dead, small and great, stand before God'.</> : <>Sinasabi sa <ScriptureLink verse="Revelation 20:12" onHover={onHover}>Apocalipsis 20:12</ScriptureLink>: 'At nakita ko ang mga patay, malalaki at maliliit, na nangakatayo sa harapan ng luklukan'.</>
          }
        ]
      }
    },
    {
      id: 23,
      category: lesson23Fm.category,
      title: lesson23Fm.title,
      titleTl: lesson23Fm.titleTl,
      icon: Scroll,
      searchKeywords: lesson23Fm.searchKeywords,
      searchKeywordsTl: lesson23Fm.searchKeywordsTl,
      searchContent: lesson23Fm.searchContent,
      searchContentTl: lesson23Fm.searchContentTl,
      content: <Lesson23Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Book of Deeds",
        questions: [
          {
            question: lang === 'en' ? <>Is anything hidden from God's sight on Judgment Day?</> : <>Mayroon bang natatago sa paningin ng Diyos sa Araw ng Paghuhukom?</>,
            options: ["Yes, our private thoughts", "No, even hidden works will be revealed", "Only things we tell others", "Only big sins"],
            correctIndex: 1,
            explanation: lang === 'en' ? <><ScriptureLink verse="Ecclesiastes 12:14" onHover={onHover}>Ecclesiastes 12:14</ScriptureLink> says God shall bring every work into judgment, with every secret thing.</> : <>Sinasabi sa <ScriptureLink verse="Ecclesiastes 12:14" onHover={onHover}>Eclesiastes 12:14</ScriptureLink> na dadalhin ng Dios ang bawat gawa sa paghuhukom, pati ang bawat lihim na bagay.</>
          },
          {
            question: lang === 'en' ? <>How will those who never heard the gospel be judged?</> : <>Paano hahatulan ang mga hindi kailanman nakarinig ng ebanghelyo?</>,
            options: ["They won't be judged", "They are automatically saved", "Based on the law written in their hearts and conscience", "They are automatically condemned"],
            correctIndex: 2,
            explanation: lang === 'en' ? <><ScriptureLink verse="Romans 2:14" onHover={onHover}>Romans 2:14-15</ScriptureLink> explains that those without the law have the law written in their hearts, their conscience bearing witness.</> : <>Ipinaliliwanag sa <ScriptureLink verse="Roma 2:14" onHover={onHover}>Roma 2:14-15</ScriptureLink> na ang mga walang kautusan ay may kautusang nakasulat sa kanilang mga puso.</>
          }
        ]
      }
    },
    {
      id: 25,
      category: lesson25Fm.category,
      title: lesson25Fm.title,
      titleTl: lesson25Fm.titleTl,
      icon: Droplets,
      searchKeywords: lesson25Fm.searchKeywords,
      searchKeywordsTl: lesson25Fm.searchKeywordsTl,
      searchContent: lesson25Fm.searchContent,
      searchContentTl: lesson25Fm.searchContentTl,
      content: <Lesson25Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Holy Supper",
        questions: [
          {
            question: lang === 'en' ? <>Where does judgment begin according to <ScriptureLink verse="1 Peter 4:17" onHover={onHover}>1 Peter 4:17</ScriptureLink>?</> : <>Saan nagsisimula ang paghuhukom ayon sa <ScriptureLink verse="1 Pedro 4:17" onHover={onHover}>1 Pedro 4:17</ScriptureLink>?</>,
            options: ["In the world", "In the house of God", "In the government", "In the schools"],
            correctIndex: 1,
            explanation: lang === 'en' ? <><ScriptureLink verse="1 Peter 4:17" onHover={onHover}>1 Peter 4:17</ScriptureLink> states: 'For the time is come that judgment must begin at the house of God'.</> : <>Sinasabi sa <ScriptureLink verse="1 Pedro 4:17" onHover={onHover}>1 Pedro 4:17</ScriptureLink>: 'Sapagka't dumating na ang panahon na ang paghuhukom ay dapat magpasimula sa bahay ng Dios'.</>
          },
          {
            question: lang === 'en' ? <>What is the purpose of self-examination before the Holy Supper?</> : <>Ano ang layunin ng pagsisiyasat sa sarili bago ang Banal na Hapunan?</>,
            options: ["To see if we are rich", "To avoid being judged with the world", "To show off to others", "To check our health"],
            correctIndex: 1,
            explanation: lang === 'en' ? <><ScriptureLink verse="1 Corinthians 11:31" onHover={onHover}>1 Corinthians 11:31-32</ScriptureLink> explains that if we judge ourselves, we should not be judged, avoiding condemnation with the world.</> : <>Ipinaliliwanag sa <ScriptureLink verse="1 Corinto 11:31" onHover={onHover}>1 Corinto 11:31-32</ScriptureLink> na kung sisisiyasatin natin ang ating sarili, ay hindi tayo hahatulan.</>
          }
        ]
      }
    },
    {
      id: 26,
      category: lesson26Fm.category,
      title: lesson26Fm.title,
      titleTl: lesson26Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson26Fm.searchKeywords,
      searchKeywordsTl: lesson26Fm.searchKeywordsTl,
      searchContent: lesson26Fm.searchContent,
      searchContentTl: lesson26Fm.searchContentTl,
      content: <Lesson26Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Core Paradox",
        questions: [
          {
            question: lang === 'en' ? "How many churches did Christ promise to build in Matthew 16:18?" : "Ilang iglesia ang ipinangako ni Cristo na itatayo sa Mateo 16:18?",
            options: ["Many denominations", "One Church", "Three branches", "Seven groups"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Christ used the singular 'church', indicating a single, unified body." : "Ginamit ni Cristo ang isahang salitang 'iglesia', na nagpapahiwatig ng iisang nagkakaisang katawan."
          }
        ]
      }
    },
    {
      id: 27,
      category: lesson27Fm.category,
      title: lesson27Fm.title,
      titleTl: lesson27Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson27Fm.searchKeywords,
      searchKeywordsTl: lesson27Fm.searchKeywordsTl,
      searchContent: lesson27Fm.searchContent,
      searchContentTl: lesson27Fm.searchContentTl,
      content: <Lesson27Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Parable of the Weeds",
        questions: [
          {
            question: lang === 'en' ? "When did the enemy sow the weeds?" : "Kailan naghasik ang kaaway ng mga pangsirang damo?",
            options: ["During the day", "While men slept", "After the harvest", "Before the planting"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Matthew 13:25 states it happened 'while men slept', signifying a time of spiritual lack of vigilance." : "Sinasabi sa Mateo 13:25 na nangyari ito 'samantalang nangatutulog ang mga tao', na nagpapahiwatig ng panahon ng kawalan ng espirituwal na pagbabantay."
          }
        ]
      }
    },
    {
      id: 28,
      category: lesson28Fm.category,
      title: lesson28Fm.title,
      titleTl: lesson28Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson28Fm.searchKeywords,
      searchKeywordsTl: lesson28Fm.searchKeywordsTl,
      searchContent: lesson28Fm.searchContent,
      searchContentTl: lesson28Fm.searchContentTl,
      content: <Lesson28Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Total Apostasy",
        questions: [
          {
            question: lang === 'en' ? "What did the Apostles warn would enter the flock after their departure?" : "Ano ang ibinabala ng mga Apostol na papasok sa kawan pagkatapos ng kanilang pag-alis?",
            options: ["Gentle lambs", "Grievous wolves", "New prophets", "Angels"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Acts 20:29 warns that 'grievous wolves' would enter, not sparing the flock." : "Nagbabala ang Gawa 20:29 na papasok ang mga 'ganid na lobo', na hindi patawad sa kawan."
          }
        ]
      }
    },
    {
      id: 29,
      category: lesson29Fm.category,
      title: lesson29Fm.title,
      titleTl: lesson29Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson29Fm.searchKeywords,
      searchKeywordsTl: lesson29Fm.searchKeywordsTl,
      searchContent: lesson29Fm.searchContent,
      searchContentTl: lesson29Fm.searchContentTl,
      content: <Lesson29Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Doctrines of Demons",
        questions: [
          {
            question: lang === 'en' ? "Which scripture warns about forbidding marriage as a sign of apostasy?" : "Aling kasulatan ang nagbabala tungkol sa pagbabawal sa pag-aasawa bilang tanda ng pagtalikod?",
            options: ["John 3:16", "1 Timothy 4:1-3", "Psalm 23", "Genesis 1:1"],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Timothy 4:1-3 explicitly lists forbidding to marry as a doctrine of demons." : "Malinaw na itinala sa 1 Timoteo 4:1-3 ang pagbabawal sa pag-aasawa bilang isang aral ng mga demonyo."
          }
        ]
      }
    },
    {
      id: 30,
      category: lesson30Fm.category,
      title: lesson30Fm.title,
      titleTl: lesson30Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson30Fm.searchKeywords,
      searchKeywordsTl: lesson30Fm.searchKeywordsTl,
      searchContent: lesson30Fm.searchContent,
      searchContentTl: lesson30Fm.searchContentTl,
      content: <Lesson30Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Replacing the Foundation",
        questions: [
          {
            question: lang === 'en' ? "Who was the original foundation stone of the Church?" : "Sino ang orihinal na batong saligan ng Iglesia?",
            options: ["The Pope", "The Apostles", "Jesus Christ", "The Kings"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Christ is the only true foundation (1 Cor 3:11, Matt 16:18)." : "Si Cristo ang tanging tunay na saligan (1 Cor 3:11, Mat 16:18)."
          }
        ]
      }
    },
    {
      id: 31,
      category: lesson31Fm.category,
      title: lesson31Fm.title,
      titleTl: lesson31Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson31Fm.searchKeywords,
      searchKeywordsTl: lesson31Fm.searchKeywordsTl,
      searchContent: lesson31Fm.searchContent,
      searchContentTl: lesson31Fm.searchContentTl,
      content: <Lesson31Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Mother and Daughters",
        questions: [
          {
            question: lang === 'en' ? "What does the 'Mother of Prostitutes' represent in Revelation 17:5?" : "Ano ang kinakatawan ng 'Ina ng mga Patutot' sa Apocalipsis 17:5?",
            options: ["A literal city", "The apostate mother church", "A political alliance", "A family tree"],
            correctIndex: 1,
            explanation: lang === 'en' ? "It represents the central apostate organization from which other false sects emerged." : "Kinakatawan nito ang sentral na tumalikod na organisasyon kung saan nagmula ang iba pang mga di-tunay na sekta."
          }
        ]
      }
    },
    {
      id: 32,
      category: lesson32Fm.category,
      title: lesson32Fm.title,
      titleTl: lesson32Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson32Fm.searchKeywords,
      searchKeywordsTl: lesson32Fm.searchKeywordsTl,
      searchContent: lesson32Fm.searchContent,
      searchContentTl: lesson32Fm.searchContentTl,
      content: <Lesson32Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Historical Map",
        questions: [
          {
            question: lang === 'en' ? "What is the final stage in the historical map of faith?" : "Ano ang huling yugto sa mapang pangkasaysayan ng pananampalataya?",
            options: ["The Great Apostasy", "The Branching Sects", "The Restored Flock", "The Original Foundation"],
            correctIndex: 2,
            explanation: lang === 'en' ? "The restored flock is the final call to salvation through the true Church of Christ." : "Ang ipinanumbalik na kawan ay ang huling tawag sa kaligtasan sa pamamagitan ng tunay na Iglesia ni Cristo."
          }
        ]
      }
    },
    {
      id: 33,
      category: lesson33Fm.category,
      title: lesson33Fm.title,
      titleTl: lesson33Fm.titleTl,
      icon: Infinity,
      searchKeywords: lesson33Fm.searchKeywords,
      searchKeywordsTl: lesson33Fm.searchKeywordsTl,
      searchContent: lesson33Fm.searchContent,
      searchContentTl: lesson33Fm.searchContentTl,
      content: <Lesson33Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Eternal Covenant",
        questions: [
          {
            question: lang === 'en' ? "Through what was the everlasting covenant established according to Hebrews 13:20?" : "Sa pamamagitan ng ano itinatag ang walang hanggang tipan ayon sa Hebreo 13:20?",
            options: ["The blood of the covenant", "The laws of man", "The wisdom of the world", "The works of the flesh"],
            correctIndex: 0,
            explanation: lang === 'en' ? "Hebrews 13:20 mentions the blood of the everlasting covenant as the foundation of this relationship." : "Binabanggit sa Hebreo 13:20 ang dugo ng walang hanggang tipan bilang pundasyon ng relasyong ito."
          }
        ]
      }
    },
    {
      id: 34,
      category: lesson34Fm.category,
      title: lesson34Fm.title,
      titleTl: lesson34Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson34Fm.searchKeywords,
      searchKeywordsTl: lesson34Fm.searchKeywordsTl,
      searchContent: lesson34Fm.searchContent,
      searchContentTl: lesson34Fm.searchContentTl,
      content: <Lesson34Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Salvation Paradox",
        questions: [
          {
            question: lang === 'en' ? "What does Deuteronomy 24:16 state about personal accountability?" : "Ano ang sinasabi ng Deuteronomio 24:16 tungkol sa personal na pananagutan?",
            options: ["Fathers can die for children", "Children can die for fathers", "A person shall be put to death for his own sin", "Mainstream religions are correct"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Deuteronomy 24:16 strictly forbids proxy death for sins." : "Mahigpit na ipinagbabawal ng Deuteronomio 24:16 ang proxy death para sa mga kasalanan."
          },
          {
            question: lang === 'en' ? "How did Christ fulfill the law while saving mankind?" : "Paano tinupad ni Cristo ang kautusan habang inililigtas ang sangkatauhan?",
            options: ["By breaking the law", "By ignoring the law", "By creating the One New Man", "By dying for strangers"],
            correctIndex: 2,
            explanation: lang === 'en' ? "By creating the One New Man, Christ legally died for His own Body (the Church)." : "Sa paglikha ng Isang Taong Bago, legal na namatay si Cristo para sa Kaniyang sariling Katawan (ang Iglesia)."
          },
          {
            question: lang === 'en' ? "In the 'One New Man', what is the role of the Church?" : "Sa 'Isang Taong Bago', ano ang papel ng Iglesia?",
            options: ["The Head", "The Body", "The Foundation", "The Spirit"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Colossians 1:18 and Ephesians 1:22-23 identify the Church as the Body of Christ." : "Kinikilala ng Colosas 1:18 at Efeso 1:22-23 ang Iglesia bilang Katawan ni Cristo."
          }
        ]
      }
    },
    {
      id: 35,
      category: lesson35Fm.category,
      title: lesson35Fm.title,
      titleTl: lesson35Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson35Fm.searchKeywords,
      searchKeywordsTl: lesson35Fm.searchKeywordsTl,
      searchContent: lesson35Fm.searchContent,
      searchContentTl: lesson35Fm.searchContentTl,
      content: <Lesson35Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Seed of Abraham",
        questions: [
          {
            question: lang === 'en' ? "Who is the singular 'Seed' mentioned in Galatians 3:16?" : "Sino ang iisang 'Binhi' na binabanggit sa Galacia 3:16?",
            options: ["The nation of Israel", "The Apostles", "Jesus Christ", "The Prophets"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Galatians 3:16 explicitly states that the Seed is Christ." : "Eksplicitong sinasabi sa Galacia 3:16 na ang Binhi ay si Cristo."
          },
          {
            question: lang === 'en' ? "How do we become Abraham's seed according to Galatians 3:29?" : "Paano tayo nagiging binhi ni Abraham ayon sa Galacia 3:29?",
            options: ["By physical birth", "By belonging to Christ", "By living in Canaan", "By following the law of Moses"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Galatians 3:29 says if we are Christ's, then we are Abraham's seed." : "Sinasabi sa Galacia 3:29 na kung tayo ay kay Cristo, tayo nga ay binhi ni Abraham."
          }
        ]
      }
    },
    {
      id: 36,
      category: lesson36Fm.category,
      title: lesson36Fm.title,
      titleTl: lesson36Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson36Fm.searchKeywords,
      searchKeywordsTl: lesson36Fm.searchKeywordsTl,
      searchContent: lesson36Fm.searchContent,
      searchContentTl: lesson36Fm.searchContentTl,
      content: <Lesson36Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "Being Born Again",
        questions: [
          {
            question: lang === 'en' ? "What are the two requirements to enter the kingdom of God according to John 3:5?" : "Ano ang dalawang kinakailangan upang makapasok sa kaharian ng Diyos ayon sa Juan 3:5?",
            options: ["Faith and works", "Water and Spirit", "Prayer and fasting", "Gold and silver"],
            correctIndex: 1,
            explanation: lang === 'en' ? "John 3:5 specifies being born of water and the Spirit." : "Tinukoy sa Juan 3:5 ang maipanganak sa tubig at sa Espiritu."
          },
          {
            question: lang === 'en' ? "What happens to a person who is in Christ according to 2 Corinthians 5:17?" : "Ano ang nangyayari sa isang taong nasa kay Cristo ayon sa 2 Corinto 5:17?",
            options: ["They stay the same", "They become a new creation", "They lose their faith", "They become a prophet"],
            correctIndex: 1,
            explanation: lang === 'en' ? "2 Corinthians 5:17 says if anyone is in Christ, he is a new creation." : "Sinasabi sa 2 Corinto 5:17 na kung ang sinoman ay nasa kay Cristo, siya ay bagong nilalang."
          }
        ]
      }
    },
    {
      id: 37,
      category: lesson37Fm.category,
      title: lesson37Fm.title,
      titleTl: lesson37Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson37Fm.searchKeywords,
      searchKeywordsTl: lesson37Fm.searchKeywordsTl,
      searchContent: lesson37Fm.searchContent,
      searchContentTl: lesson37Fm.searchContentTl,
      content: <Lesson37Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Parable of the Sower",
        questions: [
          {
            question: lang === 'en' ? "What is the 'seed' in the Parable of the Sower?" : "Ano ang 'binhi' sa Parabula ng Tagapaghasik?",
            options: ["Money", "The Word of God", "The Church building", "The people"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Luke 8:11 states that the seed is the word of God." : "Sinasabi sa Lucas 8:11 na ang binhi ay ang salita ng Diyos."
          },
          {
            question: lang === 'en' ? "Who gives the 'increase' in the work of propagation according to 1 Corinthians 3:6?" : "Sino ang nagbibigay ng 'paglago' sa gawain ng pagpapalaganap ayon sa 1 Corinto 3:6?",
            options: ["The Minister", "The Members", "God", "The Government"],
            correctIndex: 2,
            explanation: lang === 'en' ? "1 Corinthians 3:6 says God gives the increase." : "Sinasabi sa 1 Corinto 3:6 na ang Diyos ang nagbibigay ng paglago."
          }
        ]
      }
    },
    {
      id: 38,
      category: lesson38Fm.category,
      title: lesson38Fm.title,
      titleTl: lesson38Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson38Fm.searchKeywords,
      searchKeywordsTl: lesson38Fm.searchKeywordsTl,
      searchContent: lesson38Fm.searchContent,
      searchContentTl: lesson38Fm.searchContentTl,
      content: <Lesson38Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Legal Necessity",
        questions: [
          {
            question: lang === 'en' ? "According to the Lamsa translation of Acts 20:28, what did Christ purchase with His blood?" : "Ayon sa Lamsa translation ng Gawa 20:28, ano ang binili ni Cristo ng Kaniyang dugo?",
            options: ["The whole world", "The church of Christ", "The temple in Jerusalem", "The souls in purgatory"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Acts 20:28 Lamsa specifies the 'church of Christ'." : "Tinukoy sa Gawa 20:28 Lamsa ang 'iglesia ni Cristo'."
          },
          {
            question: lang === 'en' ? "Why is a 'generic sacrifice' for all mankind legally problematic?" : "Bakit ang isang 'pangkalahatang sakripisyo' para sa buong sangkatauhan ay legal na problemado?",
            options: ["It is too expensive", "It violates personal accountability (Deut 24:16)", "It is not mentioned in the Bible", "It is too simple"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Deuteronomy 24:16 requires every man to die for his own sin; Christ can only die for His own Body." : "Hinihingi ng Deuteronomio 24:16 na ang bawat tao ay mamatay para sa sarili niyang kasalanan; si Cristo ay maaari lamang mamatay para sa Kaniyang sariling Katawan."
          }
        ]
      }
    },
    {
      id: 39,
      category: lesson39Fm.category,
      title: lesson39Fm.title,
      titleTl: lesson39Fm.titleTl,
      icon: ShieldCheck,
      searchKeywords: lesson39Fm.searchKeywords,
      searchKeywordsTl: lesson39Fm.searchKeywordsTl,
      searchContent: lesson39Fm.searchContent,
      searchContentTl: lesson39Fm.searchContentTl,
      content: <Lesson39Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Final Call",
        questions: [
          {
            question: lang === 'en' ? "What is the name of the Church mentioned in Romans 16:16?" : "Ano ang pangalan ng Iglesia na binabanggit sa Roma 16:16?",
            options: ["Churches of the world", "Church of Christ", "Church of the people", "Church of the prophets"],
            correctIndex: 1,
            explanation: lang === 'en' ? "Romans 16:16 mentions the 'churches of Christ'." : "Binabanggit sa Roma 16:16 ang 'mga iglesia ni Cristo'."
          },
          {
            question: lang === 'en' ? "According to Ecclesiastes 12:13, what is the whole duty of man?" : "Ayon sa Eclesiastes 12:13, ano ang buong tungkulin ng tao?",
            options: ["To be rich", "To be famous", "To fear God and keep His commandments", "To live for oneself"],
            correctIndex: 2,
            explanation: lang === 'en' ? "Ecclesiastes 12:13 says the whole duty of man is to fear God and keep His commandments." : "Sinasabi sa Eclesiastes 12:13 na ang buong tungkulin ng tao ay matakot sa Diyos at sundin ang Kaniyang mga utos."
          }
        ]
      }
    },
    {
      id: 40,
      category: lesson40Fm.category,
      title: lesson40Fm.title,
      titleTl: lesson40Fm.titleTl,
      icon: Droplets,
      searchKeywords: lesson40Fm.searchKeywords,
      searchKeywordsTl: lesson40Fm.searchKeywordsTl,
      searchContent: lesson40Fm.searchContent,
      searchContentTl: lesson40Fm.searchContentTl,
      content: <Lesson40Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The New Covenant",
        questions: [
          {
            question: lang === 'en' ? "Through what was the New Covenant established according to Luke 22:20?" : "Sa pamamagitan ng ano itinatag ang Bagong Tipan ayon sa Lucas 22:20?",
            options: [
              lang === 'en' ? "The laws of Moses" : "Ang mga kautusan ni Moises",
              lang === 'en' ? "The blood of Christ" : "Ang dugo ni Cristo",
              lang === 'en' ? "The words of the prophets" : "Ang mga salita ng mga propeta",
              lang === 'en' ? "The sacrifice of animals" : "Ang sakripisyo ng mga hayop"
            ],
            correctIndex: 1,
            explanation: lang === 'en' ? "Luke 22:20 states that the cup is the new testament in Christ's blood." : "Sinasabi sa Lucas 22:20 na ang kopa ay ang bagong tipan sa dugo ni Cristo."
          },
          {
            question: lang === 'en' ? "What does the New Covenant represent?" : "Ano ang kinakatawan ng Bagong Tipan?",
            options: [
              lang === 'en' ? "Eternal damnation" : "Walang hanggang kapahamakan",
              lang === 'en' ? "Forgiveness of sins and a new relationship with God" : "Kapatawaran ng mga kasalanan at isang bagong relasyon sa Diyos",
              lang === 'en' ? "The end of all laws" : "Ang wakas ng lahat ng kautusan",
              lang === 'en' ? "A temporary agreement" : "Isang pansamantalang kasunduan"
            ],
            correctIndex: 1,
            explanation: lang === 'en' ? "The New Covenant signifies the forgiveness of sins and a renewed relationship with God through Christ's sacrifice." : "Ang Bagong Tipan ay nangangahulugan ng kapatawaran ng mga kasalanan at isang bagong relasyon sa Diyos sa pamamagitan ng sakripisyo ni Cristo."
          }
        ]
      }
    },
    {
      id: 41,
      category: lesson41Fm.category,
      title: lesson41Fm.title,
      titleTl: lesson41Fm.titleTl,
      icon: Star,
      searchKeywords: lesson41Fm.searchKeywords,
      searchKeywordsTl: lesson41Fm.searchKeywordsTl,
      searchContent: lesson41Fm.searchContent,
      searchContentTl: lesson41Fm.searchContentTl,
      content: <Lesson41Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Elect of God",
        questions: [
          {
            question: lang === 'en' ? "According to Matthew 22:14, how are the called and chosen compared?" : "Ayon sa Mateo 22:14, paano inihambing ang mga tinawag at mga hinirang?",
            options: [
              lang === 'en' ? "Many are called, and all are chosen" : "Marami ang tinawag, at lahat ay hinirang",
              lang === 'en' ? "Few are called, and many are chosen" : "Kakaunti ang tinawag, at marami ang hinirang",
              lang === 'en' ? "Many are called, but few are chosen" : "Marami ang tinawag, ngunit kakaunti ang hinirang",
              lang === 'en' ? "None are called or chosen" : "Walang tinawag o hinirang"
            ],
            correctIndex: 2,
            explanation: lang === 'en' ? "Matthew 22:14 states: 'For many are called, but few are chosen.' This shows that election is specific and purposeful." : "Sinasabi sa Mateo 22:14: 'Sapagka't marami ang mga tinawag, datapuwa't kakaunti ang mga hinirang.' Ipinapakita nito na ang pagpili ay tiyak at may layunin."
          },
          {
            question: lang === 'en' ? "What does 1 Peter 2:9 call the people of God?" : "Ano ang itinawag ng 1 Pedro 2:9 sa bayan ng Diyos?",
            options: [
              lang === 'en' ? "A random group of people" : "Isang random na grupo ng mga tao",
              lang === 'en' ? "A chosen generation, a royal priesthood, a holy nation" : "Isang hinirang na lahi, isang maharlikang pagkasaserdote, isang banal na bansa",
              lang === 'en' ? "A sinful and lost people" : "Isang makasalanan at nawawalang bayan",
              lang === 'en' ? "An ordinary gathering of neighbors" : "Isang ordinaryong pagtitipon ng mga kapitbahay"
            ],
            correctIndex: 1,
            explanation: lang === 'en' ? "1 Peter 2:9 calls them 'a chosen generation, a royal priesthood, an holy nation, a peculiar people.'" : "Tinatawag sila ng 1 Pedro 2:9 na 'isang hinirang na lahi, isang maharlikang pagkasaserdote, isang banal na bansa, isang natatanging bayan.'"
          }
        ]
      }
    },
    {
      id: 42,
      category: lesson42Fm.category,
      title: lesson42Fm.title,
      titleTl: lesson42Fm.titleTl,
      icon: Eye,
      searchKeywords: lesson42Fm.searchKeywords,
      searchKeywordsTl: lesson42Fm.searchKeywordsTl,
      searchContent: lesson42Fm.searchContent,
      searchContentTl: lesson42Fm.searchContentTl,
      content: <Lesson42Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Foreknowledge of God",
        questions: [
          {
            question: lang === 'en' ? "According to Romans 8:29-30 what is the first step in the chain of salvation?" : "Ayon sa Roma 8:29-30 ano ang unang hakbang sa kadena ng kaligtasan?",
            options: [
              lang === 'en' ? "Justification" : "Pagiging matuwid",
              lang === 'en' ? "Glorification" : "Pagpapaluwalhati",
              lang === 'en' ? "Foreknowledge" : "Pagkaalam bago",
              lang === 'en' ? "Being called" : "Pagtawag"
            ],
            correctIndex: 2,
            explanation: lang === 'en' ? "Romans 8:29-30 shows the chain begins with God's foreknowledge (foreknown → predestined → called → justified → glorified)." : "Ipinapakita ng Roma 8:29-30 na nagsisimula ang kadena sa pagkaalam ng Diyos nang maaga (nakilala bago → nagtakda → tinawag → pinawalang-sala → niluwalhati)."
          },
          {
            question: lang === 'en' ? "Is God's election based on foreseen human merit according to 2 Timothy 1:9?" : "Batay ba ang pagpili ng Diyos sa nakita nang maaga na merito ng tao ayon sa 2 Timoteo 1:9?",
            options: [
              lang === 'en' ? "Yes, God chose those He knew would be good" : "Oo, pinili ng Diyos ang mga alam Niyang magiging mabuti",
              lang === 'en' ? "No, it is based solely on His own purpose and grace" : "Hindi, ito ay batay lamang sa Kaniyang sariling layunin at biyaya",
              lang === 'en' ? "It depends on the person's free will" : "Nakasalalay ito sa malayang kalooban ng tao",
              lang === 'en' ? "God has no plan for salvation" : "Ang Diyos ay walang plano para sa kaligtasan"
            ],
            correctIndex: 1,
            explanation: lang === 'en' ? "2 Timothy 1:9 states that God saved us 'not according to our works, but according to His own purpose and grace.'" : "Sinasabi ng 2 Timoteo 1:9 na iniligtas tayo ng Diyos 'hindi ayon sa ating mga gawa, kundi ayon sa Kaniyang sariling layunin at biyaya.'"
          }
        ]
      }
    },
    {
      id: 43,
      category: lesson43Fm.category,
      title: lesson43Fm.title,
      titleTl: lesson43Fm.titleTl,
      icon: Users,
      searchKeywords: lesson43Fm.searchKeywords,
      searchKeywordsTl: lesson43Fm.searchKeywordsTl,
      searchContent: lesson43Fm.searchContent,
      searchContentTl: lesson43Fm.searchContentTl,
      content: <Lesson43Content lang={lang} onHover={onHover} />,
      quiz: {
        title: "The Called Out Assembly",
        questions: [
          {
            question: lang === 'en' ? "What does the Greek word 'ekklesia' (Church) literally mean?" : "Ano ang literal na ibig sabihin ng salitang Griyego na 'ekklesia' (Iglesia)?",
            options: [
              lang === 'en' ? "A building for worship" : "Isang gusali para sa pagsamba",
              lang === 'en' ? "The called-out assembly" : "Ang tinawag na palabas na kapulungan",
              lang === 'en' ? "A group of friends" : "Isang grupo ng mga kaibigan",
              lang === 'en' ? "A religious ceremony" : "Isang relihiyosong seremonya"
            ],
            correctIndex: 1,
            explanation: lang === 'en' ? "The Greek 'ekklesia' literally means 'the called-out ones' or 'called-out assembly' — pointing to those elected and gathered by God." : "Ang Griyegong 'ekklesia' ay literal na nangangahulugang 'ang mga tinawag na palabas' o 'tinawag na kapulungan' — tumutukoy sa mga hinirang at tinipon ng Diyos."
          },
          {
            question: lang === 'en' ? "According to John 15:16, who made the choice in the relationship between Christ and His disciples?" : "Ayon sa Juan 15:16, sino ang pumili sa relasyon sa pagitan ni Cristo at ng Kaniyang mga alagad?",
            options: [
              lang === 'en' ? "The disciples chose Christ" : "Pinili ng mga alagad si Cristo",
              lang === 'en' ? "It was a mutual choice" : "Ito ay isang mutual na pagpili",
              lang === 'en' ? "Christ chose His disciples" : "Pinili ni Cristo ang Kaniyang mga alagad",
              lang === 'en' ? "Neither chose the other" : "Wala sa kanila ang pumili sa isa'"
            ],
            correctIndex: 2,
            explanation: lang === 'en' ? "John 15:16 says: 'Ye have not chosen me, but I have chosen you' — making clear that it is Christ, not man, who initiates election." : "Sinasabi sa Juan 15:16: 'Hindi kayo ang pumili sa akin, kundi ako ang pumili sa inyo' — malinaw na nagpapakita na si Cristo, hindi ang tao, ang nagpasimula ng pagpili."
          }
        ]
      }
    }
  ];
};
