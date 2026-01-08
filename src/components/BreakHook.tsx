import React, { useEffect, useState } from 'react'

export const BreakHook: React.FC = () => {
  const [estado, setEstado] = useState(false)

  // ✅ Render 1 (estado=false): 0 useEffect aqui
  // ✅ Render 2 (estado=true): 1 useEffect aqui
  if (estado) {
    useEffect(() => {
      // efeito qualquer
      console.log('Broken!')
    }, [])
  }
  // ❌ Quantidade/ordem de hooks mudou -> React vai crashar

  return (
    <div>
      <p>
        Estado:{' '}
        <span style={{ color: estado ? '#00dd00' : '#d20' }}>
          {String(estado)}
        </span>
      </p>

      <button type="button" onClick={() => setEstado((v) => !v)}>
        Aperta aqui para mudar Estado
      </button>
    </div>
  )
}
