import Lottie from 'lottie-react';
import React from 'react';
import RegisterLottie from '../../assets/Animation - 1733904290210.json'
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name')
    const email = form.get('email')
    const password= form.get('password')
    console.log(name,email,password);
    
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 dark:text-white mb-2">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <Lottie animationData={RegisterLottie}></Lottie>
      </div>
    </div>
  );
};

export default Register;
