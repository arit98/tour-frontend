import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import { useStateValue } from "../context/StateContext";
import { ArrowRight } from "lucide-react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ isModalLogin, setIsModalLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useStateValue();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleKeyUp = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };

  const handleClick = async (e) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, credentials);
      if (!res.data) {
        toast.error("Password and email don't match");
      } else {
        if (res.statusText === "OK") {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          setIsModalLogin(false);
          toast.success(`Login Successful `, { position: "top-center" });
        }
      }
    } catch (error) {
      toast.warn(`All fields are required`, { position: "top-center" });
    }
  };

  useEffect(() => {
    if (isModalLogin) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isModalLogin]);

  return (
    <div
      className={`flex w-full justify-center h-screen items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md`}
    >
      <div className="relative md:w-auto w-[300px] my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <section className="rounded-md bg-black/70 p-2">
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex items-center justify-center">
                  <img
                    draggable="false"
                    className="h-24"
                    src={LOGO}
                    alt="Logo"
                  />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    title="Create a free account"
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </a>
                </p>
                <form className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                        onKeyUp={handleKeyUp}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <a
                          href="#"
                          title="Forgot password?"
                          className="text-sm font-semibold text-black hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="mt-2">
                        <input
                        onKeyUp={handleKeyUp}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          id="password"
                          placeholder="Password"
                        />
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
                  <RxCross2
                    className="flex md:hidden absolute top-4 right-4 text-center text-xl cursor-pointer text-red-500"
                    onClick={() => setIsModalLogin(false)}
                  ></RxCross2>
                  <p className="hidden md:flex items-center justify-center text-center cursor-pointer text-red-500" onClick={() => setIsModalLogin(false)}>Close</p>
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
