import mongoose from "mongoose";


const {Schema , model} = mongoose;

const PaymentSchema = new Schema({
    name: String , required: true,
    to_user: String , required: true,
    oid: String , required: true,
    message: String , required: true,
    amount: Number , required: true,
    createdAt: Date , default: Date.now,
    updatedAt: Date , default: Date.now,
    done: Boolean , default: false,
})

export default mongoose.models.payment || model("payment"  , PaymentSchema);