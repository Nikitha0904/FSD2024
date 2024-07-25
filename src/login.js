import React, { useEffect, useRef, useState } from 'react';

function Login() {
    const colRef = useRef(null);
    const passRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        colRef.current.focus();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (colRef.current.value === passRef.current.value) {
            setErrorMessage("Success");
        } else {
            setErrorMessage("Incorrect Credentials");
        }
    };

    return (
        
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card" style={{ width: '25rem', padding: '10px 10px'}}>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <p className="card-text mb-4">Provide your details to login</p>
                    
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label className="form-label " >College Id</label>
                            <input type="text" className="form-control"  placeholder="College Id" ref={colRef} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"  placeholder="Password" ref={passRef} />
                        </div>
                        <button type="submit" className="btn btn-dark btn-md float-end">Login</button><br></br><br></br>
                        <p className='text-center'>{errorMessage}</p>
                    </form>
                    
                </div>
                        
                    
                
                

            </div>
        </div>
    );
}

export default Login;
