const { Schema, model } = require("mongoose");


const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            typr: String,
            default: '',
            trim: true,
        },
        tag: {
            type: String,
            enum: [
                'Work',
                'Personal',
                'Meeting',
                'Shopping',
                'Ideas',
                'Travel',
                'Finance',
                'Health',
                'Important',
                'Todo',
            ],
            default: 'Todo',
        },
    },
    {
        timestamps: true,
        versionKey: false.valueOf,
    }
);

const Note = model('note', noteSchema);
module.exports = Note;