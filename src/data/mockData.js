// Datos mock para la aplicación Belicona

// Datos de noticias
export const mockNews = [
  {
    id: 1,
    title: "Belicona lanza nueva línea de productos sostenibles",
    excerpt:
      "Nuestra nueva colección está diseñada con materiales 100% reciclables y procesos de producción eco-friendly, marcando un nuevo hito en nuestra responsabilidad ambiental.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "María González",
    date: "2024-01-15",
    category: "Sostenibilidad",
    readTime: "3 min",
    content:
      "Contenido completo del artículo sobre la nueva línea de productos sostenibles...",
  },
  {
    id: 2,
    title: "Innovación tecnológica en nuestros procesos de fabricación",
    excerpt:
      "Hemos implementado inteligencia artificial y automatización avanzada para mejorar la eficiencia y calidad de nuestros productos.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Carlos Ruiz",
    date: "2024-01-12",
    category: "Tecnología",
    readTime: "5 min",
    content: "Contenido completo del artículo sobre innovación tecnológica...",
  },
  {
    id: 3,
    title: "Nuevo centro de investigación y desarrollo inaugurado",
    excerpt:
      "Nuestro nuevo centro de I+D cuenta con laboratorios de última generación y un equipo de 50 investigadores especializados.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    author: "Ana Martínez",
    date: "2024-01-10",
    category: "Investigación",
    readTime: "4 min",
    content:
      "Contenido completo del artículo sobre el nuevo centro de investigación...",
  },
  {
    id: 4,
    title: "Belicona recibe premio a la excelencia empresarial",
    excerpt:
      "Hemos sido reconocidos por nuestra contribución al desarrollo sostenible y la innovación en la industria.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    author: "Roberto Silva",
    date: "2024-01-08",
    category: "Reconocimientos",
    readTime: "3 min",
    content: "Contenido completo del artículo sobre el premio recibido...",
  },
  {
    id: 5,
    title: "Nueva alianza estratégica con universidades líderes",
    excerpt:
      "Establecemos colaboraciones con instituciones académicas para impulsar la investigación y el desarrollo de talento.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Laura Fernández",
    date: "2024-01-05",
    category: "Educación",
    readTime: "4 min",
    content: "Contenido completo del artículo sobre la nueva alianza...",
  },
  {
    id: 6,
    title: "Expansión internacional: Nuevas oficinas en Europa",
    excerpt:
      "Abrimos nuestras primeras oficinas en Madrid y Berlín para atender mejor a nuestros clientes europeos.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Miguel Torres",
    date: "2024-01-03",
    category: "Expansión",
    readTime: "5 min",
    content:
      "Contenido completo del artículo sobre la expansión internacional...",
  },
];

// Datos de eventos
export const mockEvents = [
  {
    id: 1,
    title: "Conferencia de Innovación 2024",
    date: "2024-02-15",
    time: "09:00 - 17:00",
    location: "Centro de Convenciones Madrid",
    description:
      "Únete a nosotros para conocer las últimas tendencias en innovación y tecnología.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Conferencia",
    price: "Gratuito",
  },
  {
    id: 2,
    title: "Workshop de Sostenibilidad",
    date: "2024-02-20",
    time: "14:00 - 18:00",
    location: "Online",
    description:
      "Aprende sobre prácticas sostenibles en la industria y cómo implementarlas en tu empresa.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "Workshop",
    price: "€50",
  },
  {
    id: 3,
    title: "Lanzamiento de Producto",
    date: "2024-03-01",
    time: "19:00 - 22:00",
    location: "Showroom Belicona",
    description:
      "Presentación exclusiva de nuestros nuevos productos con demostraciones en vivo.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Lanzamiento",
    price: "Gratuito",
  },
];

// Datos de productos
export const mockProducts = [
  {
    id: 1,
    name: "Producto Innovador X1",
    description:
      "Nuestro producto más avanzado con tecnología de última generación y diseño sostenible.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Tecnología",
    features: ["Eco-friendly", "Alta eficiencia", "Diseño moderno"],
    inStock: true,
  },
  {
    id: 2,
    name: "Solución Empresarial Pro",
    description:
      "Completa suite de herramientas para optimizar los procesos empresariales.",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Software",
    features: ["Escalable", "Integración completa", "Soporte 24/7"],
    inStock: true,
  },
  {
    id: 3,
    name: "Kit de Desarrollo",
    description:
      "Todo lo que necesitas para comenzar a desarrollar con nuestras herramientas.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    category: "Desarrollo",
    features: [
      "Documentación completa",
      "Ejemplos prácticos",
      "Comunidad activa",
    ],
    inStock: false,
  },
];
