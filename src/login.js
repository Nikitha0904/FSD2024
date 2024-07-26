import React, { useContext, useEffect, useRef, useState} from 'react';
import { GlobalContext } from './App';



function Login() {
    const colRef = useRef(null);
    const passRef = useRef(null);
    const [message, setMessage] = useState("");
    const {setGlobalIsLogin ,globalUserObj} = useContext(GlobalContext);
   
    useEffect(() => {
        colRef.current.focus();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if ( globalUserObj.colId === colRef.current.value && globalUserObj.pass === passRef.current.value) {
            setMessage("Correct");
            setGlobalIsLogin(true);
        } else {
            setMessage("Incorrect");
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
                        <p className='text-center'>{message }</p>
                       
                    </form>
                </div>
                        
                    
                
                

            </div>
        </div>
    );
}

export default Login;
