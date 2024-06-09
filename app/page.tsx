'use client';
import Image from "next/image";
import { PostsProvider, usePosts } from "./context/PostContext";
import  PostCard  from "./components/PostCard";
import PostsHome from "./posts/page";
import ProtectedRoute from "./components/ProtectedRoute";

const HomePage: React.FC = () => {
  return (
    <ProtectedRoute>
      <PostsHome />
    </ProtectedRoute>
  );
};

export default HomePage;