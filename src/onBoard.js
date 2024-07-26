import React, { useContext} from 'react';
import Login from './login';
import Register from './register';
import { GlobalContext } from './App';


function Thirteen() {
    const {globalIsRegiter, setGlobalIsRegister} = useContext(GlobalContext);

    const handleLogin = () => {
        setGlobalIsRegister(true);
    };

    const handleRegister = () => {
        setGlobalIsRegister(false);
    };

    return (
        <div>
            {globalIsRegiter ? (
                <>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className="nav-link active" onClick={handleLogin}>
                                Login
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link "  onClick={handleRegister}>
                                Register
                            </button>
                        </li>
                    </ul>
                    <div>
                        <Login />
                    </div>
                </>
            ) : (
                <>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className="nav-link" onClick={handleLogin}>
                                Login
                            </button>
                        </li>
                        <li className="nav-item">
                            <button href="#register" className="nav-link active" onClick={handleRegister}>
                                Register
                            </button>
                        </li>
                    </ul>
                    <Register/>
                </>
            )}
        </div>
    );
}

export default Thirteen;
