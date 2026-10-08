import "../ejercicio-1/ejercicio1.css";
import TarjetaUsuario from "../ejercicio-2/Ejercicio";
import "../ejercicio-2/ejercicio2.css";
import { Encabezado, PiePagina } from "./Componentes";

export default function PaginaPerfil() {
  const nombre = "Jane Doe";
  const descripcion = "Soy estudiante interesada en el desarrollo web y en aprender nuevas herramientas de programación.";
  const tecnologias = ["JavaScript", "HTML", "CSS"];
  const piePaginaTexto = "Programación Web - 2026";
  const titulo = "Ejercicios";
  const progWeb = "Programación Web";

  return (
    <div style={{ justifyItems: "center" }}>
      <Encabezado
        titulo={titulo}
        subtitulo={progWeb}
      />

      <TarjetaUsuario
        nombre={nombre}
        descripcion={descripcion}
        tecnologias={tecnologias}
      />

      <PiePagina texto={piePaginaTexto} />
    </div>
  );
}