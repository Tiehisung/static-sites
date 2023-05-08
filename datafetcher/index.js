async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  document.getElementById("data-cont").innerHTML = JSON.stringify(data);
}

async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  document.getElementById("data-cont").innerHTML = JSON.stringify(data);
}

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  document.getElementById("data-cont").innerHTML = JSON.stringify(data);
}

async function fetchPhotos() {
  const response = await fetch("https:jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  console.log(data);
  document.getElementById("data-cont").innerHTML = JSON.stringify(data);
}
async function fetchDummyjson() {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();
  console.log(data);
  document.getElementById("data-cont").innerHTML = JSON.stringify(data);
}

// using axios for fetching
const axios = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

async function fetchUsersByAxios() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res)
    document.getElementById('data-cont').innerHTML=res
}

const date = new Date()
console.log(date)


