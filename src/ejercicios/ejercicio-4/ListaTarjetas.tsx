import "./ejercicio4.css";

interface Libro {
  id: number;
  titulo: string;
  descripcion: string;
}

export default function ListaTarjetas({ libros }: { libros: Libro[] }) {
  return (
    <div className="lista-tarjetas">
      {libros.map((libro) => (
        <div className="tarjeta-libro" key={libro.id}>
          <h2>{libro.titulo}</h2>
          <p>{libro.descripcion}</p>
        </div>
      ))}
    </div>
  );
}