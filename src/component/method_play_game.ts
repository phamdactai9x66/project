import data_pokemon from "../api/api_pokemon";
import get_name_user from "../storages/local_user";
import { $ } from "../stuff_support";
class pokemons {
  display<T extends object[]>(data: T): string {
    let save_html: string = "";
    data.forEach((curren_value: any, index) => {
      save_html += `
            <div class="box1" id_pokemon="${curren_value.id}" index="${index}"><img src="${curren_value.image}" alt="${curren_value.name}"><span class="childs"><span>#$</span>${curren_value.id}</span></div>
            `;
    });
    return save_html;
  }

  playGame<T extends Array<object>>(data?: T): void {
    let save_contain = $(".main_box") as HTMLDivElement;
    let display_points = $("#points") as HTMLDivElement;
    let get_box = $(".box1") as Array<HTMLDivElement>;
    let count_click = 0,
      count_points = 0;
    let save_array: any[] = [];
    // let count_points=0;

    if (data) {
      count_points = 0;
      count_click = 0;
      save_array = [];

      save_contain.innerHTML = this.display(data);

      display_points.textContent = `${count_points * 1000}`;
    }

    get_box.forEach((curren_value) => {
      curren_value.addEventListener("click", funciton_click);
    });

    function funciton_click(this: HTMLDivElement) {
      // debugger
      this.removeEventListener("click", funciton_click);

      this.classList.add("test12");
      count_click++;

      save_array = [...save_array, this];

      if (save_array.length >= 2) {
        count_click = 0;
        if (
          (save_array[0] as HTMLDivElement).getAttribute("id_pokemon") ==
          (save_array[1] as HTMLDivElement).getAttribute("id_pokemon")
        ) {
          save_array.forEach((curren_value: HTMLDivElement) => {
            curren_value.removeEventListener("click", funciton_click);
            curren_value.style.visibility = "hidden";

            count_points++;
          });
        } else {
          save_array.forEach((curren_value: HTMLDivElement) => {
            curren_value.addEventListener("click", funciton_click);
            curren_value.classList.remove("test12");
          });
        }
        save_array = [];
      }
      display_points.textContent = `${count_points * 1000}`;
    }
  }
  restart<T extends Array<object>>(data: T): void {
    let get_button = $(".restart_game") as HTMLButtonElement;

    get_button.addEventListener("click", (event_mouse: Event) => {
      event_mouse.preventDefault();

      this.playGame(data);
    });
  }
  render_user() {
    let render_name_user = $("#name_user1") as HTMLSpanElement;
    let get_buton = $(".right") as HTMLButtonElement;

    get_buton.addEventListener("click", () => {
      window.location.href = "/#/";
    });
    let get_user = get_name_user.getName();
    render_name_user.innerHTML = get_user;
  }
}
export default new pokemons();
