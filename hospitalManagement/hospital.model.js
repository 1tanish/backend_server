import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    pinCode:{
        type: String,
        required: true
    },
    specializedIn:[{
        type:String,
    }],
    NoOfBeds:{
        type: Number,
        required: true,
    }
}, {timestamps: true});

export const hospital = mongoose.model('hospital', hospitalSchema);