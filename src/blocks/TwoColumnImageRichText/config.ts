import type { Block } from 'payload';
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const TwoColumnImageRichText: Block = {
  slug: 'two-column-image-rich-text',
  interfaceName: 'TwoColumnImageRichTextBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Texto alternativo de la imagen',
      required: false,
    },
    {
      name: 'reverse',
      type: 'checkbox',
      label: 'Invertir columnas',
      defaultValue: false,
      required: false,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      required: true,
    },
  ],
};
