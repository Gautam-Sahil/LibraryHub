import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(true);
  const navigate = useNavigate();

 // ✅ Handle both modals closing & redirect
const handleLoginSuccess = () => {
  setIsLoginOpen(false);
  setIsSignupVisible(false);

  toast.success('Login successful! Redirecting...');
  setTimeout(() => {
    window.location.href = '/'; 
  }, 3000);
};

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    };

    const signupPromise = axios.post('https://libraryhub-jywl.onrender.com/user/signup', userInfo);

    toast.promise(
      signupPromise,
      {
        loading: 'Creating your account...',
        success: 'Signup successful! Please log in.',
        error: (error) => {
          const message =
            error?.response?.data?.message || 'Signup failed. Please try again.';
          return message;
        },
      },
      {
        style: {
          borderRadius: '8px',
          background: '#333',
          color: '#fff',
        },
      }
    );

    try {
      const response = await signupPromise;
      if (response.data) {
        console.log('User signed up successfully:', response.data);
        setTimeout(() => setIsLoginOpen(true), 1500);
      }
    } catch (error) {
      console.error('Error signing up user:', error);
    }
  };

  return (
    <>


      {/* Signup Modal */}
      {isSignupVisible && !isLoginOpen && (
        <div className="modal modal-open  ">
          <div className="modal-box bg  flex flex-col items-center justify-center relative ">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-extrabold text-lg">Sign up</h3>

              <div className="mt-5 space-y-2.5">
                <span>Name</span> <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-sm"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>

              <div className="mt-5 space-y-2.5">
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-sm"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>

              <div className="mt-5 mb-4 space-y-2.5">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 text-sm px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>

              <div className="flex mt-5 mb-2 justify-around w-full">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Sign up
                </button>
                <p>
                  Already Registered?{" "}
                  <button
                    type="button"
                    className="underline text-blue-300 cursor-pointer"
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Conditionally render Login modal */}
      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}

export default Signup;
