interface EncabezadoProps {
  titulo: string;
  subtitulo: string;
}

export function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  );
}

interface PiePaginaProps {
  texto: string;
}

export function PiePagina({ texto }: PiePaginaProps) {
  return (
    <footer className="piePagina">
      <p>{texto}</p>
    </footer>
  );
}