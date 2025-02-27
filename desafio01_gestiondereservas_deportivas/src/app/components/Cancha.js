export default function Cancha({ cancha, index, reservarCancha }) { //creo el componente Cancha que se renderizara en el navegador.
    return (                                                       // y uso btn-primary para canchas disponibles y btn-warning para canchas reservadas.
      <button className={`col-4 btn ${cancha.disponible ? 'btn-primary' : 'btn-warning'} m-2`} onClick={() => reservarCancha(index)}>
      {cancha.disponible ? `Cancha ${index + 1}` : `Reservada - ${cancha.deporte}`} </button>
    );
  }