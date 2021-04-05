
class local_storage{
    setName<T extends string>(name_user: T  ): void {
        localStorage.setItem("user_name",name_user)
    }
    getName():string{
     let get_user = localStorage.getItem("user_name");
     return get_user ? get_user : "";
    }
}
export default new local_storage;