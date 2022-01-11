import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Context/UsersContext";

export default function Edit() {

    //using the context providers
    const { EditUser, currentUser } = useContext(UserContext);

    //states to store  
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [pic, SetPic] = useState('');
    const [id, SetId] = useState('');

    const UpdateUser = (event) => {
        event.preventDefault();
        let user = {firstName, lastName, email, password, pic, id};
        EditUser(user)
    }

    //this useEffect will update the form details according to the logged in user
    useEffect(() => {
        if (currentUser) {

            SetFirstName(currentUser.firstName);
            SetLastName(currentUser.lastName);
            SetEmail(currentUser.email);
            SetPassword(currentUser.password);
            SetId(currentUser.id);
            SetPic(currentUser.pic);
        }
    }, [currentUser]);

    return (
        <>
            {
                !currentUser ?
                    <div>
                        <p>You need to login first</p>
                    </div>
                    :
                    <div>
                        <form onSubmit={UpdateUser}>
                            <fieldset>
                                <legend>Edit</legend>
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
                                        <input id="email" type="email" readOnly={true} value={email} />
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
                                    <input type="submit" value="Update Profile" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
            }
        </>

    )

}
