import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let userNotFound;
    if (error || gError || updateError) {
        userNotFound = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }
    if (loading || gLoading || updating) {
        return <button className="btn loading">Please Wait</button>
    }
    if (user || gUser) {
        console.log(user || gUser);
    }
    const onSubmit = async(data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        alert('Updated profile');
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                                        message: 'error message' // JS only: <p>error message</p> TS only support string
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Please provide atleast 6 character' // JS only: <p>error message</p> TS only support string
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {userNotFound}
                        <input type="submit" value="Sign Up" className='btn w-full max-w-xs bg-blue-500' />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></small></p>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} className="btn btn-primary">GOOGLE SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;