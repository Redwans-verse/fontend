import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../context/UserContext";

const NavMenu = () => {

    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()

    const handleLogout=()=>{
        if(auth){
            navigate("/login");
            setAuth({ ...auth, user: null, token: "" });
            localStorage.removeItem("auth");
        }
    }

    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink className="nav-link"  to='/'>CRUD</NavLink></Navbar.Brand>
                    <Nav className="me-auto">
                        {!auth.user ? (
                            <>
                            <NavLink className="nav-link"  to='/register'>Register</NavLink>
                            <NavLink className="nav-link"  to='/login'>Login</NavLink>
                            </>
                        ): <NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink> }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;