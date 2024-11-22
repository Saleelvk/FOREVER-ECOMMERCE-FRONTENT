import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';
import { ShopContext } from '../context/ShopContext';

const  Navbar=()=> {

    const [visible,Setvisible]=useState(false)
    const{setShowSearch,getCartCount}=useContext(ShopContext)

  return ( 
    <div className='flex items-center justify-between py-5  font-medium'>
        <img src={assets.logo} className='w-36' alt="" />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/'  className='flex flex-col items-center gap-1  '>
            <p className=''>HOME</p>
            
        </NavLink>

        <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden ' />

        </NavLink>

        <NavLink to='/About' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden ' />

        </NavLink>

        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4  border-none h-[1.5px] bg-gray-700  hidden' />

        </NavLink>

        </ul>

        
        <div className='flex items-center gap-6'>
            <img onClick={setShowSearch} src={assets.search_icon}  className='w-5  cursor-pointer'  alt="searchIcon"/>

 
                <div className=' relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt=" "/>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer  hover:text-black'>My profile</p>
                            <p className='cursor-pointer  hover:text-black'>Orders</p>
                            <p className='cursor-pointer  hover:text-black'>Logout</p>
                        </div>  

                    </div>  
                </div>

                <Link to='/Cart'className='relative' >
                    <img src={assets.cart_icon}  className='w-5 min-w-5'  alt="cart.png" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center  pt-[0.5px]  bg-black  text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
           
                </Link>

                    <img onClick={()=>{Setvisible(true)}} src={assets.menu_icon}  className='w-5 cursor-pointer sm:hidden' alt="menu-icon" />

        </div>  

        {/* side bar menu for small screens */}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full':'w-0'}`} > 
                <div className='flex flex-col text-gray-600 '>
                    <div className='flex items-center gap-4 p-3'>
                        <img  onClick={()=>Setvisible(false)} className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt="dropdown_icon" />
                         <p onClick={()=>Setvisible(false)} className='cursor-pointer' >Back</p>           
                    </div>
                    <NavLink onClick={()=>Setvisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={()=>Setvisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>Setvisible(false)} className='py-2 pl-6 border' to='/About'>About</NavLink>
                    <NavLink onClick={()=>Setvisible(false)} className='py-2 pl-6 border' to='/Contact'>Contact</NavLink>
                </div>

            

        </div>



    </div>
  )
}
export default Navbar

