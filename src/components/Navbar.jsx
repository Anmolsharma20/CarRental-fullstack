import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Navbar = () => {

  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext()

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const changeRole = async () => {
    try {
      const { data } = await axios.post('/api/owner/change-role')
      if (data.success) {
        setIsOwner(true)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white/90 backdrop-blur-md text-gray-700 shadow-sm border-b border-borderColor sticky top-0 z-50`}
    >
      {/* Logo */}
      <Link to='/'>
        <motion.img
            whileHover={{ scale: 1.05 }}
            src={assets.logo}
            alt="logo"
            className="w-24 h-24" // 6rem = 24 Tailwind units
        />
    </Link>

      {/* Menu Links */}
      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-2/3 max-sm:top-16 max-sm:border-l border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 max-sm:p-6 transition-all duration-300 z-50 ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} ${location.pathname === "/" ? "bg-white" : "bg-white"}`}>

        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.path ? "text-primary font-semibold" : ""}`}
          >
            {link.name}
          </Link>
        ))}

        {/* Search (desktop only) */}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all w-64'>
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-sm"
            placeholder="Search cars..."
          />
          <img src={assets.search_icon} alt="search" className="w-4 opacity-70" />
        </div>

        {/* Buttons */}
        <div className='flex max-sm:flex-col items-start sm:items-center gap-6 pt-4 sm:pt-0'>
          <button
            onClick={() => isOwner ? navigate('/owner') : changeRole()}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            {isOwner ? 'Dashboard' : 'List cars'}
          </button>

          <button
            onClick={() => { user ? logout() : setShowLogin(true) }}
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-lg font-medium shadow-md"
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className='sm:hidden cursor-pointer p-2 rounded-md hover:bg-gray-100 transition'
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className="w-6 h-6" />
      </button>
    </motion.div>
  )
}

export default Navbar
