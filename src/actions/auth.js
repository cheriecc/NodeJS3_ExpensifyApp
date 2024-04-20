import { auth, googleProvider } from '../firebase/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';


export const logIn = callBack => {
    return async () => {
        await signInWithPopup(auth, googleProvider);
        callBack()
    }
}

export const logOut = callBack => {
    return () => {
        signOut(auth);
        callBack()
    }
}