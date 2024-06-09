import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Post } from './PostContext';
import { PostContextType } from './PostContext';


export interface Posts{
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export const getPosts = async () :Promise<Post[]> => {
    const resp = await axios.get<Posts>('https://dummyjson.com/auth/posts');
    return resp.data.posts;
}

interface PostBlogProps {
    data: PostBlogStructure;
}

const PostBlog = async ({ data }: PostBlogProps): Promise<Post | null> => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }

    const decodeToken = (token: string):number => {
        try {
            const decoded = jwtDecode<Jwt>(token);
            return decoded.id;
        } catch (error) {
            console.log('Error decoding token:', error);
            return -1;
        }
    };

    const userId = decodeToken(token);
    if (userId === -1) {
        return null;
    }

    const postData = { ...data, userId };

    const resp = await axios.post<Post>('https://dummyjson.com/posts/add', postData);
    return resp.data;
};

export default PostBlog

interface Jwt {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    iat: number;
    exp: number;
}

interface PostBlogStructure {
    userId: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    } | null;
    views: number;
}