'use client';
import  PostCard from '../components/PostCard';
import { ThemeProvider, useTheme } from "../context/ThemeContext";

const PostsHome:React.FC = () => {
  
  return (
      <div>
        <PostCard />
      </div>
  );
}

export default PostsHome;