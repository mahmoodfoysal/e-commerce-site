import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initilizationAuthentication from "../firebase/firebase.init";
import { useState } from "react";

// firebase initilization auth 
initilizationAuthentication();

// auth 
const auth = getAuth();

const useFirebase = () => {
    const [users, setUsers] = useState([]);
    
    const createUser = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            updateProfile(auth.currentUser, {
                displayName: displayName
              })
            setUsers(user);
          })
          .catch((error) => {
            const errorMessage = error.message;

          });
    }
    return {
        users,
        createUser
    }
}

export default useFirebase;