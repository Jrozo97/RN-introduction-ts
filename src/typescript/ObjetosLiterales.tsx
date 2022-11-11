// class sirven para hacer instancia
// interface sirve para expandir un type
// el objetivo de la interface es ayudarme a que typescript sepa como lucen mis objetos

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Jimmy",
    edad: 25,
    direccion: {
      pais: "Colombia",
      casaNo: 453,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>
            { JSON.stringify( persona, null, 2 ) }
        </pre>
      </code>
    </>
  );
};
