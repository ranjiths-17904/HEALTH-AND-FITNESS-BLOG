import { useEffect, useState } from 'react';
import { AiFillFacebook, AiFillHeart, AiFillLinkedin, AiOutlineLink, AiOutlineTwitter } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { de, heart, likedHeart } from '../../src/assets/index';
import {Link} from 'react-router-dom';

const BlogDetail = () => {
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const res = await fetch(`http://localhost:3333/${id}`);
         const data = await res.json();
      setBlog(data);
      console.log("done");
    } catch (error) {
      console.error('Failed to fetch the blog post:', error);
    }
  };
  
  useEffect(() => {
    fetchBlog();
  }, [id]);




  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3333/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to delete the blog post');
      }
    } catch (error) {
      console.error('Error deleting the blog post:', error);
    }
  };

  if (!blog) return (
    <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="h-full m-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-full">
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-xl h-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-500">By Admin · Oct 6, 2024 · 5 min read</p>
            <img 
              src={blog.imageURL}  
              alt={blog.title} 
              className="rounded-lg w-full h-auto mt-3 transform transition-transform hover:scale-95 duration-500 border-2" 
            />
            <p className="text-gray-700 mb-4 mt-2">{blog.description}</p>
            <p className="text-gray-700 mb-4">
              In this blog, we’ll explore various workout regimes, the importance of nutrition, and how mental health plays a vital role in achieving your fitness goals.
            </p>

            <div className='w-full h-[120px] flex justify-between items-center'>
              <img
                src={liked ? likedHeart : heart}
                alt="Like"
                width={20}
                height={15}
                className='ml-2 object-contain cursor-pointer pt-1 hover:brightness-150 transition duration-200'
                onClick={handleLikeClick}
              />
              <img 
                src={de} 
                alt="Delete" 
                className='w-8 h-8 cursor-pointer ml-2'
                onClick={handleDelete} 
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="lg:w-1/3 bg-slate-400 p-6 rounded-lg shadow-lg flex flex-col justify-between h-auto mt-4 lg:mt-0">
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" 
                alt="Fitness Author" 
                className="rounded-full w-28 h-28 object-cover mb-4 shadow-md transform transition-transform hover:scale-110 duration-500" 
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hi, Fitness Enthusiast!</h2>
              <p className="text-gray-600 text-center mb-4">
                I’m your guide to a healthier, stronger lifestyle. Join me as I share insights on how to stay fit, both physically and mentally.
              </p>
              <Link to="/signuppage">
              <button 
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-3000" 
              >
                Start Your Journey
              </button>
              </Link>
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-center space-x-4 mb-4">
                <a href="https://github.com/MaX-NeO" className="text-gray-500 hover:text-blue-600">
                  <AiFillFacebook size={24} />
                </a>
                <a href="https://github.com/MaX-NeO" className="text-gray-500 hover:text-blue-500">
                  <AiOutlineTwitter size={24} />
                </a>
                <a href="https://github.com/MaX-NeO" className="text-gray-500 hover:text-blue-700">
                  <AiFillLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <AiOutlineLink size={24} />
                </a>
              </div>

              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>10 views</span>
                <span className="flex items-center space-x-1">
                  <span>3</span>
                  <AiFillHeart className="text-red-500 cursor-pointer hover:scale-110 transition-transform duration-300" size={24} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;