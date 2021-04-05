import axios from"./config_api";

class api_product{
   
    get<T = String>(id:T):Promise<any>{
        let url=`https://pokeapi.co/api/v2/pokemon/${id}/`;
        return axios.get(url);
    }
    async handle_api_pokemon(quantity_pokemon:number = 10): Promise<object[]> {

        // let quantity_pokemon = 10;
        let save12: Array<object> = [];
        
        for (let i = 1; i <= quantity_pokemon; i += 1) {
          let { data: test1 } = await this.get<number>(i);
          // console.log(test1);
          save12 = [...save12,{ id: test1.id, name: test1.name, image: test1.sprites.front_shiny }];
        }
        let save1: Array<object> = [...save12, ...save12];
        save1.sort(() => Math.random() - 0.5); 
        return save1
        // this.display_pokemon<Array<object>>(save1);
       
      }
}
export default  new api_product;