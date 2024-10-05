import mongoose from 'mongoose';

const hospWork= new mongoose.Schema({
    hospitalName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    workingHours:{
        type: Number,
        required: true,
    }
},{timestamps:true})

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
    },
    salary:{
        type: Number,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experienceInYears:{
        type: Number,
        required: true,
        default:0
    },
    worksIn:[hospWork]

},{timestamps:true});

export const doc =mongoose.model('doc', docSchema);