import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { checkingCredentials } from "../store/auth/authSlice";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, uid, photoURL } = result.user;
        console.log('entre');
        return {
            ok: true,
            // userInfo
            displayName, email, uid, photoURL
        }

    } catch (error) {
        return{
            ok: false,
            errorCode : error.code,
            errorMessage : error.message,
        }
    }

}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName} = response.user
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName}) => {

    try {
        
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = response.user;

        // TODO actualizar displayName in Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL })

        return{
            ok: true,
            uid, email, photoURL, displayName
        }


    } catch (error) {
        return{
            ok: false,
            errorMessage : error.message,
        }
    }
}



export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}




