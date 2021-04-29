// http://fakeapi.jsonparseronline.com/users

import axios from "axios";
//let usuarios = [];

// axios.request('http://fakeapi.jsonparseronline.com/users').then(users => {
//     console.log(users.data);
//     usuarios = users.data;
// }).catch(error => {
//     console.log(error);
// });

// console.log(usuarios);

async function getUsers(){
    const users = axios.request('http://fakeapi.jsonparseronline.com/users');
    return users;
}

const usuarios = await getUsers();

console.log(usuarios);