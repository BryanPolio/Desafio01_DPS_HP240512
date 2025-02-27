export default function ResumenReserva({ reserva, duracion, setDuracion }) { //creo el componente ResumenReserva que se renderizara en el navegador.
  const total = duracion * 5; 
 
  return (  // y uso un formulario para mostrar el resumen de la reserva que realizo el usuario, ademas de el calculo del tiempo y del total a pagar.
    <div className="alert alert-info mt-3">
      <h4>Resumen de sus reservas</h4>
      <p>Cancha: {reserva.cancha}</p>
      <p>Deporte: {reserva.deporte}</p>
      <div className="mb-3">         
        <label className="form-label"> Tiempo de uso (horas):</label>  
        <input type="number" className="form-control" value={duracion} onChange={(e) => setDuracion(Number(e.target.value))} min="1"/>
      </div>
      <p>Total que debera pagar por el uso de la cancha: ${total}</p>
    </div>
  );
}