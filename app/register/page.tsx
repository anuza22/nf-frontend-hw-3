'use client';
import React, { useState } from 'react'; 
import { useAuth } from '../context/AuthContext'; 
import { useTheme } from '../context/ThemeContext';
 
const RegisterPage: React.FC = () => { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const { register } = useAuth(); 
  const { darkMode } = useTheme();
 
  const handleSubmit = async (event: React.FormEvent) => { 
    event.preventDefault(); 
    await register(username, password, email, firstName, lastName); 
  }; 
 
  return ( 
        <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}> 
          <div className={`w-full max-w-md p-8 space-y-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md rounded-md`}> 
            <h2 className="text-2xl font-bold text-center">Register</h2> 
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
              <div> 
                <label htmlFor="email" className="block text-sm font-medium"> 
                  Email 
                </label> 
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                /> 
              </div> 
              <div> 
                <label htmlFor="firstName" className="block text-sm font-medium"> 
                  First Name 
                </label> 
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text" 
                  required 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                /> 
              </div> 
              <div> 
                <label htmlFor="lastName" className="block text-sm font-medium"> 
                  Last Name 
                </label> 
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  required 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                /> 
              </div> 
              <button 
                type="submit"
    className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
              > 
                Register 
              </button> 
            </form> 
            <p className="text-center"> 
              Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login</a> 
            </p> 
            
          </div> 
        </div> 
      ); 
    }; 
 
export default RegisterPage;