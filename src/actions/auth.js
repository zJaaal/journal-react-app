import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { setError, setFinishLoading } from "./ui";
import { logoutNote } from "./notes";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => {
        dispatch(setFinishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setFinishLoading());
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .finally(() => {
        dispatch(setFinishLoading());
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(logoutNote());
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout,
});
