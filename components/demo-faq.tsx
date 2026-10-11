const questions = [
  {
    question: "¿Es la web oficial de Packman?",
    answer:
      "No. Es un estudio visual independiente para comparar una reconstrucción de la portada pública con una propuesta de diseño. No existe afiliación comercial con la marca.",
  },
  {
    question: "¿Puedo comprar o contactar con un vendedor aquí?",
    answer:
      "No. La demo no tiene compras, precios, carrito, pagos ni conexiones con vendedores. La galería presenta referencias gráficas para estudiar el diseño.",
  },
  {
    question: "¿Qué se ha conservado de la referencia?",
    answer:
      "La estructura de la portada, el azul grisáceo, los acentos menta y crema, y las familias Oswald y Nunito. Los recursos de la marca solo se muestran cuando su reutilización está autorizada.",
  },
  {
    question: "¿Qué cambia en la propuesta moderna?",
    answer:
      "La jerarquía tipográfica, el contraste, la distribución de los espacios, la navegación móvil y la organización de los bloques. El contenido se centra en el estudio visual de la identidad.",
  },
];
export function DemoFaq() {
  return (
    <div className="faq-list">
      {questions.map(({ question, answer }) => (
        <details key={question}>
          <summary>
            {question}
            <span aria-hidden="true" className="faq-plus">
              +
            </span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
