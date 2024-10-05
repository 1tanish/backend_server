import mongoose from 'mongoose';

const patSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'hospital'
    }
}, {timestamps: true});

export const patient = mongoose.model('patient', patSchema);