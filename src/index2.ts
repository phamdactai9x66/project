// import data_pokemon from "./test2";
// import { $ } from "./test123";
// class pokemons {
//   async get_pokemon(): Promise<any> {
//     let { data: test1 } = await data_pokemon.get_all();
//     return test1;
//   }
//   async handle_api_pokemon(): Promise<any> {
//     let { results: get_list_pokemon } = await this.get_pokemon();

//     let array1 = get_list_pokemon as Array<object>;
//     console.log(array1);
//     let quantity_pokemon = 10;
//     let save12: Array<object> = [];
//     for (let i = 1; i <= array1.length - quantity_pokemon; i += 1) {
//       let { data: test1 } = await data_pokemon.get<number>(i);
//       save12 = [
//         ...save12,
//         { id: test1.id, name: test1.name, image: test1.sprites.front_shiny },
//       ];
//     }
//     let save1: Array<object> = [...save12, ...save12];
//     save1.sort((curren_value: any) => {
//       return Math.random() - 0.5;
//     });
//     //0 - 1
//     this.display_pokemon<Array<object>>(save1);
//   }
//   display_pokemon<T extends Array<object>>(data: T) {
//     let save_html: string = "";
//     let save_contain = $(".main_box") as HTMLDivElement;

//     data.forEach((curren_value: any, index) => {
//       save_html += `
//             <div class="box1" id_pokemon="${curren_value.id}" index="${index}"><img src="${curren_value.image}" alt="${curren_value.name}"><span class="childs"><span>#$</span>${curren_value.id}</span></div>
//             `;
//     });
//     save_contain.innerHTML = save_html;
//     this.play_game();
//     this.restart_game(data);
//   }
//   play_game<T extends Array<object>>(data?: T): void {
//     let get_box = $(".box1") as Array<HTMLDivElement>;
//     let count_click = 0;
//     let save_array: any[] = [];

//     if (data) {
//       count_click = 0;
//       this.display_pokemon(data);
//       save_array = [];
//     }
//     get_box.forEach((curren_value: HTMLDivElement) => {
//       curren_value.addEventListener("click", funciton_click);
//     });

//     function funciton_click(this: HTMLDivElement) {
//       // debugger
//       this.removeEventListener("click", funciton_click);

//       this.classList.add("test12");
//       count_click++;

//       save_array = [...save_array, this];

//       if (save_array.length >= 2) {
//         count_click = 0;
//         if (
//           (save_array[0] as HTMLDivElement).getAttribute("id_pokemon") ==
//           (save_array[1] as HTMLDivElement).getAttribute("id_pokemon")
//         ) {
//           save_array.forEach((curren_value: HTMLDivElement) => {
//             curren_value.removeEventListener("click", funciton_click);
//             curren_value.style.visibility = "hidden";
//           });
//         } else {
//           save_array.forEach((curren_value: HTMLDivElement) => {
//             curren_value.addEventListener("click", funciton_click);
//             curren_value.classList.remove("test12");
//           });
//         }
//         save_array = [];
//       }

//       // console.log(element)
//     }
//   }
//   restart_game<T extends Array<object>>(data: T): void {
//     let get_button = $(".restart_game") as HTMLButtonElement;
//     get_button.addEventListener("click", (event_mouse: Event) => {
//       event_mouse.preventDefault();
//       this.play_game(data);
//     });
//   }
// }

// const pokemon = new pokemons();

// window.addEventListener("DOMContentLoaded", () => {
//   pokemon.handle_api_pokemon();
// });
// let taset12 = new FormData();
// console.log(taset12);

// import axios from "axios";

// let create_axios=() =>{
//     return axios.create({
//         baseURL:"http://localhost:5000",
//         headers:{
//             'Content-Type': 'application/form-data'
//         }
//     })
// }

// window.addEventListener("DOMContentLoaded", () => {
//   // let get_form=document.querySelector("#form1") as HTMLFormElement;
//   let get_buton = document.querySelector("#post_categoty") as HTMLButtonElement;

//   get_buton.addEventListener("click", (event_mouse: Event) => {
//     event_mouse.preventDefault();
//     let get_form = document.querySelector("#form1") as HTMLFormElement;
//     let get_form2 = new FormData(get_form);

//     create_axios().post("/category",get_form2);

//     // fetch("http://localhost:5000/category", {
//     //   method: "post",
//     //   body:get_form2,
//     // })
//     //   .then((api_url) => api_url.json())
//     //   .then((response) => {
//     //     console.log(response);
//     //     //    const {data:{data:data_product}} = response;
//     //     //    console.log(data_product);
//     //     console.log("xin chao123");
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //     console.log("asdas");
//     //   });
//   });
// });
// // let data={name:"pham dac tai",name_english:"pham da tai"}
