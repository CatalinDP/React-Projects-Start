import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => { //Recibe dos parametros, 1: el codigo a ejectura, 2: Lista de parametros - Como minimo se ejecuta una vez
    const handleMove = (event) => {
      
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
      console.log({clientX, clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    } //Esto se ejecuta siempre que se desmonte el componente (App en este caso) y también cada vez que cambie la dependencia (2do parametro)
  }, [enabled]) //En el segundo, irian las dependencias, es decir, que cuando cambia ese valor, minimo se ejecuta una vez. 
  // Un "[]" hace que se ejecute una sola vez al iniciarlo.

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09F',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform:`translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

function App() {
  return (
    <FollowMouse/>
  )
}

export default App
