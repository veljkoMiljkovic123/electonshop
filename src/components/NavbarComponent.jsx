import React from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import HeadingComponent from "./HeadingComponent";
import CategoryComponent from "./CategoryComponent";

function NavbarComponent() {
  // Uzimamo ukupni broj proizvoda u korpi iz Redux store-a
  const { totalProduct } = useSelector((state) => state.cartStore);
  // Uzimamo broj omiljenih proizvoda iz Redux store-a
  const { favoriteTotal } = useSelector((state) => state.favoriteStore);

<<<<<<< HEAD
  // Logovanje za debagovanje (prikaz broja proizvoda u korpi)
  console.log("Total products in cart from store:", totalProduct);
=======
    const {totalProduct} = useSelector(state=>state.cartStore)
    const {favoriteTotal} = useSelector(state=>state.favoriteStore)
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

  // Osiguravanje da vrednosti nisu NaN
  const validTotalProduct = isNaN(totalProduct) ? 0 : totalProduct;
  const validFavoriteTotal = isNaN(favoriteTotal) ? 0 : favoriteTotal;

  return (
    <div>
      <HeadingComponent />
      <nav className="bg-mainBlue h-full lg:h-[100px] py-[20px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full gap-5">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

<<<<<<< HEAD
          <div>
            <ul className="flex-center gap-5">
              <li className="flex-center text-whiteTextColor">
                {/* Prikazivanje dugmadi za prijavu korisnika */}
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    showName={true}
                    appearance={{
                      elements: {
                        avatarBox: "w-[40px] h-[40px]",
                      },
                      variables: {
                        colorText: "#f90",
                      },
                    }}
                  />
                </SignedIn>
              </li>
              <li className="flex-center gap-2">
                <div className="flex-center">
                  <CiHeart size={25} color="white" />
                  {/* Prikazivanje broja omiljenih proizvoda */}
                  <span className="badge">{validFavoriteTotal}</span>
                </div>
                <Link to={"/favorites"} className="text-whiteTextColor">
                  Favorite
                </Link>
              </li>
              <li className="flex-center gap-2">
                <div className="flex-center">
                  <CiShoppingCart size={25} color="white" />
                  {/* Prikazivanje broja proizvoda u korpi */}
                  <span className="badge">{validTotalProduct}</span>
                </div>
                <Link to={"/cart"} className="text-whiteTextColor">
                  Cart
                </Link>
              </li>
=======
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
                   <span className='badge '>{favoriteTotal}</span>
                   </div>
                    <Link to={'/favorite'} className='text-whiteTextColor'>Favorite</Link>
                </li>
                <li className='flex-center gap-2'>
                    <div className='flex-center'>
                    <CiShoppingCart size={25} color='white'/>
                    <span className='badge'>{totalProduct}</span>
                    </div>
                    <Link to={'/cart'} className='text-whiteTextColor'>Cart</Link>
                </li>
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
            </ul>
          </div>
        </div>
      </nav>
      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
