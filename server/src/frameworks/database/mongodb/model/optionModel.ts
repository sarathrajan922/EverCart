import {Schema,model} from 'mongoose'

const optionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        default: false
    }
});

const Option = model('Option', optionSchema);
export default Option;