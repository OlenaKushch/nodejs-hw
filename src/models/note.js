import { Schema, model } from "mongoose";
import { TAGS } from "../constants/tags.js";


const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            default: '',
            trim: true,
        },
        tag: {
            type: String,
            enum: TAGS,
            default: 'Todo',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
        
    }
);

noteSchema.index(
    { title: 'text', content: 'text' },
    {
        name: 'NoteTextIndex',
        weights: { title: 10, content: 5 },
        default_language: 'english',

    }
);

const Note = model('note', noteSchema);
export default Note;