import "./ejercicio2.css";

interface TarjetaUsuarioProps {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

export default function TarjetaUsuario({ nombre, descripcion, tecnologias }: TarjetaUsuarioProps) {
  return (
    <div className="tarjeta-usuario">
      <h1>{nombre}</h1>

      <p>{descripcion}</p>


      <div className="Tecnologias">
        <h3>Tecnologías que estoy aprendiendo:</h3>
        <ul>
          {tecnologias.map(x => <li key={x}>{x}</li>)}
        </ul>
      </div>
    </div>
  );
}
