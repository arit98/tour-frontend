import { ArrowRight } from "lucide-react";
import React, { useState, useContext } from "react";
import LOGO from "../assets/images/logo.png";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import { AuthContext } from '../context/AuthContext'

const Login = ({ setIsModalLogin }) => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START'})
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, credentials);
      if (!credentials) {
        toast.error("Password and email doesn't match");
      } else {
        console.log("after login", res.data.role);
        if (res.statusText == "OK") {
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data})
          setIsModalLogin(false)
          toast.success(`Login Successful `,{position: 'top-center'})
        }
      }
      //   console.log(res);
    } catch (error) {
      toast.warn(`All fields are required`,{position: "top-center"});
    }
  };
  return (
    <div className="flex justify-center h-screen items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative md:w-auto w-[300px] my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <section className="rounded-md bg-black/70 p-2">
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex items-center justify-center">
                  <img draggable="false" className="h-24" src={LOGO} alt="" />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black">
                  Sign in to your account
                </h2>
                <p className="mt-2text-sm text-gray-600 ">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </a>
                </p>
                <form className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          id="email"
                          placeholder="Email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-black hover:underline"
                        >
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          id="password"
                          placeholder="Password"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleClick}
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Get started <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <p
                    className="text-center cursor-pointer text-red-500"
                    onClick={() => setIsModalLogin(false)}
                  >
                    Close
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
