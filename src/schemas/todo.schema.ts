import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: {
        required: false,
        type: String
    },
}, { versionKey: false });