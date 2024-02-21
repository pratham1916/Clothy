

import axios from 'axios';
export async function getData(page=1){
       const res = await axios.get(`https://clothy-api.onrender.com/mens?page=${page}&limit=10`);
       console.log(res);
       return res;
  }