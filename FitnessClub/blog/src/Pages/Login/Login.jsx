import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import image from '../../assets/Card/Login Img.jpg';

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex w-4/5 max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <motion.div
          className="w-4/6  hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-gray-700 to-black relative"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} >
          <img
            src={image}
            alt="Fitness"
            className="w-4/5 rounded-lg shadow-2xl pb-20"
          />
          <div className="absolute bottom-10 text-center text-white px-6">
            <h2 className="text-4xl font-bold">Stay Fit, Stay Strong</h2>
            <p className="text-lg mt-2">
              Join the best fitness platform and start your journey today!
            </p>
          </div>
        </motion.div>
        <div className="w-full lg:w-3/5 p-10">
          <motion.div
            className="w-full"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
                {isLogin ? (
                  <>
                    <FaSignInAlt />
                    Welcome Back!
                  </>
                ) : (
                  <>
                    <FaUserPlus />
                    Create an Account
                  </>
                )}
              </h1>
              <p className="text-gray-500">
                {isLogin
                  ? "Sign in to continue your fitness journey."
                  : "Join us to start your fitness journey today!"}
              </p>
            </div>

            <form className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full pl-10 px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password  </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Your password"
                    className="w-full pl-10 px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-gray-500 text-sm space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-gray-700 text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                {isLogin ? <FaSignInAlt /> : <FaUserPlus />}
                {isLogin ? "Sign In" : "Sign Up"}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => setIsLogin(!isLogin)} >
                  {isLogin ? "Sign Up" : "Sign In"}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
