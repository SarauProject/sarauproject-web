// Mock data para conciertos de flamenco
export const mockVideos = [
  {
    id: 0,
    title: "Tarannà",
    description: "Tarannà es un cuadro flamenco que combina tradición y una sonoridad actual. Su propuesta destaca por la presencia escénica de la bailaora, que interpreta las piezas utilizando bata de cola y mantón, aportando una gran fuerza visual al espectáculo. El grupo mantiene la formación típica del flamenco, baile, cante, guitarra y cajón, incorporando además bajo eléctrico, lo que añade profundidad rítmica y un matiz contemporáneo al conjunto.",
    youtubeId: "oZ1yeRvoo2s",
    category: "",
    duration: "1 hora y media",
    instruments: ["Baile", "Cante", "Guitarra", "Percusión", "Bajo"],
    thumbnail: "https://img.youtube.com/vi/oZ1yeRvoo2s/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Sarsalé",
    description: "Flamenco que combina la fuerza y el alma del tablao tradicional con la frescura de sonidos modernos. Nuestro cuadro incluye baile, cante, guitarra, percusión y bajo, ofreciendo una experiencia única donde la tradición se encuentra con la innovación sonora. Reinventa incorporando texturas modernas y dinámicas contemporáneas. Cada actuación es un viaje sensorial donde tradición, ritmo y modernidad se entrelazan, creando una experiencia única.",
    youtubeId: "JoAlDaPrVLk",
    category: "",
    duration: "1 hora y media",
    instruments: ["Cante", "Baile", "Guitarra", "Percusión", "Bajo"],
    thumbnail: "https://img.youtube.com/vi/JoAlDaPrVLk/maxresdefault.jpg"
  },
  {
    id: 1,
    title: "Sarsalé Sextet",
    description: "Espectáculo flamenco vibrante con un cuadro de seis componentes, donde se combinan dos bailes, dos cantes, guitarra y percusión, ofreciendo la esencia más pura del flamenco contemporáneo y tradicional.",
    youtubeId: "OixPUT8HNSI",
    category: "",
    duration: "2 horas",
    instruments: ["Cante x2", "Baile x2", "Guitarra", "Percusión"],
    thumbnail: "https://img.youtube.com/vi/OixPUT8HNSI/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Alikindoi",
    description: "Espectáculo flamenco auténtico con un cuadro de cuatro artistas, tal como en un tablao tradicional: baile, cante, guitarra y percusión, combinando técnica, ritmo y emoción en cada compás.",
    youtubeId: "cB80rMnfrGI",
    category: "",
    duration: "1 hora y media",
    instruments: ["Cante", "Baile", "Guitarra", "Percusión"],
    thumbnail: "https://img.youtube.com/vi/cB80rMnfrGI/maxresdefault.jpg"
  }
];

export const categories = [
  { id: "all", name: "Todos", color: "bg-red-600" },
  { id: "Festival", name: "Festivales", color: "bg-violet-600" },
  { id: "Bodas", name: "Bodas", color: "bg-blue-600" },
  { id: "Teatro", name: "Teatro", color: "bg-gray-700" },
  { id: "Corporativo", name: "Corporativo", color: "bg-red-700" }
];

export const aboutText = {
  title: "Arte Flamenco Profesional",
  subtitle: "Tradición andaluza para eventos internacionales",
  description: "Ofrecemos espectáculos de flamenco auténtico y profesional con los mejores artistas de España. Nuestro cuadro flamenco combina tradición y vanguardia, adaptándonos a cualquier tipo de evento: festivales internacionales, bodas, eventos corporativos y salas de teatro.",
  features: [
    "Cuadro flamenco completo: cante, baile, guitarra y percusión",
    "Repertorio tradicional y contemporáneo",
    "Adaptación a todo tipo de eventos y escenarios",
    "Experiencia internacional",
    "Producción técnica profesional"
  ]
};
