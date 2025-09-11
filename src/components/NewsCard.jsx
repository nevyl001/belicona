import React from "react";
import Card, { CardImage, CardBody, CardFooter } from "./Card";
import Button from "./Button";

/**
 * Componente NewsCard específico para noticias
 * @param {Object} props - Propiedades de la tarjeta de noticia
 * @param {Object} props.article - Datos del artículo
 * @param {string} props.article.id - ID del artículo
 * @param {string} props.article.title - Título del artículo
 * @param {string} props.article.excerpt - Extracto del artículo
 * @param {string} props.article.image - URL de la imagen
 * @param {string} props.article.author - Autor del artículo
 * @param {string} props.article.date - Fecha del artículo
 * @param {string} props.article.category - Categoría del artículo
 * @param {string} props.article.readTime - Tiempo de lectura estimado
 * @param {Function} props.onReadMore - Función a ejecutar al hacer clic en "Leer más"
 * @param {string} props.className - Clases CSS adicionales
 */
const NewsCard = ({ article, onReadMore, className = "", ...props }) => {
  const { id, title, excerpt, image, author, date, category, readTime } =
    article;

  // Formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      hover
      clickable
      className={`h-full flex flex-col ${className}`}
      onClick={() => onReadMore && onReadMore(article)}
      {...props}
    >
      {/* Imagen del artículo */}
      {image && (
        <CardImage src={image} alt={title} aspectRatio="aspect-video" />
      )}

      {/* Cuerpo de la tarjeta */}
      <CardBody className="flex-1 flex flex-col">
        {/* Categoría y fecha */}
        <div className="flex items-center justify-between mb-2">
          {category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 text-white">
              {category}
            </span>
          )}
          <div className="flex items-center text-sm text-orange-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readTime}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Extracto */}
        <p className="text-gray-300 text-sm line-clamp-3 flex-1">{excerpt}</p>
      </CardBody>

      {/* Pie de la tarjeta */}
      <CardFooter>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">{author}</p>
              <p className="text-xs text-gray-400">{formatDate(date)}</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onReadMore && onReadMore(article);
            }}
          >
            Leer más
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
