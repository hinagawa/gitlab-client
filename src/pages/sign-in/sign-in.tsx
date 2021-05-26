import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import "./sign-in.css";

import { firebaseConfig } from "../../const/firebase-config";
import history from "../../const/history";

class SignIn extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("auth-token")) history.push("/");
  }

  signInHandler = async () => {
    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const credential = result.credential as firebase.auth.OAuthCredential;
          const token = credential.accessToken;
          const additionalUserInfo = result.additionalUserInfo;
          if (additionalUserInfo) {
            const username = additionalUserInfo.username;
            if (token && username) {
              localStorage.setItem("auth-token", token);
              localStorage.setItem("username", username);
            }
            if (localStorage.getItem("auth-token")) {
              history.push("/");
              window.location.reload();
            }
            else {
              history.push("/sign-in");
              window.location.reload();
            }
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="sign__form">
        <h1 className="sign__text">GitLab Client</h1>
        <button
          onClick={this.signInHandler}
          className="sign__button"
        >
          Sign in with Github
          </button>
      </div>
    );
  }
}

export default SignIn;