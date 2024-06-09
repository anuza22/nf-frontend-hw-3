import axios from 'axios'

const DeletePost = async (id: number) => {
    await axios.delete(`https://dummyjson.com/posts/${id}`)
}

export default DeletePost;