const fs = require('fs');

const files = {
  'src/content/lessons/02-the-command-to-record-and-preserve.mdx': {
    frontmatter: `titleEs: "El Mandato de Registrar y Preservar"
searchKeywordsEs: "registrar preservar jeremías 30:2 sello daniel 12:4 apocalipsis 10:4"
searchContentEs: "Dios instruyó a Sus siervos a escribir Sus palabras en un libro para asegurar precisión perfecta. Una vez completo, el libro fue 'sellado' para salvaguardar la verdad."`,
    replaces: [
      {
        find: `{props.lang === 'en'
              ? "To preserve the message for future generations, God ordered His words to be recorded. This happened in three stages: The Command to Record, the Divine Watch (guarding the writing process), and the Seal."
              : "Upang maingatan ang mensahe para sa mga susunod na salinlahi, ipinag-utos ng Diyos na itala ang Kaniyang mga salita. Nangyari ito sa tatlong yugto: Ang Utos na Itala, ang Banal na Pagbabantay (pagbabantay sa proseso ng pagsulat), at ang Tatak."}`,
        replace: `{props.lang === 'en'
              ? "To preserve the message for future generations, God ordered His words to be recorded. This happened in three stages: The Command to Record, the Divine Watch (guarding the writing process), and the Seal."
              : (props.lang === 'es' ? "Para preservar el mensaje para las generaciones futuras, Dios ordenó que Sus palabras fueran registradas. Esto sucedió en tres etapas: El Mandato de Registrar, la Vigilancia Divina (protegiendo el proceso de escritura), y el Sello." 
              : "Upang maingatan ang mensahe para sa mga susunod na salinlahi, ipinag-utos ng Diyos na itala ang Kaniyang mga salita. Nangyari ito sa tatlong yugto: Ang Utos na Itala, ang Banal na Pagbabantay (pagbabantay sa proseso ng pagsulat), at ang Tatak.")}`
      },
      {
        find: `{props.lang === 'en' ? "The Command" : "Ang Utos"}`,
        replace: `{props.lang === 'en' ? "The Command" : (props.lang === 'es' ? "El Mandato" : "Ang Utos")}`
      },
      {
        find: `{props.lang === 'en' ? <>'Write all the words that I have spoken to you in a book' (<ScriptureLink verse="Jeremiah 30:2" onHover={props.onHover}>Jeremiah 30:2</ScriptureLink>)</> : <>'Isulat mo sa isang aklat ang lahat ng mga salita na aking sinalita sa iyo' (<ScriptureLink verse="Jeremiah 30:2" onHover={props.onHover}>Jeremias 30:2</ScriptureLink>)</>}`,
        replace: `{props.lang === 'en' ? <>'Write all the words that I have spoken to you in a book' (<ScriptureLink verse="Jeremiah 30:2" onHover={props.onHover}>Jeremiah 30:2</ScriptureLink>)</> : (props.lang === 'es' ? <>'Escribe en un libro todas las palabras que te he hablado' (<ScriptureLink verse="Jeremiah 30:2" onHover={props.onHover}>Jeremías 30:2</ScriptureLink>)</> : <>'Isulat mo sa isang aklat ang lahat ng mga salita na aking sinalita sa iyo' (<ScriptureLink verse="Jeremiah 30:2" onHover={props.onHover}>Jeremias 30:2</ScriptureLink>)</>)}`
      },
      {
        find: `{props.lang === 'en' ? "The Seal" : "Ang Tatak"}`,
        replace: `{props.lang === 'en' ? "The Seal" : (props.lang === 'es' ? "El Sello" : "Ang Tatak")}`
      },
      {
        find: `{props.lang === 'en' ? <>Once revelation was complete, the book was closed and sealed (<ScriptureLink verse="Daniel 12:4" onHover={props.onHover}>Daniel 12:4</ScriptureLink>, <ScriptureLink verse="Revelation 10:4" onHover={props.onHover}>Rev 10:4</ScriptureLink>)</> : <>Nang matapos ang pahayag, ang aklat ay isinara at tinatakan (<ScriptureLink verse="Daniel 12:4" onHover={props.onHover}>Daniel 12:4</ScriptureLink>, <ScriptureLink verse="Revelation 10:4" onHover={props.onHover}>Apoc 10:4</ScriptureLink>)</>}`,
        replace: `{props.lang === 'en' ? <>Once revelation was complete, the book was closed and sealed (<ScriptureLink verse="Daniel 12:4" onHover={props.onHover}>Daniel 12:4</ScriptureLink>, <ScriptureLink verse="Revelation 10:4" onHover={props.onHover}>Rev 10:4</ScriptureLink>)</> : (props.lang === 'es' ? <>Una vez completada la revelación, el libro fue cerrado y sellado (<ScriptureLink verse="Daniel 12:4" onHover={props.onHover}>Daniel 12:4</ScriptureLink>, <ScriptureLink verse="Revelation 10:4" onHover={props.onHover}>Apoc 10:4</ScriptureLink>)</> : <>Nang matapos ang pahayag, ang aklat ay isinara at tinatakan (<ScriptureLink verse="Daniel 12:4" onHover={props.onHover}>Daniel 12:4</ScriptureLink>, <ScriptureLink verse="Revelation 10:4" onHover={props.onHover}>Apoc 10:4</ScriptureLink>)</>)}`
      }
    ]
  },
  'src/content/lessons/03-the-composition-and-the-command.mdx': {
    frontmatter: `titleEs: "La Composición y el Mandato"
searchKeywordsEs: "66 libros 40 escritores contradicciones 1 cor 4:6 apoc 22:18-19"
searchContentEs: "La Biblia fue escrita por ~40 escritores a lo largo de varias épocas, pero contiene cero contradicciones doctrinales. Se nos ordena no ir más allá de lo que está escrito (1 Cor 4:6)."`,
    replaces: [
      {
         find: `{props.lang === 'en'
              ? "Written by approximately 40 different writers spanning various eras and backgrounds, the 66 books (39 OT, 27 NT) contain zero doctrinal contradictions. It operates as a unified spiritual masterpiece."
              : "Isinulat ng humigit-kumulang 40 iba't ibang manunulat na sumasaklaw sa iba't ibang panahon at pinagmulan, ang 66 na aklat (39 OT, 27 NT) ay walang doctrinal na kontradiksyon. Gumagana ito bilang isang nagkakaisang espirituwal na obra maestra."}`,
         replace: `{props.lang === 'en'
              ? "Written by approximately 40 different writers spanning various eras and backgrounds, the 66 books (39 OT, 27 NT) contain zero doctrinal contradictions. It operates as a unified spiritual masterpiece."
              : (props.lang === 'es' ? "Escrita por aproximadamente 40 diferentes escritores abarcando varias épocas y orígenes, los 66 libros (39 AT, 27 NT) contienen cero contradicciones doctrinales. Opera como una obra maestra espiritual unificada."
              : "Isinulat ng humigit-kumulang 40 iba't ibang manunulat na sumasaklaw sa iba't ibang panahon at pinagmulan, ang 66 na aklat (39 OT, 27 NT) ay walang doctrinal na kontradiksyon. Gumagana ito bilang isang nagkakaisang espirituwal na obra maestra.")}`
      },
      {
         find: `{props.lang === 'en' ? "The Strict Command" : "Ang Mahigpit na Utos"}`,
         replace: `{props.lang === 'en' ? "The Strict Command" : (props.lang === 'es' ? "El Estricto Mandato" : "Ang Mahigpit na Utos")}`
      },
      {
         find: `{props.lang === 'en' ? "Penalty: Divine plagues and removal from the Holy City (Rev 22:18-19)." : "Parusa: Mga salot ng Diyos at pag-aalis sa Banal na Lungsod (Apoc 22:18-19)."}`,
         replace: `{props.lang === 'en' ? "Penalty: Divine plagues and removal from the Holy City (Rev 22:18-19)." : (props.lang === 'es' ? "Castigo: Plagas divinas y expulsión de la Ciudad Santa (Apoc 22:18-19)." : "Parusa: Mga salot ng Diyos at pag-aalis sa Banal na Lungsod (Apoc 22:18-19).")}`
      }
    ]
  },
  'src/content/lessons/04-evidence-of-authenticity-prophecy.mdx': {
    frontmatter: `titleEs: "Evidencia de Autenticidad: Profecía"
searchKeywordsEs: "profecía autenticidad isaías 46:9-11 silencio apocalipsis 8:1"
searchContentEs: "La prueba fundamental del origen divino de la Biblia es la Profecía—la capacidad de declarar el final desde el principio. La 'media hora de silencio' en Apoc 8:1 se alinea matemáticamente con la brecha entre la Primera y Segunda Guerra Mundial."`,
    replaces: [
      {
         find: `{props.lang === 'en'
              ? "Human words are fallible, but God's words are absolute truth. Isaiah 46:9-11 declares that God makes known the end from the beginning. A staggering example is the mathematical precision of the 'Half Hour of Silence'."
              : "Ang mga salita ng tao ay maaaring magkamali, ngunit ang mga salita ng Diyos ay mutlak na katotohanan. Ipinahahayag ng Isaias 46:9-11 na ipinaaalam ng Diyos ang wakas mula sa simula. Isang nakakamanghang halimbawa ay ang matematikong katumpakan ng 'Kalahating Oras na Katahimikan'."}`,
         replace: `{props.lang === 'en'
              ? "Human words are fallible, but God's words are absolute truth. Isaiah 46:9-11 declares that God makes known the end from the beginning. A staggering example is the mathematical precision of the 'Half Hour of Silence'."
              : (props.lang === 'es' ? "Las palabras humanas son falibles, pero las palabras de Dios son la verdad absoluta. Isaías 46:9-11 declara que Dios da a conocer el fin desde el principio. Un ejemplo asombroso es la precisión matemática de la 'Media Hora de Silencio'."
              : "Ang mga salita ng tao ay maaaring magkamali, ngunit ang mga salita ng Diyos ay mutlak na katotohanan. Ipinahahayag ng Isaias 46:9-11 na ipinaaalam ng Diyos ang wakas mula sa simula. Isang nakakamanghang halimbawa ay ang matematikong katumpakan ng 'Kalahating Oras na Katahimikan'.")}`
      },
      {
         find: `{props.lang === 'en' ? "The Prophetic Pause" : "Ang Makahulang Paghinto"}`,
         replace: `{props.lang === 'en' ? "The Prophetic Pause" : (props.lang === 'es' ? "La Pausa Profética" : "Ang Makahulang Paghinto")}`
      },
      {
         find: `{props.lang === 'en'
                    ? "Actual gap between WWI (Nov 11, 1918) and WWII (Sept 1, 1939): Exactly 20 years, 9 months, and 20 days."
                    : "Aktwal na agwat sa pagitan ng WWI (Nob 11, 1918) at WWII (Set 1, 1939): Eksaktong 20 taon, 9 na buwan, at 20 araw."}`,
         replace: `{props.lang === 'en'
                    ? "Actual gap between WWI (Nov 11, 1918) and WWII (Sept 1, 1939): Exactly 20 years, 9 months, and 20 days."
                    : (props.lang === 'es' ? "Brecha real entre la Primera Guerra Mundial (Nov 11, 1918) y la Segunda Guerra Mundial (Sept 1, 1939): Exactamente 20 años, 9 meses y 20 días."
                    : "Aktwal na agwat sa pagitan ng WWI (Nob 11, 1918) at WWII (Set 1, 1939): Eksaktong 20 taon, 9 na buwan, at 20 araw.")}`
      }
    ]
  },
  'src/content/lessons/05-ancient-insight-modern-discovery.mdx': {
    frontmatter: `titleEs: "Perspectiva Antigua y Descubrimiento Moderno"
searchKeywordsEs: "ciencia círculo tierra redonda gravedad espacio estrellas innumerables"
searchContentEs: "La Biblia anticipa descubrimientos científicos modernos por miles de años, probando que su origen está fuera de la intuición humana. Menciona la tierra redonda, la gravedad y estrellas innumerables."`,
    replaces: [
      {
         find: `{props.lang === 'en'
              ? "The Bible is not a science textbook, but where it touches on the physical universe, it is unerringly accurate. It stated cosmic truths millennia before telescopes and global circumnavigation."
              : "Ang Biblia ay hindi isang textbook sa siyensiya, ngunit kung saan ito tumatalakay sa pisikal na uniberso, ito ay walang pagkakamaling tumpak. Inihayag nito ang mga kosmikong katotohanan milenyo bago ang mga teleskopyo at pandaigdigang paglalakbay."}`,
         replace: `{props.lang === 'en'
              ? "The Bible is not a science textbook, but where it touches on the physical universe, it is unerringly accurate. It stated cosmic truths millennia before telescopes and global circumnavigation."
              : (props.lang === 'es' ? "La Biblia no es un libro de ciencia, pero cuando toca aspectos del universo físico, es infaliblemente precisa. Declaró verdades cósmicas milenios antes de los telescopios y la circunnavegación global."
              : "Ang Biblia ay hindi isang textbook sa siyensiya, ngunit kung saan ito tumatalakay sa pisikal na uniberso, ito ay walang pagkakamaling tumpak. Inihayag nito ang mga kosmikong katotohanan milenyo bago ang mga teleskopyo at pandaigdigang paglalakbay.")}`
      },
      {
         find: `{props.lang === 'en' ? "Confirmed round via global circumnavigation." : "Kinumpirmang bilog sa pamamagitan ng pandaigdigang paglalakbay."}`,
         replace: `{props.lang === 'en' ? "Confirmed round via global circumnavigation." : (props.lang === 'es' ? "Reafirmado redonda mediante la circunnavegación global." : "Kinumpirmang bilog sa pamamagitan ng pandaigdigang paglalakbay.")}`
      },
      {
         find: `{props.lang === 'en' ? "Earth is suspended in the gravity of space." : "Ang Lupa ay nakabitin sa grabidad ng kalawakan."}`,
         replace: `{props.lang === 'en' ? "Earth is suspended in the gravity of space." : (props.lang === 'es' ? "La Tierra está suspendida en la gravedad del espacio." : "Ang Lupa ay nakabitin sa grabidad ng kalawakan.")}`
      },
      {
         find: `{props.lang === 'en' ? "Telescopes revealed billions of galaxies." : "Inihayag ng mga teleskopyo ang bilyun-bilyong kalawakan."}`,
         replace: `{props.lang === 'en' ? "Telescopes revealed billions of galaxies." : (props.lang === 'es' ? "Los telescopios revelaron miles de millones de galaxias." : "Inihayag ng mga teleskopyo ang bilyun-bilyong kalawakan.")}`
      },
      {
         find: `{props.lang === 'en' ? "Confirmed as massive cosmic voids." : "Kinumpirma bilang mga malalaking kosmikong void."}`,
         replace: `{props.lang === 'en' ? "Confirmed as massive cosmic voids." : (props.lang === 'es' ? "Confirmados como enormes vacíos cósmicos." : "Kinumpirma bilang mga malalaking kosmikong void.")}`
      }
    ]
  },
  'src/content/lessons/06-the-five-creations-the-new-man.mdx': {
    frontmatter: `titleEs: "Las Cinco Creaciones y El Nuevo Hombre"
searchKeywordsEs: "adán eva humanidad cristo nuevo hombre nacido de nuevo satisfacción legal deuda cuerpo cabeza"
searchContentEs: "Hay cinco creaciones: Adán del polvo, Eva de la costilla de Adán, la humanidad por nacimiento natural, Cristo por el Espíritu Santo en María, y el Nuevo Hombre por renacer de agua y espíritu."`,
    replaces: [
      {
         find: `{props.lang === 'en'
              ? "God's creative work with humanity spans five distinct stages, culminating in the spiritual rebirth of the 'One New Man'."
              : "Ang paglalang ng Diyos sa sangkatauhan ay may limang yugto, na nagtatapos sa espirituwal na muling pagsilang ng 'Isang Taong Bago'."}`,
         replace: `{props.lang === 'en'
              ? "God's creative work with humanity spans five distinct stages, culminating in the spiritual rebirth of the 'One New Man'."
              : (props.lang === 'es' ? "La obra creativa de Dios con la humanidad abarca cinco etapas distintas, culminando en el renacimiento espiritual del 'Solo y Nuevo Hombre'."
              : "Ang paglalang ng Diyos sa sangkatauhan ay may limang yugto, na nagtatapos sa espirituwal na muling pagsilang ng 'Isang Taong Bago'.")}`
      },
      {
         find: `{ step: 1, name: props.lang === 'en' ? "Adam" : "Adan", desc: props.lang === 'en' ? "From the dust (Physical)" : "Mula sa alabok (Pisikal)" }`,
         replace: `{ step: 1, name: props.lang === 'en' ? "Adam" : props.lang === 'es' ? "Adán" : "Adan", desc: props.lang === 'en' ? "From the dust (Physical)" : props.lang === 'es' ? "Del polvo (Físico)" : "Mula sa alabok (Pisikal)" }`
      },
      {
         find: `{ step: 2, name: props.lang === 'en' ? "Eve" : "Eva", desc: props.lang === 'en' ? "From Adam's rib" : "Mula sa tadyang ni Adan" }`,
         replace: `{ step: 2, name: props.lang === 'en' ? "Eve" : "Eva", desc: props.lang === 'en' ? "From Adam's rib" : props.lang === 'es' ? "De la costilla de Adán" : "Mula sa tadyang ni Adan" }`
      },
      {
         find: `{ step: 3, name: props.lang === 'en' ? "Humanity" : "Sangkatauhan", desc: props.lang === 'en' ? "Natural birth (Marriage)" : "Natural na kapanganakan" }`,
         replace: `{ step: 3, name: props.lang === 'en' ? "Humanity" : props.lang === 'es' ? "Humanidad" : "Sangkatauhan", desc: props.lang === 'en' ? "Natural birth (Marriage)" : props.lang === 'es' ? "Nacimiento natural (Matrimonio)" : "Natural na kapanganakan" }`
      },
      {
         find: `{ step: 4, name: props.lang === 'en' ? "Christ" : "Cristo", desc: props.lang === 'en' ? "Holy Spirit in Mary" : "Espiritu Santo kay Maria" }`,
         replace: `{ step: 4, name: props.lang === 'en' ? "Christ" : "Cristo", desc: props.lang === 'en' ? "Holy Spirit in Mary" : props.lang === 'es' ? "Espíritu Santo en María" : "Espiritu Santo kay Maria" }`
      },
      {
         find: `{ step: 5, name: props.lang === 'en' ? "The New Man" : "Ang Bagong Tao", desc: props.lang === 'en' ? "Born Again (Water & Spirit)" : "Muling Pagsilang (Tubig at Espiritu)" }`,
         replace: `{ step: 5, name: props.lang === 'en' ? "The New Man" : props.lang === 'es' ? "El Nuevo Hombre" : "Ang Bagong Tao", desc: props.lang === 'en' ? "Born Again (Water & Spirit)" : props.lang === 'es' ? "Nacido de Nuevo (Agua y Espíritu)" : "Muling Pagsilang (Tubig at Espiritu)" }`
      },
      {
         find: `{props.lang === 'en' ? "Legal Satisfaction" : "Legal na Katuparan"}`,
         replace: `{props.lang === 'en' ? "Legal Satisfaction" : (props.lang === 'es' ? "Satisfacción Legal" : "Legal na Katuparan")}`
      },
      {
         find: `{props.lang === 'en'
                ? "The law (Deut. 24:16) requires each to die for their own sin. By creating the 'One New Man' (Eph. 2:15)—Christ as Head and Church as Body—Jesus could legally pay the debt for His members."
                : "Ang batas (Deut. 24:16) ay humihingi ng kamatayan para sa sariling sala. Sa paglalang sa 'Isang Taong Bago' (Efe. 2:15), legal na nabayaran ni Cristo ang utang ng Kaniyang mga kaanib."}`,
         replace: `{props.lang === 'en'
                ? "The law (Deut. 24:16) requires each to die for their own sin. By creating the 'One New Man' (Eph. 2:15)—Christ as Head and Church as Body—Jesus could legally pay the debt for His members."
                : (props.lang === 'es' ? "La ley (Deut. 24:16) requiere que cada uno muera por su propio pecado. Al crear el 'Solo y Nuevo Hombre' (Efe. 2:15)—Cristo como Cabeza y la Iglesia como Cuerpo—Jesús pudo pagar legalmente la deuda por Sus miembros."
                : "Ang batas (Deut. 24:16) ay humihingi ng kamatayan para sa sariling sala. Sa paglalang sa 'Isang Taong Bago' (Efe. 2:15), legal na nabayaran ni Cristo ang utang ng Kaniyang mga kaanib.")}`
      }
    ]
  }
};

for (const [file, info] of Object.entries(files)) {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/(searchContentTl: "(?:[^"\\\\]|\\\\.)*"\\n)/, \`$1\${info.frontmatter}\\n\`);
  
  for (const rep of info.replaces) {
     if (!content.includes(rep.find)) {
       console.log("NOT FOUND in " + file + "\\n" + rep.find);
     }
     content = content.replace(rep.find, rep.replace);
  }
  
  fs.writeFileSync(file, content);
  console.log('Processed ' + file);
}
