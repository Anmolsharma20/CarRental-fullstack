import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'
    style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >

        <div className="text-center text-white max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center max-w-xl mx-auto">
            Turn Your Luxury Car Into Income
          </h2>
          
          <p className="mt-4 text-lg text-gray-200">
            Unlock the power of your vehicle by listing it on <span className="font-semibold">CarRental</span>.
          </p>
          
          <p className="mt-2 text-base leading-relaxed">
            From <span className="font-medium">insurance</span> to <span className="font-medium">driver verification</span> and 
            <span className="font-medium"> secure payments</span> — we handle everything while you earn hassle-free.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-md mt-3 text-lg font-semibold tracking-wide hover:from-yellow-500 hover:to-orange-600 transition"
          >
            List Your Car
          </motion.button>
        </div>  

        {/* <motion.img 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_car_image} alt="car" className='max-h-45 mt-10'/> */}
      
    </motion.div>
  )
}

export default Banner
