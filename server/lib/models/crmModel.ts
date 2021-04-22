import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
   createdAt: {
        type: Date,
        default: Date.now
    }
});