import './index.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {login} from "./utils";


const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    console.log({username});

    const handleLogin = async(event) =>{
        event.preventDefault();
        const result = await login({username, password});
        navigate('./users')
        console.log({result})
    };

    return(
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input placeholder="Enter username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
                <br/>
                <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
                <br/>
                <Link to="/users"><button type='submit'className='login-button'>Login</button></Link>
                {/* <button type="submit">Login</button> */}
            </form>
        </div>
    )
}

export default Login