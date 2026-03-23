import React, { useState } from 'react';
import '../Styles/Account.css';
import {useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaGooglePlusG, FaFacebookSquare } from "react-icons/fa";

export default function Account() {

    const [isActive, setIsActive] = useState(false);
    const [signUpErrors, setSignUpErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({});

    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const validateSignUp = () => {
        let errors = {};
        if (!signUpData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!signUpData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!signUpData.password.trim()) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const validateLogin = () => {
        let errors = {};
        if (!loginData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!loginData.password.trim()) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const errors = validateSignUp();
        if (Object.keys(errors).length > 0) {
            setSignUpErrors(errors);
        } else {
            setSignUpErrors({});
            alert('Sign Up Successful');
            navigate('/'); 
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const errors = validateLogin();
        if (Object.keys(errors).length > 0) {
            setLoginErrors(errors);

        } else {
            setLoginErrors({});
            alert('Login Successful');
            navigate('/'); 
        }
    };

    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === 'signUp') {
            setSignUpData({ ...signUpData, [name]: value });
        } else {
            setLoginData({ ...loginData, [name]: value });
        }
    };

    return (
        <>
            <div className='body'>
                <div className={`container ${isActive ? 'active' : ''}`} id='container'>
                    <div className="form_container sign_up">
                        <form onSubmit={handleSignUpSubmit}>
                            <h1>Create Account</h1>
                            <div className="social_icons">
                                <a href="https://www.google.com/" className='icon google'><FaGooglePlusG className='fa-google-plus-g' /></a>
                                <a href="https://www.facebook.com/" className='icon facebook'> <FaFacebookSquare className='fa-square-facebook' /></a>
                                <a href="https://github.com/" className='icon github'><FaGithub className='fa-github' /></a>
                                <a href="https://www.linkedin.com/" className='icon linkedin'><FaLinkedinIn className='fa-linkedin-in' /></a>
                            </div>
                            <span>or use your email for registration</span>
                            <div className="infield">
                                <input 
                                    type="text" 
                                    placeholder='Name' 
                                    name="name" 
                                    value={signUpData.name} 
                                    onChange={(e) => handleInputChange(e, 'signUp')} 
                                />
                                {signUpErrors.name && <p className='error'>{signUpErrors.name}</p>}
                            </div>
                            <div className="infield">
                                <input 
                                    type="email" 
                                    placeholder='Email' 
                                    name="email" 
                                    value={signUpData.email} 
                                    onChange={(e) => handleInputChange(e, 'signUp')} 
                                />
                                {signUpErrors.email && <p className='error'>{signUpErrors.email}</p>}
                            </div>

                            <div className="infield">
                                <input 
                                    type="password" 
                                    placeholder='Password' 
                                    name="password" 
                                    value={signUpData.password} 
                                    onChange={(e) => handleInputChange(e, 'signUp')} 
                                />
                                {signUpErrors.password && <p className='error'>{signUpErrors.password}</p>}
                            </div>

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className='form_container sign_in'>
                        <form onSubmit={handleLoginSubmit}>
                            <h1>Login</h1>
                            <div className="social_icons">
                                <a href="https://www.google.com/" className='icon google'><FaGooglePlusG className='fa-google-plus-g' /></a>
                                <a href="https://www.facebook.com/" className='icon facebook'> <FaFacebookSquare className='fa-square-facebook' /></a>
                                <a href="https://github.com/" className='icon github'><FaGithub className='fa-github' /></a>
                                <a href="https://www.linkedin.com/" className='icon linkedin'><FaLinkedinIn className='fa-linkedin-in' /></a>
                            </div>
                            <span>or use your email and password</span>
                            <div className="infield">
                                <input 
                                    type="email" 
                                    placeholder='Email' 
                                    name="email" 
                                    value={loginData.email} 
                                    onChange={(e) => handleInputChange(e, 'login')} 
                                />
                                {loginErrors.email && <p className='error'>{loginErrors.email}</p>}
                            </div>
                            <div className="infield">
                                <input 
                                    type="password" 
                                    placeholder='Password' 
                                    name="password" 
                                    value={loginData.password} 
                                    onChange={(e) => handleInputChange(e, 'login')} 
                                />
                                {loginErrors.password && <p className='error'>{loginErrors.password}</p>}
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className="toggle_container">
                        <div className="toggle">
                            <div className="panel left">
                                <h1>Welcome Back!</h1>
                                <p> We are delighted to see you again! Enter your personal details to continue enjoying our services.</p>
                                <button className="hidden" id="login" onClick={handleLoginClick}>Login</button>
                            </div>
                            <div className="panel right">
                                <h1>Hello, Friend!</h1>
                                <p>Welcome! We are excited to have you here. Register with your personal details to join our community </p>
                                <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
