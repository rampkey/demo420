const questions = [
  {
    question: "¿Es la web oficial de Packman?",
    answer:
      "No. Es un estudio visual independiente para explorar una nueva dirección de diseño. No existe afiliación comercial con la marca.",
  },
  {
    question: "¿Puedo comprar o contactar con un vendedor aquí?",
    answer:
      "No. Esta demo no tiene precios, compras, carrito, pagos ni conexiones con vendedores. El archivo presenta referencias gráficas para estudiar la identidad.",
  },
  {
    question: "¿Qué se conserva de la identidad original?",
    answer:
      "El logotipo, el personaje y las fotografías autorizadas del packaging. Sus colores inspiran una nueva paleta, sobre una base carbón y con una tipografía editorial más contundente.",
  },
  {
    question: "¿Qué significa Chromatic Underground?",
    answer:
      "Una dirección visual donde el color se convierte en firma: reflejos cromáticos, vidrio oscuro y ritmo editorial. Una experiencia refinada con el carácter urbano de la marca.",
  },
];
export function ChromaticFaq() {
  return (
    <div className="faq-list">
      {questions.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
