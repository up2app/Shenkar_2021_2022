
import { useState, createContext } from "react";

//create the context object
export const HobbiesContext = createContext();

//create the context component
export default function HobbiesContextProvider(props) {

    const [hobbies, SetHobbies] = useState([{ id: 1, name: 'test' }]);

    const AddHobby = (hobby) => {
        SetHobbies((currentHobbies) => [hobby, ...currentHobbies]);
    }

    const RemoveHobby = (id) => {
        SetHobbies(hobbies.filter((hobby) => hobby.id !== id));
    }

    //return the provider -> the element that gave access to the data and functions above
    return (
        <HobbiesContext.Provider value={{ hobbies, AddHobby, RemoveHobby }}>
            {/* render all the components that uses this provider */}
            {props.children}
        </HobbiesContext.Provider>
    )

}