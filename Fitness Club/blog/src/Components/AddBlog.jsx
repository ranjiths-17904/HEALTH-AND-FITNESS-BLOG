import axios from 'axios';
import { useState } from 'react';
import { MdTitle, MdDescription, MdUpload, MdSend } from 'react-icons/md'; // Icons for fields
import { AiOutlineClose } from 'react-icons/ai';

const AddBlog = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageurl, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setMessage('Title and description are required');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3333/add', {
        title,
        description,
        imageURL: imageurl,
      });

      if (response.status === 201 || response.status === 200) {
        setMessage('Blog post added successfully!');
        setTitle('');
        setDescription('');
        setImage('');
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error adding the blog:', error);
      setMessage('Failed to add blog post. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="relative w-full max-w-xl bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 shadow-xl p-8 rounded-lg text-white">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-red-500 text-2xl hover:text-red-700 transition"
        >
          <AiOutlineClose />
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Add a New Blog Post
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg p-2.5 bg-white/20">
            <MdTitle className="text-2xl text-white mr-3" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full outline-none bg-transparent text-white"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-6 flex items-start border border-gray-300 rounded-lg p-2.5 bg-white/20">
            <MdDescription className="text-2xl text-white mr-3 mt-1" />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full outline-none bg-transparent text-white resize-none"
              rows="4"
              placeholder="Enter blog description"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-6 flex items-center border border-gray-300 rounded-lg p-2.5 bg-white/20">
            <MdUpload className="text-2xl text-white mr-3" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-200 outline-none bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full flex justify-center items-center py-3 px-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            <MdSend className="mr-2" />
            {isLoading ? 'Submitting...' : 'Submit Blog Post'}
          </button>
        </form>

        {/* Message Feedback */}
        {message && (
          <div
            className={`mt-6 text-center text-sm font-semibold ${
              message.includes('success') ? 'text-green-300' : 'text-red-300'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
