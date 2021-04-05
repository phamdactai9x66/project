import method_generate_player from "../component/method_generate_player";
class player{
    render(){
        return `
        <div class="alert alert-danger alert_notification" role="alert" >
        We don't permission empty input!
      </div>
        <form action="" method="post" id="form1">
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label" style="color:white">Name player</label>
            <input type="text" class="form-control" name="name_player" id="formGroupExampleInput" placeholder="Input your name...">
          </div>
        
          <button  class="btn btn-success" id="submit">start game</button>
    </form>
        
        `;
    }
    afterRender(){
        method_generate_player.checkForm()
    }
}
export default new player();