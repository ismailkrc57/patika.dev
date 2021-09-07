import axios from "axios";

export default async function getData(id){
    const user = await (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
    const post = await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).data

    const data = {user,post};
    return data;
 
}