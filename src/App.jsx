import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


const App = () => {
  return (
    <div>
      <PrecisoEstudar nomeDaTecnologia='REACT'/>
      <Adicao num1={5} num2={10}/>
      <Subtracao num1={10} num2={5}/>
      <Multiplicacao num1={7} num2={7}/>
      <Divisao num1={50} num2={2}/>
    </div>
  )
}

export default App