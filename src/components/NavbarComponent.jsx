import React from 'react'
import HeadingComponent from './HeadingComponent'
import { Link } from 'react-router-dom'

//logo
import logo from '../assets/logo.png'

//icons
import { CiUser,CiHeart,CiShoppingCart  } from "react-icons/ci";
import { ImRoad } from 'react-icons/im';

//clerk
import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';
import CategoryComponent from './CategoryComponent';
import { useSelector } from 'react-redux';

function NavbarComponent() {

    const {totalProduct} = useSelector(state=>state.cartStore)


  return <div className=''>
    <HeadingComponent />
    <nav className='bg-mainBlue h-full lg:h-[100px] py-[20px]'>
        <div className='container mx-auto flex flex-col lg:flex-row  items-center justify-between h-full gap-5'>

        {/* logo */}
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
        
        {/* searc bar */}
        <div className='bg-whiteTextColor rounded-[20px]'>
            <input type="text" placeholder='Search product' className='outline-none px-[25px] py-[17px] rounded-[20px]'/>
            <button className='bg-mainYellow px-[25px] text-whiteTextColor py-[17px] rounded-[20px]'>Search</button>
        </div>

        {/* Links */}
        <div>
            <ul className='flex-center gap-5'>
                <li className='flex-center text-whiteTextColor'>
                   
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>   
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' showName={true} appearance={{
                            elements:{
                                avatarBox:'w-[40px] h-[40px]'
                            },
                            variables:{
                                colorText:'#f90'
                            }
                            
                        }}/>
                    </SignedIn>                     
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
                    <span className='badge'>{totalProduct}</span>
                    </div>
                    <Link to={'/cart'} className='text-whiteTextColor'>Cart</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    <CategoryComponent />
  </div>
  
}

export default NavbarComponent