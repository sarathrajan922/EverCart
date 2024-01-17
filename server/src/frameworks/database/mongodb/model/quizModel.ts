import { Schema,model } from "mongoose";
import Question from "./questionModel";

const quizSchema = new Schema({
    createdBy:{
    type:String,
    required:[true, 'please provide a userId']
    },
    category: {
        type: String,
        required: [true,'please provide a category name']
    },
    questions: [Question.schema]
});


const Quiz = model('Quiz', quizSchema,'quiz');
export default Quiz;