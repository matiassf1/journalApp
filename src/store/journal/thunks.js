import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";

import { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, setPhotoToActiveNote, deleteNoteById } from "./journalSlice"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResponse = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        //!dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${note.id}` )
        await setDoc(docRef, noteToFirestore, { merge: true });

        dispatch(updateNote(note))
    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async(dispatch, getState) => {
        dispatch(setSaving());

       const fileUploadPromises = [];

       for (const file of files) {
        fileUploadPromises.push(fileUpload(file));
       }

       const photosUrls = await Promise.all(fileUploadPromises);
       
       dispatch(setPhotoToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        dispatch(setSaving());
        const { active: note } = getState().journal
        const { uid } = getState().auth


        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        const response = await deleteDoc(docRef);

        dispatch(deleteNoteById(note));

    }
}
