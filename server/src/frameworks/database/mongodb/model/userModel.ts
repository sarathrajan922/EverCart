import { Schema,model } from "mongoose";

const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true,'please provide a first name']
    },
    lastName:{
        type:String,
        required:[true,'please provide a last name']
    },
    email:{
        type: String,
        required:[true,'please provide a valid email address'],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'please provide a valid mobile number'],
    },
    password:{
        type:String,
        required: [true,'please provide a password']
    },
    premium:{
        type:Boolean,
        default:false
    }
    
})

const User = model('User',userSchema,'users')
export default User;