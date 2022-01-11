import { useState, useContext } from 'react';
import { UserContext } from '../../Context/UsersContext';

export default function Login() {

    const { FindUser } = useContext(UserContext);

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const TryToLogin = (event) => {
        event.preventDefault();
        FindUser(email, password);
    }

    return (
        <div>
            <form onSubmit={TryToLogin}>
                <fieldset>
                    <legend>Login</legend>
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
                        <input type="submit" value="Login" />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
