import { model,Schema } from 'mongoose';

const quizResultSchema = new Schema({
    quizId:{
        type: String,
        required:[true,'please provide quizId']
    },
    userId:{
        type: String,
        required:[true,'please provide userId']
    },
    date:{
        type:String,
        required:[true,'please provide date field']
    },
    result : [{}],
    total: {
        type:String,
        required: [true,'please provide total score']
    }
});

const QuizResult = model('quizResult',quizResultSchema,'quizResult')
export default QuizResult;