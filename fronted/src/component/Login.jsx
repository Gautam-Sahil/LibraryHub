import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login({ onClose, onLoginSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [authuser, setAuthuser] = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const loginPromise = axios.post('https://libraryhub-jywl.onrender.com/user/login', userInfo);

    toast.promise(
      loginPromise,
      {
        loading: 'Logging you in...',
        success: 'Login successful! 🎉',
        error: (error) => {
          const message =
            error?.response?.data?.message || 'Login failed. Please try again.';
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
      const response = await loginPromise;
      if (response.data?.user) {
        // Update context and localStorage
        setAuthuser(response.data.user);
        localStorage.setItem('userInfo', JSON.stringify(response.data.user));

        setTimeout(() => {
          if (onLoginSuccess) {
            // Login from signup page
            onLoginSuccess();
            navigate('/'); // Redirect to homepage
          } else {
            // Login from navbar
            onClose();
            navigate('/'); // Also redirect to homepage
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className="modal modal-open ">
      <div className="modal-box   relative flex flex-col items-center justify-center">
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="font-extrabold text-lg mt-4">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="mt-5 space-y-2.5">
            <span>Email</span>
            <br />
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

          <div className="mt-5 mb-3 space-y-2.5">
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

          <div className="flex mt-5 justify-around w-full items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer"
            >
              Login
            </button>
            <p className="text-sm">
              Not Registered?{" "}
              <a href="/signup" className="underline text-blue-300 cursor-pointer">
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
