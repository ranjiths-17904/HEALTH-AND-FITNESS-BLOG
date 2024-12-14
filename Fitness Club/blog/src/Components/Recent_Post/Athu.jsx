
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { heart, likedHeart } from '../../assets';

const Athu = ({ image, title, id }) => {
  const [liked, setLiked] = useState(false);


  console.log(id)

  const handleLikeClick = () => {
    setLiked(!liked);  
  };

  return (
    <motion.div
      className='w-[270px] h-[360px] border max-sm:w-[330px] max-sm:h-[350px] rounded-xl hover:shadow-2xl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* image section */}
      <Link to={`/blog/${id}`}> 
        <div className='w-full h-[200px]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </Link>

      {/* content section */}
      <div className='p-7 pt-4 flex flex-col h-20 mt-5'>
        <Link to={`/blog/${id}`} className='cursor-pointer'>
          <h1 className='primary_text text-black text-[20px] font-semibold opacity-80 hover:text-[#d59900] overflow-hidden whitespace-nowrap text-ellipsis'>
            {title}
          </h1>
        </Link>

        <div className='mt-auto'>
          <p className='opacity-10 p-0 m-0'>_</p>

          {/* heart icon */}
          <img
            src={liked ? likedHeart : heart}
            alt="Like"
            width={20}
            height={15}
            className='object-contain cursor-pointer pt-1 hover:brightness-150 transition duration-200 mt-2'
            onClick={handleLikeClick}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Athu;