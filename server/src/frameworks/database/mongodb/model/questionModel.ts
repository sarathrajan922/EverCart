import { Schema,model } from "mongoose";
import Option from "./optionModel";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: [Option.schema],

});

const Question = model('Question', questionSchema);
export default Question;