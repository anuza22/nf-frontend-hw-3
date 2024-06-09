'use client';
import React from 'react';
import Link from 'next/link';
import { usePosts } from '../context/PostContext';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const PostCard: React.FC = () => {
  const { posts } = usePosts();
  const { darkMode } = useTheme();

  return (
    <div className="NewsList">
      <div className={'grid grid-cols-1 gap-6 max-w-4xl mx-auto p-6 rounded-xl shadow-lg my-10' +
        (darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black')}>
        {posts.map((post) => (
          <div key={post.id} className="News">
            <div className={
              "max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-6xl " +
              (darkMode ? "bg-gray-900 text-white" : "bg-white text-black")
            }>
              <div className="md:flex">
                <div className="p-4 w-full">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                      alt="Rounded avatar"
                    />
                    <span className={"text-sm ml-4 " + (darkMode ? "text-gray-400" : "text-gray-600")}>
                      User ID: {post.userId}
                    </span>
                  </div>
                  <h2 className={"block mt-4 uppercase tracking-wide text-lg font-semibold " + (darkMode ? "text-indigo-400" : "text-indigo-600")}>
                    <Link href={`/posts/${post.id}`} legacyBehavior>
                      <a>{post.title}</a>
                    </Link>
                  </h2>
                  <p className={"block mt-2 text-lg leading-tight font-medium hover:underline " + (darkMode ? "text-gray-300" : "text-black")}>
                    <Link href={`/posts/${post.id}`} legacyBehavior>
                      <a>{post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}</a>
                    </Link>
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded"
                        src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-view-icon-png-image_5196447.jpg"
                        alt="Default avatar"
                      />
                      <span className={"text-sm ml-2 " + (darkMode ? "text-gray-400" : "text-gray-600")}>
                        {post.views}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <img
                          className="w-18 h-16 rounded"
                          src="https://static.vecteezy.com/system/resources/previews/019/860/328/original/like-and-dislike-icons-png.png"
                          alt="Default avatar"
                        />
                        <span className={"text-sm ml-2 " + (darkMode ? "text-gray-300" : "text-black")}>
                          {post.reactions.likes}
                        </span>
                        <span className={"text-sm ml-4 " + (darkMode ? "text-gray-300" : "text-black")}>
                          {post.reactions.dislikes}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Link href={`/posts/${post.id}`} legacyBehavior>
                      <a>
                        <Button onClick={() => console.log('Button clicked')}>Read more</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
