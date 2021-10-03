import React, {useContext} from 'react'
import UserContext from './userContext';

export default function LogIn(props) {
    const userContext = useContext(UserContext);
    return (
        <div>
            <button onClick={() => userContext.onLoggingIn("username")}>Login</button>
        </div>
    )
}

