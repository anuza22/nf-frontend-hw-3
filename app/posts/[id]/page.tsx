'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import DetailPostCard from '../../components/DetailPostCard';
import { PostsProvider, usePosts } from '../../context/PostContext';
 interface Reactions {
    likes: number;
    dislikes: number;
  }
  
   interface Post {
    id: number;
    title: string;
    body: string;
    reactions: Reactions;
    views: number;
    userId: number;
  }

const PostDetailPageContent: React.FC = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return <DetailPostCard post={post} />;
};

const PostDetailPage: React.FC = () => {
  return (
    <PostsProvider>
      <div className="min-h-screen flex flex-col">
        <PostDetailPageContent />
      </div>
    </PostsProvider>
  );
};

export default PostDetailPage;
