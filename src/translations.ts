export type Language = 'en' | 'tl' | 'es';

type TranslationDictionary = {
  [key: string]: {
    en: string;
    tl: string;
    es: string;
  };
};

export const translations: TranslationDictionary = {
  // Categories
  'All Modules': { en: 'All Modules', tl: 'Lahat ng Modyul', es: 'Todos los Módulos' },
  'The Bible': { en: 'The Bible', tl: 'Ang Biblia', es: 'La Biblia' },
  'The True God': { en: 'The True God', tl: 'Ang Tunay na Diyos', es: 'El Dios Verdadero' },
  'Jesus Christ': { en: 'Jesus Christ', tl: 'Jesucristo', es: 'Jesucristo' },
  'The Messenger': { en: 'The Messenger', tl: 'Ang Sugo', es: 'El Mensajero' },
  'Salvation': { en: 'Salvation', tl: 'Kaligtasan', es: 'La Salvación' },
  'Judgement Day': { en: 'Judgement Day', tl: 'Araw ng Paghuhukom', es: 'El Día del Juicio' },
  'False Churches': { en: 'False Churches', tl: 'Ibang Iglesia', es: 'Las Iglesias Falsas' },
  'The True Church': { en: 'The True Church', tl: 'Ang Tunay na Iglesia', es: 'La Verdadera Iglesia' },
  'Eternal Covenant': { en: 'Eternal Covenant', tl: 'Walang Hanggang Tipan', es: 'El Pacto Eterno' },
  'Election': { en: 'Election', tl: 'Pagpili', es: 'La Elección' },
  'One New Man': { en: 'One New Man', tl: 'Isang Bagong Tao', es: 'El Nuevo Hombre' },
  'Bookmarks': { en: 'Bookmarks', tl: 'Mga Bookmark', es: 'Marcadores' },

  // Study Center UI
  'Back to Home': { en: 'Back to Home', tl: 'Bumalik sa Home', es: 'Volver a Inicio' },
  'Study Center': { en: 'Study Center', tl: 'Sentro ng Pag-aaral', es: 'Centro de Estudios' },
  'What would you like to learn today?': { en: 'What would you like to learn today?', tl: 'Ano ang nais mong pag-aralan ngayon?', es: '¿Qué te gustaría aprender hoy?' },
  'Explore our library of biblical lessons and prophecies.': { en: 'Explore our library of biblical lessons and prophecies.', tl: 'Galugarin ang aming koleksyon ng mga aralin sa Biblia at mga hula.', es: 'Explora nuestra colección de lecciones bíblicas y profecías.' },
  'Search for a lesson topic': { en: 'Search for a lesson topic', tl: 'Maghanap ng paksa ng aralin', es: 'Buscar un tema de estudio' },
  'Search for a lesson topic...': { en: 'Search for a lesson topic...', tl: 'Maghanap ng paksa ng aralin...', es: 'Buscar un tema de estudio...' },
  'Clear search': { en: 'Clear search', tl: 'Linisin ang paghahanap', es: 'Limpiar búsqueda' },
  'Search': { en: 'Search', tl: 'Hanapin', es: 'Buscar' },
  'Hide Progress': { en: 'Hide Progress', tl: 'Itago ang Pag-unlad', es: 'Ocultar Progreso' },
  'View Progress': { en: 'View Progress', tl: 'Tingnan ang Pag-unlad', es: 'Ver Progreso' },
  'Watch Video': { en: 'Watch Video', tl: 'Manood ng Video', es: 'Ver Video' },
  'View Study Guide': { en: 'View Study Guide', tl: 'Tingnan ang Gabay sa Pag-aaral', es: 'Ver Guía de Estudio' },
  'Your Progress': { en: 'Your Progress', tl: 'Iyong Pag-unlad', es: 'Tu Progreso' },
  'Lessons': { en: 'Lessons', tl: 'Aralin', es: 'Lecciones' },
  'Your Achievements': { en: 'Your Achievements', tl: 'Iyong mga Tagumpay', es: 'Tus Logros' },
  'Module Mastered!': { en: '🏆 Module Mastered!', tl: '🏆 Masterado na!', es: '🏆 ¡Módulo Dominado!' },
  'Congratulations, Graduate!': { en: 'Congratulations, Graduate!', tl: 'Pagbati, Nagtapos!', es: '¡Felicidades, Graduado!' },
  'You have completed all theological modules...': { en: 'You have completed all theological modules. You are now eligible for your Certificate of Completion.', tl: 'Natapos mo na ang lahat ng mga teolohikong modyul. Karapat-dapat ka na para sa iyong Katibayan ng Pagtatapos.', es: 'Has completado todos los módulos teológicos. Ahora eres elegible para tu Certificado de Finalización.' },
  'Download Official Certificate': { en: 'Download Official Certificate', tl: 'I-download ang Opisyal na Katibayan', es: 'Descargar Certificado Oficial' },
  'Enter your Full Name': { en: 'Enter your Full Name', tl: 'Ipasok ang iyong Buong Pangalan', es: 'Ingrese su Nombre Completo' },
  'Certificate Name': { en: 'Certificate Name', tl: 'Pangalan sa Katibayan', es: 'Nombre del Certificado' },
  'Full name for certificate': { en: 'Full name for certificate', tl: 'Buong pangalan para sa katibayan', es: 'Nombre completo para el certificado' },
  'Confirm & Download': { en: 'Confirm & Download', tl: 'Kumpirmahin at I-download', es: 'Confirmar y Descargar' },
  'Cancel': { en: 'Cancel', tl: 'Kanselahin', es: 'Cancelar' },
  'Search Results': { en: 'Search Results', tl: 'Mga Resulta ng Paghahanap', es: 'Resultados de Búsqueda' },
  'Module Selection': { en: 'Module Selection', tl: 'Pagpili ng Modyul', es: 'Selección de Módulo' },
  'Global Search Active': { en: 'Global Search Active', tl: 'Aktibo ang Pandaigdigang Paghahanap', es: 'Búsqueda Global Activa' },
  'No bookmarks yet': { en: 'No bookmarks yet', tl: 'Wala pang mga bookmark', es: 'Aún no hay marcadores' },
  'Your bookmarked lessons will appear here.': { en: 'Your bookmarked lessons will appear here.', tl: 'Ang iyong mga na-bookmark na aralin ay lilitaw dito.', es: 'Tus lecciones marcadas aparecerán aquí.' },
  'No matches found': { en: 'No matches found', tl: 'Walang nahanap na tugma', es: 'No se encontraron coincidencias' },
  'Try adjusting your search terms.': { en: 'Try adjusting your search terms.', tl: 'Subukang baguhin ang iyong mga termino sa paghahanap.', es: 'Intenta ajustar tus términos de búsqueda.' },
  'Remove Bookmark': { en: 'Remove Bookmark', tl: 'Alisin ang Bookmark', es: 'Eliminar Marcador' },
  'Bookmark this Lesson': { en: 'Bookmark this Lesson', tl: 'I-bookmark ang Araling Ito', es: 'Marcar esta Lección' },
  'Mark as Unread': { en: 'Mark as Unread', tl: 'Markahan bilang Hindi Nabasa', es: 'Marcar como no leído' },
  'Mark as Read': { en: 'Mark as Read', tl: 'Markahan bilang Nabasa', es: 'Marcar como leído' },
  'Previous Lesson': { en: 'Previous Lesson', tl: 'Nakaraang Aralin', es: 'Lección Anterior' },
  'Next Lesson': { en: 'Next Lesson', tl: 'Susunod na Aralin', es: 'Lección Siguiente' },
  'Final Quiz Available': { en: 'Final Quiz Available', tl: 'Available ang Huling Pagsusulit', es: 'Cuestionario Final Disponible' },
  'I have finished reading this lesson': { en: 'I have finished reading this lesson', tl: 'Tapos ko na basahin ang araling ito', es: 'He terminado de leer esta lección' },
  'Lesson Completed': { en: 'Lesson Completed', tl: 'Tapos na ang Aralin', es: 'Lección Completada' },
  'Test Your Knowledge?': { en: 'Test Your Knowledge?', tl: 'Subukan ang Iyong Kaalaman?', es: '¿Poner a prueba tu conocimiento?' },
  'quizPromptDetails': { 
     en: "Great job! Would you like to take a quick quiz to reinforce what you've learned?", 
     tl: 'Magaling! Gusto mo bang kumuha ng maikling pagsusulit para mapagtibay ang iyong natutunan?', 
     es: '¡Buen trabajo! ¿Te gustaría realizar un cuestionario rápido para reforzar lo aprendido?' 
  },
  'Yes, take quiz': { en: 'Yes, take quiz', tl: 'Oo, kumuha ng pagsusulit', es: 'Sí, tomar cuestionario' },
  'Maybe later': { en: 'Maybe later', tl: 'Mamaya na lang', es: 'Tal vez más tarde' },
  'Contact a Minister': { en: 'Contact a Minister', tl: 'Makipag-ugnayan sa Ministro', es: 'Contactar a un Ministro' },
  'Previous': { en: 'Previous', tl: 'Nakaraan', es: 'Anterior' },
  'Study Guide': { en: 'Study Guide', tl: 'Gabay sa Pag-aaral', es: 'Guía de Estudio' },
  'Next Challenge: Reality Check': { en: 'Next Challenge: Reality Check', tl: 'Susunod na Hamon: Reality Check', es: 'Siguiente Desafío: Reality Check' },
  'Reality Check': { en: 'Reality Check', tl: 'Reality Check', es: 'Reality Check' },
  'The Final Step': { en: 'The Final Step', tl: 'Ang Huling Hakbang', es: 'El Paso Final' },
  'realityCheckConvince': {
    en: 'You have mastered the theology. Now, it is time for a Reality Check. True faith is not just in the mind, but in action. Find the nearest House of Worship of the Iglesia ni Cristo and see for yourself.',
    tl: 'Masterado mo na ang teolohiya. Ngayon, oras na para sa Reality Check. Ang tunay na pananampalataya ay hindi lang sa isip, kundi sa gawa. Hanapin ang pinakamalapit na Gusaling Sambahan ng Iglesia ni Cristo at tingnan sa iyong sariling mga mata.',
    es: 'Has dominado la teología. Ahora, es momento de un Reality Check. La verdadera fe no está solo en la mente, sino en la acción. Encuentra la Casa de Adoración de la Iglesia ni Cristo más cercana y compruébalo por ti mismo.'
  },
  'Proof of Success': { en: 'Proof of Success', tl: 'Katibayan ng Tagumpay', es: 'Prueba de Éxito' },
  'To complete this challenge, please provide:': { en: 'To complete this challenge, please provide:', tl: 'Upang makumpleto ang hamon na ito, pakibigay ang:', es: 'Para completar este desafío, por favor proporcione:' },
  'Local Congregation Name': { en: 'Local Congregation Name', tl: 'Pangalan ng Lokal na Kongregasyon', es: 'Nombre de la Congregación Local' },
  'Location (Google Maps Link)': { en: 'Location (Google Maps Link)', tl: 'Lokasyon (Google Maps Link)', es: 'Ubicación (Enlace de Google Maps)' },
  'Resident Minister Name': { en: 'Resident Minister Name', tl: 'Pangalan ng Residenteng Ministro', es: 'Nombre del Ministro Residente' },
  'Photo with Resident Minister': { en: 'Photo with Resident Minister', tl: 'Larawan kasama ang Residenteng Ministro', es: 'Foto con el Ministro Residente' },
  'Photo Requirements': { en: 'Take a whole-body portrait together with the Resident Minister as proof of your visit.', tl: 'Kumuha ng whole-body portrait kasama ang Residenteng Ministro bilang patunay ng iyong pagbisita.', es: 'Tómate un retrato de cuerpo entero junto con el Ministro Residente como prueba de tu visita.' },
  'Submit Challenge': { en: 'Submit Challenge', tl: 'I-sumite ang Hamon', es: 'Enviar Desafío' },
  'Challenge Completed!': { en: 'Challenge Completed!', tl: 'Tapos na ang Hamon!', es: '¡Desafío Completado!' },
  'realityCheckSuccess': {
    en: 'Congratulations! You have taken the first step toward the promise. May God continue to guide your journey.',
    tl: 'Pagbati! Nagawa mo na ang unang hakbang patungo sa pangako. Patuloy ka nawang gabayan ng Diyos sa iyong paglalakbay.',
    es: '¡Felicidades! Has dado el primer paso hacia la promesa. Que Dios continúe guiando tu camino.'
  },
  'Back to Study': { en: 'Back to Study', tl: 'Bumalik sa Pag-aaral', es: 'Volver al Estudio' },
  'Support the Mission': { en: 'Support the Mission', tl: 'Suportahan ang Misyon', es: 'Apoyar la Misión' },
  'Country of Residence': { en: 'Country of Residence', tl: 'Bansang Tinitirhan', es: 'País de Residencia' },
  'Sync Your Progress': { en: 'Sync Your Progress', tl: 'I-sync ang Iyong Pag-unlad', es: 'Sincroniza tu Progreso' },
  'Save your milestones in the cloud to access them on any device.': { en: 'Save your milestones in the cloud to access them on any device.', tl: 'I-save ang iyong mga tagumpay sa cloud para ma-access ang mga ito sa anumang device.', es: 'Guarda tus logros en la nube para acceder a ellos en cualquier dispositivo.' },
  'Sign In to Sync': { en: 'Sign In to Sync', tl: 'Mag-Sign In para Mag-sync', es: 'Iniciar Sesión para Sincronizar' },
};

/**
 * Returns translated string based on active language.
 * Defaults to English if key or language is somehow missing.
 */
export const t = (key: string, lang: Language): string => {
  if (!translations[key]) {
      console.warn('Missing translation key:', key);
      return key;
  }
  return translations[key][lang] || translations[key]['en'] || key;
};

// *Last Updated: April 4, 2026*

export const getLocalizedField = (obj: any, field: string, lang: Language): string => {
  const capField = field.charAt(0).toUpperCase() + field.slice(1);
  if (lang === 'tl' && obj[`${field}Tl`]) return obj[`${field}Tl`];
  if (lang === 'es' && obj[`${field}Es`]) return obj[`${field}Es`];
  return obj[field] || '';
};
