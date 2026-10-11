import type { Question } from "../_data/content";
import { brandQuestions } from "../_data/content";
export function ChromaticFaq({
  questions = brandQuestions.slice(0, 3),
}: {
  questions?: Question[];
}) {
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
