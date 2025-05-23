import React from 'react'

// Este componente se usará como logo en el panel de administración de Payload CMS
const Icon: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '100%' 
    }}>
      {/* Puedes reemplazar esto con tu propio logo */}
    <img src="/favicon-pratodo.png" alt="" width={300} height={300} loading="lazy"/>
    </div>
  )
}

export default Icon
