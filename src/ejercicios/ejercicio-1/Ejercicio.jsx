import "./ejercicio1.css";

export default function TarjetaPersonal() {
  return (
    <div className="tarjeta-personal">
      <h1>Naomi Marquez</h1>

      <p>
        Soy estudiante de Ingeniería en Sistemas Computacionales y actualmente también trabajo. Me gusta leer, aprender cosas nuevas y seguir creciendo tanto a nivel personal como profesional.
      </p>


      <div className="Tecnologias">
        <h3>Tecnologías que estoy aprendiendo:</h3>
        <ul>
          <li>Ubuntu Linux</li>
          <li>Docker</li>
          <li>React y TypeScript</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
}
