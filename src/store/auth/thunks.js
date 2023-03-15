import { registerUserWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"
import { cleanNotes } from "../journal/journalSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )

        const result = await singInWithGoogle();

        if( !result.ok ) return dispatch( logout(result.errorMessage) );

        dispatch(login(result))
    }
}

export const startLoginUserWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {

        dispatch( checkingAuthentication() );

        const {uid, photoURL, errorMessage, ok, displayName} = await loginWithEmailPassword({email, password});

        if( !ok ) return dispatch( logout({ errorMessage }) )

        dispatch( login({uid, photoURL, displayName, email}) )
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword( {email, password, displayName} )

        if( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login({uid, photoURL, displayName, email}) );
    }
}


export const startLogOut = () => {
    return async( dispatch ) => {
       try {
        await logoutFirebase();
        dispatch(cleanNotes());
        dispatch(logout())
       } catch (error) {
        console.log(error);
       }
    }
}

