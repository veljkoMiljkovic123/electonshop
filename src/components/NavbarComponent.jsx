import React from 'react'
import HeadingComponent from './HeadingComponent'
import { Link } from 'react-router-dom'

//logo
import logo from '../assets/logo.png'

//icons
import { CiUser,CiHeart,CiShoppingCart  } from "react-icons/ci";
import { ImRoad } from 'react-icons/im';

function NavbarComponent() {


  return <div className=''>
    <HeadingComponent />
    <nav className='bg-mainBlue h-[100px]'>
        <div className='container mx-auto flex items-center justify-between h-full'>

        {/* logo */}
        <img src={logo} alt="logo" />
        
        {/* searc bar */}
        <div className='bg-whiteTextColor rounded-[20px]'>
            <input type="text" placeholder='Search product' className='outline-none px-[25px] py-[17px] rounded-[20px]'/>
            <button className='bg-mainYellow px-[25px] text-whiteTextColor py-[17px] rounded-[20px]'>Search</button>
        </div>

        {/* Links */}
        <div>
            <ul className='flex-center gap-5'>
                <li className='flex-center'>
                    <CiUser size={25} color='white'/>
                    <Link to={'/'} className='text-whiteTextColor'>SignIn</Link>
                </li>
                <li className='flex-center gap-2'>
                   <div className='flex-center'>
                   <CiHeart size={25} color='white'/>
                   <span className='badge'>0</span>
                   </div>
                    <Link to={'/'} className='text-whiteTextColor'>Favorite</Link>
                </li>
                <li className='flex-center gap-2'>
                    <div className='flex-center'>
                    <CiShoppingCart size={25} color='white'/>
                    <span className='badge'>0</span>
                    </div>
                    <Link to={'/cart'} className='text-whiteTextColor'>Cart</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  </div>
  
}

export default NavbarComponent