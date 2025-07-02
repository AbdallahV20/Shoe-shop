import auth from '@react-native-firebase/auth';
import {store} from '../store/store';
import {resetUser, updateToken} from '../store/slices/user.slice';

export const signUp = async (
  fullName: string,
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'Email Already in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Invalid Email Address'};
    } else {
      return {error: 'Something wen wrong'};
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      success: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error: any) {
    let message = 'Login failed. Please try again.';

    switch (error.code) {
      case 'auth/user-not-found':
        message = 'No account found with this email.';
        break;
      case 'auth/wrong-password':
        message = 'Incorrect password.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address.';
        break;
      case 'auth/too-many-requests':
        message = 'Too many failed attempts. Try again later.';
        break;
    }
    return {success: false, error: message};
  }
};

export const logOut = async () => {
  try {
    store.dispatch(resetUser());
    await auth().signOut();
  } catch (error) {
    console.error('❌ Logout failed:', error);
  }
};

export const checkToken = async () => {
  try {
    const res = await auth().currentUser?.getIdToken(true); //force to refresh the token
    store.dispatch(updateToken(res));
    return res;
  } catch (err) {
    return err;
  }
};
