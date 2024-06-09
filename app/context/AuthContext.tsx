'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react'; 
import axios from './axiosInstance'; 
import { useRouter } from 'next/navigation';

 
interface AuthContextType { 
  user: any; 
  login: (username: string, password: string) => Promise<void>; 
  logout: () => void; 
  register: (username: string, password: string, email: string, firstName: string, lastName: string) => Promise<void>; 
  refreshToken: () => Promise<void>; 
} 
 
const AuthContext = createContext<AuthContextType | undefined>(undefined); 
 
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => { 
  const [user, setUser] = useState<any>(null); 
  const [token, setToken] = useState<string | null>(null); 
  const [refreshToken, setRefreshToken] = useState<string | null>(null); 
  const router = useRouter();
 
  useEffect(() => { 
    const savedToken = localStorage.getItem('token'); 
    const savedRefreshToken = localStorage.getItem('refreshToken'); 
    if (savedToken && savedRefreshToken) { 
      setToken(savedToken); 
      setRefreshToken(savedRefreshToken); 
      getUser(savedToken); 
    } 
  }, []); 
 
  const getUser = async (token: string) => { 
    try { 
      const response = await axios.get('https://dummyjson.com/auth/me', { 
        headers: { Authorization: `Bearer ${token}` }, 
      }); 
      console.log(token);
      setUser(response.data); 
    } catch (error) { 
      console.error('Failed to fetch user', error); 
      setUser(null); 
    } 
  }; 
 
  const login = async (username: string, password: string) => { 
    try { 
      const response = await axios.post('https://dummyjson.com/auth/login', { username, password }); 
      setToken(response.data.token); 
      setRefreshToken(response.data.refreshToken); 
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('refreshToken', response.data.refreshToken); 
      setUser(response.data);       
        } catch (err){
            console.log("Error");
        }
  }; 
 
  const logout = () => { 
    setToken(null); 
    setRefreshToken(null); 
    setUser(null); 
    localStorage.removeItem('token'); 
    localStorage.removeItem('refreshToken'); 
  }; 
 
  const register = async (username: string, password: string, email: string, firstName: string, lastName: string) => { 
    try { 
      await axios.post('/auth/register', { username, password, email, firstName, lastName }); 
      await login(username, password); 
    } catch (error) { 
      console.error('Registration failed', error); 
    } 
  }; 
 
  const refreshTokenFunction = async () => { 
    if (refreshToken) { 
      try { 
        const response = await axios.post('/auth/refresh', { refreshToken }); 
        setToken(response.data.token); 
        localStorage.setItem('token', response.data.token); 
      } catch (error) { 
        console.error('Failed to refresh token', error); 
        logout(); 
      } 
    } 
  }; 
 
  return ( 
    <AuthContext.Provider value={{ user, login, logout, register, refreshToken: refreshTokenFunction }}> 
      {children} 
    </AuthContext.Provider> 
  ); 
}; 
 
export const useAuth = () => { 
  const context = React.useContext(AuthContext); 
  if (!context) { 
    throw new Error('useAuth must be used within an AuthProvider'); 
  } 
  return context; 
};