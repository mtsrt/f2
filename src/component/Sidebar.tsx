import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SidebarData } from "./SidebarData";

const Sidebar: React.FC = () => {
  const [user] = useAuthState(auth);

  const SignInButton: React.FC = () => {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    };

    return (
      <button onClick={signInWithGoogle}>
        <p>Googleでサインイン</p>
      </button>
    );
  };

  return (
    <div>
      {user ? (
        <div
          style={{
            height: "100vh",
            width: "250px",
            backgroundColor: "#2d445d",
          }}
        >
          <h1 className="Name">Test</h1>
          <ul className="SidebarList">
            {SidebarData.map((value, key) => {
              return (
                <li
                  key={key}
                  id={window.location.pathname === value.link ? "active" : ""}
                  className="row"
                  onClick={() => {
                    window.location.pathname = value.link;
                  }}
                >
                  <div id="icon">{value.icon}</div>
                  <div id="title">{value.title}</div>
                </li>
              );
            })}
          </ul>
          <UserInfo />
          <SignOutButton />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()} className="signout">
      <p>SignOut</p>
    </button>
  );
}

function UserInfo() {
  return (
    <div className="userInfo">
      <p>{auth.currentUser?.displayName}</p>
    </div>
  );
}

export default Sidebar;
