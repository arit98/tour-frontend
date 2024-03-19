import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md"
import { AiOutlineYoutube } from "react-icons/ai"
import LOGO from "../assets/images/logo.png"
import { FaGithub, FaInstagram } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"


const Footer = () => {

    const copyright = "Copyright 2024. All Rights Reserved by Trek Topia."

    return (
        <section className="relative overflow-hidden py-10 flex items-center justify-center flex-col mb-8">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-center">
                            <div className="mb-4 inline-flex items-center">
                                <img className="h-14" src={LOGO} alt="" />
                            </div>
                            <div>
                                <p className="mb-4  text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam cupiditate fuga impedit</p>
                                <span className="flex items-center justify-start gap-4">
                                    <AiOutlineYoutube />
                                    <FaGithub />
                                    <CiFacebook />
                                    <FaInstagram />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-gray-900">
                                Discover
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-900 hover:text-gray-700" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-900 hover:text-gray-700" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-900 hover:text-gray-700" href="#">
                                        Tours
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-gray-900">
                                Quick Links
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-700" href="#">
                                        Gallery
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-700" href="#">
                                        Login
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base text-gray-700" href="#">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full w-full">
                            <h3 className="tracking-px mb-9  text-base font-semibold uppercase text-gray-900">
                                Contact
                            </h3>
                            <ul className="w-full">
                                <li className="mb-4">
                                    <a className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                                        <span className="flex items-center gap-2">
                                            <MdOutlineLocationOn className="text-lg text-teal-500" />
                                            <p>Address: </p>
                                            <p className="font-normal">WB, India</p>
                                        </span>
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700 gap-2" href="#">
                                        <span className="flex items-center gap-2">
                                            <MdOutlineEmail className=" text-teal-500" />
                                            <p>Email: </p>
                                            <p className="font-normal">aritradaschowdhury@gmail.com</p>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                                        <span className="flex items-center gap-2">
                                            <FaPhoneAlt className=" text-teal-500" />
                                            <p>Phone: </p>
                                            <p className="font-normal">+91 8617535011</p>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-600 z-50 mt-4">
                &copy; {copyright}
            </p>
        </section>
    )
}

export default Footer