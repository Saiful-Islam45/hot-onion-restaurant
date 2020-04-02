import React, { useState } from 'react';
import './Signup.css';
import logoimg from "../../resources/logo2.png";
import { useAuth } from '../User-auth';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Signup = () => {
    const [existingUser, setExistingUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth();
    const onSubmit = data => {
        if (existingUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password);
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.confirm_password, data.name)
            }
        }

    }
    return (
        <div className="sign-up mt-5">
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                        <img src={logoimg} alt="" />
                    </Link>
                </div>

                {
                    existingUser ?
                        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }
                            <div className="form-group">
                                <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                {errors.email && <span className="text-danger">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                {errors.password && <span className="text-danger">Password is required</span>}
                            </div>

                            <div className="form-group">
                                <button className="btn btn-danger btn-block" type="submit">Sign In</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setExistingUser(false)}>Create a new Account</label>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }
                            <div className="form-group">
                                <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                                {errors.name && <span className="text-danger">Name is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                {errors.email && <span className="text-danger">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                {errors.password && <span className="text-danger">Password is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirm_password" className="form-control" ref={register({
                                    validate: (value) => value === watch('password')
                                })} placeholder="Confirm Password" />
                                {errors.confirm_password && <span className="text-danger">Passwords don't match.</span>}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger btn-block" type="submit">Sign Up</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setExistingUser(true)}>Already Have an Account</label>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
};
export default Signup;