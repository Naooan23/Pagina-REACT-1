import { libros } from "../ejercicio-4/datos.ts";
import "./styles.css";

type Libro = (typeof libros)[number];

interface props {
  libros: Libro[];
  onSeleccionar: (libro: Libro) => void;
}

export default function ListaTarjetas({ libros, onSeleccionar }: props) {
  return (
    <div className="lista-tarjetas">
      {libros.map((libro) => (
        <div
          className="tarjeta-libro"
          key={libro.id}
          onClick={() => onSeleccionar(libro)}
        >
          <h2>{libro.titulo}</h2>
          <p>{libro.descripcion}</p>
        </div>
      ))}
    </div>
  );
}