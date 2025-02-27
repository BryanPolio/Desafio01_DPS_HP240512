'use client'; //primero usamos la directiva Use client para hacer que el codigo se ejecute en el navegador ya que usare hooks.

import { useState } from 'react'; //manejar el estado de componentes funcionales
import SelectorDeporte from './components/SelectorDeporte'; //los componentes que usaremos son importados.
import PlanoDeportivo from './components/PlanoDeportivo';
import ResumenReserva from './components/ResumenReserva';

const deportes = ['Fútbol', 'Baloncesto', 'Tenis']; // creo un array para los deportes que usare.

//creo el componente Home que es el que se renderizara en el navegador.
export default function Home() {
  const [deporteSeleccionado, setDeporteSeleccionado] = useState(deportes[0]); //almaceno el deporte seleccionado.
  const [canchas, setCanchas] = useState( Array(10).fill({ disponible: true, deporte: '' })); //creo un array de 10 canchas con el estado de disponible y deporte.
  const [reserva, setReserva] = useState(null);
  const [duracion, setDuracion] = useState(1);
  const [mensaje, setMensaje] = useState('');

  const reservarCancha = (index) => { //funcion para reservar una cancha.
      if (!canchas[index].disponible) {
      setMensaje('Esta cancha fue reservada.');
      return;
    }
     //actualizo el estado de la cancha seleccionada.
    const nuevasCanchas = canchas.map((cancha, i) => i === index ? { disponible: false, deporte: deporteSeleccionado } : cancha );
    setCanchas(nuevasCanchas);
    setReserva({ cancha: index + 1, deporte: deporteSeleccionado });
    setMensaje(`Cancha ${index + 1} reservada para ${deporteSeleccionado}.`);
  };
    // y termino retornando los componentes que se renderizaran en el navegador.
  return (
    <div className="container mt-4">
      <h1 className="text-center">Pagina para la reserva de canchas segun el deporte:</h1>
      {mensaje && <div className="alert alert-success">{mensaje}</div>}
      <SelectorDeporte deportes={deportes} seleccionado={deporteSeleccionado} setSeleccionado={setDeporteSeleccionado}/>
      <PlanoDeportivo canchas={canchas} reservarCancha={reservarCancha} />
      {reserva && (<ResumenReserva reserva={reserva} duracion={duracion} setDuracion={setDuracion}/>
      )}
    </div>
  );
}