import React, { useEffect, useState } from 'react';
import Card from '../../Components/Recent_Post/Athu';
const Blog = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3333');
        const data = await res.json();
        setItems(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div className='mt-4'>
      {/* Page Title */}
      <h1 className='primary_text text-[36px] px-14 max-sm:p-0 max-sm:text-[22px] max-sm:pl-9 mb-4'>
        Recent Blogs
      </h1>

      {/* Loading Spinner */}
      {loading ? (
        // <div className='flex justify-center items-center h-screen'>
        //   <img 
        //     src="https://i.gifer.com/ZZ5H.gif" // External loading GIF URL
        //     alt="Loading..." 
        //     className='w-16 h-16'
        //   />
        // </div>

        <div className="gap-x-3 flex h-full w-full justify-center items-center pb-20">
      <div className="w-5 bg-[#d991c2] h-5 rounded-full animate-bounce [animation-delay:-.2s]" />
      <div className="w-5 h-5 bg-[#9869b8] rounded-full a animate-bounce [animation-delay:-.4s]" />
      <div className="w-5 h-5 bg-[#6756cc] rounded-full animate-bounce [animation-delay:-.6s]" />
    </div>
      ) : (
        <>
          {/* Cards Section */}
          <div className='w-full flex justify-center items-start px-14 max-sm:w-full max-sm:p-4 '>
            <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 lg:grid-rows-2'>
              {items.slice(0, visibleItems).map((post, index) => (
                <Card key={index} id={post._id} image={post.imageURL} title={post.description} />
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className='flex justify-center mt-20 mb-10'>
            {visibleItems < items.length && (
              <button
                className='px-6 py-2 bg-[#b8953d] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'
                onClick={handleViewMore}
              >
                View More Posts
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
