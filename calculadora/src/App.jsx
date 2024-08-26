import './App.css'
import React, { useState } from 'react'
// Componentes
import Input from './Componentes/Input'
import Numeros from './Componentes/Numeros'
import Operaciones from './Componentes/Operaciones'

function App() {
  const [valorInput, setValorInput] = useState('')
  const [valorAnterior, setValorAnterior] = useState('')
  const [operar, setOperar] = useState(null)

  const mostrar = (numero) => {
    setValorInput(valorInput + numero)
  }

  const guardarOperacion = (operacion) => {
    setValorAnterior(valorInput)
    setValorInput('')
    setOperar(() => operacion)
  }

  const resultado = () => {
    if (valorAnterior && operar) {
      const resultado = operar(valorAnterior, valorInput)
      setValorInput(resultado.toString())
      setValorAnterior('')
      setOperar(null)
    }
  }

  const limpiar = () => {
    setValorInput('')
    setValorAnterior('')
    setOperar(null)
  }

  return (
    <>
      <Input valor={valorInput} />
      <Numeros mostrar={mostrar} />
      <Operaciones
        sumar={() => guardarOperacion((a, b) => Number(a) + Number(b))}
        restar={() => guardarOperacion((a, b) => Number(a) - Number(b))}
        dividir={() => guardarOperacion((a, b) => Number(a) / Number(b))}
        multiplicar={() => guardarOperacion((a, b) => Number(a) * Number(b))}
        resultado={resultado}
        limpiar={limpiar}
      />
    </>
  )
}

export default App

