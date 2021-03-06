
import { useState, createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider(props) {

    //create the users empty array for the system + create a function that can change the users array 
    const [users, SetUsers] = useState([]);
    const [currentUser, SetCurrentUser] = useState(null);

    const AddUser = (newUser) => {
        //check if email already exists in the array
        if (users.some(user => user.email === newUser.email))
            return false;
        SetUsers((currentUsers) => [...currentUsers, newUser]);
        // SetUsers([...users, user]);
        return true;
    }

    const FindUser = (email, password) => {
        //search and save the user with the same credentials
        let u =  users.find(user => user.email === email && user.password === password);
        SetCurrentUser(u);
    }

    ////remove the user and add him at the last index
    // const EditUser = (userToUpdate) => {
    //     SetUsers(users.filter(user => user.email !== userToUpdate.email));
    //     SetUsers((currentUsers) => [...currentUsers, userToUpdate]);
    // }

    //find the user  and change his details at the same index
    const EditUser = (userToUpdate) => {
        let allUsers = users.map(user => {
            if (user.email === userToUpdate.email)
                user = userToUpdate;
            return user;
        })

        SetUsers(allUsers);
        SetCurrentUser(userToUpdate);
    }

    return (
        <UserContext.Provider value={{ users, AddUser, FindUser, EditUser, currentUser }}>
            {props.children}
        </UserContext.Provider>
    )

}
