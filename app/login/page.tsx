'use client';

import React, { useState, FormEvent } from 'react'; 
import { useAuth } from '../context/AuthContext'; 
import { useTheme } from '../context/ThemeContext';
 
const LoginPage: React.FC = () => { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const { login } = useAuth(); 
  const { darkMode } = useTheme();
 
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{ 
    event.preventDefault(); 
    await login(username, password); 
    window.location.href = '/posts';  }; 
 
  return ( 
    <div>
    <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}> 
      <div className={`w-full max-w-md p-8 space-y-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md rounded-md`}> 
        <h2 className="text-2xl font-bold text-center">Login
            </h2> 
        <form onSubmit={handleSubmit} className="space-y-6"> 
          <div> 
            <label htmlFor="username" className="block text-sm font-medium"> 
              Username 
            </label> 
           
            <input 
              id="username" 
              name="username" 
              type="text" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            /> 
          </div> 
          <div> 
            <label htmlFor="password" className="block text-sm font-medium"> 
              Password 
            </label> 
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            /> 
          </div> 
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
          > 
            Login 
          </button> 
        </form> 
        <p className="text-center"> 
          Don&apos;t have an account? <a href="/register" className="text-indigo-600 hover:underline">Register</a> 
        </p> 
      </div> 
    </div> 
    </div>
  ); 
}; 
 
export default LoginPage;