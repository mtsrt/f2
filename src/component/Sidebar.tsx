import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SidebarData } from './SidebarData';

function Sidebar() {
    const [user] = useAuthState(auth);
    return (
        <div>{
            user ? (
            <div className="Sidebar">
                <h1 className="Name">
                    Test
                </h1>
                <ul className="SidebarList">
                    {SidebarData.map((value, key) => {
                        return (
                            <li key={key} 
                            id={window.location.pathname === value.link ? "active" : ""}
                            className="row" 
                            onClick={() => {
                                window.location.pathname = value.link;
                            }}>
                                <div id="title">{value.title}</div>
                            </li>
                        )
                    })}
                </ul>
                <UserInfo />
                <SignOutButton />
            </div>
            ) : (
                <SignInButton />
            )
        }
        </div>
    );
}

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    )
}

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
    )
}

export default Sidebar;