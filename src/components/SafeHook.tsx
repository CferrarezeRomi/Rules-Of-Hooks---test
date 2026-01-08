import React, { useEffect, useState } from 'react'

export const SafeHook: React.FC = () => {
  const [estado, setEstado] = useState(false)

  // ✅ Hook SEMPRE é chamado (ordem/quantidade fixa)
  // ✅ O comportamento "condicional" fica DENTRO do effect
  useEffect(() => {
    console.log('useEffect runned!')
    if (estado) {
      // efeito qualquer
      console.log('Changed state to true')
    }
  }, [estado])

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
