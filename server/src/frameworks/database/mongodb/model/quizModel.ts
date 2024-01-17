import { Schema,model } from "mongoose";
import Question from "./questionModel";

const quizSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    questions: [Question.schema]
});


const Quiz = model('Quiz', quizSchema,'quiz');
export default Quiz;