import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { logout, login } from '../store/auth/authSlice'

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth )
    const dispatch = useDispatch();
 
   useEffect(() => {
     
     onAuthStateChanged( FirebaseAuth, async( user ) => {
       if( !user ) return dispatch(logout());
 
       const {email, displayName, uid, photoURL} = user;
       dispatch( login({email, displayName, uid, photoURL}) );
     } )
     
   }, [])
   
   return {
    status
   }
 
}