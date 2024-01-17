import {Schema,model} from 'mongoose'

const optionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        default: false
    }
});

const Option = model('Option', optionSchema);
export default Option;