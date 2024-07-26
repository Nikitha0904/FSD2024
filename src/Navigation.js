import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { GlobalContext } from "./App";


function Navigation() {
    const navigate = useNavigate();

    const {globalCount,  setGlobalIsLogin} = useContext(GlobalContext);

    const handleLogout = () => {
        setGlobalIsLogin(false);
        navigate('/');

    }

  return (
    <div>
      <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="navbarNav" style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <ul className = "navbar-nav">
            <li className = "nav-item active">
                <Link className = "nav-link" to="/">Home </Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to="/products">Products</Link>
            </li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', marginRight: '10px'}}>        
                <ul className = "navbar-nav">
            
            <li className = "nav-item active">
                <Link className = "nav-link" to="/cart">{(globalCount > 0 )? <>🥳</>: <>🙃</> }Cart ({globalCount})</Link>
            </li>
            <li className = "nav-item">
                <Link className = "nav-link" to="/profile">Profile</Link>
            </li>
            
            </ul>
            <ul className = "nav-item navbar-nav">
                <button className = " btn btn-secondary btn-sm" to="/profile" onClick={handleLogout}>Logout</button>
            </ul>
            </div>

        </div>
        </nav>
    </div>
  )
}

export default Navigation
