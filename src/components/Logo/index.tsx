import React from 'react'
import {Logo as LogoComponent} from '@/components/Logo/Logo' 

// Este componente se usará como logo en el panel de administración de Payload CMS
const Logo: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '100%' 
    }}>
      {/* Puedes reemplazar esto con tu propio logo */}
     <LogoComponent/>
    </div>
  )
}

export default Logo
