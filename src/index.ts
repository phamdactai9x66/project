import generate_player from "./page/generate_player";
import play_game from "./page/play_game";
import {$,checkUrl} from "./stuff_support";

interface formatPage{
    [index:string]: object
}
const router_page:formatPage={
    "/":generate_player,
    "/play_game":play_game
}

async function renderPage(){
    const {page,id,methodHttp} = checkUrl();
    const containContent=$(".main_content") as HTMLDivElement;
    const define_page:string= (page ? `/${page}` : "/") + (id ? `/:id` : "") 
    + (methodHttp ? `/${methodHttp}` : "");
   
    const prepar_for_render:any= router_page[define_page] ? router_page[define_page] : router_page["/"];
    
    containContent.innerHTML = await prepar_for_render.render();
    await prepar_for_render.afterRender();
    
    // console.log(check_url().page)
}

window.addEventListener("DOMContentLoaded",renderPage)
window.addEventListener("hashchange",renderPage);


