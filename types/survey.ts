interface QuestionBase {
  label: string;
  type: "select" | "input";
  id: number;
  graphicType?: string;
  answer: string;
}

interface SelectQuestion extends QuestionBase {
  type: "select";
}

interface InputQuestion extends QuestionBase {
  type: "input";
  format: "number" | "string";
}

export type Question = SelectQuestion | InputQuestion;

export type QuestionForm = {
    [key: string]: Question
}
