import { Schema,model } from "mongoose";
import Option from "./optionModel";

const questionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    options: [Option.schema],
    correctOption: {
        type: Number, // Index of the correct option in the options array
        required: true
    }
});

const Question = model('Question', questionSchema);
export default Question;