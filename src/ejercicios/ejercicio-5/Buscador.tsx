import { useState } from "react";
import { libros } from "../ejercicio-4/datos.ts";
import "./buscador.css";

export default function Buscador() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [vistaCompacta, setVistaCompacta] = useState(false);

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  return (
    <div className="buscador">

      <input
        type="text"
        value={textoBusqueda}
        onChange={(e) => setTextoBusqueda(e.target.value)}
        placeholder="Buscar libro..."
      />

      <button onClick={() => setVistaCompacta(!vistaCompacta)}>
        Cambiar vista
      </button>

      {vistaCompacta ? (
        <ul className="lista-compacta">
          {librosFiltrados.map((libro) => (
            <li key={libro.id}>
              {libro.titulo}
            </li>
          ))}
        </ul>
      ) : (
        <div className="lista-tarjetas">
          {librosFiltrados.map((libro) => (
            <div className="tarjeta-libro" key={libro.id}>
              <h2>{libro.titulo}</h2>
              <p>{libro.descripcion}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}