import { registerUserWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"
import { cleanNotes } from "../journal/journalSlice"
import { toast } from 'react-toastify';

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await singInWithGoogle();

        if (!result.ok) {
            toast('Login with Google canceled', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });

            return dispatch(logout(result.errorMessage));
        }

        dispatch(login(result))
    }
}

export const startLoginUserWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(checkingAuthentication());

        const { uid, photoURL, errorMessage, ok, displayName } = await loginWithEmailPassword({ email, password });

        if (!ok) {
            toast('Email or Password incorrect...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return dispatch(logout(errorMessage));
        }

        dispatch(login({ uid, photoURL, displayName, email }))
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })

        if (!ok) {
            toast(errorMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });

            return dispatch(logout(errorMessage));
        }

        dispatch(login({ uid, photoURL, displayName, email }));
    }
}


export const startLogOut = () => {
    return async (dispatch) => {
        try {
            await logoutFirebase();
            dispatch(cleanNotes());
            dispatch(logout())
        } catch (error) {
            console.log(error);
        }
    }
}

