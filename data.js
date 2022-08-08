import axios from "axios";

async function getData(number){
    const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);

    return { getUser, getPost }
}

export default getData