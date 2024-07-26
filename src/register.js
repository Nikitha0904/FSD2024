import React, { useContext, useState } from 'react';
import { GlobalContext } from './App';
import { useNavigate } from 'react-router-dom';


function Register() {
    


    const { setGlobalUserObj,  setGlobalIsRegister} = useContext(GlobalContext);
    const [colId, setColId] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const user = ({
            colId,
            pass,
            email,
            branch,
            year,
            gender
        });
        setGlobalUserObj(user);
        console.log(user);
        setGlobalIsRegister(true);
        navigate('/');

    }



    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card" style={{ width: '28rem', padding: '10px 10px' }}>
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <p className="card-text mb-4">Provide your details to register</p>

                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label">College Id</label>
                            <input type="text" className="form-control" placeholder="College Id" onChange={(event) => { setColId(event.target.value) }} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPass(event.target.value)}}  required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" onChange={(event) => { setEmail(event.target.value) }}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Branch</label>
                            <select className="form-select" aria-label="Default select example" onChange={(event) => { setBranch(event.target.value) }} defaultValue="" required>     
                                <option value="" disabled>Select a branch</option>     
                                <option value="CSE">CSE</option>     
                                <option value="IT">IT</option>     
                                <option value="ECE">ECE</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year</label>
                            <select className="form-select" aria-label="Default select example" onChange={(event) => { setYear(event.target.value) }} defaultValue=""  required>     
                                <option value="" disabled>Select a year</option>     
                                <option value="1">1</option>     
                                <option value="2">2</option>     
                                <option value="3">3</option>     
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline"   > 
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={(event) => { setGender(event.target.value) }}  required/> 
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline" > 
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={(event) => { setGender(event.target.value) }}  required/> 
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="form-check form-check-inline" > 
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other" onChange={(event) => { setGender(event.target.value) }}  required/> 
                                <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                                </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-md float-end">Register</button><br /><br /> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
