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
    <div className="fixed w-full  bg-white z-50 top-0">
      <div className="mx-auto md:flex hidden max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img onClick={navigateUrl} className='h-14 cursor-pointer' src={LOGO} alt="LOGO" />
          </span>
          {/* <span className="dancing-script-bold">Trek Topia</span> */}
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={`inline-flex items-center text-sm text-gray-800 ${activeItem === item.name ? 'text-teal-500 font-bold' : ''}`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {
          !user ? <div className="hidden space-x-2 lg:block">
          <button
            onClick={toggleModalLogin}
            type="button"
            className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button>
          {
            isModalLogin && (<Login setIsModalLogin={setIsModalLogin} />)
          }
          <button
            onClick={toggleModalRegister}
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Register
          </button>
          {
            isModalRegister && (<Register setIsModalRegister={setIsModalRegister} />)
          }
        </div>: 
        <div className='md:flex hidden items-center justify-center gap-4'>
          <p className='text-teal-400 font-bold'>{user?.data?.username}</p>
          <button className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={logout}>Logout</button>
        </div>
        }
      </div>
    </div>
  )
}

export default NavBar