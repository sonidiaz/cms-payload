import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { GrInstagram, GrLinkedin } from 'react-icons/gr'
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io5'
import ImageMediaHTML from '@/components/Media/ImageMediaHTML'
interface Props {
  image?: string
  imageAlt?: string
  richText: any
  reverse?: boolean
}

export const TwoColumnImageRichTextBlock: React.FC<Props> = ({
  image,
  imageAlt,
  richText,
  reverse,
}) => {
  return (
    <section
      className={`w-full flex flex-col md:flex-row justify-center items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-[10rem] md:w-1/8 flex justify-center">
        {image && <Media resource={image} />}
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center prose max-w-none">
        <RichText data={richText} />
        <div className="container mx-auto prose md:prose-md dark:prose-invert pt-4">
          <span> Síguenos en nuestras redes sociales</span>
          <div className="flex gap-2 pt-4">
            <a
              href="https://www.linkedin.com/company/asociacion-pratodo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin color="black" className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/prato_do/" target="_blank" rel="noopener noreferrer">
              <GrInstagram color="black" className="w-7 h-7" />
            </a>
            <a
              href="https://www.facebook.com/pratodoinnova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook color="black" className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/@pratodo7673"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube color="black" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
