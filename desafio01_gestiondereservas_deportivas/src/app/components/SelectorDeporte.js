export default function SelectorDeporte({ deportes, seleccionado, setSeleccionado }) { //creo el componente SelectorDeporte que se renderizara en el navegador.
  return (  // Uso un select para que el usuario pueda seleccionar el deporte que desee agendar.
    <div className="mb-3">
      <label className="form-label">Seleccione el deporte que desee agendar:</label>
      <select className="form-select" value={seleccionado} onChange={(e) => setSeleccionado(e.target.value)}>
      {deportes.map((deporte, index) => ( <option key={index} value={deporte}> {deporte} </option>))}
      </select>
    </div>
  );
}  