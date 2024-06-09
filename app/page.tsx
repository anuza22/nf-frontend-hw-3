'use client';
import Image from "next/image";
import { PostsProvider, usePosts } from "./context/PostContext";
import  PostCard  from "./components/PostCard";
import PostsHome from "./posts/page";
import { ThemeProvider } from "./context/ThemeContext";
import LoginPage from "./login/page";

const HomePage: React.FC = () => {
  return (
    <LoginPage/>
  );
};

export default HomePage;