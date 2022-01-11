import { useState, useContext } from "react";
import { UserContext } from "../../Context/UsersContext";

export default function Register() {

    //using the context providers
    const { AddUser } = useContext(UserContext);

    //states to store  
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [pic, SetPic] = useState('');
    const [id, SetId] = useState('');

    const RegisterUser = (event) => {
        event.preventDefault();
        let user = {firstName, lastName, email, password, pic, id};
        let res = AddUser(user);
        if(!res) 
            alert('email already exists');
        else    
            alert('register success');
    }

    return (
        <div>
            <form onSubmit={RegisterUser}>
                <fieldset>
                    <legend>Register</legend>
                    <div>
                        <label forhtml="id">ID:
                            <input id="id" type="text" maxLength={9} minLength={9} required={true}
                                value={id} onChange={(event) => SetId(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label forhtml="firstName">First Name
                            <input id="firstName" type="text" required={true}
                                value={firstName} onChange={(event) => SetFirstName(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label forhtml="lastName">Last Name:
                            <input id="lastName" type="text" required={true}
                                value={lastName} onChange={(event) => SetLastName(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label forhtml="email">Email:
                            <input id="email" type="email" required={true}
                                value={email} onChange={(event) => SetEmail(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label forhtml="password">Password:
                            <input id="password" type="password" required={true}
                                value={password} onChange={(event) => SetPassword(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label forhtml="pic">Pic:
                            <input id="pic" type="text" required={true}
                                value={pic} onChange={(event) => SetPic(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </fieldset>
            </form>
        </div>
    )

}
