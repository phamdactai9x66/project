
import {$} from "../stuff_support"
import local_storage from "../storages/local_user";
class methodPlayer{
    checkForm(){
        let get_button= $("#form1") as HTMLFormElement;
        let get_alert= $(".alert_notification") as HTMLDivElement ;
        get_button.addEventListener("submit",  (event_mouse:Event) => {
            event_mouse.preventDefault()
            let get_form=(event_mouse.target) as HTMLFormElement;
            
            let get_input_form= new FormData(get_form);
            let name_user=(get_input_form.get("name_player")?.toString().trim()) as string ;

            if(name_user != ""){
                window.location.href="/#/play_game";
                get_alert.style.display="none";
                local_storage.setName<string>(name_user)
            }else{
                get_alert.style.display="block"
            }
        })
    }
}
export default new methodPlayer();