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
  const SignOutButton: React.FC = () => {
    return (
      <button
        onClick={() => auth.signOut()}
        style={{
          borderRadius: "10px",
          width: "200px",
          height: "30px",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        <p>SignOut</p>
      </button>
    );
  };
  const UserInfo: React.FC = () => {
    return (
      <div className="userInfo" style={{ color: "white", textAlign: "center" }}>
        <p>{auth.currentUser?.displayName}</p>
      </div>
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
          <h1 style={{ textAlign: "center", color: "white", height: "10vh" }}>
            Test
          </h1>
          <ul
            className="SidebarList"
            style={{ height: "auto", padding: "0", width: "100%" }}
          >
            {SidebarData.map((value, key) => {
              return (
                <li
                  key={key}
                  id={window.location.pathname === value.link ? "active" : ""}
                  style={{
                    width: "100%",
                    height: "60px",
                    display: "flex",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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

export default Sidebar;
