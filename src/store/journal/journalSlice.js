import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'abc123',
        //     title: '',
        //     body: '',
        //     imageUrls: []
        // }
    },
    reducers: {
        cleanNotes: (state) => {
            state.notes = [];
        },
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, { payload }) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if (note.id !== payload.id) return note

                return payload
            })

            state.messageSaved = `${ payload.title }, has been succesfully updated`
        },
        deleteNoteById: (state, action) => {

        }
    },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, cleanNotes } = journalSlice.actions;