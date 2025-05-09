import React from 'react';

interface TwoColumnImageRichTextProps {
  imageSrc: string;
  imageAlt?: string;
  richText: React.ReactNode;
  reverse?: boolean; // Para invertir columnas si se desea
  className?: string;
}

/**
 * Componente reutilizable de dos columnas: imagen a la izquierda y richText a la derecha.
 *
 * @param imageSrc - Ruta de la imagen
 * @param imageAlt - Texto alternativo de la imagen
 * @param richText - Contenido rich text (puede ser JSX o componente RichText)
 * @param reverse - Si true, invierte el orden de las columnas
 * @param className - Clases extra para el contenedor
 */
const TwoColumnImageRichText: React.FC<TwoColumnImageRichTextProps> = ({
  imageSrc,
  imageAlt = '',
  richText,
  reverse = false,
  className = '',
}) => {
  return (
    <section className={`w-full flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''} ${className}`}>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center prose max-w-none">
        {richText}
      </div>
    </section>
  );
};

export default TwoColumnImageRichText;
