import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from '../const/firebase-config';
import history from '../const/history';

class AuthorizedUser extends React.Component {
    state = { name: '' };
    componentDidMount() {
        if (!localStorage.getItem("auth-token")) return history.push('/');
        this.auth();
    }
    auth = async () => {
        try {
            firebase.initializeApp(firebaseConfig);
            const token = localStorage.getItem("auth-token");
            if (token) {
                const credential = firebase.auth.GithubAuthProvider.credential(token);
                const { user } = await firebase.auth().signInWithCredential(credential);
            }
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <></>
        )
    }
}

export default AuthorizedUser;