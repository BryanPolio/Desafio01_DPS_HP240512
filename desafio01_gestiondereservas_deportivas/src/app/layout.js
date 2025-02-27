 //aqui se importa el css de bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
// defino el layout de la aplicacion.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}