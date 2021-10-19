// import getData from "../lib/service.js";

// getData(1).then(data=>{
//     console.log(data)
// })
import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/users").then(date=>{
    let newData = [...date.data]
    console.log([date.data])
});

// for (let index = 0; index < newData.length; index++) {
  //  console.log(newData)
    
// }