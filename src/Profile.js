import { useContext, useState } from "react";
import { GlobalContext} from "./App";
import Navigation from "./Navigation";

function Profile() {
    const { globalUserObj } = useContext(GlobalContext);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Navigation />
            <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
                <div className="card" style={{ width: '25rem', padding: '10px 10px' }}>
                    <h1 className="mb-3">Profile</h1>
                    <h6 style={{ color: 'GrayText', fontWeight: 'normal' }} className="mb-4">Your details</h6>
                    <div className="mb-3" style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>College Id</h6>
                        <h6>{globalUserObj.colId}</h6>
                    </div>
                    <div className="mb-3" style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>Password</h6>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
                          <h6 style={{ margin: 0 }}>{showPassword ? globalUserObj.pass : '•'}</h6>
                          <span 
                              style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline', lineHeight: '1.5' }} 
                              onClick={togglePasswordVisibility}
                          >
                              {showPassword ? "Hide" : "Show"}
                          </span>
                      </div>

                        
                    </div>
                    <div className="mb-3" style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>Email address</h6>
                        <h6>{globalUserObj.email}</h6>
                    </div>
                    <div className="mb-3" style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>Branch</h6>
                        <h6>{globalUserObj.branch}</h6>
                    </div>
                    <div className="mb-3" style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>Year</h6>
                        <h6>{globalUserObj.year}</h6>
                    </div>
                    <div style={{ lineHeight: '0.5' }}>
                        <h6 style={{ color: 'GrayText', fontWeight: 'normal' }}>Gender</h6>
                        <h6>{globalUserObj.gender}</h6>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Profile;
