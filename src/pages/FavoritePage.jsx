import React from 'react'
import { useSelector } from 'react-redux'
import CardProductComponent from '../components/CardProductComponent'
import { animate, delay } from 'framer-motion';
import { duration } from '@mui/material';
import { motion } from 'framer-motion';
function FavoritePage() {

    const {allFavorite}=useSelector(state=>state.favoriteStore)
    console.log(allFavorite);
    const fadeInAnimationVariants = {
        initial: {
            opacity:0,
            x:-100,
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                delay:0.1,
                duration:1,
            },
        },
        
    }

  return (
           <div className='container mx-auto'>
        <h1 className='text-3xl my-12 font-bold text-center text-mainBlue uppercase'>Favorite Items</h1>
        <motion.div 
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'>
    <div className='flex flex-wrap flex-col items-center lg:flex-row gap-7'>
        {allFavorite.map((fav)=>{
            return <CardProductComponent  key={fav.id} product={fav} />
        })}
    </div>
    </motion.div>
    </div>
  )
}

export default FavoritePage