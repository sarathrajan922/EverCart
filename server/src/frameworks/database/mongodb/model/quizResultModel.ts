import { model,Schema } from 'mongoose';

const resultItemSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    correctOption: {
      type: String,
      required: true
    },
    selectedOption: {
      type: String,
      required: true
    }
  });

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
    Result : [resultItemSchema],
    TotalScore: {
        type:String,
        required: [true,'please provide total score']
    }
});

const QuizResult = model('quizResult',quizResultSchema,'quizResult')
export default QuizResult;