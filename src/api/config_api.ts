import axios from "axios";


let test1= axios.create({
    baseURL:"https://pokeapi.co",
    headers:{
        'Content-Type': 'application/json'
    }
})
export default test1;