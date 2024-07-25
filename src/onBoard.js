import React, { useState } from 'react';
import Login from './login';
import Register from './register';

function Thirteen() {
    const [counter, setCounter] = useState(true);

    const handleLogin = () => {
        setCounter(true);
    };

    const handleRegister = () => {
        setCounter(false);
    };

    return (
        <div>
            {counter ? (
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
