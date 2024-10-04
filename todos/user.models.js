import mongoose from 'mongoose';

const subTodo = mongoose.Schema({
        username: {
            type: String,
            required: true,
            isActive: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
)

export const User = mongoose.Schema("subTodo", subTodo);
