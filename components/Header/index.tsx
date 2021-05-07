import firebase from "firebase";
import { useEffect, useMemo, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const Header = () => {
  const [user, setUser] = useState<null | firebase.User>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setUser(user));
  }, []);

  const uiConfig = useMemo(
    () => ({
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    }),
    []
  );

  return (
    <header className="w-full h-20 flex bg-gray-800 text-gray-200  px-7 items-center justify-between">
      <h1 className="font-bold text-2xl">GitHub Trending for Learning</h1>
      {!user ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <div className="">{user.displayName}</div>
      )}
    </header>
  );
};
