import Image from "next/image";
import { PostsProvider, usePosts } from "../context/PostContext";
import  PostCard from '../components/PostCard';
import { ThemeProvider, useTheme } from "../context/ThemeContext";

const PostsHome:React.FC = () => {
  
  return (
        <PostCard />
  );
}

export default PostsHome;