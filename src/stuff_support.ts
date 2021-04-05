
export function $<T extends string>(select:T){
    let select_element=document.querySelectorAll(`${select}`);
    return select_element.length === 1 ? select_element[0] : [...select_element]
}

export function checkUrl(){
    let get_url=window.location.hash.split("/");
    return {
        page:get_url[1],
        id:get_url[2],
        methodHttp:get_url[3]
    }
}

