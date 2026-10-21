import O from "./locales.json";
import BLOG from "./blog.json";
import BLOG_UI from "./blog-ui.json";

export const EMAIL = "sarauproject@gmail.com";
export const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}`;

export const LANGS = [
  ["es", "Español"], ["en", "English"], ["fr", "Français"], ["it", "Italiano"], ["de", "Deutsch"], ["pl", "Polski"],
  ["tr", "Türkçe"], ["hu", "Magyar"], ["ru", "Русский"], ["id", "Bahasa Indonesia"], ["zh", "中文"], ["ja", "日本語"],
];

export const SHOWS = [
  { id: "taranna", title: "Tarannà", yt: "oZ1yeRvoo2s", video: "video0", dur: "1hourHalf", lineup: ["baile", "cante", "guitarra", "percusion", "bajo"] },
  { id: "sarsale", title: "Sarsalé", yt: "JoAlDaPrVLk", video: "video2", dur: "1hourHalf", lineup: ["cante", "baile", "guitarra", "percusion", "bajo"] },
  { id: "sarsale-sextet", title: "Sarsalé Sextet", yt: "OixPUT8HNSI", video: "video1", dur: "2hours", lineup: ["cantex2", "bailex2", "guitarra", "percusion"] },
  { id: "alikindoi", title: "Alikindoi", yt: "cB80rMnfrGI", video: "video3", dur: "1hourHalf", lineup: ["cante", "baile", "guitarra", "percusion"] },
];

const E = {
  es: {
    how: "Cómo contratar", book: "Contratar", eyebrow: "Flamenco profesional · En directo", lines: ["Arte flamenco", "para el", "mundo."], scroll: "Desliza",
    showsTitle: "Cuatro formatos. Una misma verdad.", watch: "Ver actuación", bookShow: "Solicitar este espectáculo",
    helpTitle: "¿No sabes cuál encaja con tu evento?", helpText: "Cuéntanos el espacio, el aforo y la fecha. Te recomendamos el formato ideal en menos de 24 h.", helpCta: "Asesórame",
    durationL: "Duración", lineupL: "Formación",
    tags: ["Bata de cola y mantón", "Tablao con sonido moderno", "Seis artistas en escena", "Tablao auténtico, cuatro artistas"],
    bullets: ["Baile y música flamenca profesional", "Repertorio tradicional y contemporáneo", "Adaptación a todo tipo de eventos y escenarios", "Experiencia internacional", "Producción técnica profesional"],
    touring: "Espectáculos en gira", venuesEyebrow: "Para quién actuamos", venues: ["Teatros", "Festivales", "Auditorios", "Bodas", "Eventos corporativos", "Salas y clubs"],
    howEyebrow: "Contratar es fácil", howTitle: "Tres pasos hasta el escenario.",
    steps: [["Cuéntanos tu evento", "Fecha, lugar, aforo y tipo de evento. Con eso basta para empezar."], ["Recibe tu propuesta", "Te enviamos el formato recomendado, ficha técnica y presupuesto a medida."], ["Disfruta del directo", "Nos adaptamos al espacio y nos encargamos de la parte artística y técnica."]],
    formTitle: "Hablemos de tu evento.", phone: "Teléfono (opcional)", show: "Espectáculo", any: "Aún no lo sé — asesoradme",
    types: ["Teatro / Auditorio", "Festival", "Boda", "Evento corporativo", "Sala / Club", "Otro"], date: "Fecha aproximada", location: "Ciudad / País",
    err: "No se pudo enviar. Escríbenos a", required: "Completa nombre, email y mensaje.", rights: "Todos los derechos reservados.",
  },
  en: {
    how: "How to book", book: "Book now", eyebrow: "Professional flamenco · Live", lines: ["Flamenco art", "for the", "world."], scroll: "Scroll",
    showsTitle: "Four formats. One truth.", watch: "Watch performance", bookShow: "Request this show",
    helpTitle: "Not sure which fits your event?", helpText: "Tell us the venue, capacity and date. We'll recommend the ideal format within 24 h.", helpCta: "Advise me",
    durationL: "Duration", lineupL: "Line-up",
    tags: ["Bata de cola & shawl", "Tablao meets modern sound", "Six artists on stage", "Authentic tablao, four artists"],
    bullets: ["Professional flamenco dance and music", "Traditional and contemporary repertoire", "Adapted to all kinds of events and stages", "International experience", "Professional technical production"],
    touring: "Touring shows", venuesEyebrow: "Where we perform", venues: ["Theaters", "Festivals", "Concert halls", "Weddings", "Corporate events", "Clubs"],
    howEyebrow: "Booking made easy", howTitle: "Three steps to the stage.",
    steps: [["Tell us about your event", "Date, venue, capacity and event type. That's all we need to start."], ["Get your proposal", "We send the recommended format, tech rider and a tailored quote."], ["Enjoy the live show", "We adapt to your space and handle the artistic and technical side."]],
    formTitle: "Let's talk about your event.", phone: "Phone (optional)", show: "Show", any: "Not sure yet — advise me",
    types: ["Theater / Concert hall", "Festival", "Wedding", "Corporate event", "Club", "Other"], date: "Approximate date", location: "City / Country",
    err: "Could not send. Write to us at", required: "Please fill in name, email and message.", rights: "All rights reserved.",
  },
  fr: {
    how: "Comment réserver", book: "Réserver", eyebrow: "Flamenco professionnel · En direct", lines: ["Art flamenco", "pour le", "monde."], scroll: "Défiler",
    showsTitle: "Quatre formats. Une seule vérité.", watch: "Voir le spectacle", bookShow: "Demander ce spectacle",
    helpTitle: "Vous ne savez pas lequel choisir ?", helpText: "Indiquez-nous le lieu, la capacité et la date. Nous vous recommandons le format idéal en moins de 24 h.", helpCta: "Conseillez-moi",
    durationL: "Durée", lineupL: "Formation",
    tags: ["Bata de cola et châle", "Le tablao rencontre le son moderne", "Six artistes sur scène", "Tablao authentique, quatre artistes"],
    bullets: ["Danse et musique flamenco professionnelles", "Répertoire traditionnel et contemporain", "Adaptation à tous types d'événements et de scènes", "Expérience internationale", "Production technique professionnelle"],
    touring: "Spectacles en tournée", venuesEyebrow: "Pour qui nous jouons", venues: ["Théâtres", "Festivals", "Salles de concert", "Mariages", "Événements d'entreprise", "Clubs"],
    howEyebrow: "Réserver, c'est simple", howTitle: "Trois étapes jusqu'à la scène.",
    steps: [["Parlez-nous de votre événement", "Date, lieu, capacité et type d'événement. C'est tout ce qu'il faut pour commencer."], ["Recevez votre proposition", "Nous vous envoyons le format recommandé, la fiche technique et un devis sur mesure."], ["Profitez du spectacle", "Nous nous adaptons à votre espace et gérons la partie artistique et technique."]],
    formTitle: "Parlons de votre événement.", phone: "Téléphone (facultatif)", show: "Spectacle", any: "Je ne sais pas encore — conseillez-moi",
    types: ["Théâtre / Salle de concert", "Festival", "Mariage", "Événement d'entreprise", "Club", "Autre"], date: "Date approximative", location: "Ville / Pays",
    err: "Envoi impossible. Écrivez-nous à", required: "Veuillez remplir le nom, l'e-mail et le message.", rights: "Tous droits réservés.",
  },
  it: {
    how: "Come prenotare", book: "Prenota", eyebrow: "Flamenco professionale · Dal vivo", lines: ["Arte flamenco", "per il", "mondo."], scroll: "Scorri",
    showsTitle: "Quattro formati. Un'unica verità.", watch: "Guarda lo spettacolo", bookShow: "Richiedi questo spettacolo",
    helpTitle: "Non sai quale scegliere?", helpText: "Raccontaci il luogo, la capienza e la data. Ti consigliamo il formato ideale in meno di 24 ore.", helpCta: "Consigliami",
    durationL: "Durata", lineupL: "Formazione",
    tags: ["Bata de cola e scialle", "Il tablao incontra il suono moderno", "Sei artisti in scena", "Tablao autentico, quattro artisti"],
    bullets: ["Danza e musica flamenco professionali", "Repertorio tradizionale e contemporaneo", "Adattamento a ogni tipo di evento e palco", "Esperienza internazionale", "Produzione tecnica professionale"],
    touring: "Spettacoli in tournée", venuesEyebrow: "Per chi ci esibiamo", venues: ["Teatri", "Festival", "Auditorium", "Matrimoni", "Eventi aziendali", "Club"],
    howEyebrow: "Prenotare è facile", howTitle: "Tre passi fino al palco.",
    steps: [["Raccontaci il tuo evento", "Data, luogo, capienza e tipo di evento. Basta questo per iniziare."], ["Ricevi la tua proposta", "Ti inviamo il formato consigliato, la scheda tecnica e un preventivo su misura."], ["Goditi lo spettacolo", "Ci adattiamo al tuo spazio e curiamo la parte artistica e tecnica."]],
    formTitle: "Parliamo del tuo evento.", phone: "Telefono (facoltativo)", show: "Spettacolo", any: "Non lo so ancora — consigliatemi",
    types: ["Teatro / Auditorium", "Festival", "Matrimonio", "Evento aziendale", "Club", "Altro"], date: "Data indicativa", location: "Città / Paese",
    err: "Invio non riuscito. Scrivici a", required: "Compila nome, email e messaggio.", rights: "Tutti i diritti riservati.",
  },
  de: {
    how: "So buchen Sie", book: "Buchen", eyebrow: "Professioneller Flamenco · Live", lines: ["Flamenco-Kunst", "für die", "Welt."], scroll: "Scrollen",
    showsTitle: "Vier Formate. Eine Wahrheit.", watch: "Auftritt ansehen", bookShow: "Diese Show anfragen",
    helpTitle: "Unsicher, welche Show passt?", helpText: "Nennen Sie uns Ort, Kapazität und Datum. Wir empfehlen Ihnen das ideale Format innerhalb von 24 Std.", helpCta: "Beraten Sie mich",
    durationL: "Dauer", lineupL: "Besetzung",
    tags: ["Bata de cola und Mantón", "Tablao trifft modernen Sound", "Sechs Künstler auf der Bühne", "Authentischer Tablao, vier Künstler"],
    bullets: ["Professioneller Flamenco-Tanz und -Musik", "Traditionelles und zeitgenössisches Repertoire", "Anpassung an alle Arten von Events und Bühnen", "Internationale Erfahrung", "Professionelle technische Produktion"],
    touring: "Shows auf Tour", venuesEyebrow: "Wo wir auftreten", venues: ["Theater", "Festivals", "Konzertsäle", "Hochzeiten", "Firmenevents", "Clubs"],
    howEyebrow: "Einfach buchen", howTitle: "Drei Schritte bis zur Bühne.",
    steps: [["Erzählen Sie uns von Ihrem Event", "Datum, Ort, Kapazität und Art des Events. Mehr brauchen wir zum Start nicht."], ["Erhalten Sie Ihr Angebot", "Wir senden Ihnen das empfohlene Format, den Technical Rider und ein individuelles Angebot."], ["Genießen Sie die Live-Show", "Wir passen uns Ihrem Raum an und kümmern uns um Kunst und Technik."]],
    formTitle: "Sprechen wir über Ihr Event.", phone: "Telefon (optional)", show: "Show", any: "Noch unsicher — bitte beraten",
    types: ["Theater / Konzertsaal", "Festival", "Hochzeit", "Firmenevent", "Club", "Sonstiges"], date: "Ungefähres Datum", location: "Stadt / Land",
    err: "Senden fehlgeschlagen. Schreiben Sie uns an", required: "Bitte Name, E-Mail und Nachricht ausfüllen.", rights: "Alle Rechte vorbehalten.",
  },
  pl: {
    how: "Jak zarezerwować", book: "Rezerwuj", eyebrow: "Profesjonalne flamenco · Na żywo", lines: ["Sztuka flamenco", "dla", "świata."], scroll: "Przewiń",
    showsTitle: "Cztery formaty. Jedna prawda.", watch: "Zobacz występ", bookShow: "Zapytaj o ten spektakl",
    helpTitle: "Nie wiesz, który wybrać?", helpText: "Podaj miejsce, liczbę gości i datę. W ciągu 24 h polecimy idealny format.", helpCta: "Doradźcie mi",
    durationL: "Czas trwania", lineupL: "Skład",
    tags: ["Bata de cola i szal", "Tablao w nowoczesnym brzmieniu", "Sześciu artystów na scenie", "Autentyczne tablao, czterech artystów"],
    bullets: ["Profesjonalny taniec i muzyka flamenco", "Repertuar tradycyjny i współczesny", "Dopasowanie do każdego wydarzenia i sceny", "Doświadczenie międzynarodowe", "Profesjonalna produkcja techniczna"],
    touring: "Spektakle w trasie", venuesEyebrow: "Dla kogo występujemy", venues: ["Teatry", "Festiwale", "Sale koncertowe", "Wesela", "Eventy firmowe", "Kluby"],
    howEyebrow: "Rezerwacja jest prosta", howTitle: "Trzy kroki do sceny.",
    steps: [["Opowiedz nam o wydarzeniu", "Data, miejsce, liczba gości i rodzaj wydarzenia. To wystarczy, by zacząć."], ["Otrzymaj propozycję", "Wyślemy polecany format, rider techniczny i indywidualną wycenę."], ["Ciesz się występem", "Dostosujemy się do miejsca i zajmiemy się stroną artystyczną i techniczną."]],
    formTitle: "Porozmawiajmy o Twoim wydarzeniu.", phone: "Telefon (opcjonalnie)", show: "Spektakl", any: "Jeszcze nie wiem — doradźcie",
    types: ["Teatr / Sala koncertowa", "Festiwal", "Wesele", "Event firmowy", "Klub", "Inne"], date: "Przybliżona data", location: "Miasto / Kraj",
    err: "Nie udało się wysłać. Napisz do nas:", required: "Uzupełnij imię, e-mail i wiadomość.", rights: "Wszelkie prawa zastrzeżone.",
  },
  tr: {
    how: "Nasıl rezervasyon yapılır", book: "Rezervasyon", eyebrow: "Profesyonel flamenko · Canlı", lines: ["Dünya için", "flamenko", "sanatı."], scroll: "Kaydır",
    showsTitle: "Dört format. Tek bir gerçek.", watch: "Performansı izle", bookShow: "Bu gösteriyi talep et",
    helpTitle: "Hangisinin uygun olduğundan emin değil misiniz?", helpText: "Mekânı, kapasiteyi ve tarihi bize söyleyin. 24 saat içinde ideal formatı önerelim.", helpCta: "Bana önerin",
    durationL: "Süre", lineupL: "Kadro",
    tags: ["Bata de cola ve şal", "Tablao modern sesle buluşuyor", "Sahnede altı sanatçı", "Otantik tablao, dört sanatçı"],
    bullets: ["Profesyonel flamenko dansı ve müziği", "Geleneksel ve çağdaş repertuvar", "Her tür etkinliğe ve sahneye uyum", "Uluslararası deneyim", "Profesyonel teknik prodüksiyon"],
    touring: "Turnedeki gösteriler", venuesEyebrow: "Nerede sahne alıyoruz", venues: ["Tiyatrolar", "Festivaller", "Konser salonları", "Düğünler", "Kurumsal etkinlikler", "Kulüpler"],
    howEyebrow: "Rezervasyon kolay", howTitle: "Sahneye üç adım.",
    steps: [["Etkinliğinizi anlatın", "Tarih, mekân, kapasite ve etkinlik türü. Başlamak için bu kadarı yeterli."], ["Teklifinizi alın", "Önerilen formatı, teknik şartnameyi ve size özel teklifi gönderiyoruz."], ["Canlı gösterinin tadını çıkarın", "Mekânınıza uyum sağlıyor, sanatsal ve teknik tarafı üstleniyoruz."]],
    formTitle: "Etkinliğinizi konuşalım.", phone: "Telefon (isteğe bağlı)", show: "Gösteri", any: "Henüz bilmiyorum — önerin",
    types: ["Tiyatro / Konser salonu", "Festival", "Düğün", "Kurumsal etkinlik", "Kulüp", "Diğer"], date: "Yaklaşık tarih", location: "Şehir / Ülke",
    err: "Gönderilemedi. Bize yazın:", required: "Lütfen ad, e-posta ve mesajı doldurun.", rights: "Tüm hakları saklıdır.",
  },
  hu: {
    how: "Foglalás menete", book: "Foglalás", eyebrow: "Profi flamenco · Élőben", lines: ["Flamenco", "művészet", "a világnak."], scroll: "Görgessen",
    showsTitle: "Négy formátum. Egy igazság.", watch: "Előadás megtekintése", bookShow: "Ezt az előadást kérem",
    helpTitle: "Nem tudja, melyik illik az eseményéhez?", helpText: "Írja meg a helyszínt, a létszámot és a dátumot. 24 órán belül javasoljuk az ideális formátumot.", helpCta: "Kérek tanácsot",
    durationL: "Időtartam", lineupL: "Felállás",
    tags: ["Bata de cola és kendő", "Tablao modern hangzással", "Hat művész a színpadon", "Autentikus tablao, négy művész"],
    bullets: ["Profi flamenco tánc és zene", "Hagyományos és kortárs repertoár", "Alkalmazkodás minden eseményhez és színpadhoz", "Nemzetközi tapasztalat", "Profi technikai produkció"],
    touring: "Turnézó előadás", venuesEyebrow: "Hol lépünk fel", venues: ["Színházak", "Fesztiválok", "Koncerttermek", "Esküvők", "Céges rendezvények", "Klubok"],
    howEyebrow: "A foglalás egyszerű", howTitle: "Három lépés a színpadig.",
    steps: [["Meséljen az eseményről", "Dátum, helyszín, létszám és az esemény típusa. Ennyi elég a kezdéshez."], ["Kapja meg ajánlatunkat", "Elküldjük a javasolt formátumot, a technikai igénylistát és egyedi árajánlatot."], ["Élvezze az élő előadást", "Alkalmazkodunk a helyszínhez, és intézzük a művészi és technikai részt."]],
    formTitle: "Beszéljünk az eseményéről.", phone: "Telefon (nem kötelező)", show: "Előadás", any: "Még nem tudom — kérek tanácsot",
    types: ["Színház / Koncertterem", "Fesztivál", "Esküvő", "Céges rendezvény", "Klub", "Egyéb"], date: "Hozzávetőleges dátum", location: "Város / Ország",
    err: "A küldés nem sikerült. Írjon nekünk:", required: "Kérjük, adja meg a nevet, az e-mailt és az üzenetet.", rights: "Minden jog fenntartva.",
  },
  ru: {
    how: "Как заказать", book: "Заказать", eyebrow: "Профессиональное фламенко · Вживую", lines: ["Искусство", "фламенко", "для мира."], scroll: "Листайте",
    showsTitle: "Четыре формата. Одна правда.", watch: "Смотреть выступление", bookShow: "Заказать это шоу",
    helpTitle: "Не знаете, что выбрать?", helpText: "Расскажите о площадке, количестве гостей и дате. Мы порекомендуем идеальный формат в течение 24 часов.", helpCta: "Помогите выбрать",
    durationL: "Длительность", lineupL: "Состав",
    tags: ["Бата де кола и шаль", "Таблао в современном звучании", "Шесть артистов на сцене", "Настоящее таблао, четыре артиста"],
    bullets: ["Профессиональный танец и музыка фламенко", "Традиционный и современный репертуар", "Адаптация к любым мероприятиям и сценам", "Международный опыт", "Профессиональное техническое обеспечение"],
    touring: "Шоу в туре", venuesEyebrow: "Где мы выступаем", venues: ["Театры", "Фестивали", "Концертные залы", "Свадьбы", "Корпоративы", "Клубы"],
    howEyebrow: "Заказать просто", howTitle: "Три шага до сцены.",
    steps: [["Расскажите о мероприятии", "Дата, место, количество гостей и тип мероприятия. Этого достаточно, чтобы начать."], ["Получите предложение", "Мы пришлём рекомендуемый формат, технический райдер и индивидуальную смету."], ["Наслаждайтесь шоу", "Мы адаптируемся к вашей площадке и берём на себя художественную и техническую часть."]],
    formTitle: "Обсудим ваше мероприятие.", phone: "Телефон (необязательно)", show: "Шоу", any: "Пока не знаю — посоветуйте",
    types: ["Театр / Концертный зал", "Фестиваль", "Свадьба", "Корпоратив", "Клуб", "Другое"], date: "Примерная дата", location: "Город / Страна",
    err: "Не удалось отправить. Напишите нам:", required: "Заполните имя, email и сообщение.", rights: "Все права защищены.",
  },
  id: {
    how: "Cara memesan", book: "Pesan", eyebrow: "Flamenco profesional · Live", lines: ["Seni flamenco", "untuk", "dunia."], scroll: "Gulir",
    showsTitle: "Empat format. Satu kebenaran.", watch: "Tonton pertunjukan", bookShow: "Minta pertunjukan ini",
    helpTitle: "Belum tahu mana yang cocok?", helpText: "Beri tahu kami tempat, kapasitas, dan tanggalnya. Kami rekomendasikan format ideal dalam 24 jam.", helpCta: "Bantu saya memilih",
    durationL: "Durasi", lineupL: "Formasi",
    tags: ["Bata de cola dan selendang", "Tablao bertemu suara modern", "Enam artis di panggung", "Tablao autentik, empat artis"],
    bullets: ["Tari dan musik flamenco profesional", "Repertoar tradisional dan kontemporer", "Menyesuaikan semua jenis acara dan panggung", "Pengalaman internasional", "Produksi teknis profesional"],
    touring: "Pertunjukan tur", venuesEyebrow: "Tempat kami tampil", venues: ["Teater", "Festival", "Gedung konser", "Pernikahan", "Acara korporat", "Klub"],
    howEyebrow: "Memesan itu mudah", howTitle: "Tiga langkah menuju panggung.",
    steps: [["Ceritakan acara Anda", "Tanggal, tempat, kapasitas, dan jenis acara. Itu cukup untuk memulai."], ["Terima proposal Anda", "Kami kirimkan format yang direkomendasikan, rider teknis, dan penawaran khusus."], ["Nikmati pertunjukan", "Kami menyesuaikan dengan tempat Anda dan mengurus sisi artistik dan teknis."]],
    formTitle: "Mari bicarakan acara Anda.", phone: "Telepon (opsional)", show: "Pertunjukan", any: "Belum tahu — beri saran",
    types: ["Teater / Gedung konser", "Festival", "Pernikahan", "Acara korporat", "Klub", "Lainnya"], date: "Perkiraan tanggal", location: "Kota / Negara",
    err: "Gagal mengirim. Tulis kepada kami di", required: "Lengkapi nama, email, dan pesan.", rights: "Hak cipta dilindungi.",
  },
  zh: {
    how: "如何预订", book: "预订", eyebrow: "专业弗拉门戈 · 现场演出", lines: ["弗拉门戈", "艺术", "走向世界。"], scroll: "滚动",
    showsTitle: "四种形式，同一份真实。", watch: "观看演出", bookShow: "预订此演出",
    helpTitle: "不确定哪个适合您的活动？", helpText: "告诉我们场地、人数和日期，我们将在24小时内为您推荐最合适的形式。", helpCta: "为我推荐",
    durationL: "时长", lineupL: "阵容",
    tags: ["长裙摆与披肩", "传统塔布拉奥结合现代声音", "六位艺术家同台", "正宗塔布拉奥，四位艺术家"],
    bullets: ["专业弗拉门戈舞蹈与音乐", "传统与当代曲目", "适应各类活动与舞台", "国际经验", "专业技术制作"],
    touring: "巡演剧目", venuesEyebrow: "我们的演出场合", venues: ["剧院", "音乐节", "音乐厅", "婚礼", "企业活动", "俱乐部"],
    howEyebrow: "预订很简单", howTitle: "三步登上舞台。",
    steps: [["告诉我们您的活动", "日期、地点、人数和活动类型，这些就足够开始了。"], ["获取方案", "我们将发送推荐形式、技术要求和定制报价。"], ["享受现场演出", "我们根据场地进行调整，并负责艺术与技术部分。"]],
    formTitle: "聊聊您的活动。", phone: "电话（选填）", show: "演出", any: "还不确定——请推荐",
    types: ["剧院 / 音乐厅", "音乐节", "婚礼", "企业活动", "俱乐部", "其他"], date: "大致日期", location: "城市 / 国家",
    err: "发送失败，请写信至", required: "请填写姓名、邮箱和留言。", rights: "版权所有。",
  },
  ja: {
    how: "ご予約の流れ", book: "予約する", eyebrow: "プロのフラメンコ · ライブ", lines: ["世界へ", "届ける", "フラメンコ。"], scroll: "スクロール",
    showsTitle: "4つの形式、ひとつの真実。", watch: "公演を見る", bookShow: "この公演を依頼する",
    helpTitle: "どれが合うか迷っていますか？", helpText: "会場、人数、日程を教えてください。24時間以内に最適な形式をご提案します。", helpCta: "相談する",
    durationL: "上演時間", lineupL: "編成",
    tags: ["バタ・デ・コラとマントン", "タブラオ×モダンサウンド", "6人のアーティスト", "本格タブラオ、4人のアーティスト"],
    bullets: ["プロのフラメンコ舞踊と音楽", "伝統と現代のレパートリー", "あらゆるイベントと舞台に対応", "国際的な経験", "プロの技術制作"],
    touring: "ツアー公演", venuesEyebrow: "出演の場", venues: ["劇場", "フェスティバル", "コンサートホール", "結婚式", "企業イベント", "クラブ"],
    howEyebrow: "予約は簡単", howTitle: "舞台まで3ステップ。",
    steps: [["イベントについて教えてください", "日程、会場、人数、イベントの種類。それだけで始められます。"], ["ご提案を受け取る", "おすすめの形式、技術仕様書、お見積もりをお送りします。"], ["ライブを楽しむ", "会場に合わせて、芸術面と技術面をすべて担当します。"]],
    formTitle: "イベントについてお話ししましょう。", phone: "電話番号（任意）", show: "公演", any: "まだ決めていない — 相談したい",
    types: ["劇場 / コンサートホール", "フェスティバル", "結婚式", "企業イベント", "クラブ", "その他"], date: "おおよその日程", location: "都市 / 国",
    err: "送信できませんでした。こちらへご連絡ください：", required: "お名前、メール、メッセージを入力してください。", rights: "無断転載を禁じます。",
  },
};

const splitQuote = (q) => {
  const m = q.match(/^(.+?[.。])\s*(.+)$/);
  return m ? [m[1], m[2]] : [q, ""];
};

const build = (code) => {
  const o = O[code];
  const e = E[code];
  const [qTitle, qRest] = splitQuote(o.about.quote);
  const paras = o.about.descriptionAfterName.split(/\n\n+/);
  const showData = Object.fromEntries(SHOWS.map((s, i) => [s.id, {
    desc: o.videos[s.video].description,
    duration: o.duration[s.dur],
    lineup: s.lineup.map((k) => o.videos.instruments[k]),
    tag: e.tags[i],
  }]));
  return {
    nav: { shows: o.nav.performances, about: o.nav.about, how: e.how, blog: o.nav.blog, book: e.book },
    blog: { ...BLOG_UI[code], posts: BLOG[code] ?? [] },
    hero: {
      eyebrow: e.eyebrow, lines: e.lines, sub: `${o.hero.subtitle} ${o.hero.tagline}`,
      cta1: o.hero.watchPerformances, cta2: o.hero.requestQuote,
      chips: [o.hero.traditionalMusic, o.hero.professionalArtists, o.hero.internationalReach], scroll: e.scroll,
    },
    marquee: [...SHOWS.map((s) => s.title), `25+ ${o.about.yearsExperience}`, `200+ ${o.about.internationalEvents}`],
    shows: {
      eyebrow: o.videos.title, title: e.showsTitle, sub: o.videos.subtitle, watch: e.watch, book: e.bookShow,
      helpTitle: e.helpTitle, helpText: e.helpText, helpCta: e.helpCta, duration: e.durationL, lineup: e.lineupL,
    },
    showData,
    about: {
      eyebrow: o.about.title, title: qTitle, quote: qRest, p1: paras[0], p2: paras[1] ?? "", p3: paras[2] ?? "",
      bullets: e.bullets,
      stats: [["25+", o.about.yearsExperience], ["200+", o.about.internationalEvents], ["4", e.touring]],
    },
    venues: { eyebrow: e.venuesEyebrow, items: e.venues },
    how: { eyebrow: e.howEyebrow, title: e.howTitle, steps: e.steps },
    form: {
      eyebrow: o.contact.title, title: e.formTitle, sub: o.contact.subtitle,
      name: o.contact.fullName, email: o.contact.email, phone: e.phone, show: e.show, any: e.any,
      type: o.contact.eventType, types: e.types, date: e.date, location: e.location, message: o.contact.message,
      send: o.contact.submit, sending: o.contact.sending, ok: `${o.contact.successTitle} ${o.contact.successMessage}`,
      err: e.err, direct: o.contact.directEmail.replace(/[:：]\s*$/, ""), required: e.required,
    },
    footer: { rights: e.rights, tagline: o.footer.description },
    sticky: o.hero.requestQuote,
  };
};

export const T = Object.fromEntries(LANGS.map(([c]) => [c, build(c)]));
