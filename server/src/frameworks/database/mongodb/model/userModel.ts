import { Schema,model } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        required:[true,'please provide a valid email address'],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'please provide a valid mobile number'],
        unique: true
    },
    password:{
        type:String,
        required: [true,'please provide a password']
    }
})

const User = model('User',userSchema,'users')
export default User;