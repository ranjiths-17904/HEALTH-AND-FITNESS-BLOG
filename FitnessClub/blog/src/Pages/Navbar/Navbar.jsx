import { useState } from 'react';
import AddBlog from '../../Components/AddBlog';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
    setIsMenuOpen(false); // Close mobile menu when AddBlog is opened
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Display AddBlog Component if visible */}
      {visible && <AddBlog handleClose={handleVisible} />}

      {/* Navbar Section */}
      <div className='w-full py-2.5 bg-black text-white flex justify-between items-center px-6 drop-shadow max-sm:py-3'>
        {/* Logo Part */}
        <div className='flex items-center gap-3 px-16 max-sm:px-8'>
          <div className='w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 font-medium text-slate-950 max-sm:h-12 max-sm:w-16'>
            <img
              className='rounded-full h-full'
              src='https://media.istockphoto.com/id/1035561592/vector/vector-design-element-for-the-fitness-center.jpg?s=612x612&w=0&k=20&c=k3yyyEcqeivby9iE7gZIk33PAjtDqNsdEdYiMjw7qsM='
              alt='Fitness Logo'
            />
          </div>
          <div>
            <p className='text-2xl font-bold font-sans cursor-pointer max-sm:text-base'>
              <span className='text-red-500 max-sm:text-base'>FITNESS</span> CLUB
            </p>
            <p className='text-yellow-300 text-xl font-serif max-sm:text-xs'>
              <span className='pr-1'>B</span>
              <span className='pr-1'>l</span>
              <span className='pr-1'>o</span>
              <span className='pr-1'>g</span>
              <span>s</span>
            </p>
          </div>
        </div>

        {/* List Part for Desktop */}
        <div className='px-8 max-sm:hidden'>
          <ul className='flex items-center gap-10 font-serif text-[20px]'>
            
            <Link to={'/'}>
            <li
              className='hover:text-slate-400 font-sans hover:underline cursor-pointer'
              onClick={() => handleScroll('home')}
            >
              HOME
            </li>
            </Link>
            <li
              className='hover:text-slate-400 font-sans hover:underline cursor-pointer'
              onClick={() => handleScroll('about')}
            >
              ABOUT
            </li>
            <li
              className='hover:text-slate-400 font-sans hover:underline cursor-pointer'
              onClick={() => handleScroll('popular')}
            >
              BLOG
            </li>
            <li
              className='hover:text-slate-400 font-sans hover:underline cursor-pointer'
              onClick={handleVisible}
            >
              ADD BLOGS
            </li>
            <li
              className='hover:text-slate-400  font-sans hover:underline cursor-pointer'
              onClick={() => handleScroll('contact')}
            >
              CONTACT
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='sm:hidden flex items-center'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className='sm:hidden bg-black text-white py-4'>
          <ul className='flex flex-col items-center gap-4 font-serif text-[18px]'>
            <li onClick={() => handleScroll('home')} className='hover:text-slate-400 font-sans cursor-pointer'>
              HOME
            </li>
            <li onClick={() => handleScroll('about')} className='hover:text-slate-400 font-sans cursor-pointer'>
              ABOUT
            </li>
            <li onClick={() => handleScroll('popular')} className='hover:text-slate-400 font-sans cursor-pointer'>
              BLOG
            </li>
            <li onClick={handleVisible} className='hover:text-slate-400 font-sans cursor-pointer'>
              ADD BLOGS
            </li>
            <li onClick={() => handleScroll('contact')} className='hover:text-slate-400 font-sans cursor-pointer'>
             CONTACT
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
