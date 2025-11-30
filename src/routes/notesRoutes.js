import {Router} from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController';

const router = Router();

// router.get('/notes', (req, res) => {
//     res.status(200).json({ message: "Retrieved all notes", });
// });

// router.get('/notes/:noteId', (req, res) => {
//     const { noteId } = req.params;
//     res.status(200).json({
//         "message": `Retrieved note with ID: ${noteId}`
//     });
// });
router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('./notes', createNote);
router.delete('./notes/:noteId', deleteNote);
router.patch('./notes/:noteId', updateNote)

export default router;
