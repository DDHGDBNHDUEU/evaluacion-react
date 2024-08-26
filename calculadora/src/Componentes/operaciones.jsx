function Operaciones({ sumar, restar, dividir, multiplicar, resultado, limpiar }) {
    return (
      <div className="conteiner-opr">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={dividir}>Dividir</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={resultado}>Mostrar resultado</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>
    )
  }
  
  export default Operaciones
  