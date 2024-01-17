interface Option {
    text: string;
    isCorrect?: boolean;
}

interface Question {
    text: string;
    options: Option[];
    // correctOption: number;
}

export interface QuizInterface {
    createdBy:string;
    category: string;
    questions: Question[];
}
