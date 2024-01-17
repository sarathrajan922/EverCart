interface Option {
    text: string;
    isChecked?: boolean;
}

interface Question {
    text: string;
    options: Option[];
    correctOption: number;
}

export interface QuizInterface {
    category: string;
    questions: Question[];
}
