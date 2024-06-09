// DetailPostCard.tsx

import React from 'react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface DetailPostCardProps {
  post: Post;
}

const DetailPostCard: React.FC<DetailPostCardProps> = ({ post }) => {
    const { darkMode } = useTheme();
    return (
      <div className={
        "max-w-4xl mx-auto p-6 rounded-xl shadow-lg my-10 " +
        (darkMode ? "bg-gray-900 text-white" : "bg-white text-black")
      }>
        <h1 className={"text-3xl font-bold mb-4 " + (darkMode ? "text-white" : "text-indigo-700")}>{post.title}</h1>
        <div className="mb-4">
          <Image
            className="w-full h-64 object-cover rounded"
            src='https://t3.ftcdn.net/jpg/06/15/76/92/360_F_615769239_P34b7w4Tc2rHBIU87bV3OCsAinGaX1EL.jpg'
            alt="Post image"
            width={500}  
            height={300}  
          />
        </div>
        <div className="flex items-center mb-4">
          <Image
            className="w-10 h-10 rounded-full"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="User Avatar"
            width={40}  
            height={40} 
          />
        <span className={"text-sm ml-4 " + (darkMode ? "text-gray-400" : "text-gray-600")}>User ID: {post.userId}</span>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">{post.body}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Image
              className="w-6 h-6 mr-2"
              src="https://static.vecteezy.com/system/resources/previews/019/860/328/original/like-and-dislike-icons-png.png"
              alt="Likes"
              width={24}  
              height={24} 
            />
          <span className={"text-sm mr-4 " + (darkMode ? "text-gray-400" : "text-gray-600")}>{post.reactions.likes}</span>
          <Image
              className="w-6 h-6 mr-2"
              src="https://static.vecteezy.com/system/resources/previews/019/860/328/original/like-and-dislike-icons-png.png"
              alt="Dislikes"
              width={24}  
              height={24} 
            />
          <span className={"text-sm " + (darkMode ? "text-gray-400" : "text-gray-600")}>{post.reactions.dislikes}</span>
          </div>
          <span className={"text-sm " + (darkMode ? "text-gray-400" : "text-gray-600")}>Views: {post.views}</span>
          </div>
        <Button onClick={() => window.history.back()}>
          Back
        </Button>
      </div>
    );
  };
  

export default DetailPostCard;
