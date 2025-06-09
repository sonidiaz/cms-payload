import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

interface MediaType {
  id: string
  filename: string
  alt?: string
  caption?: string
  url?: string
}

const AdminHero = async () => {
  // Cargar la configuración y el SDK de Payload
  const payload = await getPayload({ config: configPromise })

  // Obtener la primera imagen de la colección Media
  const mediaResult = await payload.find({
    collection: 'media',
  })
  // @ts-expect-error: bypass typescript error
  const media: MediaType = mediaResult?.docs?.[4]
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {media ? (
        <div className="max-w-lg object-cover h-[30vh]">
          <img
            src={`${media.url}`}
            alt={media.alt || 'Imagen de administración'}
            className="rounded-lg shadow-lg max-h-96 object-contain"
          />
          {media.caption && (
            <div className="mt-2 text-sm text-gray-600">
              {media.caption}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p>No se encontraron imágenes en la colección Media.</p>
          <p className="mt-2">Puedes subir imágenes desde la sección Media del panel.</p>
        </div>
      )}
    </div>
  )
}

export default AdminHero