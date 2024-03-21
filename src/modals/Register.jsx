import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import LOGO from "../assets/images/logo.png";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import axios from "axios";
import { useStateValue } from "../context/StateContext";

const Register = ({ setIsModalRegister }) => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useStateValue();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, credentials);

      if (!res.data.statusCode == 200) {
        toast.error(`Register Failed. ${res.data.message}`, {
          position: "top-center",
        });
      } else {
        dispatch({ type: 'REGISTER_SUCCESS'})
        toast.success(`Register Success.`, { position: "top-center" });
        setIsModalRegister(false);
      }
    } catch (error) {
      toast.warn(`All fields are required`, { position: "top-center" });
    }
  };
  return (
    <div className="flex justify-center md:h-screen h-[700px] items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative md:w-auto w-[300px] md:my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <section className="rounded-md bg-black/80 p-2">
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex items-center justify-center">
                  <img draggable="false" className="h-24" src={LOGO} alt="" />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black">
                  Sign up to create account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-black transition-all duration-200 hover:underline"
                  >
                    Sign In
                  </a>
                </p>
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Username{" "}
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Username"
                          id="username"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
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
                          placeholder="Email"
                          id="email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <button
                        onClick={handleClick}
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Account <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <p
                    className="text-center cursor-pointer text-red-500"
                    onClick={() => setIsModalRegister(false)}
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

export default Register;
