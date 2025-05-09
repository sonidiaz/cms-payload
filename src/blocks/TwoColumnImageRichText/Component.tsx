import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

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
      className={`w-full flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        {image && (
          <Media
            resource={image}
            alt={imageAlt || ''}
            className="max-w-full h-auto rounded-lg shadow-md object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center prose max-w-none">
        <RichText data={richText} />
      </div>
    </section>
  )
}
