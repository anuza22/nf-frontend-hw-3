import axios from 'axios'

const Update = async (id:number, title: string)=>{
    await axios.put(`https://dummyjson.com/posts/${id}`, {title})
}

export default Update;