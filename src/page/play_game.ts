import { $ } from "../stuff_support";

import method_pokemont from "../component/method_play_game";
import api_pokemon from "../api/api_pokemon";
class playGame {
  async render() {
    let data = await api_pokemon.handle_api_pokemon();

    return `
         <div style="height: 50px;color: white; text-align: center;">
        <img src="./img/1200px-International_Pokémon_logo.svg.webp" style="transform: translateY(-100px);" width="400px"  alt="">
    </div>
    <article class="info_user">
    <div class="box left"><span class="box11"><label for="name_user1">Name player:<span id="name_user1">dasda</span></label></span></div>
    <div class="box " style="text-align: center;"><span class="box11 ">points:<span id="points">0</span></span></div>
    <div class="box " style="text-align: right;"><button class="box11 right" >logout</button></div>
</article>
    <article class="main_box">
       ${method_pokemont.display<object[]>(data)}
    </article>
    <div class="restart_game">
        restart
    </div> `;
  }
  async afterRender(): Promise<void> {
    let data = await api_pokemon.handle_api_pokemon();
    method_pokemont.playGame();

    method_pokemont.restart<object[]>(data);
    method_pokemont.render_user();
  }
}
export default new playGame();
