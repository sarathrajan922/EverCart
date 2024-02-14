interface Option {
    text: string;
    isCorrect: boolean;
  }
  
 export interface QuestionType {
    question: string;
    options: Option[];
  }