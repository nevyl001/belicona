# 📋 RESUMEN GENERAL DEL SITIO WEB BELICONA

## 🎯 INFORMACIÓN GENERAL

- **Nombre**: Belicona - Bebidas Artesanales Premium
- **Tecnologías**: React.js + Vite + Tailwind CSS + Framer Motion
- **Responsive**: Móvil, Tablet, Desktop
- **Favicon**: becabe.png
- **WhatsApp**: +525611926751

---

## 📁 ESTRUCTURA DEL PROYECTO

### 🧩 Componentes Reutilizables (`src/components/`)

1. **`Navbar.jsx`** - Navegación principal con menú hamburguesa
2. **`Footer.jsx`** - Pie de página con redes sociales (Instagram, TikTok, Facebook)
3. **`MagneticButton.jsx`** - Botón con efectos magnéticos y ripple
4. **`RevealCard.jsx`** - Tarjeta con animaciones de revelado
5. **`ParticleBackground.jsx`** - Fondo de partículas animadas
6. **`ProductCardMobile.jsx`** - Tarjeta de producto optimizada para móvil
7. **`PopupSocio.tsx`** - Popup de verificación de edad

### 🎣 Hooks Personalizados (`src/hooks/`)

1. **`useAnimations.js`** - Animaciones reutilizables (fadeIn, scaleIn, stagger, etc.)
2. **`useScrollEffects.js`** - Efectos de scroll (intersection observer, magnetic, ripple)

### 📂 Páginas (`src/pages/`)

1. **`Home.jsx`** - Página principal con hero, características, productos destacados
2. **`SobreNosotros.jsx`** - Historia, valores, misión y visión
3. **`Productos.jsx`** - Catálogo de productos con diseño alternado
4. **`Noticias.jsx`** - Noticia destacada con enlace a detalle
5. **`NoticiaDetalle.jsx`** - Detalle completo de noticia con galería
6. **`Eventos.jsx`** - Evento destacado con enlace a detalle
7. **`EventoDetalle.jsx`** - Detalle completo de evento
8. **`Contacto.jsx`** - Formulario de contacto modernizado
9. **`MenorEdad.jsx`** - Página para usuarios menores de edad

---

## 🎨 DISEÑO Y ESTILOS

### 🎨 Paleta de Colores

- **Primario**: Rojo (#DC2626) - primary-500
- **Secundario**: Naranja (#F97316) - orange-500
- **Fondo**: Negro/Gris oscuro
- **Texto**: Blanco/Gris claro

### ✨ Efectos Visuales

- **Glow en títulos**: `textShadow: "0 0 20px rgba(220, 38, 38, 0.5)"`
- **Animaciones**: Framer Motion (fadeIn, scaleIn, stagger)
- **Partículas**: Solo en sección "Nuestras Bebidas"
- **Glassmorphism**: Efectos de vidrio en tarjetas
- **Hover effects**: Escala, sombras, transiciones suaves

### 📱 Responsive Design

- **Móvil**: `< 640px` - Layout vertical, texto más pequeño
- **Tablet**: `640px - 1024px` - Layout intermedio
- **Desktop**: `> 1024px` - Layout completo con efectos

---

## 🛍️ PRODUCTOS

### 🥤 Productos Disponibles

1. **Pepino** - `p2.jpg` - $35 MXN
2. **Mango** - `m1.jpg` - $35 MXN
3. **Coco** - `c1.jpg` - $35 MXN

### 🛒 Funcionalidad de Compra

- **Botón "COMPRAR AHORA"** → WhatsApp directo
- **Mensaje automático**: "¡Hola! Me interesa comprar productos Belicona. Específicamente me interesa: [Nombre del producto]"
- **Número**: +525611926751

---

## 📰 NOTICIAS Y EVENTOS

### 📰 Noticia Destacada

- **Título**: "¡Nuevo video de promoción con Abelito!"
- **Imagen**: `videobeli.JPG`
- **Galería**: `videobeli.JPG`, `im1.JPG`, `im2.JPG`
- **Modal**: Click en imágenes para ver en grande

### 🎉 Evento Destacado

- **Título**: "Festival de Sabores Belicona 2024"
- **Fecha**: 15 de Marzo, 2024
- **Ubicación**: Parque Central, Ciudad de México

---

## 📞 CONTACTO

### 📋 Formulario de Contacto

- **Campos**: Nombre, Email, Teléfono, Mensaje
- **Validación**: Campos requeridos, email válido
- **Estados**: Enviando, Enviado, Error
- **Diseño**: Glassmorphism con animaciones

### 🔗 Redes Sociales

- **Instagram**: @belicona
- **TikTok**: @belicona
- **Facebook**: Belicona Oficial

---

## ⚙️ CONFIGURACIÓN TÉCNICA

### 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.1",
  "framer-motion": "^10.16.4",
  "tailwindcss": "^3.3.0"
}
```

### 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build

### 📁 Archivos de Configuración

- `vite.config.js` - Configuración de Vite
- `tailwind.config.js` - Configuración de Tailwind
- `index.html` - HTML principal con meta tags SEO

---

## 🎯 FUNCIONALIDADES PRINCIPALES

### ✅ Implementadas

1. **Verificación de edad** con popup y redirección
2. **Navegación responsive** con menú hamburguesa
3. **Animaciones suaves** en toda la aplicación
4. **Integración WhatsApp** para ventas directas
5. **Galería de imágenes** con modal
6. **Formulario de contacto** funcional
7. **SEO optimizado** para redes sociales
8. **Favicon personalizado** (becabe.png)

### 📱 Responsive Features

- **Móvil**: ProductCardMobile.jsx para productos
- **Desktop**: Layout alternado para productos
- **Tablet**: Adaptación automática

---

## 📊 ESTADÍSTICAS DEL PROYECTO

### 📁 Archivos Totales: 36 archivos

### 🗂️ Componentes: 7 componentes reutilizables

### 📄 Páginas: 9 páginas

### 🎣 Hooks: 2 hooks personalizados

### 🖼️ Assets: 8 imágenes en public/

---

## 🔧 COMANDOS ÚTILES

### 🚀 Desarrollo

```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Crear build de producción
npm run preview      # Preview del build
```

### 📦 Git

```bash
git add .            # Agregar cambios
git commit -m "msg"  # Commit con mensaje
git push             # Subir a GitHub
```

---

## 📝 NOTAS IMPORTANTES

1. **Imágenes**: Todas las imágenes están en `/public/` para acceso directo
2. **Animaciones**: Usar `useAnimations` hook para consistencia
3. **Responsive**: Siempre probar en móvil, tablet y desktop
4. **WhatsApp**: Número configurado: +525611926751
5. **SEO**: Meta tags configurados para redes sociales
6. **Favicon**: becabe.png configurado como icono del sitio

---

## 🛠️ PERSONALIZACIÓN

### Para cambiar colores:

- Editar `tailwind.config.js`
- Modificar clases en componentes

### Para agregar productos:

- Editar array `products` en `Productos.jsx`
- Agregar imagen en `/public/`

### Para modificar contenido:

- Editar objetos de datos en cada página
- Actualizar textos directamente en JSX

---

**📅 Fecha de creación**: 2024
**👨‍💻 Desarrollado con**: React + Vite + Tailwind CSS
**🎯 Estado**: Completamente funcional y optimizado

---

_Este resumen contiene toda la información necesaria para entender, mantener y modificar el sitio web de Belicona. ¡Imprímelo y tenlo a la mano para futuras modificaciones!_ 🚀✨
