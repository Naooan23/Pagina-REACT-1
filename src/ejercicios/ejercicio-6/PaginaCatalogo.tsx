import { useState } from "react";
import { Encabezado, PiePagina } from "../ejercicio-3/Componentes.tsx";
import { libros } from "../ejercicio-4/datos.ts";
import ListaTarjetas from "./ListaTarjetas.tsx";
import "./styles.css";

export default function PaginaCatalogo() {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [vistaCompacta, setVistaCompacta] = useState(false);
  const [orden, setOrden] = useState("original");

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  const librosOrdenados = [...librosFiltrados];

  if (orden === "ascendente") {
    librosOrdenados.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
  }

  if (orden === "descendente") {
    librosOrdenados.sort((a, b) =>
      b.titulo.localeCompare(a.titulo)
    );
  }

  function seleccionarLibro(libro: typeof libros[number]) {
    console.log("Libro seleccionado:", libro.titulo);
  }

  return (
    <>
      <Encabezado
        titulo="Catálogo de libros"
        subtitulo="Explora nuestros libros disponibles"
      />

      <main className="catalogo">
        <input
          type="text"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          placeholder="Buscar libro..."
        />

        <button onClick={() => setVistaCompacta(!vistaCompacta)}>
          Cambiar vista
        </button>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="original">Orden original</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>

        {vistaCompacta ? (
          <ul className="lista-compacta">
            {librosOrdenados.map((libro) => (
              <li
                key={libro.id}
                onClick={() => seleccionarLibro(libro)}
              >
                {libro.titulo}
              </li>
            ))}
          </ul>
        ) : (
          <ListaTarjetas
            libros={librosOrdenados}
            onSeleccionar={seleccionarLibro}
          />
        )}
      </main>

      <PiePagina texto="Programación Web - 2026" />
    </>
  );
}