// src/components/QuestionCard.jsx
export default function QuestionCard({ question, index }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Q {index + 1}. {question.question}</h3>
      <ul className="space-y-1 pl-4">
        {question.options.map((opt, i) => (
          <li key={i}>
            <label className="cursor-pointer">
              <input type="radio" name={`q${index}`} className="mr-2" />
              {opt}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
