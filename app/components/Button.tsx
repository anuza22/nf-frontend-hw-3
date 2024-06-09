import React, { ReactNode } from 'react'; 
import { useTheme } from '../context/ThemeContext'; 
interface ButtonProps { 
  onClick: () => void; 
  children: ReactNode; 
} 
 
const Button: React.FC<ButtonProps> = ({ onClick, children }) => { 
    const { darkMode } = useTheme();

  return ( 
    <button 
      className={"py-2 px-4 rounded hover:bg-indigo-700 transition duration-300" + (darkMode? "bg-indigo-600 text-white": "bg-white-600 text-black")}
      onClick={onClick} 
    > 
      {children} 
    </button> 
  ); 
}; 
 
export default Button;