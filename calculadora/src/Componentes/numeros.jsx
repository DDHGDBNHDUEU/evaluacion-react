function Numeros({ mostrar }) {
    return (
      <div className="conteiner-nmr">
        <button onClick={() => mostrar('1')}>1</button>
        <button onClick={() => mostrar('2')}>2</button>
        <button onClick={() => mostrar('3')}>3</button>
        <button onClick={() => mostrar('4')}>4</button>
        <button onClick={() => mostrar('5')}>5</button>
        <button onClick={() => mostrar('6')}>6</button>
        <button onClick={() => mostrar('7')}>7</button>
        <button onClick={() => mostrar('8')}>8</button>
        <button onClick={() => mostrar('9')}>9</button>
      </div>
    )
  }
  
  export default Numeros
  