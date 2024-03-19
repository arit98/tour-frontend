import React, { useContext, useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import Register from '../modals/Register'
import Login from '../modals/Login'
import LOGO from "../assets/images/logo.png"
import { AuthContext } from '../context/AuthContext'

const menuItems = [
  {
    name: 'Home',
    href: '/#',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Tours',
    href: '/tours',
  },
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(menuItems[0].name);
  const [isModalRegister, setIsModalRegister] = useState(false)
  const [isModalLogin, setIsModalLogin] = useState(false)

  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  const navigateUrl = () => {
    navigate('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const setActive = (itemName) => {
    setActiveItem(itemName);
  };

  const toggleModalRegister = () => {
    setIsModalRegister(!isModalRegister);
  }

  const toggleModalLogin = () => {
    setIsModalLogin(!isModalLogin);
  }

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }

  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto flex justify-between items-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img onClick={navigateUrl} className='h-14 cursor-pointer' src={LOGO} alt="LOGO" />
        </div>
        <div className="hidden lg:flex space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={`text-sm text-gray-800 ${activeItem === item.name ? 'text-teal-500 font-bold' : ''}`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-10 w-auto" src={LOGO} alt="Logo" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center justify-between p-3 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                        onClick={() => {
                          toggleMenu();
                          setActive(item.name);
                        }}
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4" />
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
