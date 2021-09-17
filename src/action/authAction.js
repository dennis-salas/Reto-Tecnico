import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from './actionError'

export const login = (uid, displayName) => ({
    type: types.Login,
    payload: {
        uid,
        displayName
    }
});

export const startLogin = (email, pasword) => {
    return (dispatch) => {
        dispatch(login(123, "dennis"))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(startLoading)
                dispatch(
                    login(user.uid, user.displayName)
                )
                console.log(user);
                dispatch(finishLoading)
            })
    }
}

export const startRegister = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}
