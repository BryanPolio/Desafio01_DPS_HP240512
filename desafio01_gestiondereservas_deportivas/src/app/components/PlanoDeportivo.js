import Cancha from './Cancha';

export default function PlanoDeportivo({ canchas, reservarCancha }) { //creo el componente PlanoDeportivo que se renderizara en el navegador.
  return ( // y uso el componente Cancha para renderizar las canchas.
    <div className="row text-center">
      {canchas.map((cancha, index) => (<Cancha key={index} cancha={cancha} index={index} reservarCancha={reservarCancha}/>))}
    </div>
  );
}